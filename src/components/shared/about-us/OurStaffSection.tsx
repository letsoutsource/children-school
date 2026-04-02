import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

type StaffCard = {
  name: string;
  image: string;
  nameColor: string;
  borderColor: string;
  shadowColor: string;
  frameClassName: string;
};

const staffCards: StaffCard[] = [
  {
    name: "Chris Evan",
    image: "/images/staff-1.jpg",
    nameColor: "#19ADE8",
    borderColor: "#19ADE8",
    shadowColor: "#0C86B6",
    frameClassName:
      "rounded-[46%_54%_44%_56%_/_58%_52%_48%_42%] rotate-[-6deg]",
  },
  {
    name: "Tom Hesworth",
    image: "/images/staff-2.jpg",
    nameColor: "#E8D319",
    borderColor: "#E8D319",
    shadowColor: "#B6AB0C",
    frameClassName:
      "rounded-[54%_46%_50%_50%_/_56%_44%_60%_40%] rotate-[4deg]",
  },
  {
    name: "Fatima Ali",
    image: "/images/staff-3.jpg",
    nameColor: "#E81919",
    borderColor: "#E81919",
    shadowColor: "#B60C0C",
    frameClassName:
      "rounded-[49%_51%_52%_48%_/_54%_46%_58%_42%] rotate-[-2deg]",
  },
];

const OurStaffSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:min-h-[1120px] lg:py-36">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(174,247,173,0.35) 0px, rgba(174,247,173,0.35) 100px, transparent 100px, transparent 200px), repeating-linear-gradient(to bottom, rgba(174,247,173,0.3) 0px, rgba(174,247,173,0.3) 100px, transparent 100px, transparent 200px)",
          opacity: 0.28,
        }}
      />

      <MaxWidthWrapper className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <p
              className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Our Staff
            </p>

            <h2
              className="w-full text-[42px] leading-[1.05] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
              }}
            >
              <span className="text-[#48FC1F]">Caring </span>
              <span className="text-[#FFCA2C]">Hands,</span>
              <br />
              <span className="text-[#2CFAFF]">Inspiring </span>
              <span className="text-[#F41FFF]">Hearts</span>
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

        <div className="mx-auto mt-14 grid w-full max-w-[1184px] grid-cols-1 gap-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {staffCards.map((staff) => (
            <article
              key={staff.name}
              className="mx-auto flex w-full max-w-[328px] flex-col items-center gap-8 text-center"
            >
              <div className={`relative h-[256px] w-[286px] ${staff.frameClassName}`}>
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{
                    border: `5px solid ${staff.borderColor}`,
                    borderRadius: "inherit",
                    boxShadow: `8.8px 6.6px 0px ${staff.shadowColor}`,
                  }}
                >
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 286px, 286px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-2">
                <h3
                  className="w-full text-[30px] leading-[40px] uppercase [-webkit-text-stroke:2px_black]"
                  style={{
                    fontFamily: "var(--font-luckiest-guy)",
                    fontWeight: 400,
                    color: staff.nameColor,
                    textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
                  }}
                >
                  {staff.name}
                </h3>

                <p
                  className="max-w-[328px] text-[18px] leading-[1.28] text-black sm:text-[20px] sm:leading-[25px]"
                  style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                >
                  A peek into our colorful days filled with smiles, play, and little
                  achievements.
                </p>
              </div>
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurStaffSection;
