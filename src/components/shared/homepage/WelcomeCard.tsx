import Image from "next/image";

// Exact card outline path from Figma — viewBox coords are 0 0 900 1250
// (original Figma viewBox was 0 0 1207 1678 which included shadow bleed;
//  the path itself occupies roughly x:28–872, y:19–1225, so 900×1250 fits it cleanly)
const CARD_PATH =
    "M831.339 22.6788C822.344 23.2997 813.129 25.8004 804.106 28.9996C794.119 32.5775 783.378 34.1004 772.661 33.4578C763.13 33.0261 753.928 30.1686 746.113 25.214C740.396 21.6009 733.535 21.7647 726.865 23.5842C721.148 25.1278 715.736 27.4561 709.99 28.9996C700.909 31.4313 692.142 30.3275 683.385 28.051C679.107 27.0713 674.898 25.8619 670.779 24.4293C664.776 22.1442 658.315 21.7648 652.236 24.1361C641.573 28.2925 630.92 29.4825 620.019 25.2226C604.983 19.3503 590.909 22.7823 577.139 28.7495C566.239 33.4664 554.956 35.6481 543.198 32.0608C536.528 29.9999 530.124 27.0939 523.597 24.5845C515.164 21.3509 506.941 21.9976 498.88 25.7055C486.168 31.5003 473.533 31.7935 460.936 25.352C455.314 22.4718 449.568 21.325 443.374 24.3086C440.039 25.9125 436.314 26.8352 432.836 28.2149C422.459 32.3367 412.415 29.8016 403.115 25.8866C393.034 21.6441 383.743 21.7992 374.043 26.1281C366.687 29.4135 359.302 32.4575 350.869 33.2422C340.103 34.3355 329.233 32.2612 319.872 27.3267C307.113 20.6093 294.421 20.6093 281.223 25.2916C270.98 28.922 260.86 29.0858 250.836 24.7656C244.089 21.8596 237.286 22.4546 230.511 24.4811C221.935 27.068 213.578 30.0861 204.392 30.431C195.337 30.7582 186.358 28.8155 178.446 24.8173C168.993 20.1263 160.341 22.0148 151.975 26.5851C138.806 33.7768 124.77 34.9841 109.981 32.5696C98.0893 30.6208 87.2551 25.671 75.4966 23.1444C61.8704 20.2729 40.1352 31.3623 35.8949 43.2106C31.5593 55.3347 33.4651 66.7777 36.2476 78.5655C38.1533 86.6627 41.3931 94.4408 42.365 102.797C43.537 112.877 42.4698 122.449 38.1438 131.805C34.3323 140.075 29.6632 148.103 30.5875 157.674C31.4249 165.809 34.0903 173.702 38.4202 180.871C43.0035 188.632 42.8795 196.772 42.851 205.085C42.851 213.941 38.2103 221.469 34.6752 229.342C30.5778 238.456 29.3582 247.718 32.3979 257.419C35.0278 265.809 39.697 273.501 41.9267 282.064C44.6601 292.099 43.8333 302.658 39.5635 312.245C36.5239 319.143 33.1888 325.973 31.5118 333.337C28.8151 345.194 33.627 355.688 38.9727 365.864C41.5814 370.584 43.2338 375.689 43.8515 380.937C45.1379 393.768 42.2031 405.72 35.3615 417.232C29.244 427.511 29.1582 438.669 34.5991 449.413C42.5652 465.142 45.5571 481.38 40.907 498.307C39.6779 502.799 36.6002 506.852 34.6086 511.242C30.0253 521.279 29.425 531.299 33.6558 541.75C36.5144 548.839 40.5164 555.547 42.7842 562.817C44.8604 569.16 45.4741 575.822 44.5873 582.389C43.7006 588.955 41.3323 595.287 37.6292 600.991C28.4911 615.409 30.454 629.551 36.8954 643.84C44.709 661.173 45.8145 678.781 39.8113 696.588C37.9056 702.133 34.7134 707.315 32.6171 712.886C28.7293 723.234 30.9496 732.874 35.2756 742.489C37.6483 747.749 40.9357 752.613 42.1458 758.364C44.9282 771.678 41.8027 783.941 34.9515 795.668C29.5201 804.964 28.6055 814.536 31.9692 824.659C34.3895 831.92 37.6863 838.982 39.6968 846.217C43.0414 858.221 45.0711 870.534 40.1542 882.952C37.3679 890.256 35.2486 897.754 33.8177 905.372C32.2454 913.211 34.3895 920.825 38.6965 927.689C49.5022 944.935 47.5391 961.759 36.8764 978.16C30.3777 988.146 28.9293 998.269 32.3216 1009.4C34.5799 1016.84 39.192 1023.41 41.2216 1030.85C43.5821 1039.49 43.6931 1048.51 41.5457 1057.19C40.345 1062.18 37.7341 1066.63 35.5234 1071.19C29.0914 1084.27 29.1962 1097.06 35.9712 1110.1C43.8134 1125.19 45.1951 1140.68 39.6208 1156.9C36.038 1167.34 31.2069 1177.83 32.7315 1189.13C33.8178 1197.21 36.3904 1204.65 43.3751 1210.88C55.0669 1221.31 68.2356 1222.41 83.0814 1218.81C91.1618 1216.85 98.785 1213.63 107.056 1212.18C123.932 1209.12 139.921 1209.72 154.9 1218.57C162.018 1222.8 170.289 1222.52 177.664 1219.44C192.243 1213.35 206.775 1212.37 221.83 1217.39C226.376 1219.08 231.14 1220.24 236.009 1220.84C240.878 1221.29 245.633 1221.55 250.464 1219.76C259.698 1216.31 269.179 1214.59 278.946 1218.44C295.145 1224.88 310.391 1221.89 325.494 1215.05C338.015 1209.39 351.088 1209.24 364.2 1213.41C367.595 1214.57 370.883 1215.96 374.033 1217.59C384.22 1222.61 393.901 1221.19 404.049 1217.38C415.598 1213.06 427.328 1212.57 438.82 1218.24C446.509 1222.01 454.066 1222.41 462.203 1218.24C474.143 1212.2 486.807 1213.06 498.832 1218.09C510.266 1222.87 521.053 1221.85 531.468 1216.37C546.886 1208.2 562.732 1209.37 577.816 1215.79C592.243 1221.92 606.107 1224.41 621.153 1218.58C631.568 1214.56 641.868 1216 652.017 1219.73C660.421 1222.8 668.797 1221.29 676.477 1218.22C686.768 1214.12 697.355 1213.5 708.055 1214.59C713.249 1215.12 718.318 1217.44 723.197 1219.44C731.125 1222.68 738.948 1223.05 746.285 1218.75C763.627 1208.57 782.18 1208.54 800.98 1213.57C808.603 1215.64 816.121 1218.38 823.925 1220.22C837.59 1223.42 858.467 1215.73 864.328 1203.35C870.188 1190.96 869.282 1178.92 864.785 1166.63C859.935 1153.34 856.057 1139.9 859.42 1125.77C860.745 1120.17 863.232 1114.86 865.728 1109.65C871.96 1096.83 871.96 1083.95 865.728 1071.32C861.593 1062.86 858.01 1054.35 857.657 1045.08C857.381 1037.69 859.677 1030.68 862.917 1023.89C866.157 1017.1 869.492 1010.23 870.102 1002.63C870.645 995.855 870.464 989.138 866.967 982.989C863.27 976.496 859.439 970.011 857.324 962.992C855.675 957.534 855.866 951.782 855.78 946.022C855.637 937.114 861.583 930.5 864.642 922.868C868.213 914.216 868.257 904.695 864.766 896.016C858.591 880.434 855.885 864.61 860.726 848.45C862.689 841.888 865.69 835.516 868.091 829.031C872.856 816.269 871.846 804.024 864.48 792.279C859.849 784.872 858.381 776.663 857.581 768.367C856.704 759.313 860.525 751.121 864.975 743.438C869.74 735.116 871.56 726.786 869.511 717.447C867.739 709.367 863.794 702.046 861.145 694.311C857.934 685.309 856.852 675.795 857.972 666.39C859.353 655.024 864.356 644.599 867.672 633.734C871.121 622.455 870.397 611.977 864.003 601.431C854.675 586.039 854.722 570 862.45 553.892C866.262 546.036 870.073 538.068 870.464 529.376C870.747 522.207 868.922 515.098 865.175 508.775C855.647 492.331 855.428 475.688 862.889 458.666C866.024 451.517 869.406 444.541 869.978 436.582C870.693 426.657 867.043 417.922 862.355 409.488C855.58 397.312 856.79 384.878 859.401 372.184C860.525 366.76 864.08 362.371 866.319 357.422C872.236 344.357 871.188 331.724 864.413 319.316C855.389 302.794 855.485 286.237 864.08 269.698C869.797 258.686 871.76 247.235 868.682 235.421C867.358 230.351 864.613 225.573 862.336 220.762C856.247 207.827 856.838 194.892 861.955 181.88C863.489 177.956 866.386 174.55 867.672 170.67C871.36 159.977 871.388 149.189 865.919 138.876C861.148 130.125 858.399 120.586 857.838 110.842C857.514 104.194 859.363 97.5537 861.059 91.0088C863.918 79.9107 869.34 69.1576 868.596 57.525C867.491 40.3994 857.39 26.9387 837.294 23.1359C835.323 22.8614 833.333 22.7087 831.339 22.6788Z";

