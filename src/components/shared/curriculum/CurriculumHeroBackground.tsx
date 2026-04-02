const CurriculumHeroBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 100px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 100px)",
        }}
      />

      <svg
        width="579"
        height="468"
        viewBox="0 0 579 468"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute top-4 -left-18 z-10 h-[300px] w-[370px] sm:top-2 sm:-left-14 sm:h-[360px] sm:w-[460px] lg:top-[10px] lg:-left-[30px] lg:h-[468px] lg:w-[579px]"
        aria-hidden="true"
      >
        <path
          d="M526 -474.826C526 -474.826 400.592 -480.074 385.058 -395.869C373.028 -330.662 359.916 -282.174 424.359 -243.758C519.104 -187.278 578.116 -161.438 574.383 -32.4237C571.97 50.98 496.954 70.0768 414.849 84.9311C319.667 102.151 334.093 50.4454 238.781 66.9302C152.437 81.8638 59.0225 81.9511 37.9545 167.007C24.3229 222.04 80.6569 250.254 77.0172 306.833C72.6003 375.494 49.6043 420.022 -3.82489 463.371"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="44 44"
        />
      </svg>

      <svg
        width="798"
        height="454"
        viewBox="0 0 798 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute -top-6 right-[-160px] z-10 h-[260px] w-[430px] sm:-top-10 sm:right-[-130px] sm:h-[320px] sm:w-[560px] lg:-top-[20px] lg:right-[-70px] lg:h-[454px] lg:w-[798px]"
        aria-hidden="true"
      >
        <path
          d="M6.84089 -223.066C6.84089 -223.066 -18.2581 -100.084 62.4107 -71.3725C124.879 -49.1389 170.669 -28.4927 218.833 -86.0163C289.644 -170.587 324.528 -224.747 451.312 -200.57C533.274 -184.941 540.214 -107.845 541.839 -24.422C543.723 72.2869 494.965 49.8313 496.103 146.552C497.133 234.172 482.383 326.414 563.013 360.724C615.182 382.923 651.985 331.785 707.268 344.365C774.356 359.631 814.667 389.407 848.979 449.043"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="44 44"
        />
      </svg>

    </>
  );
};

export default CurriculumHeroBackground;
