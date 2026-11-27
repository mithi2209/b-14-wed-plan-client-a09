
import type { Swiper as SwiperType } from "swiper";

export interface HeroCarouselProps {
  onSlideChange: (index: number) => void;
  onSwiperReady: (swiper: SwiperType) => void;
}

export interface HeroControlsProps {
  activeIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}


export interface ArchFrameProps {
  lightSrc: string;
  darkSrc: string;
  /** object-position for each image, so faces stay in frame inside the tall arch */
  lightPosition?: string;
  darkPosition?: string;
  alt: string;
  priority?: boolean;
  variant?: "raised" | "dropped";
  badge?: string;
  sparkle?: boolean;
}