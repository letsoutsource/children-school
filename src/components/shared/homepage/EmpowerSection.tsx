import Image from "next/image";
import CTAButton from "./CTAButton";
import MaxWidthWrapper from "./MaxWidthWrapper";

const EmpowerSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#FE9A86] px-4 pt-16 pb-0 sm:px-6 sm:pt-20 lg:pt-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-290px] h-[900px] w-[900px] -translate-x-1/2 rounded-full border-50 border-[#FFCEC27A] blur-lg sm:top-[-320px] sm:h-[1100px] sm:w-[1100px] sm:border-66 lg:top-[-358px] lg:h-[1512px] lg:w-[1512px] lg:border-84 lg:blur-[21px]" />
                <div className="absolute left-1/2 top-[-86px] h-[650px] w-[650px] -translate-x-1/2 rounded-full border-28 border-[#FFCEC252] blur-[9px] sm:top-[-96px] sm:h-[760px] sm:w-[760px] sm:border-32 lg:top-[-106px] lg:h-[1008px] lg:w-[1008px] lg:border-42 lg:blur-[12.6px]" />
                <div className="absolute left-1/2 top-[46%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border-14 border-[#FFCEC2CC] blur-[6px] sm:h-[510px] sm:w-[510px] sm:border-16 lg:top-1/2 lg:h-[630px] lg:w-[630px] lg:border-21 lg:blur-[8.4px]" />
            </div>

            <MaxWidthWrapper className="relative z-10">
                <div className="mx-auto flex max-w-[673px] flex-col items-center gap-6 text-center">
                    <h2
                        className="text-[40px] leading-[1.1] uppercase tracking-[0.04em] sm:text-[52px] lg:text-[64px] lg:leading-[81px] lg:tracking-[3px] [text-stroke:3px_black] [-webkit-text-stroke:1.6px_black] lg:[-webkit-text-stroke:4px_black]"
                        style={{
                            fontFamily: "var(--font-luckiest-guy)",
                            fontWeight: 400,
                            textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                        }}
                    >
                        <span className="text-[#F4FF23]">Empower </span>
                        <span className="text-white">Your </span>
                        <span className="text-[#B11CFF]">Kid&apos;s</span>
                        <br />
                        <span className="text-[#2CFF41]">Creativity</span>
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CTAButton
                            variant="curriculum"
                            className="h-[58px] min-w-[194px] px-6 text-[26px] leading-[26px] tracking-[0.03em]"
                        >
                            Curriculum
                        </CTAButton>
                        <CTAButton
                            variant="admission"
                            className="h-[58px] min-w-[194px] px-6 text-[26px] leading-[26px] tracking-[0.03em]"
                        >
                            Admission
                        </CTAButton>
                    </div>
                </div>

                <div className="relative mx-auto mt-10 h-[300px] w-full max-w-[1007px] overflow-hidden rounded-[16.8px] border-12 border-[#E245F7] sm:shadow-[14px_10px_0px_#9A14AC,0px_8.4px_16.8px_rgba(41,37,36,0.02),0px_6.3px_12.6px_rgba(41,37,36,0.02),0px_4.2px_8.4px_rgba(41,37,36,0.02),0px_2.1px_4.2px_rgba(41,37,36,0.02),0px_1.05px_2.1px_rgba(41,37,36,0.02),0px_1.05px_1.05px_-0.525px_rgba(41,37,36,0.04),inset_12px_12.6px_32px_#000] sm:h-[420px] lg:mt-12 lg:h-[499px]">
                    <Image
                        src="/images/empower-your-kids.png"
                        alt="Empower your kid's creativity"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 1007px, (min-width: 640px) 90vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[97px] bg-linear-to-b from-transparent to-[#FE9A86]" />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default EmpowerSection;