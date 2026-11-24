

"use client";

import { HeroControlsProps } from "./heroTypes";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroControls = ({
  activeIndex,
  totalSlides,
  onPrevious,
  onNext,
  onSelect,
}: HeroControlsProps) => {

  return (
    
    <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-5 sm:mt-8 sm:gap-4 sm:pt-6 md:mt-10">
      {/* Counter + dots */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="font-heading text-xl italic leading-none text-espresso dark:text-ivory sm:text-2xl md:text-3xl">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-5 bg-accent/60 sm:w-6 md:w-8" />
          <span className="text-[9px] tracking-[0.2em] text-mocha dark:text-soft-mocha sm:text-[10px]">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={activeIndex === i ? "true" : undefined}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeIndex === i
                  ? "w-5 bg-accent sm:w-6 md:w-8"
                  : "w-1.5 bg-accent/30 hover:bg-accent/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous slide"
          className="flex size-9 items-center justify-center rounded-full border border-border text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-espresso hover:bg-espresso hover:text-ivory dark:text-ivory dark:hover:border-accent dark:hover:bg-accent dark:hover:text-dark-espresso sm:size-10"
        >
          <ArrowLeft className="size-3.5 sm:size-4" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className="flex size-9 items-center justify-center rounded-full bg-espresso text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso/90 dark:bg-antique-gold dark:text-dark-espresso dark:hover:bg-antique-gold/90 sm:size-10"
        >
          <ArrowRight className="size-3.5 sm:size-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroControls;
