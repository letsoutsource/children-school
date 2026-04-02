import PatternBackground from "./PatternBackground";
import Image from "next/image";

const WelcomeSection = () => {
    return (
        <div className="h-auto w-auto relative ">
            <PatternBackground
                heightClassName="h-[250px] sm:h-[520px] xl:h-[889px]"
                backgroundColor="#EFEFEF"
                boxColor="#ECE99C"
            />
            {/* Card */}
            <div className="absolute -top-15 left-1/2 -translate-x-10/41 xl:-top-20 xl:left-1/2 xl:-translate-x-10/29">
                <div className="relative ">

                    {/* card image */}
                    <Image
                        src="/images/welcome-card.png"
                        alt="Welcome section image"
                        width={1400}
                        height={1000}
                        className="h-[520px] w-[350px] sm:h-[900px] sm:w-[600px] overflow-visible  object-cover xl:h-[1600px] xl:w-[1150px] "
                    />

                    <div className="absolute bg-red-500/50 inset-0 -ml-24 sm:-ml-28 lg:-ml-20 h-[360px] w-[255px] sm:h-[670px] sm:w-[450px] xl:h-[1200px] xl:w-[810px] ">
                        <div className=" absolute top-8 left-1/2 -translate-x-1/2 sm:top-14 xl:top-24 flex flex-col items-center">
                            <svg
                                viewBox="0 0 320 140"
                                className="w-[80px] sm:w-[200px] xl:w-[360px] h-15 sm:h-34 lg:h-58"
                                aria-label="Child's House"
                            >
                                <defs>
                                    <path id="welcome-arc" d="M 35 118 A 125 125 0 0 1 285 118" />
                                </defs>
                                <text
                                    fill="#111111"
                                    fontWeight="900"
                                    fontSize="34"
                                    letterSpacing="2"
                                    style={{ textTransform: "uppercase" }}
                                >
                                    <textPath href="#welcome-arc" startOffset="50%" textAnchor="middle">
                                        CHILD&apos;S HOUSE
                                    </textPath>
                                </text>
                            </svg>

                            <div className="relative -mt-8 sm:-mt-20 xl:-mt-34">
                                <div className="size-5 sm:size-10 lg:size-18 rounded-full bg-fuchsia-500 border border-white shadow-[2px_2px_0px_0px_rgba(192,75,214,0.85)] sm:shadow-[4px_4px_0px_0px_rgba(192,75,214,0.85)]" />
                            </div>

                            <p
                                className="px-1 mt-2 bg-green-500 sm:mt-5 xl:mt-8 w-[170px] sm:w-[350px] xl:w-[616px] text-center text-[12px] leading-[28px] sm:text-[26px] sm:leading-[46px] xl:text-[44px] xl:leading-[80px] text-black"
                                style={{
                                    fontFamily: "var(--font-pacifico)",
                                    textShadow: "0px 2.5px 1px rgba(0, 0, 0, 0.32)",
                                }}
                            >
                                <span className="text-[#FFC83F]">Mother&apos;s Pride</span> is a labor of love. Love is
                                what founded the school. Love is what makes it grow and what keeps it
                                going. Love is what we give, and what we get in return. Welcome to the
                                most loved preschool!{" "}
                                <span className="text-fuchsia-500">
                                    In here, whatever the season, you will always find love in full bloom.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* small image on left */}
                    <div className="absolute bg-pink-800 h-[80px] w-[65px] sm:h-[100px] sm:w-[80px] xl:h-[269px] xl:w-[231px] top-10 -left-28 sm:top-20 sm:-left-40  xl:top-1/7 xl:-left-50 -rotate-12 rounded-lg xl:rounded-2xl">
                        <div className="h-full w-full -mt-1 -ml-1 xl:-mt-2 xl:-ml-2">
                            <Image
                                src="/images/img1.png"
                                alt="Welcome section image"
                                width={1000}
                                height={1000}
                                className="h-full w-full border-2 lg:border-8 border-pink-500 rounded-lg xl:rounded-2xl "
                            />

                        </div>
                    </div>
                    {/* small image on right */}
                    <div className="absolute bg-yellow-800 h-[80px] w-[65px] sm:h-[100px] sm:w-[80px] xl:h-[269px] xl:w-[231px] bottom-40 -right-5 sm:bottom-80 sm:right-0  xl:bottom-4/10 xl:right-20 rotate-12 rounded-lg xl:rounded-2xl">
                        <div className="h-full w-full -mt-1 -ml-1 xl:-mt-2 xl:-ml-2">
                            <Image
                                src="/images/img2.png"
                                alt="Welcome section image"
                                width={1000}
                                height={1000}
                                className=" h-full w-full border-2 lg:border-8 border-yellow-500 rounded-lg xl:rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WelcomeSection;  