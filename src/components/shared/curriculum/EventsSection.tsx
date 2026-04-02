import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import PatternBackground2 from "@/components/shared/backgrounds/PatternBackground2";

type EventCard = {
  title: string;
  image: string;
  borderColor: string;
  shadowColor: string;
  pinColor: string;
  rotationClass: string;
  desktopPosition: string;
};

const eventCards: EventCard[] = [
  {
    title: "Annual Day",
    image: "/images/events-1.png",
    borderColor: "#FF2DDC",
    shadowColor: "#A80CB6",
    pinColor: "#FF2DDC",
    rotationClass: "-rotate-2",
    desktopPosition: "lg:left-[40px] lg:top-[180px]",
  },
  {
    title: "Art & Craft Day",
    image: "/images/events-2.png",
    borderColor: "#2DFF73",
    shadowColor: "#1FA94F",
    pinColor: "#2DFF73",
    rotationClass: "rotate-3",
    desktopPosition: "lg:left-[410px] lg:top-[150px]",
  },
  {
    title: "Cultural Fest",
    image: "/images/events-3.png",
    borderColor: "#FFB52D",
    shadowColor: "#BA7F0D",
    pinColor: "#FFB52D",
    rotationClass: "-rotate-2",
    desktopPosition: "lg:right-[30px] lg:top-[185px]",
  },
  {
    title: "Sports Day",
    image: "/images/events-4.png",
    borderColor: "#A02DFF",
    shadowColor: "#7817C1",
    pinColor: "#A02DFF",
    rotationClass: "rotate-3",
    desktopPosition: "lg:left-[250px] lg:top-[740px]",
  },
  {
    title: "Theme Days",
    image: "/images/events-5.png",
    borderColor: "#2DFFED",
    shadowColor: "#0EACA2",
    pinColor: "#2DFFED",
    rotationClass: "-rotate-2",
    desktopPosition: "lg:right-[210px] lg:top-[740px]",
  },
];

const EventCardItem = ({ card }: { card: EventCard }) => {
  return (
    <article
      className={`mx-auto flex w-full max-w-[328px] flex-col items-center gap-8 text-center lg:absolute ${card.desktopPosition}`}
    >
      <div className={`relative ${card.rotationClass}`}>
        <div className="absolute -top-9 left-1/2 z-20 -translate-x-1/2">
          <div
            className="size-5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]"
            style={{ backgroundColor: card.pinColor }}
          />
          <div className="mx-auto h-8 w-2 bg-black shadow-[2px_4px_4px_rgba(0,0,0,0.4)]" />
          <div
            className="size-5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]"
            style={{ backgroundColor: card.pinColor }}
          />
        </div>

        <div
          className="relative h-[230px] w-[230px] overflow-hidden rounded-[26px] border-[7px] sm:h-[298px] sm:w-[300px]"
          style={{
            borderColor: card.borderColor,
            boxShadow:
              `60px 90px 30px rgba(0,0,0,0.01), 39px 58px 28px rgba(0,0,0,0.06), 22px 32px 23px rgba(0,0,0,0.21), 10px 14px 17px rgba(0,0,0,0.36), 2px 4px 10px rgba(0,0,0,0.41), 7.04px 5.28px 0px ${card.shadowColor}`,
          }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(min-width:640px) 300px, 230px"
          />
        </div>
      </div>

      <div className="w-full">
        <h3
          className="text-[30px] leading-tight uppercase text-white sm:text-[32px] [-webkit-text-stroke:3px_black]"
          style={{
            fontFamily: "var(--font-luckiest-guy)",
            fontWeight: 400,
            textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
          }}
        >
          {card.title}
        </h3>
        <p
          className="mt-2 text-[18px] leading-[1.3] text-black sm:text-[20px] sm:leading-[26px]"
          style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
        >
          Learning through games and creative play helps kids grasp complex ideas
          naturally.
        </p>
      </div>
    </article>
  );
};

const EventsSection = () => {
  return (
    <section className="relative overflow-x-clip bg-[#D1FFF9]">
      <div className="sticky top-0 z-0 h-[860px] sm:h-[920px] lg:h-[1300px]">
        <PatternBackground2
          backgroundColor="#D1FFF9"
          boxColor="#BEF7FA"
          className="h-[860px] sm:h-[920px] lg:h-[1300px]"
        />
      </div>

      <div className="relative z-10 -mt-[860px] sm:-mt-[920px] lg:-mt-[1300px] pb-24 lg:pb-40">
        <MaxWidthWrapper className="px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 pt-24 text-center sm:pt-28 lg:pt-[150px]">
            <div className="flex w-full flex-col items-center gap-6">
              <p
                className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                Events
              </p>

              <h2
                className="w-full text-[40px] leading-[1.1] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  fontWeight: 400,
                  textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
                }}
              >
                <span className="text-[#48FC1F]">Celebrating </span>
                <span className="text-white">Learning</span>
                <br />
                <span className="text-white">Beyond the </span>
                <span className="text-[#D71CFF]">Classroom</span>
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

          <div className="relative mx-auto mt-16 w-full max-w-[1200px] lg:min-h-[1110px]">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-10 lg:block">
              {eventCards.map((card) => (
                <EventCardItem key={card.title} card={card} />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default EventsSection;
