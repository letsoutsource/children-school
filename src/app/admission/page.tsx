import AdmissionForm from "@/components/shared/admission/AdmissionForm"
import FacilitiesSection from "@/components/shared/curriculum/FacilitiesSection"
import TeachingStrategy from "@/components/shared/curriculum/TeachingStrategy"

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