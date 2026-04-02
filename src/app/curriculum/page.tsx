import CurriculumHeroSection from "@/components/shared/curriculum/CurriculumHeroSection";
import CurriculumValuesSection from "@/components/shared/curriculum/CurriculumValuesSection";
import FacilitiesSection from "@/components/shared/curriculum/FacilitiesSection";
import TeachingStrategy from "@/components/shared/curriculum/TeachingStrategy";
import EventsSection from "@/components/shared/curriculum/EventsSection";

const CurriculumPage = () => {
  return (
    <>
      <CurriculumHeroSection />
      <CurriculumValuesSection />
      <FacilitiesSection />
      <TeachingStrategy />
      <EventsSection />
    </>
  );
};

export default CurriculumPage;