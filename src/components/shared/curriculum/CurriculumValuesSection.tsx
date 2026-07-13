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
        title: "1. Practical Life",
        description: "Children develop real-life skills such as pouring, buttoning, cleaning, and caring for the environment. These activities build independence, concentration, and confidence — the foundation every parent wants for their child.",
        bg: "#FFF5DB",
        border: "#FFCB47",
        shadow: "#CB960F",
        titleColor: "#FFCB47",
    },
    {
        title: "2. Sensorial",
        description: "Using specially designed materials, children sharpen their senses of sight, touch, sound, smell, and taste. This area prepares the mind for mathematics and language in the most natural way.",
        bg: "#E7FFDB",
        border: "#85FF47",
        shadow: "#47BC0D",
        titleColor: "#85FF47",
    },
    {
        title: "3. Language",
        description: "From rich vocabulary to writing and reading, we support your child's natural love of language. Our dedicated Arabic classroom helps children grow strong in both English and Arabic, making us the perfect choice for families looking for a bilingual روضة أطفال in Bahrain.",
        bg: "#DBF0FF",
        border: "#47B2FF",
        shadow: "#0F76BF",
        titleColor: "#47B2FF",
    },
    {
        title: "4. Mathematics",
        description: "Concrete materials like number rods and golden beads introduce counting, addition, and subtraction long before abstract numbers. Children learn with joy and deep understanding.",
        bg: "#FFDBDC",
        border: "#FF474A",
        shadow: "#BA0E11",
        titleColor: "#FF474A",
    },
    {
        title: "5. Cultural Studies",
        description: "Children explore the world through geography (including maps of Bahrain and the globe), botany, zoology, simple science, music, and art. We celebrate Bahraini culture while embracing global diversity.",
        bg: "#FFEFFF",
        border: "#E245F7",
        shadow: "#9A14AC",
        titleColor: "#E245F7",
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
            className="mx-auto flex min-h-[230px] w-full max-w-[360px] flex-col justify-between rounded-[28px] border-3 px-5 py-5 sm:max-w-none sm:min-h-[300px] sm:rounded-[40px] sm:border-[6px] sm:px-10 sm:py-10 lg:min-h-[340px] lg:h-full lg:max-w-[428px]"
            style={{ backgroundColor: bg, borderColor: border, boxShadow: `4px 4px 0px ${shadow}` }}
        >
            <h3
                className="text-[28px] leading-none uppercase sm:text-[38px] [-webkit-text-stroke:2.6px_black] sm:[-webkit-text-stroke:4px_black]"
                style={{ fontFamily: "var(--font-luckiest-guy)", color: titleColor }}
            >
                {title}
            </h3>

            <div className="my-4 h-[2px] w-full bg-black/8" />

            <p
                className="text-[18px] leading-[1.25] tracking-[0.03em] text-black sm:text-[22px] sm:tracking-[0.04em]"
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
                    <div className="relative lg:sticky lg:top-32">
                        <article
                            className="mx-auto flex min-h-[470px] w-[90%] sm:w-[80%] max-w-[360px] flex-col justify-between rounded-[32px] border-4 border-black bg-[#FFB3FE] px-5 py-7 shadow-[8px_5px_0px_#000] sm:max-w-none sm:min-h-[560px] sm:rounded-[44px] sm:border-8 sm:px-10 sm:py-10 lg:h-[642px] lg:w-[416px] lg:py-[44px]"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="max-w-[200px] sm:max-w-none">
                                    <p
                                        className="text-[20px] leading-[1.33] uppercase text-black sm:text-[28px]"
                                        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}
                                    >
                                        Curriculum Areas
                                    </p>
                                </div>

                                <h2
                                    className="text-[38px] leading-[1.03] uppercase text-white [-webkit-text-stroke:3.6px_#35322E] sm:text-[48px] sm:[-webkit-text-stroke:6px_#35322E] lg:text-[54px]"
                                    style={{
                                        fontFamily: "var(--font-luckiest-guy)",
                                        fontWeight: 400,
                                        textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
                                    }}
                                >
                                    Our
                                    <br />
                                    Montessori
                                    <br />
                                    Approach
                                </h2>
                            </div>

                            <p
                                className="max-w-[336px] text-[20px] leading-[1.25] tracking-[0.03em] text-black sm:text-[24px] sm:tracking-[0.04em]"
                                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                            >
                                The Montessori approach is divided into five beautiful areas. Each area uses special materials that allow your child to learn at their own perfect pace.
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
                        {valueCards.map((card, index) => {
                            const cardSpanClass = index === 4 ? "md:col-span-2 md:max-w-[360px] sm:max-w-none md:w-1/2 md:mx-auto lg:w-full lg:max-w-none lg:col-span-1" : "w-full";
                            return (
                                <div key={card.title} className={`${cardSpanClass}`}>
                                    <ValueCard
                                        title={card.title}
                                        description={card.description}
                                        bg={card.bg}
                                        border={card.border}
                                        shadow={card.shadow}
                                        titleColor={card.titleColor}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default CurriculumValuesSection;

