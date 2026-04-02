import Image from "next/image";

const OurMission = () => {
  return (
    <section className="relative mx-auto mt-[160px] w-full px-6 sm:mt-[180px] lg:mt-[200px]">
      <div className="mx-auto flex min-h-[326px] w-full max-w-[992px] flex-col items-center gap-10 text-center">
        <div className="flex w-full flex-col items-center gap-6">
          <p
            className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
          >
            Our Mission &amp; Vision
          </p>

          <h2
            className="w-full text-[32px] leading-[1.08] uppercase sm:text-[48px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1px_black] lg:[-webkit-text-stroke:3px_black]"
            style={{
              fontFamily: "var(--font-luckiest-guy)",
              fontWeight: 400,
              textShadow: "6px 6px 2px rgba(0, 0, 0, 0.32)",
            }}
          >
            <span className="block">
              <span className="text-[#39FF1F]">Inspiring </span>
              <span className="text-[#FFD236]">Little </span>
              <span className="text-[#FFFFFF]">Minds For</span>
            </span>
            <span className="block">
              <span className="text-[#FFFFFF]">A </span>
              <span className="text-[#1A89FF]">Bright </span>
              <span className="text-[#F828D3]">Tomorrow</span>
            </span>
          </h2>
        </div>

        <p
          className="w-full max-w-[616px] leading-[30px] text-black sm:text-2xl"
          style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
        >
          A peek into our colorful days filled with smiles, play, and little
          achievements.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1312px] flex-col gap-14 sm:mt-16 sm:gap-[72px]">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[100px]">
          <div className="w-full max-w-[594px]">
            <Image
              src="/svgs/our-mission-img1.svg"
              alt="Children learning together"
              width={620}
              height={600}
              className="h-auto w-full"
            />
          </div>

          <div className="flex w-full max-w-[500px] flex-col items-center gap-5 text-center">
            <p
              className="w-full text-[18px] leading-[1.75] tracking-[0.06em] uppercase text-black sm:text-[20px]"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Our Mission
            </p>

            <h3
              className="w-full text-[44px] leading-none uppercase sm:text-[58px] lg:text-[78px] [text-stroke:3px_black] [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="block">
                <span className="text-[#FFE11F]">Learning</span>
              </span>
              <span className="block text-white">Begins With</span>
              <span className="block text-[#F828D3]">Imagination</span>
            </h3>

            <p
              className="max-w-[460px] px-4 text-[18px] leading-[1.08] tracking-[0.04em] text-black sm:text-[22px] lg:text-[24px]"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
            >
              We inspire curious minds to explore, create, and grow through
              joyful learning experiences that turn every day into a new
              adventure.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[100px]">
          <div className="order-2 flex w-full max-w-[500px] flex-col items-center gap-5 text-center lg:order-1">
            <p
              className="w-full text-[18px] leading-[1.75] tracking-[0.06em] uppercase text-black sm:text-[20px]"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Our Vision
            </p>

            <h3
              className="w-full text-[44px] leading-none uppercase sm:text-[58px] lg:text-[78px] [text-stroke:3px_black] [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="block">
                <span className="text-white">A </span>
                <span className="text-[#39FF1F]">Brighter</span>
              </span>
              <span className="block text-[#FF2B2B]">Future</span>
              <span className="block text-white">Starts Here</span>
            </h3>

            <p
              className="max-w-[460px] px-4 text-[18px] leading-[1.08] tracking-[0.04em] text-black sm:text-[22px] lg:text-[24px]"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
            >
              We inspire curious minds to explore, create, and grow through
              joyful learning experiences that turn every day into a new
              adventure.
            </p>
          </div>

          <div className="order-1 w-full max-w-[594px] lg:order-2">
            <Image
              src="/svgs/our-mission-img2.svg"
              alt="Classroom vision scene"
              width={620}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;