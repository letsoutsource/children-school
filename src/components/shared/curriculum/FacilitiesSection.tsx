import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

type FacilityCard = {
    title: string;
    description: string;
    image: string;
    borderColor: string;
};

const facilityCards: FacilityCard[] = [
    {
        title: "Bright Classrooms",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-1.png",
        borderColor: "#FF2DE7",
    },
    {
        title: "Art & Activity Hub",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-2.png",
        borderColor: "#F1EB00",
    },
    {
        title: "Secure Campus",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-3.png",
        borderColor: "#19C8FF",
    },
    {
        title: "Secure Campus",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-4.png",
        borderColor: "#85FF47",
    },
    {
        title: "Bright Classrooms",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-5.png",
        borderColor: "#FF2D2D",
    },
    {
        title: "Art & Activity Hub",
        description: "A peek into our colorful days filled with smiles, play, and little achievements.",
        image: "/images/facilities-6.png",
        borderColor: "#1919E8",
    },
];

const FacilitiesSection = () => {
    return (
        <section className="bg-[#FFF4D1] py-20 sm:py-24 lg:min-h-[1698px] lg:py-40">
            <MaxWidthWrapper className="px-4 sm:px-6">
                <div className="mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 text-center">
                    <div className="flex w-full flex-col items-center gap-6">
                        <p
                            className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
                            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                        >
                            Facilities
                        </p>

                        <h2
                            className="w-full text-[40px] leading-[1.1] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
                            style={{
                                fontFamily: "var(--font-luckiest-guy)",
                                fontWeight: 400,
                                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                            }}
                        >
                            <span className="text-white">A </span>
                            <span className="text-[#53FF2C]">Safe </span>
                            <span className="text-white">and </span>
                            <span className="text-[#19C8FF]">Happy</span>
                            <br />
                            <span className="text-[#FFCA2C]">Place </span>
                            <span className="text-white">to </span>
                            <span className="text-[#D71CFF]">Learn</span>
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

                <div className="mx-auto mt-14 grid w-full max-w-[1128px] grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-10 lg:mt-20 lg:grid-cols-3 lg:gap-x-[72px] lg:gap-y-20">
                    {facilityCards.map((card, index) => (
                        <article
                            key={`${card.title}-${index}`}
                            className="mx-auto flex w-full max-w-[328px] flex-col items-center gap-8 text-center"
                        >
                            <div
                                className="relative size-[190px] overflow-hidden rounded-full border-[5px] sm:size-[220px] lg:size-[250px] lg:border-[6.5px]"
                                style={{
                                    borderColor: card.borderColor,
                                    boxShadow: "inset 0px 8px 12px rgba(0, 0, 0, 0.4)",
                                }}
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    sizes="250px"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3
                                    className="text-[30px] leading-tight uppercase text-white sm:text-[32px] [-webkit-text-stroke:2px_black]"
                                    style={{
                                        fontFamily: "var(--font-luckiest-guy)",
                                        fontWeight: 400,
                                        textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
                                    }}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className="text-[18px] leading-[1.3] text-black sm:text-[20px] sm:leading-[26px]"
                                    style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default FacilitiesSection;