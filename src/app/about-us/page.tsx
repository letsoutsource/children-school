import { Metadata } from "next";
import React from 'react'
import AboutUsHeroSection from '@/components/shared/about-us/AboutUsHeroSection'
import OurMission from '@/components/shared/homepage/OurMission'
import DirectorMessageSection from '@/components/shared/about-us/DirectorMessageSection'
import PrincipalMessageSection from '@/components/shared/about-us/PrincipalMessageSection'
import MilestonesSection from '@/components/shared/about-us/MilestonesSection'
import OurStaffSection from '@/components/shared/about-us/OurStaffSection'

export const metadata: Metadata = {
  title: "About Us | Children's House Montessori Kindergarten",
  description: "Meet our team, explore our milestones, and read messages from our Director and Principal at Children's House.",
};

const page = () => {
  return (
    <>
      <AboutUsHeroSection />
      <OurMission />
      <DirectorMessageSection />
      <PrincipalMessageSection />
      {/* <MilestonesSection /> */}
      {/* <OurStaffSection /> */}
    </>
  )
}

export default page