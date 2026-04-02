import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

type CloudProps = {
    baseFill: string;
    accentFill: string;
    className?: string;
};

const Cloud = ({ baseFill, accentFill, className = "" }: CloudProps) => {
    return (
        <svg
            viewBox="0 0 298 204"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M65.4261 28.4849C79.7107 -3.35606 124.777 0.448792 138.456 25.6076C148.381 20.0354 158.904 16.2232 169.859 21.9561C180.813 27.6889 184.231 37.84 182.559 50.1675C183.975 50.4085 185.246 50.6276 186.517 50.832C204.774 53.7532 213.034 74.1358 201.795 88.8805C197.946 93.9269 192.301 95.8914 186.152 96.4391C183.961 96.6363 182.909 97.3447 182.179 99.6524C181.336 102.057 179.917 104.218 178.045 105.948C169.501 113.981 159.613 117.888 148.015 113.638C142.239 111.52 136.805 108.467 130.788 105.604C125.595 111.841 118.059 114.784 109.521 115.536C103.044 116.106 96.8946 115.412 91.7314 110.833C91.3705 110.586 90.9594 110.422 90.5275 110.353C90.0957 110.283 89.6539 110.31 89.2337 110.432C84.2896 112.199 79.4259 113.265 74.416 110.563C73.8245 110.249 72.6268 110.746 71.8527 111.14C62.6071 115.865 52.9599 115.522 43.4587 112.659C40.4718 111.753 38.186 108.591 35.4985 106.583C34.5783 105.853 33.2564 104.918 32.3655 105.122C21.7031 107.613 14.3125 102.815 9.04705 94.2848C3.69397 85.6307 4.98659 76.7576 10.9385 69.0603C14.1007 64.9779 19.0229 62.2758 23.0688 58.8361C23.9305 58.1058 25.026 56.9227 24.9895 55.9952C24.1058 33.7211 41.1071 20.7219 62.4829 27.426C63.3666 27.7838 64.2795 28.1052 65.4261 28.4849Z"
                fill={baseFill}
            />
            <path
                d="M130.189 95.0516C136.659 101.449 144.269 106.656 154.128 107.503C160.73 108.177 167.358 106.507 172.853 102.785C178.118 99.2143 181.127 94.3213 181.426 87.9677C184.413 87.7559 187.225 87.8581 189.905 87.3104C196.339 86.0032 201.006 82.1983 203.051 75.9397C205.095 69.681 202.978 64.0943 198.34 59.6833C191.607 53.2786 183.822 51.1607 174.459 55.243C180.557 46.8738 180.302 38.6726 175.372 30.6758C170.603 22.9347 163.688 21.0724 148.972 22.8105C163.33 16.1283 185.911 26.462 180.784 51.7668C183.398 52.1758 186.057 52.4022 188.605 53.0302C199.399 55.7031 206.344 65.3723 205.285 76.0712C204.161 87.0621 196.376 94.1752 184.749 95.0516C184.064 95.1491 183.409 95.4008 182.835 95.7879C182.26 96.175 181.781 96.6873 181.434 97.2863C176.322 109.665 162.556 116.632 149.659 112.447C143.159 110.337 137.112 106.802 130.379 103.684C125.332 110.337 117.65 113.309 108.806 114.039C102.605 114.543 96.9821 113.499 92.2133 109.103C91.5487 108.482 89.8179 108.467 88.832 108.847C83.6177 110.855 78.5275 111.878 73.5907 107.985C66.6456 113.367 58.6196 113.426 50.5279 112.798C45.2186 112.382 40.5301 110.169 37.3241 105.889C35.3961 103.311 33.5485 102.968 30.6346 103.662C23.0103 105.363 17.1387 102.157 12.3771 96.4026C7.61559 90.6479 6.16962 84.455 8.60881 77.3492C7.65212 84.3235 9.39023 90.3266 15.0939 94.7157C17.6604 96.7833 20.6948 98.19 23.9313 98.8126C27.1678 99.4352 30.5075 99.2547 33.658 98.2868C43.2541 108.387 59.2184 110.702 71.4144 103.786C71.9899 103.515 72.6167 103.37 73.2529 103.361C73.889 103.352 74.5197 103.48 75.1024 103.735C79.6376 106.232 84.0705 105.488 88.423 103.574C89.2264 103.224 89.482 101.639 90.0443 100.5C95.4631 106.912 102.788 109.643 111.354 108.014C119.417 106.488 126.997 103.859 130.189 95.0516Z"
                fill={accentFill}
            />
            <path
                d="M128.838 34.5828L136.016 29.9016C133.205 21.0066 126.705 15.449 118.489 11.7537C110.456 8.15334 102.043 6.73658 93.2428 8.43087C106.337 4.3485 125.098 10.4465 133.577 21.3863C136.732 25.4541 138.689 30.5151 143.663 33.0711C144.203 33.3486 144.437 34.2031 144.751 34.6851C142.253 33.9548 139.821 32.7571 137.36 32.6841C134.899 32.611 132.504 33.7065 128.838 34.5828Z"
                fill={accentFill}
            />
            <path
                d="M27.1655 58.7044C26.2023 55.6278 25.9086 52.3808 26.3041 49.1814C26.6997 45.9819 27.7752 42.9042 29.4586 40.1548C27.3554 47.0853 25.0768 53.9939 32.0512 60.3767C24.1932 61.2458 17.7008 64.3423 12.3331 70.5133C14.2392 66.0512 16.6711 64.1597 27.1655 58.7044Z"
                fill={accentFill}
            />
            <path
                d="M70.3408 24.3806C69.6105 26.4108 68.7707 28.4045 68.2376 30.4786C67.7044 32.5526 67.5073 34.7654 67.0618 37.3142C65.9371 29.2809 59.4083 29.5073 53.9895 28.2293C52.2733 27.8203 50.3818 28.1636 48.5706 28.1636L48.7021 27.0681L66.6748 29.7994L69.8296 23.957L70.3408 24.3806Z"
                fill={accentFill}
            />
        </svg>
    );
};

