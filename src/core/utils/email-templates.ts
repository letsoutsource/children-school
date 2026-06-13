export function getContactEmailTemplate({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
      <h2 style="color: #E245F7; border-bottom: 2px solid #E245F7; padding-bottom: 10px;">New Contact Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 150px; border-bottom: 1px solid #f5f5f5;">Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Phone:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${phone}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Subject / Reason:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${subject}</td>
        </tr>
      </table>
      <h3 style="color: #333; margin-top: 20px;">Message:</h3>
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #E245F7; border-radius: 4px; font-style: italic;">
        ${message}
      </div>
      <p style="font-size: 12px; color: #777; margin-top: 25px; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
        Submitted from Children's House Montessori Kindergarten Website
      </p>
    </div>
  `;
}

export function getAdmissionEmailTemplate({
  name,
  email,
  phone,
  childName,
  gender,
  dob,
  age,
  gradeApplying,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  childName: string;
  gender: string;
  dob: string;
  age: string;
  gradeApplying: string;
  message?: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
      <h2 style="color: #FFCA2C; border-bottom: 2px solid #FFCA2C; padding-bottom: 10px;">New Admission Application</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 200px; border-bottom: 1px solid #f5f5f5;">Parent/Guardian:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Phone:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Child's Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${childName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Child's Gender:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${gender}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Child's D.O.B:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${dob}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Calculated Age:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${age}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f5f5f5;">Class / Grade Applying For:</td>
          <td style="padding: 8px; border-bottom: 1px solid #f5f5f5;">${gradeApplying}</td>
        </tr>
      </table>
      <h3 style="color: #333; margin-top: 20px;">Additional Information / Comments:</h3>
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #FFCA2C; border-radius: 4px; font-style: italic;">
        ${message || "No additional information provided."}
      </div>
      <p style="font-size: 12px; color: #777; margin-top: 25px; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
        Submitted from Children's House Montessori Kindergarten Website
      </p>
    </div>
  `;
}
