import Image from "next/image";

/**
 * Curly/organic blob border wrapper for images.
 * Uses an SVG blob clipPath with a colorful gradient border ring.
 */
const CurlyBorderImage = ({
  src,
  alt,
  id,
}: {
  src: string;
  alt: string;
  id: string;
}) => {
  // Organic blob path — irregular rounded shape similar to the sample
  const blobPath =
    "M0.44,0.15 C0.13,0.05 0.02,0.25 0.03,0.45 C0.04,0.65 0.05,0.82 0.18,0.92 C0.31,1.02 0.52,0.98 0.68,0.95 C0.84,0.92 0.97,0.82 0.99,0.62 C1.01,0.42 0.98,0.22 0.88,0.12 C0.78,0.02 0.62,0.05 0.44,0.15 Z";

  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 0.95" }}>
      {/* Hidden SVG for clipPath definitions */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          {/* Outer blob (for gradient border ring) */}
          <clipPath id={`${id}-outer`} clipPathUnits="objectBoundingBox">
            <path d={blobPath} />
          </clipPath>
          {/* Inner blob (slightly inset for the image) — scale down ~94% from center */}
          <clipPath id={`${id}-inner`} clipPathUnits="objectBoundingBox">
            <path
              d={blobPath}
              transform="translate(0.03, 0.03) scale(0.94)"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Gradient border ring */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `url(#${id}-outer)`,
          background:
            "conic-gradient(from 180deg, #F828D3, #FF3B8B, #1A89FF, #39FF1F, #39FF1F, #1A89FF, #F828D3)",
        }}
      />

      {/* Image clipped to inner (slightly smaller) blob */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `url(#${id}-inner)`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 594px"
        />
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <section className="relative mx-auto mt-[160px] w-full px-6 sm:mt-[180px] lg:mt-[200px]">
      <div className="mx-auto flex min-h-[326px] w-full max-w-[992px] flex-col items-center gap-10 text-center">
        <div className="flex w-full flex-col items-center gap-6">
          <p
            className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
            style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
          >
            Our Mission &amp; Vision
          </p>

          <h2
            className="w-full text-[32px] leading-[1.08] uppercase sm:text-[48px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1px_black] lg:[-webkit-text-stroke:3px_black]"
            style={{
              fontFamily: "var(--font-luckiest-guy)",
              fontWeight: 400,
              textShadow: "6px 6px 2px rgba(0, 0, 0, 0.32)",
            }}
          >
            <span className="block">
              <span className="text-[#39FF1F]">Inspiring </span>
              <span className="text-[#FFD236]">Little </span>
              <span className="text-[#FFFFFF]">Minds For</span>
            </span>
            <span className="block">
              <span className="text-[#FFFFFF]">A </span>
              <span className="text-[#1A89FF]">Bright </span>
              <span className="text-[#F828D3]">Tomorrow</span>
            </span>
          </h2>
        </div>

        <p
          className="w-full max-w-[616px] leading-[30px] text-black sm:text-2xl"
          style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
        >
          A peek into our colorful days filled with smiles, play, and little
          achievements.
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1312px] flex-col gap-14 sm:mt-16 sm:gap-[72px]">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[100px]">
          <div className="w-full max-w-[594px]">
            <CurlyBorderImage
              src="/images/4thimage.avif"
              alt="Children learning together"
              id="mission-blob"
            />
          </div>

          <div className="flex w-full max-w-[500px] flex-col items-center gap-5 text-center">
            <p
              className="w-full text-[18px] leading-[1.75] tracking-[0.06em] uppercase text-black sm:text-[20px]"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Our Mission
            </p>

            <h3
              className="w-full text-[44px] leading-none uppercase sm:text-[58px] lg:text-[78px] [text-stroke:3px_black] [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="block">
                <span className="text-[#FFE11F]">Learning</span>
              </span>
              <span className="block text-white">Begins With</span>
              <span className="block text-[#F828D3]">Imagination</span>
            </h3>

            <p
              className="max-w-[460px] px-4 text-[18px] leading-[1.08] tracking-[0.04em] text-black sm:text-[22px] lg:text-[24px]"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
            >
              We inspire curious minds to explore, create, and grow through
              joyful learning experiences that turn every day into a new
              adventure.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[100px]">
          <div className="order-2 flex w-full max-w-[500px] flex-col items-center gap-5 text-center lg:order-1">
            <p
              className="w-full text-[18px] leading-[1.75] tracking-[0.06em] uppercase text-black sm:text-[20px]"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Our Vision
            </p>

            <h3
              className="w-full text-[44px] leading-none uppercase sm:text-[58px] lg:text-[78px] [text-stroke:3px_black] [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "9px 11px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span className="block">
                <span className="text-white">A </span>
                <span className="text-[#39FF1F]">Brighter</span>
              </span>
              <span className="block text-[#FF2B2B]">Future</span>
              <span className="block text-white">Starts Here</span>
            </h3>

            <p
              className="max-w-[460px] px-4 text-[18px] leading-[1.08] tracking-[0.04em] text-black sm:text-[22px] lg:text-[24px]"
              style={{ fontFamily: "var(--font-quicksand)", fontWeight: 500 }}
            >
              We inspire curious minds to explore, create, and grow through
              joyful learning experiences that turn every day into a new
              adventure.
            </p>
          </div>

          <div className="order-1 w-full max-w-[594px] lg:order-2">
            <CurlyBorderImage
              src="/images/5thimage.avif"
              alt="Classroom vision scene"
              id="vision-blob"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;