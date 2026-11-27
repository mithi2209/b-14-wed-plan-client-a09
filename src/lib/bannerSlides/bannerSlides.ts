

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
      "/images/banners/img-50.jpg",
      "/images/banners/img-54.jpg",
    ],
    darkImages: [
      "/images/banners/img-108.jpg",
      "/images/banners/img-70.jpg",
      
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
    "/images/banners/img-49.jpg",
    "/images/banners/img-62.jpg",
    ],
    darkImages: [
      
      "/images/banners/img-113.jpg",
      "/images/banners/img-71.jpg",
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
      "/images/banners/img-105.jpg",
    ],
    darkImages: [
      "/images/banners/img-68.jpg",
      "/images/banners/img-38.jpg",
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
      "/images/banners/img-48.jpg",
      "/images/banners/img-63.jpg",
    ],
    darkImages: [
      "/images/banners/img-75.jpg",
      "/images/banners/img-65.jpg",
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
      "/images/banners/img-52.jpg",
       "/images/banners/img-20.jpg",
    ],
    darkImages: [
     "/images/banners/img-21.jpg",
      "/images/banners/img-23.jpg",
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

  {
  id: 6,
  lightImages: [
    "/images/banners/img-56.jpg",
    "/images/banners/img-59.jpg",
  ],
  darkImages: [
    "/images/banners/img-42.jpg",
    "/images/banners/img-74.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 45%"],
  alt: "Bride and groom sharing an intimate romantic moment",
  eyebrow: "A love worth celebrating",
  title: "Two hearts,",
  highlight: "one beautiful story.",
  description:
    "Every love story deserves a celebration of its own. Find the inspiration and talented professionals to make yours extraordinary.",
  buttonText: "Start Planning",
},
{
  id: 7,
  lightImages: [
    "/images/banners/img-51.jpg",
    "/images/banners/img-37.jpg",
    
  ],
  darkImages: [
    "/images/banners/img-77.jpg",
    "/images/banners/img-115.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Luxury wedding tablescape with elegant floral decorations",
  eyebrow: "Elegance in every detail",
  title: "Designed with grace,",
  highlight: "celebrated with love.",
  description:
    "Discover beautiful wedding aesthetics, thoughtful details, and exceptional vendors who understand your vision.",
  buttonText: "Explore Inspiration",
},
{
  id: 8,
  lightImages: [
    "/images/banners/img-47.jpg",
    "/images/banners/img-29.jpg",
  ],
  darkImages: [
    "/images/banners/img-69.jpg",
    "/images/banners/img-82.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Dreamy outdoor wedding surrounded by nature",
  eyebrow: "A setting made for love",
  title: "Say yes to,",
  highlight: "your dream setting.",
  description:
    "Whether it's a garden celebration or an intimate destination wedding, discover venues that make every moment magical.",
  buttonText: "Find Your Venue",
},
{
  id: 9,
  lightImages: [
    "/images/banners/img-60.jpg",
    "/images/banners/img-61.jpg",
  ],
  darkImages: [
    "/images/banners/img-83.jpg",
    "/images/banners/img-76.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 45%"],
  alt: "Beautiful bride in an elegant wedding gown",
  eyebrow: "The beauty of your moment",
  title: "Your dream look,",
  highlight: "your kind of magic.",
  description:
    "From timeless bridal fashion to flawless beauty styling, find creative professionals to help you feel your most beautiful.",
  buttonText: "Discover Bridal Style",
},
{
  id: 10,
  lightImages: [
     "/images/banners/download (10).jpg",
    "/images/banners/img-72.jpg",
    
  ],
  darkImages: [
  
    "/images/banners/img-81.jpg",
    "/images/banners/img-17.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Wedding photographer capturing a precious celebration",
  eyebrow: "Memories that last forever",
  title: "Beyond the moment,",
  highlight: "forever in frames.",
  description:
    "Preserve every smile, every tear, and every little detail with photographers and filmmakers who tell your story beautifully.",
  buttonText: "Meet Photographers",
},
{
  id: 11,
  lightImages: [
    "/images/banners/img-55.jpg",
    "/images/banners/img-53.jpg",
  ],
  darkImages: [
    "/images/banners/img-66.jpg",
    "/images/banners/img-78.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Romantic wedding dinner with candlelight and flowers",
  eyebrow: "An evening to cherish",
  title: "Set the scene,",
  highlight: "create the magic.",
  description:
    "Bring your celebration to life with enchanting decorations, beautiful lighting, and details that leave everyone inspired.",
  buttonText: "Explore Decorations",
},
{
  id: 12,
  lightImages: [
     "/images/banners/img-46.jpg",
    "/images/banners/img-41.jpg",
  ],
  darkImages: [
    "/images/banners/img-39.jpg",
     "/images/banners/img-36.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Newlyweds celebrating their first dance together",
  eyebrow: "The magic of forever",
  title: "One special day,",
  highlight: "a lifetime of love.",
  description:
    "From your first dance to the final farewell, discover everything you need to create memories that stay close to your heart.",
  buttonText: "Plan Your Day",
},
{
  id: 13,
  lightImages: [
   
    "/images/banners/img-45.jpg",
    "/images/banners/img-80.jpg",
  ],
  darkImages: [
    "/images/banners/img-109.jpg",
    "/images/banners/img-67.jpg",
  ],
  lightPositions: ["center 40%", "center 45%"],
  darkPositions: ["center 35%", "center 40%"],
  alt: "Elegant wedding celebration with luxurious romantic details",
  eyebrow: "Your vision, our inspiration",
  title: "Not just a wedding,",
  highlight: "your own fairytale.",
  description:
    "Make planning feel effortless. Explore trusted wedding professionals, gather ideas, and bring every little dream together in one place.",
  buttonText: "Begin Your Journey",
},



];
