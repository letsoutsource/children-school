"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/hero-slider-1.png",
    alt: "Montessori Kindergarten Playground",
    text: "Qualified Early Years Educators",
  },
  {
    src: "/images/hero/hero-slider-2.png",
    alt: "Montessori Kindergarten Classroom",
    text: "Building Bright Futures by Making Learning Fun, Safe & Meaningful",
  },
  {
    src: "/images/hero/hero-slider-3.png",
    alt: "Children's House Montessori School Entrance",
    text: "A Nurturing Environment Where Love and Learning Bloom",
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

  return (
    <section className="bg-white relative w-full max-w-[1340px] mx-auto h-auto aspect-[16/10] xs:aspect-[16/9] md:aspect-[16/8] lg:aspect-[21/10] overflow-hidden">
      {/* Padded Container for independent slider */}
      <div className="w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-6 md:pt-10 pb-6 sm:pb-12 md:pb-20 bg-white">
        <div className="relative w-full h-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-white">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots at bottom-right with padding relative to the container */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 md:bottom-14 md:right-14 z-30 bg-white/95 backdrop-blur-xs rounded-full px-4 py-2.5 flex gap-2.5 shadow-lg border border-gray-100/50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
              ? "bg-[#BE2CD2] scale-110"
              : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;