


import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { WeddingSlide } from "@/lib/bannerSlides/bannerSlides";





/* Static fallback component — extracted so the reduced-motion branch stays clean */
const  HeroContentStatic = ({ slide }: { slide: WeddingSlide }) =>{

  return (
    
    <div>
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <span className="h-px w-12 bg-accent" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mocha dark:text-soft-mocha sm:text-xs">
          {slide.eyebrow}
        </span>
      </div>

      <h1 className="font-heading text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-medium leading-[1.15] tracking-tight text-espresso dark:text-ivory sm:leading-[1.12]">
        {slide.title}
        <span className="mt-1 block italic text-mocha dark:text-antique-gold">
          {slide.highlight}
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-[15px] leading-7 text-mocha/90 dark:text-beige/85 sm:mt-7 sm:text-base lg:text-[17px] lg:leading-8">
        {slide.description}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-9">
        <Link
          href="/services"
          className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-ivory shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:bg-antique-gold dark:text-dark-espresso"
        >
          {slide.buttonText}
          <ArrowUpRight className="size-4" />
        </Link>
        <span className="flex items-center gap-2 text-xs text-mocha dark:text-soft-mocha sm:text-sm">
          <Sparkles className="size-4" />
          Made for your special day
        </span>
      </div>
    </div>
  );
}

export default HeroContentStatic ;