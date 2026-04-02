import MaxWidthWrapper from "./MaxWidthWrapper";

const FooterSection = () => {
    return (
        <footer className="relative z-30 -mt-10 w-full bg-[#FE9A86] py-10 sm:-mt-12 sm:py-12 lg:-mt-14 lg:py-[54px]">
            <MaxWidthWrapper className="relative max-w-[1402.8px] px-4 sm:px-6">

                <div className="pointer-events-none absolute -top-16 left-1/2 z-10 h-40 w-[98%] -translate-x-1/2 rounded-full bg-[#FE9A86] blur-[72px] sm:-top-18 sm:h-44 lg:-top-22 lg:h-52" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#eb8b78] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#eb8b78] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-[95%] -translate-x-1/2 rounded-full bg-[#FE9A86] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />

                <div className="relative z-20 rounded-[36px] bg-black px-6 py-8 shadow-[0px_-16px_60px_rgba(254,154,134,0.7),0px_-4px_22px_rgba(255,212,203,0.65)] sm:px-10 sm:py-10 lg:min-h-[386px] lg:rounded-[50.4px] lg:px-[50.4px] lg:pt-[50.4px] lg:pb-[40px]">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[244px_220px_220px_1fr_180px] lg:gap-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full border-[3px] border-white bg-[#E245F7] shadow-[3px_2px_1px_#BE2CD2]">
                                    <div className="size-5 rounded-full bg-[#D23BE8]" />
                                </div>
                                <p
                                    className="text-[22px] uppercase leading-[22px] tracking-[1px] text-[#F07BFF]"
                                    style={{ fontFamily: "var(--font-luckiest-guy)" }}
                                >
                                    Child&apos;s
                                    <br />
                                    House
                                </p>
                            </div>

                            <p
                                className="sm:text-[18px] leading-[22px] text-white"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                Paasivuorenkatu 4 A,
                                <br />
                                00530 Helsinki, Finland.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3
                                className="text-[22px] leading-[21px] tracking-[0.03em] text-[#F07BFF]"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                CURRICULUM
                            </h3>
                            <div
                                className="space-y-6 sm:text-[20px] leading-[21px] text-white"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <p>Asset Library</p>
                                <p>Integrations</p>
                                <p>Media Player</p>
                                <p>Pages</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3
                                className="text-[22px] leading-[21px] tracking-[0.03em] text-[#F07BFF]"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                ABOUT US
                            </h3>
                            <div
                                className="space-y-6 sm:text-[20px] leading-[21px] text-white"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <p>DTC and eCom</p>
                                <p>Gaming</p>
                                <p>Agencies</p>
                            </div>
                        </div>

                        <div className="hidden lg:block" />

                        <div className="space-y-6">
                            <h3
                                className="text-[22px] leading-[21px] tracking-[0.03em] text-[#F07BFF]"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                SOCIAL
                            </h3>
                            <div
                                className="space-y-6 sm:text-[20px] leading-[21px] text-white"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <p>X</p>
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 lg:mt-8 lg:pt-5">
                        <p
                            className="sm:text-[18px] leading-[21px] text-[#F07BFF]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            © 2023 Focal Technologies Oy.
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default FooterSection;