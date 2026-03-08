import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="hero-section-background relative min-h-screen overflow-hidden">
    {/* <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(to right, #FEC7FF 0px, #FEC7FF 100px, transparent 100px, transparent 206px), linear-gradient(180deg, #E5A4FF 0%, #BA89CD 100%), linear-gradient(0deg, #FEADFF, #FEADFF)",
      }}
    > */}
      <div className="relative z-20">
        <MaxWidthWrapper>
          <div className="mx-auto mt-42 sm:mt-48 flex max-w-[855px] flex-col items-center gap-8 px-4 text-center md:mt-32 3xl:mt-36">
            <div className="flex flex-col items-center gap-1 sm:gap-3">
              <h1
                className="text-4xl sm:text-5xl leading-[1.05] md:text-7xl lg:text-[80px] 3xl:text-[90px]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  textShadow: "9px 7.2px 1.8px rgba(0, 0, 0, 0.32)",
                }}
              >
                <span className="text-[#FCB037] [text-stroke:3px_black] [-webkit-text-stroke:3px_black]">
                  QUALIFIED EARLY
                </span>
                <br />
                <span className="text-white [text-stroke:3px_black] [-webkit-text-stroke:3px_black]">
                  YEARS{" "}
                </span>
                <span
                  className="text-[#2CFF41] text-4xl sm:text-5xl leading-[100px] md:text-6xl lg:text-[80px] 3xl:text-[84px] [text-stroke:2px_black] [-webkit-text-stroke:2px_black]"
                  style={{
                    fontFamily: "var(--font-pacifico)",
                    fontWeight: 400,
                  }}
                >
                  Educators
                </span>
              </h1>

              <p
                className="max-w-[800px] sm:text-lg md:text-2xl"
                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
              >
                Building Bright Futures by Making Learning Fun, Safe &amp;
                Meaningful
              </p>
            </div>

            <div className="flex items-center gap-4">
              <CTAButton
                variant="curriculum"
                className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl"
              >
                Curriculum
              </CTAButton>
              <CTAButton
                variant="admission"
                className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl"
              >
                Admission
              </CTAButton>
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

      <div className="pointer-events-none absolute bottom-0 lg:-bottom-1/4 left-1/2 z-0 w-full max-w-[980px] -translate-x-1/2 px-4 animate-hero-soft-bounce">
        <Image
          src="/images/hero-image.png"
          alt="Children in hero section"
          width={980}
          height={551}
          className="h-auto w-full object-contain drop-shadow-[11px_6.6px_3.3px_rgba(120,34,122,0.72)]"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;