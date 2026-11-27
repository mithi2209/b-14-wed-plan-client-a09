

"use client";

import Image from "next/image";
import { ArchFrameProps } from "./heroTypes";

const ArchFrame = ({
  lightSrc,
  darkSrc,
  lightPosition = "center",
  darkPosition,
  alt,
  priority = false,
  variant = "raised",
  sparkle = false,
}: ArchFrameProps) => {
  const offset =
    variant === "raised" ? "lg:-translate-y-6" : "lg:translate-y-6";

  // Standard tall arch proportion with responsive caps that scale up on larger screens.

  return (

    <div
      className={`relative isolate flex h-full w-full items-center justify-center ${offset}`}
    >
      {/* <div className="relative mx-[-5%] aspect-3/4 h-auto w-[110%] max-w-70 sm:max-w-90 lg:max-w-110 xl:max-w-130 2xl:max-w-150"> */}

      <div className="relative aspect-3/4 w-full max-w-none">

        {/* Gold moon behind */}
        <div className="gold-moon " aria-hidden="true" />

        {/* Offset outline — behind the arch */}
        <div className="arch-outline-behind" aria-hidden="true" />

        {/* The arch frame itself */}
        <div className="arch-frame absolute inset-0">
          
          <Image
            src={lightSrc}
            alt={alt}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 360px, 520px"
            style={{ objectPosition: lightPosition }}
            className="hero-photo object-cover object-center dark:hidden"
          />

          <Image
            src={darkSrc}
            alt={alt}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 360px, 520px"
            style={{ objectPosition: darkPosition ?? lightPosition }}
            className="hero-photo hidden object-cover object-center dark:block"
          />
        </div>

        {/* Dashed outline — in front */}
        <div className="arch-outline-front" aria-hidden="true" />

        {/* Sparkles — Top Arch Crown & Cascading Sides */}
        {sparkle && (
          variant === "raised" ? (
            /* Left Frame Sparkle Constellation */
            <>
              {/* 1. TOP CREST: Apex crown above arch peak */}
              <div className="hero-sparkle pointer-events-none absolute left-[48%] -top-3 z-20 -translate-x-1/2 text-accent/90 [animation-delay:-0.5s] sm:-top-4.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sm:h-4.5 sm:w-4.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 2. TOP SLOPE: Upper-left curve */}
              <div className="hero-sparkle pointer-events-none absolute left-[18%] top-0.5 z-20 text-accent/85 [animation-delay:-1.6s] sm:top-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 3. TOP SHOULDER: Main top-right shoulder */}
              <div className="hero-sparkle pointer-events-none absolute right-4 top-7 z-20 text-accent sm:right-6 sm:top-9">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:h-5 sm:w-5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 4. SIDE: Upper-left outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -left-2.5 top-18 z-20 text-accent/85 [animation-delay:-2.2s] sm:-left-3.5 sm:top-22">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 5. SIDE: Mid-left outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -left-3 top-[44%] z-20 text-accent/80 [animation-delay:-3.0s] sm:-left-4">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sm:h-4.5 sm:w-4.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 6. SIDE: Lower-left outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -left-2.5 bottom-24 z-20 text-accent/75 [animation-delay:-3.8s] sm:-left-3 sm:bottom-28">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 7. SIDE: Bottom-left accent */}
              <div className="hero-sparkle pointer-events-none absolute -left-1 bottom-10 z-20 text-accent/70 [animation-delay:-1.0s] sm:-left-2 sm:bottom-12">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3 sm:w-3">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 8. SIDE: Mid-right inner edge */}
              <div className="hero-sparkle pointer-events-none absolute -right-2 top-[52%] z-20 text-accent/75 [animation-delay:-2.6s] sm:-right-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 9. SIDE: Lower-right inner edge */}
              <div className="hero-sparkle pointer-events-none absolute right-2 bottom-12 z-20 text-accent/80 [animation-delay:-4.2s] sm:right-3 sm:bottom-16">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>
            </>
          ) : (
            /* Right Frame Sparkle Constellation */
            <>
              {/* 1. TOP CREST: Apex crown above arch peak */}
              <div className="hero-sparkle pointer-events-none absolute left-[52%] -top-3 z-20 -translate-x-1/2 text-accent/90 [animation-delay:-1.0s] sm:-top-4.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sm:h-4.5 sm:w-4.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 2. TOP SLOPE: Upper-right curve */}
              <div className="hero-sparkle pointer-events-none absolute right-[18%] top-0.5 z-20 text-accent/85 [animation-delay:-2.0s] sm:top-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 3. TOP SHOULDER: Main top-left shoulder */}
              <div className="hero-sparkle pointer-events-none absolute left-4 top-7 z-20 text-accent [animation-delay:-0.4s] sm:left-6 sm:top-9">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:h-5 sm:w-5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 4. SIDE: Upper-right outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -right-2.5 top-18 z-20 text-accent/85 [animation-delay:-2.8s] sm:-right-3.5 sm:top-22">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 5. SIDE: Mid-right outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -right-3 top-[44%] z-20 text-accent/80 [animation-delay:-3.4s] sm:-right-4">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sm:h-4.5 sm:w-4.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 6. SIDE: Lower-right outer edge */}
              <div className="hero-sparkle pointer-events-none absolute -right-2.5 bottom-24 z-20 text-accent/75 [animation-delay:-4.0s] sm:-right-3 sm:bottom-28">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 7. SIDE: Bottom-right accent */}
              <div className="hero-sparkle pointer-events-none absolute -right-1 bottom-10 z-20 text-accent/70 [animation-delay:-1.4s] sm:-right-2 sm:bottom-12">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3 sm:w-3">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 8. SIDE: Mid-left inner edge */}
              <div className="hero-sparkle pointer-events-none absolute -left-2 top-[52%] z-20 text-accent/75 [animation-delay:-1.8s] sm:-left-2.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>

              {/* 9. SIDE: Lower-left inner edge */}
              <div className="hero-sparkle pointer-events-none absolute left-2 bottom-12 z-20 text-accent/80 [animation-delay:-4.6s] sm:left-3 sm:bottom-16">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="sm:h-3.5 sm:w-3.5">
                  <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
                </svg>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default ArchFrame;
                                                                                    