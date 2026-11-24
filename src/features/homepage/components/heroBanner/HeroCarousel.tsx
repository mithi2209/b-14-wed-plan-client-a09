

"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import ArchFrame from "./ArchFrame";
import { useEffect, useState } from "react";

import { HeroCarouselProps } from "./heroTypes";
import { useReducedMotion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { weddingSlides } from "@/lib/bannerSlides/bannerSlides";
import { Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";


const HeroCarousel = ({ onSlideChange, onSwiperReady }: HeroCarouselProps) => {
  
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    const slide = weddingSlides[0];
    const hasSecond = slide.lightImages.length > 1;

    return (

      <div className="wed-plan-swiper absolute inset-0 h-full w-full">

        <div className="absolute inset-0 grid h-full grid-cols-2 items-center gap-2 px-1 sm:gap-3 sm:px-2 lg:gap-4">
          
          <div className="flex h-full w-full justify-center pb-2 pt-9 sm:pb-4 sm:pt-10">
            <ArchFrame
              lightSrc={slide.lightImages[0]}
              darkSrc={slide.darkImages[0]}
              lightPosition={slide.lightPositions?.[0]}
              darkPosition={slide.darkPositions?.[0]}
              alt={slide.alt}
              priority
              variant="raised"
              sparkle
            />
          </div>
          {hasSecond && (
            <div className="flex h-full w-full justify-center pb-2 pt-9 sm:pb-4 sm:pt-10">
              <ArchFrame
                lightSrc={slide.lightImages[1]}
                darkSrc={slide.darkImages[1]}
                lightPosition={slide.lightPositions?.[1]}
                darkPosition={slide.darkPositions?.[1]}
                alt={slide.alt}
                priority
                variant="dropped"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  
  return (

    <Swiper
      modules={[Autoplay, EffectFade, Keyboard, A11y]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      loop={weddingSlides.length > 1}
      autoplay={
        reduceMotion
          ? false
          : {
              delay: 6500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
      }
      keyboard={{ enabled: true }}
      allowTouchMove
      onSwiper={(swiper: SwiperType) => onSwiperReady(swiper)}
      onRealIndexChange={(swiper) => onSlideChange(swiper.realIndex)}
      className="wed-plan-swiper absolute inset-0 h-full w-full"
    >
      {weddingSlides.map((slide, index) => {
        const hasSecond = slide.lightImages.length > 1;

        return (
          <SwiperSlide key={slide.id}>

            {/* <div className="absolute inset-0 grid h-full grid-cols-2 items-center gap-2 px-1 sm:gap-3 sm:px-2 lg:gap-4"> */}

            <div className="absolute inset-0 grid h-full w-full grid-cols-2 items-center gap-2 px-0 sm:gap-3 lg:gap-4">
              
              {/* LEFT FRAME */}
              <div className="relative flex h-full w-full justify-center pb-2 pt-9 sm:pb-4 sm:pt-10">
                <ArchFrame
                  lightSrc={slide.lightImages[0]}
                  darkSrc={slide.darkImages[0]}
                  lightPosition={slide.lightPositions?.[0]}
                  darkPosition={slide.darkPositions?.[0]}
                  alt={slide.alt}
                  priority={index === 0}
                  variant="raised"
                  sparkle
                />
                {/* Left Badge — sits above the arch, never over the photo */}
                <div className="hero-badge absolute left-0 right-0 top-0 z-20 mx-auto flex w-max items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/30 bg-background/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-espresso shadow-md backdrop-blur dark:text-ivory sm:px-3 sm:py-1.5 sm:text-[10px] lg:text-[11px]">
                  <span
                    className="size-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Curated Vendors
                </div>
              </div>

              {/* RIGHT FRAME */}
              {hasSecond && (
                <div className="relative flex h-full w-full justify-center pb-2 pt-9 sm:pb-4 sm:pt-10">
                  <ArchFrame
                    lightSrc={slide.lightImages[1]}
                    darkSrc={slide.darkImages[1]}
                    lightPosition={slide.lightPositions?.[1]}
                    darkPosition={slide.darkPositions?.[1]}
                    alt={slide.alt}
                    priority={index === 0}
                    variant="dropped"
                  />
                  {/* Right Badge — sits above the arch, never over the photo */}
                  <div className="hero-badge hero-badge-delayed absolute left-1/2 top-0 z-20 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/30 bg-background/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-espresso shadow-md backdrop-blur dark:text-ivory sm:px-3 sm:py-1.5 sm:text-[10px] lg:text-[11px]">
                    <span
                      className="size-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    Handpicked for You
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

  );
};

export default HeroCarousel;
