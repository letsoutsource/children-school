import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CTAButton from "./CTAButton";
import Link from "next/link";

const HeroCallToAction = () => {
    return (
        <section className="hero-section-background relative min-h-[40vh] md:min-h-[75vh] overflow-hidden">
            {/* <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(to right, #FEC7FF 0px, #FEC7FF 100px, transparent 100px, transparent 206px), linear-gradient(180deg, #E5A4FF 0%, #BA89CD 100%), linear-gradient(0deg, #FEADFF, #FEADFF)",
      }}
    > */}
            <div className="relative z-20">
                <MaxWidthWrapper>
                    <div className="mx-auto mt-12 sm:mt-14 flex max-w-[855px] flex-col items-center gap-8 px-4 text-center md:mt-16 3xl:mt-18">

                        <div className="flex items-center gap-4">
                            <Link href="/curriculum">
                                <CTAButton
                                    variant="curriculum"
                                    className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl cursor-pointer"
                                >
                                    Curriculum
                                </CTAButton>
                            </Link>

                            <Link href="/admission">
                                <CTAButton
                                    variant="admission"
                                    className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl cursor-pointer"
                                >
                                    Admission
                                </CTAButton>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            <div className="pointer-events-none absolute left-20 top-44 z-10 hidden select-none lg:block">
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
            </div>

            <div className="pointer-events-none absolute -bottom-10 sm:-bottom-45 lg:-bottom-3/7 xl:-bottom-1/5 left-1/2 z-0 w-full max-w-[980px] -translate-x-1/2 px-4 animate-hero-soft-bounce">
                <Image
                    src="/images/hero/kids-transparent-bg.png"
                    alt="Children in hero section"
                    width={980}
                    height={551}
                    className=" h-auto w-full object-contain drop-shadow-[11px_6.6px_3.3px_rgba(120,34,122,0.72)]"
                    priority
                />
            </div>
        </section>
    );
};

export default HeroCallToAction;