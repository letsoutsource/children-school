import React from 'react'
import AboutUsHeroSection from '@/components/shared/about-us/AboutUsHeroSection'
import OurMission from '@/components/shared/homepage/OurMission'
import MilestonesSection from '@/components/shared/about-us/MilestonesSection'
import OurStaffSection from '@/components/shared/about-us/OurStaffSection'

const page = () => {
  return (
    <>
    <AboutUsHeroSection />
    <OurMission/> 
    <MilestonesSection />
    <OurStaffSection />
    </>
  )
}

export default page