type BranchCardProps = {
    imageSrc: string;
    imageAlt: string;
    borderColor: string;
    label: string;
    labelColorClass: string;
    cloudBase: string;
    cloudAccent: string;
};

const BranchCard = ({
    imageSrc,
    imageAlt,
    borderColor,
    label,
    labelColorClass,
    cloudBase,
    cloudAccent,
}: BranchCardProps) => {
    return (
        <div className="relative flex w-full max-w-[390px] flex-col items-center pt-3">
            <div
                className="relative h-[220px] w-[220px] overflow-hidden rounded-t-[999px] rounded-b-[32px] border-8 sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]"
                style={{
                    borderColor,
                    boxShadow:
                        "12px 6px 20px rgba(8, 60, 4, 0.44), inset 2px 8px 24px rgba(0, 0, 0, 0.6)",
                }}
            >
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="300px" />
            </div>

            <div className="pointer-events-none absolute left-1/2  w-[118%] -translate-x-1/2 bottom-[5%] sm:bottom-0">
                <Cloud
                    baseFill={cloudBase}
                    accentFill={cloudAccent}
                    className="absolute left-5 bottom-0 h-auto w-[60%] drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]"
                />
                <Cloud
                    baseFill={cloudBase}
                    accentFill={cloudAccent}
                    className="absolute left-1/2 bottom-7 h-auto w-[34%] -translate-x-1/2 scale-[0.9] drop-shadow-[0_8px_12px_rgba(0,0,0,0.16)]"
                />
                <Cloud
                    baseFill={cloudBase}
                    accentFill={cloudAccent}
                    className="absolute -right-8 bottom-0 h-auto w-[60%] drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]"
                />
            </div>

            <p
                className={`mt-15 inline-flex h-[65px] items-end justify-center text-[36px] leading-[65px] sm:text-[42px] lg:text-[48px] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:2.4px_black] ${labelColorClass}`}
                style={{
                    fontFamily: "var(--font-pacifico)",
                    fontWeight: 400,
                    textShadow: "6px 4px 1.62px rgba(0, 0, 0, 0.32)",
                }}
            >
                {label}
            </p>
        </div>
    );
};

const BranchesSection = () => {
    return (
        <section
            className="w-full px-6 py-20 sm:py-24 lg:py-32 overflow-hidden"
            style={{
                background:
                    "repeating-linear-gradient(to right, #C3F5BF 0px, #C3F5BF 100px, #D7FFD4 100px, #D7FFD4 200px)",
            }}
        >
            <MaxWidthWrapper>
                <div className="mx-auto flex min-h-[326px] w-full max-w-[992px] flex-col items-center gap-10 text-center">
                    <div className="flex w-full flex-col items-center gap-6">
                        <p
                            className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
                            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                        >
                            Branches
                        </p>

                        <h2
                            className="w-full text-[32px] leading-[1.08] uppercase sm:text-[52px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:3px_black]"
                            style={{
                                fontFamily: "var(--font-luckiest-guy)",
                                fontWeight: 400,
                                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                            }}
                        >
                            <span className="block">
                                <span className="text-[#F41FFF]">Growing </span>
                                <span className="text-[#44F6FF]">Together</span>
                            </span>
                            <span className="block">
                                <span className="text-white">Across </span>
                                <span className="text-[#FFD92C]">Locations</span>
                            </span>
                        </h2>
                    </div>

                    <p
                        className="w-full max-w-[616px] text-xl leading-[30px] text-black sm:text-2xl"
                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
                    >
                        A peek into our colorful days filled with smiles, play, and little
                        achievements.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid w-full max-w-[1258px] grid-cols-1 place-items-center gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
                    <BranchCard
                        imageSrc="/images/branch-1.png"
                        imageAlt="Branch 01 building"
                        borderColor="#D4FF00"
                        label="Branch 01"
                        labelColorClass="text-[#D5FF00]"
                        cloudBase="#F9FFDD"
                        cloudAccent="#D5FF00"
                    />
                    <BranchCard
                        imageSrc="/images/branch-2.png"
                        imageAlt="Branch 02 building"
                        borderColor="#00E4FD"
                        label="Branch 02"
                        labelColorClass="text-[#00E4FD]"
                        cloudBase="#DDFCFF"
                        cloudAccent="#00E6FF"
                    />
                    <BranchCard
                        imageSrc="/images/branch-3.png"
                        imageAlt="Branch 03 building"
                        borderColor="#FF00EE"
                        label="Branch 03"
                        labelColorClass="text-[#FF00EE]"
                        cloudBase="#FFDDFD"
                        cloudAccent="#FF00EE"
                    />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default BranchesSection;