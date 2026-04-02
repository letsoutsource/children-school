import CurriculumHeroBackground from "./CurriculumHeroBackground";
import CurriculumHeroContent from "./CurriculumHeroContent";

const CurriculumHeroSection = () => {
  return (
    <section className="relative min-h-[980px] overflow-hidden bg-[#BCFFB3] lg:min-h-[1113px]">
      <CurriculumHeroBackground />
      <CurriculumHeroContent />

      <div className="pointer-events-none absolute bottom-28 left-8 z-10 hidden select-none sm:block lg:bottom-36 lg:left-16">
        <div style={{ fontFamily: "var(--font-sniglet)" }} className="relative h-36 w-40">
          <span className="absolute left-8 top-0 -rotate-[35deg] text-7xl font-extrabold text-[#2CD5FF] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)]">
            D
          </span>
          <span className="absolute left-0 top-16 -rotate-[11deg] text-7xl font-extrabold text-[#53FF2C] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)]">
            E
          </span>
          <span className="absolute left-20 top-16 text-7xl font-extrabold text-[#EDFF2C] [-webkit-text-stroke:4px_black] drop-shadow-[4px_6px_6px_rgba(0,0,0,0.32)]">
            M
          </span>
        </div>
      </div>
    </section>
  );
};

export default CurriculumHeroSection;
