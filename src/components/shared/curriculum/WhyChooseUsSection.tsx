import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";
import CTAButton from "@/components/shared/homepage/CTAButton";

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Bahrain’s First Montessori School",
      desc: "Nurturing young minds and hearts since our establishment in 1997.",
    },
    {
      title: "Fully MEAB-Accredited Program",
      desc: "Accredited by the Montessori Evaluation and Accreditation Board, ensuring authentic practices.",
    },
    {
      title: "Bilingual English & Arabic Environment",
      desc: "Featuring a dedicated Arabic classroom to support bilingual child development.",
    },
    {
      title: "Three Loving Age Groups",
      desc: "Tailored programs: Montessori One (3-4 yrs), Montessori Two (4-5 yrs), and Montessori Three (5-6 yrs).",
    },
    {
      title: "Safe, Beautiful Campus",
      desc: "Located on Janabiyah Highway with spacious classrooms and outdoor play areas.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9E6] py-20 sm:py-24 lg:py-32">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,165,0,0.06) 0px, rgba(255,165,0,0.06) 80px, transparent 80px, transparent 160px), repeating-linear-gradient(to bottom, rgba(255,165,0,0.06) 0px, rgba(255,165,0,0.06) 80px, transparent 80px, transparent 160px)",
        }}
      />

      <MaxWidthWrapper className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 lg:gap-16">

          {/* Legacy Card */}
          <div className="rounded-[32px] border-4 border-black bg-white p-6 shadow-[8px_8px_0px_#000] sm:rounded-[44px] sm:border-6 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <p
                className="text-lg tracking-[0.06em] text-[#FF2B2B] sm:text-2xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                Our Proud Legacy
              </p>
              <h2
                className="text-[32px] leading-[1.1] uppercase sm:text-[44px] lg:text-[52px] [text-stroke:2px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:2px_black]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  fontWeight: 400,
                  textShadow: "6px 6px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span className="text-[#FFCA2C]">Bahrain&apos;s </span>
                <span className="text-white">First </span>
                <span className="text-[#249AFF]">Montessori </span>
                <span className="text-white">School</span>
              </h2>
            </div>

            <p
              className="mt-6 text-lg leading-relaxed text-black sm:text-xl md:text-2xl"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
            >
              Since 1997, we have been the <span className="text-[#FF2B2B] font-bold">first Montessori kindergarten in Bahrain</span>. This long legacy, combined with our MEAB accreditation, means parents who search for <span className="font-bold whitespace-nowrap">روضة أطفال الجنابية</span> or Montessori curriculum Bahrain know they have found the most experienced and trusted choice for their child.
            </p>
          </div>

          {/* Why Parents Choose Us Card */}
          <div className="rounded-[32px] border-4 border-black bg-[#D1FFF9] p-6 shadow-[8px_8px_0px_#000] sm:rounded-[44px] sm:border-6 sm:p-10 lg:p-12">
            <h3
              className="text-center text-[28px] uppercase leading-none sm:text-[38px] lg:text-[42px] [-webkit-text-stroke:2.6px_black] sm:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                color: "#FFFFFF",
                textShadow: "6px 4px 2px rgba(0, 0, 0, 0.32)",
              }}
            >
              Why Parents Choose Children&apos;s House
            </h3>

            <div className="mt-8 flex flex-col gap-6 sm:gap-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-6">
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#FF2B2B] text-white shadow-[2px_2px_0px_#000] sm:size-10 sm:border-3">
                    <span className="text-lg font-extrabold sm:text-xl">✓</span>
                  </div>
                  <div>
                    <h4
                      className="text-xl font-bold text-black sm:text-2xl"
                      style={{ fontFamily: "var(--font-quicksand)" }}
                    >
                      {point.title}
                    </h4>
                    <p
                      className="mt-1 text-base text-gray-800 sm:text-lg"
                      style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
                    >
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col items-center gap-8 rounded-[32px] border-4 border-black bg-[#FFEFFF] p-8 text-center shadow-[8px_8px_0px_#000] sm:rounded-[44px] sm:border-6 sm:p-12">
            <div className="flex flex-col gap-3">
              <p
                className="text-lg text-[#E245F7] sm:text-xl lg:text-2xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                If you are looking for the best <span className="font-bold whitespace-nowrap text-black">روضة مونتيسوري</span> or a caring <span className="font-bold whitespace-nowrap text-black">روضة أطفال مونتيسوري البحرين</span>, your search ends here.
              </p>
              <h3
                className="mt-4 text-[24px] uppercase leading-tight sm:text-[32px] lg:text-[40px] [-webkit-text-stroke:2px_black]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  color: "#FFFFFF",
                  textShadow: "4px 4px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                Ready to give your child the gift of authentic Montessori learning?
              </h3>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link href="/admission">
                <CTAButton
                  variant="admission"
                  className="px-8 py-4 text-xl sm:text-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  Enquire Now
                </CTAButton>
              </Link>
              <Link href="/admission">
                <CTAButton
                  variant="curriculum"
                  className="px-8 py-4 text-xl sm:text-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  Book a Tour
                </CTAButton>
              </Link>
            </div>
          </div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChooseUsSection;
