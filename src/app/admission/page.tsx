import { Metadata } from "next";
import AdmissionForm from "@/components/shared/admission/AdmissionForm"
import FacilitiesSection from "@/components/shared/curriculum/FacilitiesSection"
import TeachingStrategy from "@/components/shared/curriculum/TeachingStrategy"

export const metadata: Metadata = {
  title: "Admission | Children's House Montessori Kindergarten",
  description: "Apply for admission at Children's House. Read instructions, check required documents, and submit your inquiry form.",
};

const page = () => {
  return (
    <div>
      <AdmissionForm />
      <FacilitiesSection />
      <TeachingStrategy />

    </div>
  )
}

export default page