import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

const PrincipalMessageSection = () => {
  return (
    <section id="principal-message" className="relative overflow-hidden bg-[#F0FBFF] py-20 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(25,173,232,0.05) 0px, rgba(25,173,232,0.05) 80px, transparent 80px, transparent 160px), repeating-linear-gradient(to bottom, rgba(25,173,232,0.05) 0px, rgba(25,173,232,0.05) 80px, transparent 80px, transparent 160px)",
        }}
      />

      <MaxWidthWrapper className="relative z-10 px-4 sm:px-6">
        <div className="mx-auto flex flex-col items-center justify-center gap-12 lg:flex-row-reverse lg:items-start lg:gap-16">
          {/* Image Side */}
          <div className="w-full max-w-[400px] lg:sticky lg:top-32 lg:w-1/3">
            <div className="relative mx-auto flex flex-col items-center gap-6">
              <div className="relative h-[360px] w-full max-w-[320px] rounded-[49%_51%_52%_48%_/_54%_46%_58%_42%] rotate-[-2deg]">
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{
                    border: "6px solid #19ADE8",
                    borderRadius: "inherit",
                    boxShadow: "10px 10px 0px #0C86B6",
                  }}
                >
                  <Image
                    src="/images/female-placeholder.jpg" // Female placeholder image
                    alt="Ms. Aneesa Tabassam, Principal"
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
                    color: "#19ADE8",
                    textShadow: "4px 4px 2px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Ms. Aneesa Tabassam
                </h3>
                <p
                  className="mt-1 text-xl font-bold text-black"
                  style={{ fontFamily: "var(--font-quicksand)" }}
                >
                  Principal
                </p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex w-full flex-col gap-8 lg:w-2/3">
            <div className="flex flex-col gap-4">
              <p
                className="text-xl tracking-[0.06em] text-[#19ADE8] sm:text-2xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                A Message from our Principal
              </p>
              <h2
                className="text-[36px] leading-[1.1] uppercase sm:text-[48px] lg:text-[56px] [text-stroke:2px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:2px_black]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  fontWeight: 400,
                  textShadow: "6px 6px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span className="text-[#39FF1F]">Where </span>
                <span className="text-[#F828D3]">Science </span>
                <span className="text-white">Meets </span>
                <span className="text-[#FFD236]">Wonder</span>
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
                My name is Ms. Aneesa Tabassam, and I have the profound privilege of serving as your
                Principal. When I walk through our doors each morning, I do so with a heart full of
                gratitude—for the children who fill our classrooms with curiosity, for the parents who
                trust us with their most precious gifts, and for the legacy of excellence that has lived
                here since 1997.
              </p>

              <h3
                className="mt-6 text-2xl text-[#E245F7] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                My Unconventional Journey to Montessori
              </h3>
              <p>
                You may wonder what brings a chemical engineer to the world of early childhood
                education. It is a question I love answering.
              </p>
              <p>
                In 2018, I graduated from the University of Bahrain with a degree in Chemical
                Engineering. I spent years teaching chemistry to IGCSE, IB, and A-Level students—
                watching bright young minds grapple with complex concepts. And yet, time and again, I
                noticed something. The students who truly excelled were not simply the most
                intelligent. They were the ones who had learned how to learn. They were curious. They
                were independent. They were not afraid to make mistakes and try again.
              </p>
              <p>
                I began searching for the roots of these qualities. And I found them here—in the
                Montessori method.
              </p>
              <p>
                That discovery changed everything for me. I went on to complete my Bachelor of
                Education, a Professional Development Course for Teachers from UOB, and most
                importantly, my Montessori Diploma. I wanted to understand not just what children
                learn, but how they learn at the very beginning of their journey.
              </p>

              <h3
                className="mt-6 text-2xl text-[#1A89FF] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                What This Means for Your Child
              </h3>
              <p>
                My background in engineering and chemistry is not separate from my role as a
                Montessori principal—it is essential to it. Maria Montessori was, after all, a scientist
                herself. She observed children with the same precision that an engineer applies to a
                complex system. She understood that every material, every activity, every interaction in
                the prepared environment serves a purpose.
              </p>
              <div className="rounded-2xl border-4 border-[#19ADE8] bg-white p-6 shadow-[6px_6px_0px_rgba(25,173,232,0.3)]">
                <p className="font-bold text-[#E245F7]">
                  At The Children&apos;s House, nothing is left to chance. Every Montessori material on our
                  shelves has been carefully designed to develop specific skills: concentration,
                  coordination, order, and independence.
                </p>
              </div>
              <p>
                Our guides observe your children not to judge
                them, but to understand them—so that each child receives exactly what they need,
                exactly when they are ready.
              </p>
              <p>
                This is not magic. It is science. And it is my greatest joy to lead a school where science
                meets wonder every single day.
              </p>

              <h3
                className="mt-6 text-2xl text-[#FF2B2B] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                The Promise of Our School
              </h3>
              <p>
                As the first Montessori nursery school in Bahrain, established in 1997, and proudly
                accredited by the Montessori Evaluation and Accreditation Board (MEAB), we carry a
                responsibility to honour the past while embracing the future.
              </p>
              <p>Our promise to you is simple:</p>
              <ul className="flex flex-col gap-3 pl-2">
                {[
                  <span key={1}><b>Authentic Montessori practice</b> – Not &quot;Montessori-inspired.&quot; Not &quot;Montessori-based.&quot; Authentic, MEAB-accredited Montessori education.</span>,
                  <span key={2}><b>A prepared environment</b> – Beautiful, orderly, child-sized classrooms where every object has a purpose and a place</span>,
                  <span key={3}><b>Qualified, compassionate guides</b> – Teachers trained to observe, respect, and nurture</span>,
                  <span key={4}><b>A community of belonging</b> – Where your child is known, valued, and loved</span>,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#19ADE8] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3
                className="mt-6 text-2xl text-[#39FF1F] sm:text-3xl"
                style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
              >
                An Open Door
              </h3>
              <p>
                Maria Montessori wrote, &quot;The child is both a hope and a promise for mankind&quot;. I believe
                this with my whole heart.
              </p>
              <p>
                You will find me in our classrooms, observing our children at work. You will find me at
                the gate in the morning, ready to listen. You will find me available to you—because a
                school is not a building. It is a partnership between educators and families.
              </p>
              <p>
                I invite you to visit us. Watch your child choose a work. Watch them concentrate. Watch
                them smile with the quiet satisfaction of having done it themselves. And then you will
                understand why I left engineering for Montessori.
              </p>

              <div className="mt-8 flex flex-col gap-1">
                <p className="text-2xl" style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}>
                  With warmth and respect,
                </p>
                <p className="text-xl font-bold text-[#19ADE8]">Ms. Aneesa Tabassam</p>
                <p>Principal</p>
                <p className="text-base text-gray-600">The Children&apos;s House Montessori Kindergarten Bahrain</p>
                <p className="text-sm font-medium text-gray-500">B.Eng Chemical Engineering (UOB) | B.Ed | Montessori Diploma</p>
                <p className="text-sm font-medium text-gray-500">Est. 1997 | MEAB Accredited | First Montessori Nursery in Bahrain</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PrincipalMessageSection;
