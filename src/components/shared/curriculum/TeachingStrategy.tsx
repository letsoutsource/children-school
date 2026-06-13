import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

type StrategyCard = {
  title: string;
  description: string;
  image: string;
  desktopPosition: string;
  frameClassName: string;
  borderColor: string;
  shadowColor: string;
  borderWidth: number;
};

const strategyCards: StrategyCard[] = [
  {
    title: "Play-Based Learning",
    description: "Learning through games and creative play helps kids grasp complex ideas naturally.",
    image: "/images/teaching-strategy-1.png",
    desktopPosition: "lg:left-[80px] lg:top-[260px]",
    frameClassName:
      "h-[214px] w-[220px] sm:h-[233px] sm:w-[240px] rounded-[48%_52%_45%_55%/_50%_40%_60%_50%]",
    borderColor: "#FF2DE7",
    shadowColor: "#A80CB6",
    borderWidth: 6,
  },
  {
    title: "Hands-On Exploration",
    description: "Learning through games and creative play helps kids grasp complex ideas naturally.",
    image: "/images/teaching-strategy-2.png",
    desktopPosition: "lg:left-[520px] lg:top-[235px]",
    frameClassName:
      "h-[216px] w-[208px] sm:h-[234px] sm:w-[224px] rounded-[45%_55%_50%_50%/_56%_44%_56%_44%]",
    borderColor: "#E81919",
    shadowColor: "#B60C0C",
    borderWidth: 7.04,
  },
  {
    title: "Storytelling & Visuals",
    description: "Learning through games and creative play helps kids grasp complex ideas naturally.",
    image: "/images/teaching-strategy-3.png",
    desktopPosition: "lg:right-[20px] lg:top-[560px]",
    frameClassName:
      "h-[214px] w-[220px] sm:h-[233px] sm:w-[240px] rounded-[50%_50%_42%_58%/_52%_48%_58%_42%]",
    borderColor: "#E2DE18",
    shadowColor: "#B6B40C",
    borderWidth: 6,
  },
  {
    title: "Group & Individual",
    description: "Learning through games and creative play helps kids grasp complex ideas naturally.",
    image: "/images/teaching-strategy-4.png",
    desktopPosition: "lg:left-[400px] lg:top-[730px]",
    frameClassName:
      "h-[214px] w-[220px] sm:h-[233px] sm:w-[240px] rounded-[46%_54%_48%_52%/_58%_42%_56%_44%]",
    borderColor: "#FF2DE7",
    shadowColor: "#A80CB6",
    borderWidth: 6,
  },
];

const TeachingStrategy = () => {
  return (
    <section
      id="teaching-strategy"
      className="relative overflow-hidden py-20 sm:py-24 lg:min-h-[1649px] lg:py-40"
      style={{ background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #F7D1FF" }}
    >
      <MaxWidthWrapper className="relative px-4 sm:px-6">
        <div className="relative z-10 mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <p
              className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Teaching Strategy
            </p>

            <h2
              className="w-full text-[40px] leading-[1.1] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
              }}
            >
              <span className="text-[#48FC1F]">Learning </span>
              <span className="text-white">Through</span>
              <br />
              <span className="text-[#FFCA2C]">Play </span>
              <span className="text-white">and </span>
              <span className="text-[#1B8DFF]">Care</span>
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

        <div className="relative mx-auto mt-16 w-full max-w-[1220px] lg:min-h-[980px]">
          <Image
            src="/svgs/teaching-strategy-line.svg"
            alt="Decorative strategy tracking line"
            width={1161}
            height={598}
            className="pointer-events-none absolute left-1/2 top-[340px] hidden h-auto w-[92%] -translate-x-1/2 lg:block"
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:block">
            {strategyCards.map((card) => (
              <article
                key={card.title}
                className={`mx-auto flex w-full max-w-[328px] flex-col items-center gap-4 text-center lg:absolute ${card.desktopPosition}`}
              >
                <h3
                  className="text-[30px] leading-tight uppercase text-white sm:text-[32px] [-webkit-text-stroke:3px_black]"
                  style={{
                    fontFamily: "var(--font-luckiest-guy)",
                    textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
                  }}
                >
                  {card.title}
                </h3>

                <div
                  className={`relative overflow-hidden ${card.frameClassName}`}
                  style={{
                    border: `${card.borderWidth}px solid ${card.borderColor}`,
                    boxShadow: `7.04px 5.28px 0px ${card.shadowColor}`,
                  }}
                >
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>

                <p
                  className="text-[18px] leading-[1.3] text-black sm:text-[20px] sm:leading-[26px]"
                  style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TeachingStrategy;