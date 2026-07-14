import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CTAButton from "./CTAButton";
import Link from "next/link";

const HeroCallToAction = () => {
    return (
        <section className="relative overflow-hidden w-full max-w-[980px] mx-auto px-4 pt-4 sm:-mt-6 md:-mt-10 lg:-mt-12 ">
            {/* <div className="pointer-events-none absolute left-20 top-20 z-10 hidden select-none lg:block">
                <div
                    className="relative h-[145px] w-[120px]"
                    style={{ fontFamily: "var(--font-sniglet)" }}
                >
                    <span className="absolute left-3 top-0 -rotate-12 text-6xl font-extrabold text-[#2CEDFF] [-webkit-text-stroke:4px_black]">
                        H
                    </span>
                    <span className="absolute left-0 top-10 -rotate-35 text-6xl font-extrabold text-[#2CFF41] [-webkit-text-stroke:4px_black]">
                        A
                    </span>
                    <span className="absolute left-14 top-7 text-6xl font-extrabold text-[#FF562C] [-webkit-text-stroke:4px_black]">
                        Z
                    </span>
                </div>
            </div> */}

            <div className="relative z-0 w-full animate-hero-soft-bounce">
                {/* Colorful Patterned Background Backdrop for the Kids Image */}
                <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10 w-[92%] h-[78%] rounded-[24px] sm:rounded-[36px] border-4 sm:border-[5px] border-black shadow-[4px_4px_0px_#000] sm:shadow-[8px_8px_0px_#000]"
                    style={{
                        backgroundColor: "#FFF9E6",
                        backgroundImage: "radial-gradient(#FFB5FE 20%, transparent 20%), radial-gradient(#BEF7FA 20%, transparent 20%)",
                        backgroundSize: "28px 28px",
                        backgroundPosition: "0 0, 14px 14px"
                    }}
                />
                <Image
                    src="/images/hero/kids-transparent-bg.png"
                    alt="Children in hero section"
                    width={980}
                    height={551}
                    className="h-auto w-full object-contain"
                    priority
                />
            </div>
        </section>
    );
};

export default HeroCallToAction;