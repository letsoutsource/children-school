"use client";

import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import WavyContactCard from "@/components/shared/WavyContactCard";

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

const AdmissionForm = () => {
    return (
        <section className="min-h-screen overflow-x-clip bg-[#C9F4FF] pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 px-4">
            <MaxWidthWrapper className="px-4 sm:px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">

                    <div className="w-full lg:sticky lg:top-32 lg:w-[380px] lg:shrink-0">
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
                                    Open
                                </span>
                            </div>

                            <div className="w-full max-w-[712px] mx-auto rounded-[28px] border-[6px] border-[#FFCA2C] bg-white px-4 pt-10 pb-6 shadow-[8px_10px_0px_#B6990C] sm:px-8 sm:pt-12 sm:pb-8">
                                <form className="flex w-full flex-col gap-4 sm:gap-5 ">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Name"
                                        />
                                        <input
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Email"
                                        />
                                    </div>

                                    <input
                                        className={inputClassName}
                                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                        placeholder="Branch Selector"
                                    />

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Child's Name"
                                        />
                                        <input
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="dd/mm/yyyy"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                                        <input
                                            className={inputClassName}
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                            placeholder="Phone n0"
                                        />
                                        <button
                                            type="button"
                                            className="flex h-[55px] items-center justify-center rounded-[16px] border-[3px] border-[#DBDADA] bg-white px-5 text-[16px] tracking-[0.04em] text-[#999999] shadow-[2px_3px_3px_rgba(0,0,0,0.2)] sm:text-[18px]"
                                            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                        >
                                            Upload File
                                        </button>
                                    </div>

                                    <textarea
                                        className={textareaClassName}
                                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                        placeholder="Interested in"
                                    />

                                    <button
                                        type="button"
                                        className="flex h-[58px] w-full items-center justify-center rounded-[16px] border-3 border-black bg-[#FFCA2C] shadow-[5px_3px_0px_#000] transition active:translate-y-px"
                                        style={{ fontFamily: "var(--font-luckiest-guy)" }}
                                    >
                                        <span className="text-xl tracking-[0.06em] text-black sm:text-2xl">SUBMIT</span>
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
