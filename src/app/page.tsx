import { Metadata } from "next";
import HeroSection from "@/components/shared/homepage/HeroSection";
import WelcomeSection from "@/components/shared/homepage/WelcomeSection";
import WelcomeSection2 from "@/components/shared/homepage/WelcomeSection2";
import WelcomeSection3 from "@/components/shared/homepage/WelcomeSection3";
import OurMission from "@/components/shared/homepage/OurMission";
import GallarySection from "@/components/shared/homepage/GallarySection";
import BranchesSection from "@/components/shared/homepage/BranchesSection";
import ContactSection from "@/components/shared/homepage/ContactSection";
import EmpowerSection from "@/components/shared/homepage/EmpowerSection";
import FooterSection from "@/components/shared/homepage/FooterSection";
import HeroCallToAction from "@/components/shared/homepage/HeroCallToAction";

export const metadata: Metadata = {
  title: "Home | Children's House Montessori Kindergarten",
  description: "Welcome to Children's House Montessori Kindergarten in Bahrain. Learn about our admissions, Montessori curriculum, and events.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <WelcomeSection /> */}
      {/* <WelcomeSection2/> */}
      <HeroCallToAction />

      <WelcomeSection3 />
      <OurMission />
      <GallarySection />
      {/* <BranchesSection/> */}
      <ContactSection />

    </>
  );
}
