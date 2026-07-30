import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/homepage/MaxWidthWrapper";

const ContactInfoCard = () => {
  const valueTextClass =
    "uppercase text-white leading-[0.95] [-webkit-text-stroke:1.6px_black] sm:[-webkit-text-stroke:2.4px_black]";

  return (
    <section className="relative bg-[#DFF7FF] pb-20 pt-8 sm:pb-24 sm:pt-12">
      <MaxWidthWrapper className="px-3 sm:px-6">
        <div className="relative mx-auto flex w-full max-w-[960px] justify-center">
          <div className="relative w-full max-w-[760px] px-5 py-10 sm:px-12 sm:py-12">
            <Image
              src="/svgs/contact-card-border.svg"
              alt="Contact information border"
              fill
              className="pointer-events-none select-none object-fill drop-shadow-[0_20px_24px_rgba(39,63,79,0.35)]"
              sizes="(min-width: 1024px) 760px, (min-width: 640px) 88vw, 95vw"
            />

            <div className="relative z-10 mx-auto flex w-full max-w-[670px] flex-col items-center gap-8 text-center sm:gap-9">
              <div className="space-y-1.5">
                <p
                  className="text-[28px] leading-none text-black sm:text-[36px]"
                  style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                >
                  Contact
                </p>
                <p className="text-[20px] sm:text-[26px] font-semibold text-gray-800 tracking-wide font-sans">
                  +973 1769 9844
                </p>
                <p className="text-[20px] sm:text-[26px] font-semibold text-gray-800 tracking-wide font-sans">
                  +973 3793 7009
                </p>
              </div>

              <div className="space-y-1.5">
                <p
                  className="flex items-center justify-center gap-2 text-[28px] leading-none text-black sm:text-[36px]"
                  style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                >
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black sm:h-7 sm:w-7">
                      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.1 6.8-5.1H5.2Zm13.3 12a1.25 1.25 0 0 0 1.25-1.25V8.39l-7 5.26a1.25 1.25 0 0 1-1.5 0l-7-5.26v8.86A1.25 1.25 0 0 0 5.5 18.5h13Z" />
                    </svg>
                  </span>
                  Email
                </p>
                <div className="flex flex-col gap-1">
                  <a href="mailto:director@childrenshousebahrain.com" className="text-[18px] sm:text-[22px] font-semibold text-gray-800 tracking-wide font-sans hover:text-purple-600 transition-colors break-all">
                    director@childrenshousebahrain.com
                  </a>
                  <a href="mailto:principal@childrenshousebahrain.com" className="text-[18px] sm:text-[22px] font-semibold text-gray-800 tracking-wide font-sans hover:text-purple-600 transition-colors break-all">
                    principal@childrenshousebahrain.com
                  </a>
                  <a href="mailto:admission@childrenshousebahrain.com" className="text-[18px] sm:text-[22px] font-semibold text-gray-800 tracking-wide font-sans hover:text-purple-600 transition-colors break-all">
                    admission@childrenshousebahrain.com
                  </a>
                </div>
              </div>

              <div className="space-y-1.5 w-full flex flex-col items-center">
                <p
                  className="flex items-center justify-center gap-2 text-[28px] leading-none text-black sm:text-[36px]"
                  style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
                >
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black sm:h-7 sm:w-7">
                      <path d="M12 2.75a7 7 0 0 1 7 7c0 5.36-7 11.5-7 11.5S5 15.1 5 9.75a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
                  </span>
                  Address
                </p>
                <p className="text-[20px] sm:text-[26px] font-semibold text-gray-800 tracking-wide font-sans">
                  Building 208, Road 55, Block 557,
                </p>
                <p className="text-[20px] sm:text-[26px] font-semibold text-gray-800 tracking-wide font-sans">
                  Janabiyah Highway, Bahrain
                </p>
                <div className="w-full max-w-[450px] mt-4 px-2">
                  <iframe
                    src="https://maps.google.com/maps?q=Children's%20House%20Montessori%20Kindergarten%20Bahrain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000000]"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-8 top-[42px] z-20 -rotate-[7deg] sm:-left-14 sm:top-[74px]">
            <div className="relative h-[92px] w-[92px] overflow-hidden rounded-[16px] border-4 border-[#E245F7] bg-white shadow-[0_14px_24px_rgba(0,0,0,0.3)] sm:h-[124px] sm:w-[124px]">
              <Image
                src="/images/img1.png"
                alt="Creative student photo"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 124px, 92px"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute -right-8 bottom-[76px] z-20 rotate-[9deg] sm:-right-12 sm:bottom-[110px]">
            <div className="relative h-[94px] w-[94px] overflow-hidden rounded-[16px] border-4 border-[#FFCA2C] bg-white shadow-[0_14px_24px_rgba(0,0,0,0.3)] sm:h-[126px] sm:w-[126px]">
              <Image
                src="/images/img2.png"
                alt="Happy child photo"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 126px, 94px"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactInfoCard;
