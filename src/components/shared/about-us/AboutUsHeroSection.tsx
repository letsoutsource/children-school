import Image from "next/image";

const AboutUsHeroSection = () => {
    return (
        <section className="relative min-h-[900px] overflow-hidden bg-[#FFF5B3] pt-42 sm:pt-48 lg:min-h-[1000px] lg:pt-60">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to bottom, #FFF8C9 0px, #FFF8C9 74px, transparent 74px, transparent 148px)",
                }}
            />

            {/* <div className="pointer-events-none absolute left-2 top-6 z-10 h-4 w-4 rounded-full border-2 border-white bg-[#E245F7] shadow-[2px_2px_0px_rgba(255,255,255,0.6)] sm:left-16 sm:top-20 sm:h-8 sm:w-8 sm:border-[3px]" /> */}

            <div className="pointer-events-none absolute -left-[172px] top-8 z-10 h-[560px] w-[255px] sm:-left-[136px] sm:h-[670px] sm:w-[300px] lg:-left-[95px] lg:top-[10px] lg:h-[763px] lg:w-[342px]">
                <Image
                    src="/svgs/about-us-line-1.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 342px, (min-width: 640px) 300px, 255px"
                    aria-hidden="true"
                />
            </div>

            <div className="pointer-events-none absolute -right-[176px] top-2 z-10 h-[620px] w-[260px] sm:-right-[154px] sm:h-[760px] sm:w-[310px] lg:-right-[96px] lg:top-0 lg:h-[1030px] lg:w-[372px]">
                <Image
                    src="/svgs/about-us-line-2.svg"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 372px, (min-width: 640px) 310px, 260px"
                    aria-hidden="true"
                />
            </div>

            <div className="pointer-events-none absolute left-2 top-20 z-20 select-none sm:left-8 sm:top-24 lg:left-10 lg:top-[108px]">
                <div
                    className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-52 lg:w-44"
                    style={{ fontFamily: "var(--font-sniglet)" }}
                >
                    <span className="absolute left-5 top-0 -rotate-[11deg] text-[54px] font-extrabold leading-none text-[#FF2C2C] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)] sm:text-[76px] lg:text-[112px]">
                        B
                    </span>
                    <span className="absolute left-0 top-10 -rotate-[35deg] text-[54px] font-extrabold leading-none text-[#2CFF41] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)] sm:top-12 sm:text-[76px] lg:top-[68px] lg:text-[112px]">
                        A
                    </span>
                    <span className="absolute left-12 top-8 rotate-[8deg] text-[54px] font-extrabold leading-none text-[#F42CFF] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)] sm:left-16 sm:top-10 sm:text-[76px] lg:left-[102px] lg:top-[44px] lg:text-[112px]">
                        C
                    </span>
                </div>
            </div>

            <div className="relative z-20 mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 px-5 text-center sm:px-6 ">
                <div className="flex w-full flex-col items-center gap-6">
                    <p
                        className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
                        style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                    >
                        About Us
                    </p>

                    <h1
                        className="w-full text-[40px] leading-[1.08] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[90px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
                        style={{
                            fontFamily: "var(--font-luckiest-guy)",
                            fontWeight: 400,
                            textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                        }}
                    >
                        <span className="text-white">Where </span>
                        <span
                            className="normal-case text-[#FFCA2C]"
                            style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                            Little
                        </span>
                        <span className="text-white"> </span>
                        <span
                            className="normal-case text-[#F41FFF]"
                            style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                            Learners
                        </span>
                        <br />
                        <span
                            className="normal-case text-[#2CFAFF]"
                            style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                            Grow
                        </span>
                        <span className="text-white"> With </span>
                        <span
                            className="normal-case text-[#FF2C2C]"
                            style={{ fontFamily: "var(--font-pacifico)" }}
                        >
                            Love
                        </span>
                    </h1>
                </div>

                <p
                    className="w-full max-w-[616px] text-xl leading-[30px] text-black sm:text-2xl"
                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
                >
                    At Children&apos;s House, we foster a warm, welcoming environment where kids can
                    explore their curiosity, build lasting friendships, and grow.
                </p>
            </div>
        </section>
    );
};

export default AboutUsHeroSection;