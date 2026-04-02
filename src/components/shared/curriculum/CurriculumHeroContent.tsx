const CurriculumHeroContent = () => {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[992px] flex-col items-center gap-10 px-6 pt-48 text-center md:pt-56">
      <div className="flex w-full flex-col items-center gap-6">
        <p
          className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
          style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
        >
          Curriculum
        </p>

        <h1
          className="w-full text-[42px] leading-[1.15] uppercase sm:text-[56px] lg:text-[72px] lg:leading-[90px] [text-stroke:3px_black] [-webkit-text-stroke:1.8px_black] lg:[-webkit-text-stroke:3px_black]"
          style={{
            fontFamily: "var(--font-luckiest-guy)",
            fontWeight: 400,
            textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
          }}
        >
          <span className="text-white">A </span>
          <span
            className="text-[#249AFF] normal-case"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Joyful
          </span>
          <span className="text-white"> Way to </span>
          <span
            className="text-[#F41FFF] normal-case"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Learn
          </span>
          <span className="text-white">,</span>
          <br />
          <span
            className="text-[#FF2D2D] normal-case"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Play
          </span>
          <span className="text-white">, and </span>
          <span
            className="text-[#FFCA2C] normal-case"
            style={{ fontFamily: "var(--font-pacifico)" }}
          >
            Grow
          </span>
        </h1>
      </div>

      <p
        className="w-full max-w-[616px] text-xl leading-[30px] text-black sm:text-2xl"
        style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
      >
        A peek into our colorful days filled with smiles, play, and little
        achievements.
      </p>
    </div>
  );
};

export default CurriculumHeroContent;
