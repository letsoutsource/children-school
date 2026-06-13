import PatternBackground2 from "../backgrounds/PatternBackground2";
import WelcomeCard from "./WelcomeCard";

// ─── ORIGINAL CODE (commented out, kept for reference) ───────────────────────
// import PatternBackground from "./PatternBackground";
// import Image from "next/image";
//
// const WelcomeSection = () => {
//     return (
//         <div className=" ">
//             {/* <PatternBackground
//                 heightClassName="h-[250px] sm:h-[520px] xl:h-[889px]"
//                 backgroundColor="#EFEFEF"
//                 boxColor="#ECE99C"
//             /> */}
//             <PatternBackground2
//                 // heightClassName=" "
//                 backgroundColor="#ffffff"
//                 // backgroundColor="#EFEFEF"
//                 boxColor="#ECE99C"
//                 className=" overflow-y-visible"
//             >
//                 {/* Card */}
//                 {/* <div className=" relative "> */}
//                 {/* <div className="absolute -top-15 left-1/2 -translate-x-10/41 xl:-top-20 xl:left-1/2 xl:-translate-x-10/29"> */}
//                 {/* <div className=" "> */}
//
//                 {/* card image */}
//                 <div className="mx-auto h-[400px] w-[240px]  sm:h-[800px] sm:w-[600px] xl:h-[900px] xl:w-[700px] relative">
//
//                     {/* Original SVG card image */}
//                     <Image
//                         src="/svgs/welcome-card-2.svg"
//                         alt="Welcome section image"
//                         width={9999}
//                         height={9999}
//                         className="h-full w-full absolute z-30 -top-20 sm:-top-18 xl:-top-28"
//                     />
//
//                     {/* small image on left */}
//                     <div className="absolute z-40 bg-pink-800 h-[70px] w-[55px] sm:h-[100px] sm:w-[80px] xl:h-[220px] xl:w-[185px] top-10 -left-10 sm:top-20 sm:-left-6  xl:top-1/7 xl:-left-28 -rotate-12 rounded-lg xl:rounded-2xl">
//                         <div className="h-full w-full -mt-1 -ml-1 xl:-mt-2 xl:-ml-2">
//                             <Image
//                                 src="/images/img1.png"
//                                 alt="Welcome section image"
//                                 width={1000}
//                                 height={1000}
//                                 className="h-full w-full border-2 lg:border-8 border-pink-500 rounded-lg xl:rounded-2xl "
//                             />
//                         </div>
//                     </div>
//
//                     {/* small image on right */}
//                     <div className="absolute z-40 bg-yellow-800 h-[70px] w-[55px] sm:h-[100px] sm:w-[80px] xl:h-[220px] xl:w-[185px] bottom-40 -right-8 sm:bottom-50 sm:-right-5  xl:bottom-1/4 xl:-right-25 rotate-12 rounded-lg xl:rounded-2xl">
//                         <div className="h-full w-full -mt-1 -ml-1 xl:-mt-2 xl:-ml-2">
//                             <Image
//                                 src="/images/img2.png"
//                                 alt="Welcome section image"
//                                 width={1000}
//                                 height={1000}
//                                 className=" h-full w-full border-2  lg:border-8 border-yellow-500 rounded-lg xl:rounded-2xl "
//                             />
//                         </div>
//                     </div>
//
//                     <div className="pointer-events-none -z-10 absolute  bottom-10 h-64 w-[50vw] rounded-full bg-linear-to-bl from-gray-700/40 via-gray-500/40 to-transparent blur-3xl" />
//                 </div>
//
//                 {/* </div> */}
//                 {/* </div> */}
//             </PatternBackground2>
//         </div>
//     );
// };
// ─────────────────────────────────────────────────────────────────────────────

const WelcomeSection = () => {
    return (
        <div>
            <PatternBackground2
                backgroundColor="#ffffff"
                boxColor="#ECE99C"
                className="overflow-y-visible"
            >
                <div className="relative mx-auto w-full max-w-[360px] -mt-14 sm:max-w-[520px] sm:-mt-18 xl:max-w-[620px] xl:-mt-22 px-10 sm:px-12 xl:px-16">
                    <WelcomeCard />

                    <div className="pointer-events-none absolute -bottom-4 left-1/2 -z-10 h-52 w-3/4 -translate-x-1/2 rounded-full bg-linear-to-bl from-gray-700/30 via-gray-500/25 to-transparent blur-3xl" />
                </div>
            </PatternBackground2>
        </div>
    );
};

export default WelcomeSection;
