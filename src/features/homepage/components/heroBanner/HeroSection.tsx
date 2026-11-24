

"use client";

import { useState } from "react";

import HeroStats from "./HeroStats";
import HeroContent from "./HeroContent";

import HeroControls from "./HeroControls";
import HeroCarousel from "./HeroCarousel";

import { AnimatePresence } from "framer-motion";

import type { Swiper as SwiperType } from "swiper";
import { weddingSlides } from "@/lib/bannerSlides/bannerSlides";


const HeroSection = () => {

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = weddingSlides[activeIndex];

  return (

    <section className="wed-plan-hero relative w-full pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20 xl:pt-24">

      {/* Background rings */}
      <div className="hero-drift pointer-events-none absolute right-[6%] top-[10%] hidden md:block">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle
            cx="35"
            cy="35"
            r="32"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/40"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Equal 50/50 columns on desktop, stacked on smaller screens */}

        {/* <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"> */}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)] lg:gap-8 xl:gap-12">

          {/* ─── LEFT: TWO ARCH FRAMES ─── */}

          {/* <div className="relative order-1 h-80 w-full sm:h-125 lg:h-125 xl:h-140 2xl:h-160"> */}

          <div className="relative order-1 h-96 w-full sm:h-140 lg:h-150 xl:h-160 2xl:h-180">
            <HeroCarousel
              onSwiperReady={setSwiper}
              onSlideChange={setActiveIndex}
            />
          </div>

          {/* ─── RIGHT: TEXT ─── */}
          <div className="order-2 w-full">
            <AnimatePresence mode="wait" initial={false}>
              <HeroContent key={currentSlide.id} slide={currentSlide} />
            </AnimatePresence>

            <HeroControls
              activeIndex={activeIndex}
              totalSlides={weddingSlides.length}
              onPrevious={() => swiper?.slidePrev()}
              onNext={() => swiper?.slideNext()}
              onSelect={(index) => swiper?.slideToLoop(index)}
            />
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
};

export default HeroSection;
