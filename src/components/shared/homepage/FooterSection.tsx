import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const FooterSection = () => {
    return (
        <footer className="relative z-30 -mt-10 w-full bg-[#FE9A86] py-10 sm:-mt-12 sm:py-12 lg:-mt-14 lg:py-[54px] overflow-x-clip">
            <MaxWidthWrapper className="relative max-w-[1402.8px] px-4 sm:px-6">

                <div className="pointer-events-none absolute -top-16 left-1/2 z-10 h-40 w-[98%] -translate-x-1/2 rounded-full bg-[#FE9A86] blur-[72px] sm:-top-18 sm:h-44 lg:-top-22 lg:h-52" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#eb8b78] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#eb8b78] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-[95%] -translate-x-1/2 rounded-full bg-[#FE9A86] blur-3xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-22 w-full -translate-x-1/2 rounded-full bg-[#FE9A86] blur-xl sm:-top-10 sm:h-26 lg:-top-12 lg:h-32" />

                <div className="relative z-20 rounded-[36px] bg-black px-6 py-8 shadow-[0px_-16px_60px_rgba(254,154,134,0.7),0px_-4px_22px_rgba(255,212,203,0.65)] sm:px-10 sm:py-10 lg:min-h-[386px] lg:rounded-[50.4px] lg:px-[50.4px] lg:pt-[50.4px] lg:pb-[40px]">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[244px_220px_220px_1fr_220px] lg:gap-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full border-[3px] border-white bg-[#E245F7] shadow-[3px_2px_1px_#BE2CD2]">
                                    <div className="size-5 rounded-full bg-[#D23BE8]" />
                                </div>
                                <p
                                    className="text-[22px] uppercase leading-[22px] tracking-[1px] text-[#F07BFF]"
                                    style={{ fontFamily: "var(--font-luckiest-guy)" }}
                                >
                                    Children&apos;s House
                                    <br />
                                    Montessori Kindergarten
                                </p>
                            </div>

                            <p
                                className="sm:text-[18px] leading-[22px] text-white"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                Building 208, Road 55, Block 557,
                                <br />
                                Janabiyah Highway, Bahrain.
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white hover:border-[#F07BFF] hover:bg-[#F07BFF] hover:text-black transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white hover:border-[#F07BFF] hover:bg-[#F07BFF] hover:text-black transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/97337937009"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white hover:border-[#F07BFF] hover:bg-[#F07BFF] hover:text-black transition-all duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3
                                className="text-[22px] leading-[21px] tracking-[0.03em] text-[#F07BFF]"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                ADMISSION
                            </h3>
                            <div
                                className="flex flex-col gap-6 sm:text-[20px] leading-[21px] text-white font-medium"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <Link href="/admission#admission-form" className="hover:text-[#F07BFF] transition-colors">
                                    Admission Form
                                </Link>
                                <Link href="/admission#instructions" className="hover:text-[#F07BFF] transition-colors">
                                    Instructions
                                </Link>
                                <Link href="/admission#teaching-strategy" className="hover:text-[#F07BFF] transition-colors">
                                    Teaching Strategy
                                </Link>
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
                                className="flex flex-col gap-6 sm:text-[20px] leading-[21px] text-white font-medium"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <Link href="/about-us#director-message" className="hover:text-[#F07BFF] transition-colors">
                                    Director&apos;s Message
                                </Link>
                                <Link href="/about-us#principal-message" className="hover:text-[#F07BFF] transition-colors">
                                    Principal&apos;s Message
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block" />

                        <div className="space-y-6">
                            <h3
                                className="text-[22px] leading-[21px] tracking-[0.03em] text-[#F07BFF]"
                                style={{ fontFamily: "var(--font-luckiest-guy)" }}
                            >
                                CONTACT
                            </h3>
                            <div
                                className="flex flex-col gap-5 sm:text-[18px] text-[16px] leading-[24px] text-white font-medium"
                                style={{ fontFamily: "Inter, sans-serif" }}
                            >
                                <div className="space-y-1">
                                    <span className="block text-xs uppercase tracking-wider text-[#F07BFF] font-semibold">Phone</span>
                                    <div className="flex flex-col">
                                        <a href="tel:+97317699844" className="hover:text-[#F07BFF] transition-colors">+973 1769 9844</a>
                                        <a href="tel:+97337937009" className="hover:text-[#F07BFF] transition-colors">+973 3793 7009</a>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-xs uppercase tracking-wider text-[#F07BFF] font-semibold">Email</span>
                                    <a href="mailto:childrenshouse.kg@gmail.com" className="hover:text-[#F07BFF] transition-colors break-all">
                                        childrenshouse.kg@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 lg:mt-8 lg:pt-5">
                        <p
                            className="sm:text-[18px] leading-[21px] text-[#F07BFF]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            © 2026 Children&apos;s House Montessori Kindergarten.
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default FooterSection;