const WelcomeCard = () => {
    return (
        <div className="relative mx-auto flex w-full justify-center">

            {/* ── Card shell — generous padding so the SVG border is never clipped ── */}
            <div className="relative w-full px-8 pt-10 pb-12 sm:px-14 sm:pt-18 sm:pb-22 xl:px-20 xl:pt-32 xl:pb-44">

                {/* ── Exact Figma path as border + fill — NO shadow filter ── */}
                <svg
                    viewBox="0 0 900 1250"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <defs>
                        {/* Subtle lavender dot-pattern fills the card interior */}
                        <pattern id="wcBg" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                            <rect width="16" height="16" fill="#EDE6F7" />
                            <circle cx="8" cy="8" r="1.3" fill="#D4B8F0" />
                            <circle cx="0" cy="0" r="1.3" fill="#D4B8F0" />
                            <circle cx="16" cy="0" r="1.3" fill="#D4B8F0" />
                            <circle cx="0" cy="16" r="1.3" fill="#D4B8F0" />
                            <circle cx="16" cy="16" r="1.3" fill="#D4B8F0" />
                        </pattern>

                        {/* Figma gradient: red → yellow-green → green → magenta
                            Coordinates normalised from Figma's original space to 0 0 900 1250 */}
                        <linearGradient
                            id="wcBorderGrad"
                            x1="648" y1="-6"
                            x2="-180" y2="930"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#FF2525" />
                            <stop offset="34%" stopColor="#C8CB3B" />
                            <stop offset="64%" stopColor="#25FF5C" />
                            <stop offset="100%" stopColor="#FB25FF" />
                        </linearGradient>

                        {/* Inside-stroke mask (same technique Figma uses) */}
                        <mask id="wcInsideMask">
                            <path d={CARD_PATH} fill="white" />
                        </mask>
                    </defs>

                    {/* Card fill */}
                    <path d={CARD_PATH} fill="url(#wcBg)" />

                    {/* Rainbow border — inside stroke via mask, constant screen-pixel width */}
                    <path
                        d={CARD_PATH}
                        fill="none"
                        stroke="url(#wcBorderGrad)"
                        strokeWidth="8"
                        vectorEffect="non-scaling-stroke"
                        mask="url(#wcInsideMask)"
                    />
                </svg>

                {/* ── Content ── */}
                <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6">

                    {/* "CHILD'S HOUSE" arc text
                        viewBox 300×105, arc r=160:
                          half-chord=135 → sagitta ≈ 160−√(160²−135²) ≈ 160−85.9 = 74 px
                          arc top ≈ 92−74 = 18 px — comfortably inside the 105-tall viewBox.
                        Produces a noticeably curved crown shape matching the Figma logo. */}
                    {/* <svg
                        viewBox="0 0 300 105"
                        className="w-32 sm:w-52 xl:w-72"
                        aria-label="Child's House"
                        overflow="visible"
                    >
                        <defs>
                            <path id="wcArcPath" d="M 15,92 A 160,160 0 0,1 285,92" fill="none" />
                        </defs>
                        <text fill="black" letterSpacing="3">
                            <textPath
                                href="#wcArcPath"
                                startOffset="50%"
                                textAnchor="middle"
                                style={{
                                    fontFamily: "var(--font-luckiest-guy)",
                                    fontSize: "22px",
                                    fontWeight: 900,
                                }}
                            >
                                CHILD&apos;S HOUSE
                            </textPath>
                        </text>
                    </svg> */}

                    <svg
                        viewBox="0 0 247 140"
                        className="absolute   w-32 sm:w-52 xl:w-72 -top-8 xl:-top-20"
                        aria-label="Children's House Montessori Kindergarten"
                    >
                        <defs>
                            <path id="contact-arc-parallax" d="M 36 116 A 84 84 0 0 1 204 116" />
                        </defs>
                        <text
                            fill="#111111"
                            fontWeight="900"
                            fontSize="24"
                            letterSpacing="1"
                            style={{ textTransform: "uppercase" }}
                        >
                            <textPath href="#contact-arc-parallax" startOffset="50%" textAnchor="middle">
                                CHILDREN&apos;S HOUSE
                            </textPath>
                        </text>
                    </svg>


                    {/* Decorative circle */}
                    <div className="h-8 w-8 mt-2 xl:mt-4 rounded-full border-2 border-black bg-[#CC44FF] shadow-[0_4px_14px_rgba(150,0,220,0.40)] sm:h-12 sm:w-12 xl:h-16 xl:w-16" />

                    {/* Body paragraph */}
                    <p
                        className="mt-4 xl:mt-10 text-[11px] leading-[1.8] text-black sm:text-[15px] xl:text-[23px]"
                        style={{ fontFamily: "var(--font-pacifico)" }}
                    >
                        <span className="text-[#FFA500]">Children&apos;s House</span>
                        {" "}is a labor of love. Love is what founded the school. Love is what makes it
                        grow and what keeps it going. Love is what we give, and what we get in return.
                        Welcome to the most loved preschool!{" "}
                        <span className="text-[#9933FF]">
                            In here, whatever the season, you will always find love in full bloom.
                        </span>
                    </p>

                </div>
            </div>

            {/* ── Left side image ── */}
            <div className="pointer-events-none absolute -left-6 top-[38px] z-20 -rotate-[8deg] sm:-left-10 sm:top-[54px]">
                <div className="relative h-[72px] w-[60px] overflow-hidden rounded-[12px] border-[3.5px] border-[#E245F7] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.28)] sm:h-[108px] sm:w-[88px] sm:rounded-[16px]">
                    <Image
                        src="/images/2ndimage.avif"
                        alt="Creative student photo"
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 88px, 60px"
                    />
                </div>
            </div>

            {/* ── Right side image ── */}
            <div className="pointer-events-none absolute -right-8 bottom-[90px] z-20 rotate-[9deg] sm:-right-10 sm:bottom-[120px]">
                <div className="relative h-[72px] w-[60px] overflow-hidden rounded-[12px] border-[3.5px] border-[#FFCA2C] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.28)] sm:h-[108px] sm:w-[88px] sm:rounded-[16px]">
                    <Image
                        src="/images/3rdimage.avif"
                        alt="Happy child photo"
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 88px, 60px"
                    />
                </div>
            </div>

        </div>
    );
};

export default WelcomeCard;
