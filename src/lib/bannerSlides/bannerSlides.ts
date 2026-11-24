

export interface WeddingSlide {
  id: number;
  lightImages: string[];
  darkImages: string[];
  /** object-position values, index-matched to lightImages / darkImages */
  lightPositions?: string[];
  darkPositions?: string[];
  alt: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
}

export const weddingSlides: WeddingSlide[] = [
  {
    id: 1,
    lightImages: [
      "/images/banners/img-20.jpg",
      "/images/banners/img-13.jpg",
    ],
    darkImages: [
      "/images/banners/img-39.jpg",
      "/images/banners/img-36.jpg",
    ],
    lightPositions: ["center 40%", "center 45%"],
    darkPositions: ["center 35%", "center 45%"],
    alt: "Romantic bride and groom celebrating their wedding",
    eyebrow: "The beginning of forever",
    title: "A day to remember,",
    highlight: "beautifully planned.",
    description:
      "Your dream wedding starts with the right people. Discover trusted professionals and bring your perfect celebration to life.",
    buttonText: "Explore Services",
  },
  {
    id: 2,
    lightImages: [
      "/images/banners/download (10).jpg",
      "/images/banners/img-16.jpg",
    ],
    darkImages: [
      "/images/banners/img-24-dark.jpg",
      "/images/banners/img-27-dark.jpg",
    ],
    lightPositions: ["center 35%", "center 35%"],
    darkPositions: ["center 40%", "center 35%"],
    alt: "Elegant wedding ceremony surrounded by flowers",
    eyebrow: "Every detail matters",
    title: "Little details,",
    highlight: "endless memories.",
    description:
      "From breathtaking decorations to thoughtful finishing touches, find everything you need to make your celebration special.",
    buttonText: "Discover More",
  },
  {
    id: 3,
    lightImages: [
      "/images/banners/img-19-dark.jpg",
      "/images/banners/img-22.jpg",
    ],
    darkImages: [
      "/images/banners/img-26-dark.jpg",
      "/images/banners/img-3.jpg",
    ],
    lightPositions: ["center 35%", "center 45%"],
    darkPositions: ["center 40%", "center 45%"],
    alt: "Beautiful romantic wedding reception",
    eyebrow: "Your story starts here",
    title: "Make your moment,",
    highlight: "truly unforgettable.",
    description:
      "Meet talented wedding vendors, explore inspiring ideas, and turn your vision into a celebration worth remembering.",
    buttonText: "Find Your Vendors",
  },
  // ➕ Add as many slides as you want — just append more objects here
  {
    id: 4,
    lightImages: [
      "/images/banners/img-30.jpg",
      "/images/banners/img-24-dark.jpg",
    ],
    darkImages: [
      "/images/banners/img-18-dark.jpg",
      "/images/banners/img-26-dark.jpg",
    ],
    lightPositions: ["center 40%", "center 45%"],
    darkPositions: ["center 35%", "center 40%"],
    alt: "Timeless wedding moments captured beautifully",
    eyebrow: "Crafted with love",
    title: "Every moment,",
    highlight: "perfectly framed.",
    description:
      "From the first look to the final dance — discover vendors who capture every detail of your special day.",
    buttonText: "View Vendors",
  },
  {
    id: 5,
    lightImages: [
      "/images/banners/img-33.jpg",
      "/images/banners/img-25.jpg",
    ],
    darkImages: [
      "/images/banners/img-27-dark.jpg",
      "/images/banners/img-3.jpg",
    ],
    lightPositions: ["center 45%", "center 40%"],
    darkPositions: ["center 35%", "center 45%"],
    alt: "Elegant wedding venue with romantic ambiance",
    eyebrow: "Where dreams begin",
    title: "A venue that feels,",
    highlight: "just like you.",
    description:
      "Find the perfect backdrop for your celebration — from intimate gardens to grand ballrooms.",
    buttonText: "Explore Venues",
  },
];
