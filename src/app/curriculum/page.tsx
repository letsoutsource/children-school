import { Metadata } from "next";
import CurriculumHeroSection from "@/components/shared/curriculum/CurriculumHeroSection";
import CurriculumValuesSection from "@/components/shared/curriculum/CurriculumValuesSection";
import FacilitiesSection from "@/components/shared/curriculum/FacilitiesSection";
import TeachingStrategy from "@/components/shared/curriculum/TeachingStrategy";
import EventsSection from "@/components/shared/curriculum/EventsSection";
import WhyChooseUsSection from "@/components/shared/curriculum/WhyChooseUsSection";

export const metadata: Metadata = {
  title: "Curriculum | Children's House Montessori Kindergarten",
  description: "Discover our Montessori curriculum, learning values, facilities, and teaching strategies at Children's House.",
  alternates: {
    canonical: "/curriculum",
  },
};

const CurriculumPage = () => {
  return (
    <>
      <CurriculumHeroSection />
      <CurriculumValuesSection />
      <FacilitiesSection />
      <TeachingStrategy />
      <EventsSection />
      <WhyChooseUsSection />
    </>
  );
};

export default CurriculumPage;