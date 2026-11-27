

"use client";

import { useState } from "react";
import Image from "next/image";

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

    <section className="wed-plan-hero relative w-full pt-5 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20 xl:pt-24">

      {/* Banner background image — light / dark */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        <Image
          src="/images/banners/banner-bg-light.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 dark:hidden"
        />
        <Image
          src="/images/banners/banner-bg-dark.jpg"
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center opacity-30 dark:block"
        />
      </div>

      {/* Background Rotating Circular Text Animation  */}
      <div className="hero-drift pointer-events-none select-none absolute right-2 top-2 z-0 size-20 opacity-60 sm:right-5 sm:top-4 sm:size-24 sm:opacity-80 md:right-8 md:top-6 md:size-28 lg:right-[3%] lg:top-[6%] lg:size-32 lg:opacity-100 xl:right-[5%] xl:top-[8%] xl:size-36">
        <svg
          viewBox="0 0 160 160"
          className="h-full w-full motion-safe:animate-[spin_26s_linear_infinite]"
          aria-hidden="true"
        >
          <defs>
            <path
              id="hero-text-ring-path"
              d="M 80, 80 m -54, 0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
            />
          </defs>
          <text
            className="fill-accent/70 text-[9px] font-semibold uppercase tracking-[0.22em] dark:fill-accent/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <textPath
              href="#hero-text-ring-path"
              startOffset="0%"
              textLength="339"
              lengthAdjust="spacing"
            >
              • WEDPLAN LUXURY • PLAN YOUR DREAM WEDDING 
            </textPath>
          </text>
          {/* Inner decorative ring & center luxury star */}
          <circle
            cx="80"
            cy="80"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-accent/30"
          />
          <path
            d="M 80 73 L 81.8 78.2 L 87 80 L 81.8 81.8 L 80 87 L 78.2 81.8 L 73 80 L 78.2 78.2 Z"
            className="fill-accent/70"
          />
        </svg>
      </div>

      {/* Background Left Floating Celestial Starburst Animation */}
      <div className="hero-drift pointer-events-none select-none absolute left-2 top-[32%] z-0 size-16 opacity-50 sm:left-4 sm:top-[36%] sm:size-20 sm:opacity-75 md:left-[2.5%] md:top-[40%] md:size-24 lg:left-[2%] lg:top-[44%] lg:size-28 lg:opacity-90">
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Outer dashed orbital ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-accent/25 motion-safe:animate-[spin_32s_linear_infinite_reverse]" />
          {/* Inner fine gold halo */}
          <div className="absolute inset-2 rounded-full border border-accent/35 animate-[arch-breathe_6s_ease-in-out_infinite]" />
          {/* Center 8-point gold starlight sparkle */}
          <svg
            viewBox="0 0 24 24"
            className="size-5 text-accent sm:size-6 lg:size-7 animate-[sparkle_3.5s_ease-in-out_infinite]"
            fill="currentColor"
          >
            <path d="M12 1 L13.8 8.8 L21 7 L16.2 12 L21 17 L13.8 15.2 L12 23 L10.2 15.2 L3 17 L7.8 12 L3 7 L10.2 8.8 Z" />
          </svg>
          {/* Orbiting celestial dust dot 1 */}
          <div className="absolute -top-1 right-2 size-1.5 rounded-full bg-accent/70 animate-[sparkle_2.8s_ease-in-out_infinite_-1.2s]" />
          {/* Orbiting celestial dust dot 2 */}
          <div className="absolute -bottom-1 left-3 size-1 rounded-full bg-accent/60 animate-[sparkle_3.2s_ease-in-out_infinite_-2.0s]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-2 sm:px-6 lg:px-8">

        {/* Equal 50/50 columns on desktop, stacked on smaller screens */}

        {/* <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"> */}

        <div className="grid grid-cols-1 items-center gap-0 md:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)] lg:gap-8 xl:gap-18">

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
