import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

type ValueCardProps = {
    title: string;
    description: string;
    bg: string;
    border: string;
    shadow: string;
    titleColor: string;
};

const valueCards: ValueCardProps[] = [
    {
        title: "Gentle Hearts",
        description: "We learn to listen with our hearts and speak with kindness every single day.",
        bg: "#FFF5DB",
        border: "#FFCB47",
        shadow: "#CB960F",
        titleColor: "#FFCB47",
    },
    {
        title: "Bright Smiles",
        description: "Our school is filled with laughter because happy kids are the best learners!",
        bg: "#E7FFDB",
        border: "#85FF47",
        shadow: "#47BC0D",
        titleColor: "#85FF47",
    },
    {
        title: "Helping Hands",
        description: "Teamwork makes the dream work! We build towers and friendships together.",
        bg: "#DBF0FF",
        border: "#47B2FF",
        shadow: "#0F76BF",
        titleColor: "#47B2FF",
    },
    {
        title: "Little Stars",
        description: "Every child has a superpower. We help you find yours and let it shine bright!",
        bg: "#FFDBDC",
        border: "#FF474A",
        shadow: "#BA0E11",
        titleColor: "#FF474A",
    },
];

const ValueCard = ({
    title,
    description,
    bg,
    border,
    shadow,
    titleColor,
}: ValueCardProps) => {
    return (
        <article
            className="mx-auto flex min-h-[230px] w-full max-w-[360px] flex-col justify-between rounded-[28px] border-3 px-5 py-5 sm:max-w-none sm:min-h-[300px] sm:rounded-[40px] sm:border-[6px] sm:px-10 sm:py-10 lg:h-[317px] lg:w-[428px]"
            style={{ backgroundColor: bg, borderColor: border, boxShadow: `4px 4px 0px ${shadow}` }}
        >
            <h3
                className="text-[28px] leading-none uppercase sm:text-[40px] [-webkit-text-stroke:2.6px_black] sm:[-webkit-text-stroke:4px_black]"
                style={{ fontFamily: "var(--font-luckiest-guy)", color: titleColor }}
            >
                {title}
            </h3>

            <div className="my-4 h-[2px] w-full bg-black/8" />

            <p
                className="text-[20px] leading-[1.17] tracking-[0.03em] text-black sm:text-[26px] sm:tracking-[0.04em]"
                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
            >
                {description}
            </p>
        </article>
    );
};

const CurriculumValuesSection = () => {
    return (
        <section className="bg-white py-20 sm:py-24 lg:min-h-[1033px] lg:py-[180px]">
            <MaxWidthWrapper className="px-4 sm:px-6">
                <div className="mx-auto grid w-full max-w-[1310px] grid-cols-1 gap-6 lg:grid-cols-[416px_1fr] lg:items-start">
                    <div className="relative">
                        <article
                            className="mx-auto flex min-h-[470px] w-[90%] sm:w-[80%] max-w-[360px] flex-col justify-between rounded-[32px] border-4 border-black bg-[#FFB3FE] px-5 py-7 shadow-[8px_5px_0px_#000] sm:max-w-none sm:min-h-[560px] sm:rounded-[44px] sm:border-8 sm:px-10 sm:py-10 lg:h-[642px] lg:w-[416px] lg:py-[44px]"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="max-w-[154px]">
                                    <p
                                        className="text-[20px] leading-[1.33] uppercase text-black sm:text-[28px]"
                                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    >
                                        Curriculum of Love
                                    </p>
                                </div>

                                <h2
                                    className="text-[42px] leading-[1.03] uppercase text-white [-webkit-text-stroke:3.6px_#35322E] sm:text-[54px] sm:[-webkit-text-stroke:6px_#35322E]"
                                    style={{
                                        fontFamily: "var(--font-luckiest-guy)",
                                        fontWeight: 400,
                                        textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
                                    }}
                                >
                                    Our Magic
                                    <br />
                                    Recipe
                                </h2>
                            </div>

                            <p
                                className="max-w-[336px] text-[20px] leading-[1.17] tracking-[0.03em] text-black sm:text-[26px] sm:tracking-[0.04em]"
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                            >
                                We call it the Curriculum of Love. It&apos;s made of hugs,
                                high-fives, and big dreams!
                            </p>
                        </article>

                        <Image
                            src="/svgs/curriculum-pencil.svg"
                            alt="Decorative pencil"
                            width={209}
                            height={325}
                            className="pointer-events-none absolute -bottom-2 lg:-left-16 sm:left-0 hidden h-auto w-[130px] drop-shadow-[45px_48.6px_27px_rgba(0,0,0,0.04)] sm:block"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {valueCards.map((card) => (
                            <ValueCard
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                bg={card.bg}
                                border={card.border}
                                shadow={card.shadow}
                                titleColor={card.titleColor}
                            />
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default CurriculumValuesSection;
