import { Metadata } from "next";
import ContactPageParallaxSection from '@/components/shared/contact-us/ContactPageParallaxSection'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us | Children's House Montessori Kindergarten",
  description: "Get in touch with us. Find our contact details, phone numbers, email, address, and location in Bahrain.",
  alternates: {
    canonical: "/contact-us",
  },
};

const page = () => {
  return (
    <div>
        <ContactPageParallaxSection />
    </div>
  )
}

export default page