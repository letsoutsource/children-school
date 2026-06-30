"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CTAButton from "./CTAButton";
import Link from "next/link";

const slides = [
  {
    src: "/images/hero_playground.png",
    alt: "Montessori Kindergarten Playground",
  },
  {
    src: "/images/hero_classroom.png",
    alt: "Montessori Kindergarten Classroom",
  },
  {
    src: "/images/hero_school.png",
    alt: "Children's House Montessori School Entrance",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section-background relative min-h-screen overflow-hidden">
      {/* Background Image Carousel Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Dark overlay to make text highly readable */}
            <div className="absolute inset-0 bg-black/35 z-20" />
          </div>
        ))}
      </div>

      {/* Slide Navigation Left/Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white hover:bg-[#EDFF23] text-black shadow-[3px_3px_0px_#000000] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white hover:bg-[#EDFF23] text-black shadow-[3px_3px_0px_#000000] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full border-2 border-black transition-all cursor-pointer ${
              index === currentSlide
                ? "bg-[#EDFF23] w-8 shadow-[1px_2px_0px_#000000]"
                : "bg-white hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20">
        <MaxWidthWrapper>
          <div className="mx-auto mt-42 sm:mt-48 flex max-w-[855px] flex-col items-center gap-8 px-4 text-center md:mt-32 3xl:mt-36">
            <div className="flex flex-col items-center gap-1 sm:gap-3">
              <h1
                className="text-4xl sm:text-5xl leading-[1.05] md:text-7xl lg:text-[80px] 3xl:text-[90px]"
                style={{
                  fontFamily: "var(--font-luckiest-guy)",
                  textShadow: "9px 7.2px 1.8px rgba(0, 0, 0, 0.32)",
                }}
              >
                <span className="text-[#FCB037] [text-stroke:3px_black] [-webkit-text-stroke:3px_black]">
                  QUALIFIED EARLY
                </span>
                <br />
                <span className="text-white [text-stroke:3px_black] [-webkit-text-stroke:3px_black]">
                  YEARS{" "}
                </span>
                <span
                  className="text-[#2CFF41] text-4xl sm:text-5xl leading-[100px] md:text-6xl lg:text-[80px] 3xl:text-[84px] [text-stroke:2px_black] [-webkit-text-stroke:2px_black]"
                  style={{
                    fontFamily: "var(--font-pacifico)",
                    fontWeight: 400,
                  }}
                >
                  Educators
                </span>
              </h1>

              <p
                className="max-w-[800px] sm:text-lg md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600 }}
              >
                Building Bright Futures by Making Learning Fun, Safe &amp;
                Meaningful
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/curriculum">
                <CTAButton
                  variant="curriculum"
                  className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl cursor-pointer"
                >
                  Curriculum
                </CTAButton>
              </Link>

              <Link href="/admission">
                <CTAButton
                  variant="admission"
                  className="px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl cursor-pointer"
                >
                  Admission
                </CTAButton>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* HAZ Letters decoration overlay */}
      <div className="pointer-events-none absolute left-20 top-44 z-20 hidden select-none lg:block">
        <div
          className="relative h-[145px] w-[120px]"
          style={{ fontFamily: "var(--font-sniglet)" }}
        >
          <span className="absolute left-3 top-0 -rotate-12 text-6xl font-extrabold text-[#2CEDFF] [-webkit-text-stroke:4px_black]">
            H
          </span>
          <span className="absolute left-0 top-10 -rotate-35 text-6xl font-extrabold text-[#2CFF41] [-webkit-text-stroke:4px_black]">
            A
          </span>
          <span className="absolute left-14 top-7 text-6xl font-extrabold text-[#FF562C] [-webkit-text-stroke:4px_black]">
            Z
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;