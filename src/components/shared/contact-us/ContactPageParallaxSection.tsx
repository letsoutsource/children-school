"use client";

import { useEffect, useMemo, useState } from "react";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import WavyContactCard from "@/components/shared/WavyContactCard";

const BLINK_COLORS = ["#FF4848", "#F41FFF", "#FFCA2C", "#2CFF41"];
const BACKGROUND_ROWS = [
    14, 13, 14, 13, 14, 13, 14, 13, 14, 13,
    14, 13, 14, 13, 14, 13, 14, 13,
];

const ContactPageParallaxSection = () => {
    const [activePhase, setActivePhase] = useState(0);

    const inputClassName =
        "h-[65px] w-full rounded-[20px] border-4 border-[#DBDADA] bg-white px-5 text-[18px] leading-[30px] tracking-[0.06em] text-black shadow-[2px_4px_4px_rgba(0,0,0,0.25)] placeholder:text-[#999999] sm:px-8 sm:text-[24px]";
    const textareaClassName =
        "h-[241px] w-full resize-none rounded-[20px] border-4 border-[#DBDADA] bg-white px-5 py-5 text-[18px] leading-[30px] tracking-[0.06em] text-black shadow-[2px_4px_4px_rgba(0,0,0,0.25)] placeholder:text-[#999999] sm:px-8 sm:text-[24px]";
    const valueTextClass =
        "uppercase text-white leading-[0.95] [-webkit-text-stroke:1.6px_black] sm:[-webkit-text-stroke:2.4px_black]";

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
        <section className="relative overflow-x-clip bg-[#DFF7FF]">
            <div className="sticky top-0 z-0 h-screen overflow-hidden opacity-80">
                <div className="absolute inset-0">
                    <div className="mx-auto opacity-85 flex h-full w-full max-w-[1512px] flex-col items-center justify-center gap-12 px-4 sm:gap-14 md:gap-16 lg:gap-14">
                        {boxes.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`flex items-center justify-center gap-14 sm:gap-16 md:gap-20 lg:gap-16 ${rowIndex % 2 === 0 ? "w-full" : "w-[92%]"
                                    }`}
                            >
                                {row.map((box) => {
                                    const isActive = box.phase === activePhase;
                                    return (
                                        <div
                                            key={box.id}
                                            className={`size-3.5 shrink-0 rounded-[10px] sm:size-4 md:size-5 lg:size-8 ${isActive
                                                ? "border-2 border-black shadow-[3px_3px_0px_#000] md:border-[3px] md:shadow-[4px_4px_0px_#000]"
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

            <div className="relative z-10 -mt-[100vh] pt-24 pb-30">
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
                                    aria-label="Child's House"
                                >
                                    <defs>
                                        <path id="contact-arc-parallax" d="M 36 116 A 84 84 0 0 1 204 116" />
                                    </defs>
                                    <text
                                        fill="#111111"
                                        fontWeight="900"
                                        fontSize="24"
                                        letterSpacing="2"
                                        style={{ textTransform: "uppercase" }}
                                    >
                                        <textPath href="#contact-arc-parallax" startOffset="50%" textAnchor="middle">
                                            CHILD&apos;S HOUSE
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

                        <form className="mx-auto mt-8 flex w-full max-w-[632px] flex-col gap-4 sm:mt-10 sm:gap-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Name"
                                />
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Child’s Name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="dd/mm/yyyy"
                                />
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Child’s Roll no"
                                />
                            </div>

                            <input
                                className={inputClassName}
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                placeholder="Interested in"
                            />

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="E-mail"
                                />
                                <input
                                    className={inputClassName}
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    placeholder="Phone no"
                                />
                            </div>

                            <textarea
                                className={textareaClassName}
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                placeholder="Interested in"
                            />

                            <button
                                type="button"
                                className="flex h-[65px] w-full items-center justify-center rounded-[20px] border-3 border-black bg-[#FFCA2C] shadow-[5px_3px_0px_#000] transition active:translate-y-px"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                <span className="text-2xl tracking-[0.06em] text-black">SUBMIT</span>
                            </button>
                        </form>
                    </div>

                    <div className="mt-16 sm:mt-20">
                        <WavyContactCard gradientId="wavyCardGrad" />
                    </div>
                </MaxWidthWrapper>
            </div>
        </section>
    );
};

export default ContactPageParallaxSection;
