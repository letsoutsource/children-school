"use client";

import { useEffect, useMemo, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const BLINK_COLORS = ["#FF4848", "#F41FFF", "#FFCA2C", "#2CFF41"];
const BACKGROUND_ROWS = [14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13];

const ContactSection = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name.trim()) {
            setErrorMsg("Name is required");
            setStatus("error");
            return;
        }
        if (!formData.email.trim()) {
            setErrorMsg("Email is required");
            setStatus("error");
            return;
        }
        if (!formData.subject.trim()) {
            setErrorMsg("Subject / Reason is required");
            setStatus("error");
            return;
        }
        if (!formData.message.trim()) {
            setErrorMsg("Message is required");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "contact",
                    ...formData,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit. Please try again.");
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            setErrorMsg(error.message || "Failed to send message. Please try again later.");
            setStatus("error");
        }
    };

    const inputClassName =
        "h-[65px] w-full rounded-[20px] border-4 border-[#DBDADA] bg-white px-5 text-[18px] leading-[30px] tracking-[0.06em] text-black shadow-[2px_4px_4px_rgba(0,0,0,0.25)] placeholder:text-[#999999] focus:outline-none focus:ring-0 focus-visible:outline-none sm:px-8 sm:text-[24px]";
    const textareaClassName =
        "h-[241px] w-full resize-none rounded-[20px] border-4 border-[#DBDADA] bg-white px-5 py-5 text-[18px] leading-[30px] tracking-[0.06em] text-black shadow-[2px_4px_4px_rgba(0,0,0,0.25)] placeholder:text-[#999999] focus:outline-none focus:ring-0 focus-visible:outline-none sm:px-8 sm:text-[24px]";

    useEffect(() => {
        const timer = setInterval(() => {
            setActivePhase((prev) => (prev + 1) % 4);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const boxes = useMemo(() => {
        let index = 0;
        return BACKGROUND_ROWS.map((count) =>
            Array.from({ length: count }, () => ({ id: index, phase: index++ % 4 })),
        );
    }, []);

    return (
        <section className="relative overflow-x-clip bg-white pt-24 pb-30">
            <div className="sticky opacity-80 top-0 z-0 h-[980px] overflow-hidden ">
                <div className="absolute inset-0">
                    <div className=" mx-auto flex w-full max-w-[1512px] flex-col items-center gap-12 px-4 sm:gap-14 md:gap-16 lg:gap-11">
                        {boxes.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`flex items-center justify-center gap-12 sm:gap-14 md:gap-16 lg:gap-12 ${rowIndex % 2 === 0 ? "w-full" : "w-[92%]"
                                    }`}
                            >
                                {row.map((box) => {
                                    const isActive = box.phase === activePhase;
                                    return (
                                        <div
                                            key={box.id}
                                            className={`size-3.5 shrink-0 rounded-[10px] sm:size-4 md:size-5 lg:size-10 ${isActive
                                                    ? "border-2 md:border-[3px] border-black shadow-[3px_3px_0px_#000] md:shadow-[4px_4px_0px_#000]"
                                                    : ""
                                                }`}
                                            style={{
                                                backgroundColor: isActive ? BLINK_COLORS[box.phase] : "#f5f5f5",
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 -mt-[760px]">
                <MaxWidthWrapper>
                    <div className="mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 text-center">
                        <div className="flex w-full flex-col items-center gap-6">
                            <p
                                className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
                                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                            >
                                Contact Us
                            </p>

                            <h2
                                className="w-full text-[34px] leading-[1.08] uppercase sm:text-[52px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:3px_black]"
                                style={{
                                    fontFamily: "var(--font-luckiest-guy)",
                                    fontWeight: 400,
                                    textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                                }}
                            >
                                <span className="text-white">We&apos;re Here to </span>
                                <span className="text-[#44F6FF]">Help</span>
                                <br />
                                <span className="text-white">You </span>
                                <span className="text-[#2CFF41]">Begin</span>
                            </h2>
                        </div>

                        <p
                            className="w-full max-w-[616px] text-xl leading-[30px] text-black sm:text-2xl"
                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
                        >
                            A peek into our colorful days filled with smiles, play, and little
                            achievements.
                        </p>
                    </div>

                    <div className="mx-auto mt-14 w-full max-w-[712px] rounded-[32px] border-[7px] border-[#E245F7] bg-white px-4 pt-10 pb-6 shadow-[10px_14px_0px_#9D1BAF] sm:px-10 sm:pt-15 sm:pb-10">
                        <div className="mx-auto flex w-full max-w-[440px] flex-col items-center">
                            <div className="relative h-[140px] w-[234px]">
                                <svg
                                    viewBox="0 0 240 160"
                                    className="absolute inset-0 h-full w-full"
                                    aria-label="Children's House Montessori Kindergarten"
                                >
                                    <defs>
                                        <path id="contact-arc" d="M 36 116 A 84 84 0 0 1 204 116" />
                                    </defs>
                                    <text
                                        fill="#111111"
                                        fontWeight="900"
                                        fontSize="24"
                                        letterSpacing="2"
                                        style={{ textTransform: "uppercase" }}
                                    >
                                        <textPath href="#contact-arc" startOffset="50%" textAnchor="middle">
                                            CHILDREN&apos;S HOUSE
                                        </textPath>
                                    </text>
                                </svg>

                                <div className="absolute top-[54px] left-1/2 flex size-[76px] -translate-x-1/2 items-center justify-center rounded-full border-[3.6px] border-white bg-[#E245F7] shadow-[6px_2.4px_1.2px_#BE2CD2]">
                                    <div className="size-10 rounded-full border border-white/50 bg-[#D23BE8]" />
                                </div>
                            </div>

                            <p
                                className="mt-1 max-w-[440px] text-center text-[18px] leading-[25px] text-black sm:text-[20px]"
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 400 }}
                            >
                                A peek into our colorful days filled with smiles, play, and little
                                achievements.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-[632px] flex-col gap-4 sm:mt-10 sm:gap-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Name"
                                    disabled={status === "loading"}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Email"
                                    disabled={status === "loading"}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Phone no (Optional)"
                                    disabled={status === "loading"}
                                />
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700, color: formData.subject ? "black" : "#999999" }}
                                    disabled={status === "loading"}
                                >
                                    <option value="" disabled hidden>Subject / Reason</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Admissions">Admissions Query</option>
                                    <option value="Fees & Tuition">Fees & Tuition</option>
                                    <option value="Careers">Careers / Hiring</option>
                                    <option value="Other">Other / Feedback</option>
                                </select>
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={textareaClassName}
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                placeholder="Message"
                                disabled={status === "loading"}
                            />

                            {status === "error" && (
                                <div 
                                    className="p-4 rounded-[16px] border-3 border-red-500 bg-red-50 text-red-700 text-center text-[16px] leading-[22px] tracking-[0.02em]"
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                >
                                    {errorMsg}
                                </div>
                            )}

                            {status === "success" && (
                                <div 
                                    className="p-4 rounded-[16px] border-3 border-green-500 bg-green-50 text-green-700 text-center text-[16px] leading-[22px] tracking-[0.02em]"
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                >
                                    Your message has been sent successfully! We will get back to you shortly.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="flex h-[65px] w-full items-center justify-center rounded-[20px] border-3 border-black bg-[#FFCA2C] shadow-[5px_3px_0px_#000] transition active:translate-y-px disabled:bg-[#ddd] disabled:text-[#888] disabled:cursor-not-allowed disabled:shadow-none"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                <span className="text-2xl tracking-[0.06em] text-black">
                                    {status === "loading" ? "SENDING..." : "SUBMIT"}
                                </span>
                            </button>
                        </form>
                    </div>
                </MaxWidthWrapper>
            </div>
        </section>
    );
};

export default ContactSection;