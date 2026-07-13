const CurriculumHeroContent = () => {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 px-6 pt-48 text-center md:pt-56">
      <div className="flex w-full flex-col items-center gap-6">
        <p
          className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
          style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
        >
          Montessori Curriculum Bahrain
        </p>

        <h1
          className="w-full text-[36px] leading-[1.15] uppercase sm:text-[50px] lg:text-[64px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
          style={{
            fontFamily: "var(--font-luckiest-guy)",
            fontWeight: 400,
            textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
          }}
        >
          <span className="text-white">The First </span>
          <br className="xs:hidden" />
          <span
            className="text-[#249AFF] normal-case"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Children&apos;s
          </span>{" "}
          <span className="text-white">House</span>
          <br />
          <span className="text-white">Since </span>
          <span className="text-[#F41FFF]">1997</span>
        </h1>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[850px] text-lg sm:text-xl md:text-2xl leading-[1.6] text-black">
        <p style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}>
          At <span className="font-bold text-[#FF2B2B]">Children&apos;s House Montessori Kindergarten</span>, we proudly offer an authentic Montessori curriculum that has been nurturing young hearts and minds in Bahrain since 1997. As the <span className="font-extrabold text-[#249AFF]">first Montessori kindergarten in Bahrain</span> and MEAB-accredited, we bring the true Montessori philosophy to families searching for <span className="font-bold whitespace-nowrap">روضة أطفال مونتيسوري البحرين</span> or <span className="font-bold whitespace-nowrap">روضة مونتيسوري</span>.
        </p>
        <p style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }} className="text-[#FF2B2B] leading-[1.8] mt-2 text-2xl sm:text-3xl">
          We call it the <span className="font-bold text-3xl sm:text-4xl text-[#FFCA2C] [-webkit-text-stroke:0.1px_black]" style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.4)" }}>Curriculum of Love</span> &mdash; where every child learns through joyful play, gentle guidance, and hands-on discovery in our prepared Children&apos;s House environment on Janabiyah Highway.
        </p>
      </div>
    </div>
  );
};

export default CurriculumHeroContent;

