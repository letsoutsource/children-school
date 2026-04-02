import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

type PinPairProps = {
  colorClassName: string;
  tiltClassName: string;
};

const PinPair = ({ colorClassName, tiltClassName }: PinPairProps) => {
  return (
    <>
      <div className={`absolute -top-11 left-8 z-20 ${tiltClassName}`}>
        <div
          className={`size-5 rounded-full border-2 border-black ${colorClassName} shadow-[2px_2px_0px_#000]`}
        />
        <div className="mx-auto h-9 w-2 bg-black shadow-[2px_4px_4px_rgba(0,0,0,0.4)]" />
        <div
          className={`size-5 rounded-full border-2 border-black ${colorClassName} shadow-[2px_2px_0px_#000]`}
        />
      </div>

      <div className={`absolute -top-11 right-8 z-20 ${tiltClassName}`}>
        <div
          className={`size-5 rounded-full border-2 border-black ${colorClassName} shadow-[2px_2px_0px_#000]`}
        />
        <div className="mx-auto h-9 w-2 bg-black shadow-[2px_4px_4px_rgba(0,0,0,0.4)]" />
        <div
          className={`size-5 rounded-full border-2 border-black ${colorClassName} shadow-[2px_2px_0px_#000]`}
        />
      </div>
    </>
  );
};

type GalleryCardProps = {
  src: string;
  alt: string;
  borderClassName: string;
  shadowClassName: string;
  pinColorClassName: string;
  tiltClassName: string;
  imageAspectClassName: string;
  imageSizes: string;
  wrapperClassName?: string;
};

const GalleryCard = ({
  src,
  alt,
  borderClassName,
  shadowClassName,
  pinColorClassName,
  tiltClassName,
  imageAspectClassName,
  imageSizes,
  wrapperClassName = "",
}: GalleryCardProps) => {
  return (
    <div className={`relative ${tiltClassName} ${wrapperClassName}`}>
      <PinPair colorClassName={pinColorClassName} tiltClassName={tiltClassName} />
      <div
        className={`overflow-hidden rounded-[34px] border-8 ${borderClassName} ${shadowClassName}`}
      >
        <div className={`relative ${imageAspectClassName}`}>
          <Image src={src} alt={alt} fill sizes={imageSizes} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

const GallarySection = () => {
  return (
    <section className="mt-6 w-full bg-gray-100 px-6 py-20 sm:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="mx-auto flex min-h-[326px] w-full max-w-[992px] flex-col items-center gap-10 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <p
              className="w-full text-lg leading-[42px] tracking-[0.06em] uppercase text-black sm:text-2xl"
              style={{ fontFamily: "var(--font-pacifico)", fontWeight: 400 }}
            >
              Gallery
            </p>

            <h2
              className="w-full text-[34px] leading-[1.08] uppercase sm:text-[52px] lg:text-[72px] lg:leading-[80px] [text-stroke:3px_black] [-webkit-text-stroke:1.5px_black] lg:[-webkit-text-stroke:3px_black]"
              style={{
                fontFamily: "var(--font-luckiest-guy)",
                fontWeight: 400,
                textShadow: "10px 8px 2px rgba(0, 0, 0, 0.32)",
              }}
            >
              <span className="block">
                <span className="text-[#39FF1F]">Moments </span>
                <span className="text-white">That Make</span>
              </span>
              <span className="block">
                <span className="text-[#1A89FF]">Learning </span>
                <span className="text-[#D8FF1E]">Special</span>
              </span>
            </h2>
          </div>

          <p
            className="w-full max-w-[616px] text-xl leading-[30px] text-black sm:text-2xl mb-8 md:mb-20"
            style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
          >
            A peek into our colorful days filled with smiles, play, and little
            achievements.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[1240px] grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-x-9 lg:gap-y-14">
          <div className="col-span-1 lg:col-span-4">
            <GalleryCard
              src="/images/gallary-1.png"
              alt="Children celebrating together"
              borderClassName="border-[#EDFF2D]"
              shadowClassName="shadow-[12px_8px_0px_#C0D017]"
              pinColorClassName="bg-[#EDFF2D]"
              tiltClassName="-rotate-3"
              imageAspectClassName="aspect-[331/385]"
              imageSizes="(min-width:1024px) 320px, 45vw"
            />
          </div>

          <div className="col-span-1 lg:col-span-8">
            <GalleryCard
              src="/images/gallary-2.png"
              alt="Kids painting with colorful hands"
              borderClassName="border-[#FF2D2D]"
              shadowClassName="shadow-[12px_8px_0px_#C21111]"
              pinColorClassName="bg-[#FF2D2D]"
              tiltClassName="rotate-2"
              imageAspectClassName="aspect-[765/385]"
              imageSizes="(min-width:1024px) 760px, 50vw"
            />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <GalleryCard
              src="/images/gallary-3.png"
              alt="Color splash portrait"
              borderClassName="border-[#3BFF2D]"
              shadowClassName="shadow-[12px_8px_0px_#1DC012]"
              pinColorClassName="bg-[#3BFF2D]"
              tiltClassName="rotate-3"
              imageAspectClassName="aspect-[331/385]"
              imageSizes="(min-width:1024px) 320px, 45vw"
            />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <GalleryCard
              src="/images/gallary-4.png"
              alt="Creative materials close up"
              borderClassName="border-[#FFB52D]"
              shadowClassName="shadow-[12px_8px_0px_#CA8B16]"
              pinColorClassName="bg-[#FFB52D]"
              tiltClassName=""
              imageAspectClassName="aspect-[331/385]"
              imageSizes="(min-width:1024px) 320px, 45vw"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <GalleryCard
              src="/images/gallary-5.png"
              alt="Two kids painting together"
              borderClassName="border-[#2DFFDC]"
              shadowClassName="shadow-[12px_8px_0px_#13B196]"
              pinColorClassName="bg-[#2DFFDC]"
              tiltClassName="-rotate-3"
              imageAspectClassName="aspect-[331/385]"
              imageSizes="(min-width:1024px) 320px, 90vw"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-8">
            <GalleryCard
              src="/images/gallary-6.png"
              alt="Children reading and learning"
              borderClassName="border-[#FF2DDC]"
              shadowClassName="shadow-[12px_8px_0px_#C517A8]"
              pinColorClassName="bg-[#FF2DDC]"
              tiltClassName="rotate-2"
              imageAspectClassName="aspect-[765/385]"
              imageSizes="(min-width:1024px) 760px, 90vw"
            />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <GalleryCard
              src="/images/gallary-7.png"
              alt="Classroom playtime scene"
              borderClassName="border-[#FF2D30]"
              shadowClassName="shadow-[12px_8px_0px_#CC1518]"
              pinColorClassName="bg-[#FF2D30]"
              tiltClassName="-rotate-3"
              imageAspectClassName="aspect-[331/385]"
              imageSizes="(min-width:1024px) 320px, 90vw"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default GallarySection;