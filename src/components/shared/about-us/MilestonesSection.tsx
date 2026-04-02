import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

type MilestoneCard = {
  title: string;
  image: string;
  desktopPosition: string;
  titleContent: JSX.Element;
};

const milestoneCards: MilestoneCard[] = [
  {
    title: "First Discoveries",
    image: "/images/milestone-1.png",
    desktopPosition: "lg:left-[70px] lg:top-[304px]",
    titleContent: (
      <>
        <span className="text-white">First</span>
        <br />
        <span className="text-[#48FC1F]">Discoveries</span>
      </>
    ),
  },
  {
    title: "Growing Communication",
    image: "/images/milestone-2.png",
    desktopPosition: "lg:left-[620px] lg:top-[264px]",
    titleContent: (
      <>
        <span className="text-white">Growing</span>
        <br />
        <span className="text-[#FFCA2C]">Communication</span>
      </>
    ),
  },
  {
    title: "Our Best Outcome",
    image: "/images/milestone-3.png",
    desktopPosition: "lg:left-[280px] lg:top-[680px]",
    titleContent: (
      <>
        <span className="text-white">Our Best</span>
        <br />
        <span className="text-[#FFCA2C]">Outcome</span>
      </>
    ),
  },
  {
    title: "Creative Expression",
    image: "/images/milestone-4.png",
    desktopPosition: "lg:right-[10px] lg:top-[635px]",
    titleContent: (
      <>
        <span className="text-[#ED2BFF]">Creative</span>
        <br />
        <span className="text-white">Expression</span>
      </>
    ),
  },
];

const MilestonesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#DBF9FF] py-20 sm:py-24 lg:min-h-[1649px] lg:py-36">
      <MaxWidthWrapper className="relative px-4 sm:px-6">
        <div className="relative z-10 mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <p
              className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Milestones
            </p>

            <h2
              className="w-full text-[40px] leading-[1.05] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
              }}
            >
              <span className="text-white">Every </span>
              <span className="text-[#FFCA2C]">Little</span>
              <br />
              <span className="text-[#FF2D2D]">Step </span>
              <span className="text-[#2CFF41]">Matters</span>
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

        <div className="relative mx-auto mt-16 w-full max-w-[1220px] lg:min-h-[1080px]">
          <Image
            src="/svgs/teaching-strategy-line.svg"
            alt="Decorative milestones tracking line"
            width={1161}
            height={598}
            className="pointer-events-none absolute left-1/2 top-[360px] hidden h-auto w-[92%] -translate-x-1/2 lg:block"
          />

          {/* <span className="pointer-events-none absolute left-6 top-[524px] hidden h-0 w-0 border-y-[9px] border-r-14 border-y-transparent border-r-black lg:block" />
          <span className="pointer-events-none absolute left-6 top-[886px] hidden h-0 w-0 border-y-[9px] border-r-14 border-y-transparent border-r-black lg:block" /> */}

          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-10 lg:block">
            {milestoneCards.map((card) => (
              <article
                key={card.title}
                className={`mx-auto flex w-full max-w-[328px] flex-col items-center gap-3 text-center lg:absolute ${card.desktopPosition}`}
              >
                <h3
                  className="text-[30px] leading-tight uppercase [-webkit-text-stroke:3px_black]"
                  style={{
                    fontFamily: "var(--font-luckiest-guy)",
                    fontWeight: 400,
                    textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
                  }}
                >
                  {card.titleContent}
                </h3>

                <div className="relative h-[190px] w-[190px] overflow-hidden rounded-full border-[6px] border-black shadow-[8px_4px_0px_#000] sm:h-[200px] sm:w-[200px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:640px) 200px, 190px"
                  />
                </div>

                <p
                  className="max-w-[328px] text-[18px] leading-[1.28] text-black sm:text-[20px] sm:leading-[25px]"
                  style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                >
                  A peek into our colorful days filled with smiles, play, and little
                  achievements.
                </p>
              </article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MilestonesSection;
