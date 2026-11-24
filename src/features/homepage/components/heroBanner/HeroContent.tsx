


"use client";

import Link from "next/link";
import HeroContentStatic from "./HeroContentStatic";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { WeddingSlide } from "@/lib/bannerSlides/bannerSlides";
import { motion, useReducedMotion, type Variants } from "framer-motion";


interface HeroContentProps {
  slide: WeddingSlide;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22 } },
};

const HeroContent = ({ slide }: HeroContentProps) => {

  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    // Fallback: static, no motion
    return (
      <div className="relative z-20 w-full">
        <HeroContentStatic slide={slide} />
      </div>
    );
  }

  return (
 
    <motion.div
      variants={reduceMotion ? undefined : container}
      initial="show"
      animate={reduceMotion ? undefined : "show"}
      exit={reduceMotion ? undefined : "exit"}
      className="w-full"
    >
      {/* Eyebrow */}
      <motion.div
        variants={reduceMotion ? undefined : item}
        className="mb-5 flex items-center gap-2.5 sm:mb-7 sm:gap-3"
      >
        <motion.span
          initial={false}
          animate={reduceMotion ? undefined : { scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="block h-px w-8 origin-left bg-accent sm:w-12"
        />
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-mocha dark:text-soft-mocha sm:text-[10px] sm:tracking-[0.3em] md:text-xs">
          {slide.eyebrow}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={reduceMotion ? undefined : item}
        className="font-heading text-balance text-[clamp(2rem,4.2vw,3.75rem)] font-medium leading-[1.15] tracking-tight text-espresso dark:text-ivory sm:leading-[1.12]"
      >
        {slide.title}
        <span className="mt-1 block italic text-mocha dark:text-antique-gold sm:mt-1.5">
          {slide.highlight}
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={reduceMotion ? undefined : item}
        className="mt-5 max-w-xl text-[15px] leading-7 text-mocha/90 dark:text-beige/85 sm:mt-7 sm:text-base lg:text-[17px] lg:leading-8"
      >
        {slide.description}
      </motion.p>

      {/* CTA */}
      <motion.div
        variants={reduceMotion ? undefined : item}
        className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-5"
      >
        <Link
          href="/services"
          className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-xs font-semibold text-ivory shadow-lg shadow-espresso/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso/90 hover:shadow-xl dark:bg-antique-gold dark:text-dark-espresso dark:shadow-antique-gold/20 dark:hover:bg-antique-gold/90 sm:min-h-12 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-sm"
        >
          {slide.buttonText}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-4" />
        </Link>

        <span className="flex items-center gap-1.5 text-[11px] text-mocha dark:text-soft-mocha sm:gap-2 sm:text-xs md:text-sm">
          <Sparkles className="size-3.5 text-accent sm:size-4" />
          Made for your special day
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
