import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactFormSchema, admissionFormSchema } from "@/core/utils/validation.schema";
import { getContactEmailTemplate, getAdmissionEmailTemplate } from "@/core/utils/email-templates";

const MAX_BODY_BYTES = 6 * 1024 * 1024; // 6MB limit to support base64 file attachments

// Reads and parses JSON body with a size limit to prevent memory exhaustion attacks
const readJsonBodyWithLimit = async (
  req: Request,
  maxBytes: number
): Promise<unknown> => {
  if (!req.body) {
    throw new Error("Missing body");
  }

  const reader = req.body.getReader();
  const decoder = new TextDecoder();
  let receivedBytes = 0;
  let bodyText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    if (value) {
      receivedBytes += value.byteLength;
      if (receivedBytes > maxBytes) {
        try {
          await reader.cancel("Request too large");
        } catch {
          // Ignore cancellation errors
        }
        throw new Error("Request too large");
      }
      bodyText += decoder.decode(value, { stream: true });
    }
  }

  bodyText += decoder.decode();
  return JSON.parse(bodyText);
};

const firstZodIssueMessage = (zodError: any) => {
  const first = zodError?.issues?.[0];
  return first?.message || "Invalid input";
};

// Sanitization helper to strip newlines and prevent SMTP injection
const cleanHeader = (val: string): string => {
  return (val || "").replace(/[\r\n]/g, "").trim();
};

export async function POST(req: Request) {
  try {
    // Step 1: Validate Content-Type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { message: "Content-Type must be application/json" },
        { status: 415 }
      );
    }

    // Step 2: Check Content-Length before reading body
    const contentLength = req.headers.get("content-length");
    if (contentLength) {
      const length = Number(contentLength);
      if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
        return NextResponse.json({ message: "Request too large" }, { status: 413 });
      }
    }

    // Step 3: Read body with limit
    let rawBody: any;
    try {
      rawBody = await readJsonBodyWithLimit(req, MAX_BODY_BYTES);
    } catch (error) {
      const message =
        error instanceof Error && error.message === "Request too large"
          ? "Request too large"
          : "Invalid JSON";
      const status =
        error instanceof Error && error.message === "Request too large"
          ? 413
          : 400;
      return NextResponse.json({ message }, { status });
    }

    const { type } = rawBody || {};
    if (type !== "contact" && type !== "admission") {
      return NextResponse.json(
        { message: "Invalid submission type. Must be 'contact' or 'admission'" },
        { status: 400 }
      );
    }

    // Step 3.5: Validate Cloudflare Turnstile CAPTCHA if secret key is present
    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const token = rawBody.token;
      if (!token) {
        return NextResponse.json(
          { message: "Security CAPTCHA token is missing." },
          { status: 400 }
        );
      }

      const clientIp = req.headers.get("x-forwarded-for") || "";
      const verificationUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
      
      try {
        const turnstileRes = await fetch(verificationUrl, {
          method: "POST",
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: token,
            remoteip: clientIp.split(",")[0].trim(),
          }),
        });

        const verificationResult = await turnstileRes.json();
        if (!verificationResult.success) {
          return NextResponse.json(
            { message: "Security CAPTCHA verification failed. Please reload page and try again." },
            { status: 400 }
          );
        }
      } catch (err) {
        console.error("Turnstile verification error:", err);
        return NextResponse.json(
          { message: "CAPTCHA verification service error. Please try again later." },
          { status: 500 }
        );
      }
    } else {
      console.warn("CLOUDFLARE_TURNSTILE_SECRET_KEY is missing. CAPTCHA validation is bypassed.");
    }

    // Step 4: Validate inputs based on type
    let cleanData: any = {};
    let emailHtml = "";
    let emailSubject = "";
    let attachments: any[] = [];

    if (type === "contact") {
      const parsed = contactFormSchema.safeParse(rawBody);
      if (!parsed.success) {
        return NextResponse.json(
          { message: firstZodIssueMessage(parsed.error) },
          { status: 400 }
        );
      }

      const { name, email, phone, subject, message } = parsed.data;

      // Sanitize inputs
      const cName = cleanHeader(name);
      const cEmail = cleanHeader(email).replace(/\s/g, "");
      const cPhone = phone ? cleanHeader(phone) : "";
      const cSubject = cleanHeader(subject);
      const purifiedMessage = sanitizeHtml(message, {
        allowedTags: sanitizeHtml.defaults.allowedTags,
        allowedAttributes: {},
      });
      const htmlMessage = purifiedMessage.replace(/\n/g, "<br>");

      emailSubject = `[${cSubject}] Contact Inquiry from ${cName}`;
      cleanData = { name: cName, email: cEmail };

      emailHtml = getContactEmailTemplate({
        name: cName,
        email: cEmail,
        phone: cPhone,
        subject: cSubject,
        message: htmlMessage,
      });
    } else {
      const parsed = admissionFormSchema.safeParse(rawBody);
      if (!parsed.success) {
        return NextResponse.json(
          { message: firstZodIssueMessage(parsed.error) },
          { status: 400 }
        );
      }

      const { name, email, phone, message } = parsed.data;

      // Sanitize inputs
      const cName = cleanHeader(name);
      const cEmail = cleanHeader(email).replace(/\s/g, "");
      const cPhone = cleanHeader(phone);
      const purifiedMessage = sanitizeHtml(message || "", {
        allowedTags: sanitizeHtml.defaults.allowedTags,
        allowedAttributes: {},
      });
      const htmlMessage = purifiedMessage ? purifiedMessage.replace(/\n/g, "<br>") : "No additional information provided.";

      emailSubject = `New Admission Inquiry from ${cName}`;
      cleanData = { name: cName, email: cEmail };

      emailHtml = getAdmissionEmailTemplate({
        name: cName,
        email: cEmail,
        phone: cPhone,
        message: htmlMessage,
      });
    }

    // Step 5: Read env variables
    const emailHost = process.env.EMAIL_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const emailUser = process.env.EMAIL;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const toEmail = process.env.TO_EMAIL;

    if (!emailHost || !smtpPort || !emailUser || !emailPassword || !toEmail) {
      console.error("Email configuration missing in environment variables:", {
        emailHost: !!emailHost,
        smtpPort: !!smtpPort,
        emailUser: !!emailUser,
        emailPassword: !!emailPassword,
        toEmail: !!toEmail,
      });
      return NextResponse.json(
        { message: "Server email configuration is incomplete." },
        { status: 500 }
      );
    }

    const port = Number(smtpPort);
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port,
      secure: port === 465, // SSL on 465, TLS/STARTTLS on others
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Step 6: Send the email
    await transporter.sendMail({
      from: `"${cleanData.name}" <${emailUser}>`,
      to: toEmail,
      subject: emailSubject,
      replyTo: cleanData.email,
      html: emailHtml,
      attachments,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { message: "Failed to process form submission. Please try again." },
      { status: 500 }
    );
  }
}
