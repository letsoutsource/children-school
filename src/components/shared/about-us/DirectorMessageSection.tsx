import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

const DirectorMessageSection = () => {
  return (
    <section id="director-message" className="relative overflow-hidden bg-[#FFEFFF] py-20 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(226,69,247,0.05) 0px, rgba(226,69,247,0.05) 80px, transparent 80px, transparent 160px), repeating-linear-gradient(to bottom, rgba(226,69,247,0.05) 0px, rgba(226,69,247,0.05) 80px, transparent 80px, transparent 160px)",
        }}
      />

      <MaxWidthWrapper className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Image Side */}
          <div className="w-full max-w-[400px] lg:sticky lg:top-32 lg:w-1/3">
            <div className="relative mx-auto flex flex-col items-center gap-6">
              <div className="relative h-[360px] w-full max-w-[320px] rounded-[54%_46%_50%_50%_/_56%_44%_60%_40%] rotate-[2deg]">
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{
                    border: "6px solid #E245F7",
                    borderRadius: "inherit",
                    boxShadow: "10px 10px 0px #9A14AC",
                  }}
                >
                  <Image
                    src="/images/director.jpg" // Director image
                    alt="Dr. Jamal Umar, Director"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 320px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/30" />
                </div>
              </div>
              <div className="text-center">
                <h3
                  className="text-[28px] uppercase leading-tight [-webkit-text-stroke:1.5px_black]"
                  style={{
                    fontFamily: "var(--font-luckiest-guy)",
                    color: "#E245F7",
                    textShadow: "4px 4px 2px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Dr. Jamal Umar
                </h3>
                <p
                  className="mt-1 text-xl font-bold text-black"
                  style={{ fontFamily: "var(--font-quicksand)" }}
                >
                  Director
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex w-full flex-col gap-8 lg:w-2/3">
            <div className="flex flex-col gap-4">
              <p
                className="text-xl tracking-[0.06em] text-[#E245F7] sm:text-2xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                A Message from our Director
              </p>
              <h2
                className="text-[36px] leading-[1.1] uppercase sm:text-[48px] lg:text-[56px] [text-stroke:2px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:2px_black]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  fontWeight: 400,
                  textShadow: "6px 6px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span className="text-[#39FF1F]">Welcome </span>
                <span className="text-white">To The </span>
                <span className="text-[#FFD236]">Children&apos;s </span>
                <span className="text-[#F828D3]">House</span>
              </h2>
            </div>

            <div
              className="flex flex-col gap-6 text-lg leading-relaxed text-black sm:text-xl"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
            >
              <p>Dear Parents and Guardians,</p>
              <p>
                Assalamu Alaikum and a very warm welcome to The Children&apos;s House Montessori
                Kindergarten.
              </p>
              <p>
                My name is Dr. Jamal Umar, and it is my honor to serve as the Director of this
                remarkable school. I write to you not just as an educator—with fifteen years of teaching
                physics to A-Level, IGCSE, and IB students—but as someone who has spent his career
                asking a simple question: What truly prepares a child for a lifetime of learning?
              </p>
              <p>
                After years in secondary and upper school classrooms, I arrived at an answer that
                changed everything for me: It begins here. In these early years.
              </p>

              <h3
                className="mt-6 text-2xl text-[#1A89FF] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                Honoring Our History
              </h3>
              <p>
                When I first walked through the doors of The Children&apos;s House, I knew I had found
                something special. Established in 1997, this school carries a profound legacy. It was
                the first Montessori nursery school in Bahrain, and it remains proudly accredited by
                the Montessori Evaluation and Accreditation Board (MEAB) —a mark of authentic
                Montessori practice that is not easily earned.
              </p>
              <p>
                For over twenty-five years, this school has nurtured Bahrain&apos;s children with fidelity to the
                Montessori method: mixed-age classrooms, self-directed learning, hands-on materials,
                and guides who observe rather than instruct. That legacy is not mine to rewrite. It is
                mine to protect, strengthen, and—most importantly—share more widely.
              </p>

              <h3
                className="mt-6 text-2xl text-[#FF2B2B] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                An Honest Conversation About Access
              </h3>
              <p>
                I believe in transparency. So let me speak plainly.
              </p>
              <p>
                For many years, The Children&apos;s House was accessible only to families who could afford a
                significant monthly investment. The previous fee structure, while reflective of the
                school&apos;s quality, placed it beyond the reach of countless hardworking parents who
                deeply believed in Montessori education.
              </p>
              <p>
                When I took stewardship of this school, I made a deliberate choice. I asked myself: What
                is the purpose of an accredited Montessori education if only a few can access it?
                That question led to an unprecedented decision.
              </p>
              <div className="rounded-2xl border-4 border-[#39FF1F] bg-white p-6 shadow-[6px_6px_0px_rgba(57,255,31,0.3)]">
                <p className="font-bold text-[#1A89FF]">
                  We have now reduced our fees by more than half—making The Children&apos;s House
                  one of the most affordable MEAB-accredited Montessori schools in Bahrain.
                </p>
              </div>
              <p>
                Not by cutting corners. Not by reducing materials. Not by lowering teacher
                qualifications. But by choosing to operate with a sustainable margin rather than a
                premium one. The authentic Montessori materials remain. The MEAB accreditation
                remains. The low student-to-guide ratio remains. The prepared environment—the very
                heart of Montessori—remains unchanged.
              </p>
              <p>
                What has changed is our conviction: A child&apos;s future should not be determined by
                their parents&apos; monthly salary.
              </p>

              <h3
                className="mt-6 text-2xl text-[#F828D3] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                What This Means for Your Family
              </h3>
              <p>
                You no longer have to choose between quality and affordability. At The Children&apos;s
                House, your child will receive:
              </p>
              <ul className="flex flex-col gap-3 pl-2">
                {[
                  "Authentic MEAB-accredited Montessori—recognized by the Montessori Schools Association United Kingdom",
                  "A legacy of excellence spanning twenty-five years, since 1997",
                  "Certified Montessori guides who observe, respect, and nurture each child's natural curiosity",
                  "A prepared environment where children aged 3-6 learn from and lead one another",
                  "A safe, nurturing community that feels like a second home",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFD236] text-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-bold text-[#FF2B2B]">
                All at a fraction of the cost of comparable international schools in Bahrain.
              </p>

              <h3
                className="mt-6 text-2xl text-[#39FF1F] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                My Commitment to You
              </h3>
              <p>
                You will see me in the corridors. You will see me observing in the classrooms. You will
                see me at the gate in the morning. Because a Director&apos;s Message is only as real as the
                Director&apos;s presence.
              </p>
              <p>
                I invite you to visit our school. See the 1997 legacy. Experience the MEAB-accredited
                environment. Meet our guides. Watch your child work with purpose and joy. And then
                decide.
              </p>
              <p>
                Thank you for trusting us with the most important chapter of your child&apos;s journey. We
                are honored—and deeply committed—to making it extraordinary.
              </p>

              <div className="mt-8 flex flex-col gap-1">
                <p className="text-2xl" style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}>
                  Warmly,
                </p>
                <p className="text-xl font-bold text-[#E245F7]">Dr. Jamal Umar</p>
                <p>Director</p>
                <p className="text-base text-gray-600">The Children&apos;s House Montessori Kindergarten Bahrain</p>
                <p className="text-sm font-medium text-gray-500">Est. 1997 | MEAB Accredited | First Montessori Nursery in Bahrain</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DirectorMessageSection;
