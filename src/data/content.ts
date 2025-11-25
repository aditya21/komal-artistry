export type Service = {
  title: string;
  description: string;
  inclusions: string[];
  priceNote: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Bridal" | "Party" | "Haldi" | "Photoshoot" | "BeforeAfter";
  image: string;
  description: string;
  products: string;
};

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  review: string;
  rating: number;
  avatar: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

import heroImage from "../assets/hero.jpeg";
import heroImage2 from "../assets/IMG_2739.jpg";
import heroImage3 from "../assets/IMG_3368.jpg";
import portfolioImage1 from "../assets/p1.jpeg";
import portfolioImage2 from "../assets/m4.jpeg";
import portfolioImage3 from "../assets/p2.jpeg";
import portfolioImage4 from "../assets/GXME9691.JPG";

export const heroImages = [
  heroImage,
  heroImage2,
  heroImage3,
  portfolioImage1,
  portfolioImage2,
  portfolioImage3,
  portfolioImage4,
];

export const services: Service[] = [
  {
    title: "Bridal Makeup – HD",
    description: "Timeless luxury look customized to your features and outfit palette.",
    inclusions: ["HD/airbrush base", "Hairstyle", "Draping", "Premium lashes"],
    priceNote: "Starting from ₹18,000",
  },
  {
    title: "Engagement / Reception",
    description: "Statement glam with soft shimmer that translates beautifully on camera.",
    inclusions: ["Custom eye look", "Textured waves", "Jewellery setting"],
    priceNote: "Starting from ₹12,000",
  },
  {
    title: "Party / Sangeet Makeup",
    description: "Camera-ready glam for bridesmaids & VIP guests.",
    inclusions: ["Skin prep", "Long-wear base", "Minimal hairstyling"],
    priceNote: "Starting from ₹7,500",
  },
  {
    title: "Photoshoot / Editorial",
    description: "Creative concepts for magazine, pre-wedding & branding shoots.",
    inclusions: ["Concept moodboard", "Two looks", "On-set touch ups"],
    priceNote: "Custom quote on request",
  },
];

export const addOns = [
  "Hair styling",
  "Sari / dupatta draping",
  "Nail artistry",
  "Luxury skin prep ritual",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Golden Hour Bridal",
    category: "Bridal",
    image: heroImages[0],
    description: "Soft matte skin with rose-gold halo eyes for Riya's Pune pheras.",
    products: "Charlotte Tilbury, Dior Backstage, Huda Beauty",
  },
  {
    id: "p2",
    title: "Reception Glam",
    category: "Party",
    image: heroImages[1],
    description: "Smokey mauve tones with glassy skin for an indoor reception.",
    products: "NARS, Too Faced, MAC Cosmetics",
  },
  {
    id: "p3",
    title: "Haldi Glow",
    category: "Haldi",
    image: heroImages[2],
    description: "Minimal makeup focusing on skincare glow for sunlight rituals.",
    products: "Bobbi Brown, Benefit Cosmetics",
  },
  {
    id: "p4",
    title: "Editorial Moment",
    category: "Photoshoot",
    image: heroImages[3],
    description: "Bold liner with brushed-up brows for a designer campaign.",
    products: "Pat McGrath, Anastasia Beverly Hills",
  },
  {
    id: "p5",
    title: "Before & After – Classic",
    category: "BeforeAfter",
    image: heroImages[4],
    description: "Natural features enhanced to camera-ready glam.",
    products: "Smashbox, Fenty Beauty",
  },
  {
    id: "p6",
    title: "Party Muse",
    category: "Party",
    image: heroImages[5],
    description: "Berry lips paired with soft curls for a sundowner cocktail.",
    products: "Estee Lauder, Rare Beauty",
  },
  {
    id: "p7",
    title: "Signature Luxe",
    category: "Bridal",
    image: heroImages[6],
    description: "High-glam look featuring Komal’s signature dewy base and sculpted hair.",
    products: "Hourglass, Tatcha, Givenchy",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sneha",
    event: "Wedding, Pune",
    review:
      "Komal made me feel like the best version of myself. Makeup stayed flawless for 14 hours and looked dreamy in every photo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t2",
    name: "Aisha",
    event: "Haldi, Mumbai",
    review:
      "Loved the skin-first approach. She kept it fresh, breathable yet vibrant for all the haldi madness.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t3",
    name: "Radhika",
    event: "Reception, Goa",
    review:
      "Very professional, punctual and the hygiene levels are unmatched. Book her without second thoughts!",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=200&q=80",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How early should I book my bridal slot?",
    answer: "We open bridal bookings 6–9 months in advance. Prime weekend dates fill quickly, so reserve as soon as your venue is locked in.",
  },
  {
    question: "Which makeup brands do you work with?",
    answer: "A curated kit featuring Dior, Charlotte Tilbury, NARS, Bobbi Brown, Pat McGrath and other luxury, skin-safe brands.",
  },
  {
    question: "Do you travel to venues?",
    answer: "Yes! We travel pan-India and internationally. Travel, stay and outstation logistics are billed separately.",
  },
];

export const quickLinks = {
  phone: "+91 9860108248",
  whatsapp: "https://wa.me/919860108248",
  instagram: "https://www.instagram.com/komal_artistry__",
  locationLabel: "Studio: Kalyani Nagar, Pune",
};
