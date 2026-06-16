"use client";

import { useState, useRef } from "react";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import WavyContactCard from "@/components/shared/WavyContactCard";
import Turnstile from "../Turnstile";

const instructions = [
    "Child\u2019s Passport Copy",
    "Child\u2019s Birth Certificate",
    "Child\u2019s Health Certificate",
    "Child\u2019s Recent Passport-Size Photograph",
    "Child\u2019s CPR / ID Copy",
    "Father\u2019s CPR / ID Copy",
    "Mother\u2019s CPR / ID Copy",
    "Guardian\u2019s CPR / ID Copy (if applicable)",
    "Completed and Signed Student Health Form",
];

const inputClassName =
    "h-[55px] w-full rounded-[16px] border-[3px] border-[#DBDADA] bg-white px-5 text-[16px] leading-[28px] tracking-[0.04em] text-black shadow-[2px_3px_3px_rgba(0,0,0,0.2)] placeholder:text-[#999999] focus:outline-none focus:ring-0 focus-visible:outline-none sm:text-[18px]";
const textareaClassName =
    "h-[160px] w-full resize-none rounded-[16px] border-[3px] border-[#DBDADA] bg-white px-5 py-4 text-[16px] leading-[28px] tracking-[0.04em] text-black shadow-[2px_3px_3px_rgba(0,0,0,0.2)] placeholder:text-[#999999] focus:outline-none focus:ring-0 focus-visible:outline-none sm:text-[18px]";

