

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

      <div className="relative aspect-3/4 h-auto w-full max-w-none">

        {/* Gold moon behind */}
        <div className="gold-moon " aria-hidden="true" />

        {/* Offset outline — behind the arch */}
        <div className="arch-outline-behind" aria-hidden="true" />

        {/* The arch frame itself */}
        <div className="arch-frame">
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

        {/* Sparkle */}
        {sparkle && (
          <div className="hero-sparkle pointer-events-none absolute right-4 top-8 z-10 text-accent sm:right-6 sm:top-10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:h-5 sm:w-5"
            >
              <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchFrame;
                                                                                    