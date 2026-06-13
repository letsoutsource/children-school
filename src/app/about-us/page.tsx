import React from 'react'
import AboutUsHeroSection from '@/components/shared/about-us/AboutUsHeroSection'
import OurMission from '@/components/shared/homepage/OurMission'
import DirectorMessageSection from '@/components/shared/about-us/DirectorMessageSection'
import PrincipalMessageSection from '@/components/shared/about-us/PrincipalMessageSection'
import MilestonesSection from '@/components/shared/about-us/MilestonesSection'
import OurStaffSection from '@/components/shared/about-us/OurStaffSection'

const page = () => {
  return (
    <>
    <AboutUsHeroSection />
    <OurMission/> 
    <DirectorMessageSection />
    <PrincipalMessageSection />
    <MilestonesSection />
    <OurStaffSection />
    </>
  )
}

export default page