const calculateAge = (dobString: string): string => {
    if (!dobString) return "";
    const dob = new Date(dobString);
    if (isNaN(dob.getTime())) return "";

    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        years--;
        months = 12 + months;
    }

    if (today.getDate() < dob.getDate() && months > 0) {
        months--;
    }

    if (years < 0) return "";

    if (years === 0) {
        return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
        return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
        return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
};

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: "", // Parent/Guardian Name
        email: "",
        childName: "",
        gender: "",
        dob: "",
        age: "",
        phone: "",
        gradeApplying: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const [captchaKey, setCaptchaKey] = useState(0);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updated = { ...prev, [name]: value };
            if (name === "dob") {
                updated.age = calculateAge(value);
            }
            return updated;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setErrorMsg("Parent/Guardian Name is required");
            setStatus("error");
            return;
        }
        if (!formData.email.trim()) {
            setErrorMsg("Email is required");
            setStatus("error");
            return;
        }
        if (!formData.childName.trim()) {
            setErrorMsg("Child's Name is required");
            setStatus("error");
            return;
        }
        if (!formData.gender.trim()) {
            setErrorMsg("Child's Gender is required");
            setStatus("error");
            return;
        }
        if (!formData.dob.trim()) {
            setErrorMsg("Child's Date of Birth is required");
            setStatus("error");
            return;
        }
        if (!formData.age.trim()) {
            setErrorMsg("Child's Age is required");
            setStatus("error");
            return;
        }
        if (!formData.phone.trim()) {
            setErrorMsg("Phone number is required");
            setStatus("error");
            return;
        }
        if (!formData.gradeApplying.trim()) {
            setErrorMsg("Class/Grade applying for is required");
            setStatus("error");
            return;
        }

        if (process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY && !captchaToken) {
            setErrorMsg("Please complete the CAPTCHA verification.");
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
                    type: "admission",
                    token: captchaToken,
                    ...formData,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit. Please try again.");
            }

            setStatus("success");
            setCaptchaToken("");
            setCaptchaKey((prev) => prev + 1);
            setFormData({
                name: "",
                email: "",
                childName: "",
                gender: "",
                dob: "",
                age: "",
                phone: "",
                gradeApplying: "",
                message: "",
            });
        } catch (error: any) {
            setErrorMsg(error.message || "Failed to submit application. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <section className="min-h-screen overflow-x-clip bg-[#C9F4FF] pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 px-4">
            <MaxWidthWrapper className="px-4 sm:px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">

                    <div id="instructions" className="w-full lg:sticky lg:top-32 lg:w-[380px] lg:shrink-0">
                        <h1
                            className="text-[40px] leading-[1.05] uppercase sm:text-[52px] lg:text-[56px] [text-stroke:3px_black] [-webkit-text-stroke:1.6px_black] lg:[-webkit-text-stroke:2.4px_black]"
                            style={{
                                fontFamily: "var(--font-luckiest-guy)",
                                fontWeight: 400,
                                color: "#FFCA2C",
                                textShadow: "8px 6px 2px rgba(0, 0, 0, 0.32)",
                            }}
                        >
                            Admission
                            <br />
                            <span className="text-white">Instructions</span>
                        </h1>

                        <ul
                            className="mt-8 list-disc space-y-3 pl-6 text-[16px] leading-[22px] text-black sm:text-[18px] sm:leading-[24px]"
                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
                        >
                            {instructions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex w-full flex-col gap-14 lg:flex-1">

                        <div className="relative">
                            <div
                                className="absolute -left-4 lg:-left-8 -top-12 lg:-top-18 z-10 flex h-[90px] w-[180px] -rotate-15 items-center justify-center rounded-[50%] border-4 border-black bg-[#FFC929] shadow-[5px_3px_0px_#000] sm:-left-2 sm:-top-14 sm:h-[110px] sm:w-[220px] sm:border-[5px] sm:shadow-[5px_3px_0px_#000]"
                            >
                                <span
                                    className="text-center text-[22px] leading-[1.1] text-white  sm:text-[28px] [-webkit-text-stroke:1px_black] lg:[-webkit-text-stroke:2px_black]"
                                    style={{ fontFamily: "var(--font-luckiest-guy)", fontWeight: 400 }}
                                >
                                    Admission
                                    <br />
                                    Inquiry
                                </span>
                            </div>

                            <div id="admission-form" className="w-full max-w-[712px] mx-auto rounded-[28px] border-[6px] border-[#FFCA2C] bg-white px-4 pt-10 pb-6 shadow-[8px_10px_0px_#B6990C] sm:px-8 sm:pt-12 sm:pb-8">
                                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 sm:gap-5 ">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Parent/Guardian Name"
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

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            type="text"
                                            name="childName"
                                            value={formData.childName}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Child's Name"
                                            disabled={status === "loading"}
                                        />
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700, color: formData.gender ? "black" : "#999999" }}
                                            disabled={status === "loading"}
                                        >
                                            <option value="" disabled hidden>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            disabled={status === "loading"}
                                        />
                                        <input
                                            type="text"
                                            name="age"
                                            value={formData.age}
                                            readOnly
                                            className={`${inputClassName} bg-gray-50 border-gray-300 text-gray-500 cursor-not-allowed`}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Age (calculated from DOB)"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Phone no"
                                            disabled={status === "loading"}
                                        />
                                        <input
                                            type="text"
                                            name="gradeApplying"
                                            value={formData.gradeApplying}
                                            onChange={handleChange}
                                            required
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Class / Grade Applying For"
                                            disabled={status === "loading"}
                                        />
                                    </div>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={textareaClassName}
                                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                        placeholder="Additional Information / Comments"
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
                                            Admission application submitted successfully! We will contact you soon.
                                        </div>
                                    )}

                                    <Turnstile
                                        key={captchaKey}
                                        onVerify={(token) => setCaptchaToken(token)}
                                        onError={() => setCaptchaToken("")}
                                        onExpire={() => setCaptchaToken("")}
                                    />
 
                                    <button
                                        type="submit"
                                        disabled={status === "loading" || (!!process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY && !captchaToken)}
                                        className="flex h-[58px] w-full items-center justify-center rounded-[16px] border-3 cursor-pointer border-black bg-[#FFCA2C] shadow-[5px_3px_0px_#000] transition active:translate-y-px disabled:bg-[#ddd] disabled:text-[#888] disabled:cursor-not-allowed disabled:shadow-none"
                                        style={{ fontFamily: "var(--font-luckiest-guy)" }}
                                    >
                                        <span className="text-xl tracking-[0.06em] text-black sm:text-2xl">
                                            {status === "loading" ? "SUBMITTING..." : "SUBMIT"}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <WavyContactCard gradientId="wavyAdmissionGrad" />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AdmissionForm;
