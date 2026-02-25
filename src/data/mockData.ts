// ✅ IMAGE IMPORTS (from src/assets)
import gulabo from "@/assets/gulabo.jpg";
import kailash from "@/assets/kailash.jpg";
import falguni from "@/assets/falguni.jpg";
import mamekhan from "@/assets/mamekhan.jpg";
import nooransisters from "@/assets/nooransisters.jpg";
import papon from "@/assets/papon.jpg";
import swati from "@/assets/swati.jpg";
import nalini from "@/assets/nalini.jpg";
import maljiarts from "@/assets/maljiarts.jpg";
import ashok from "@/assets/ashok.jpg";

/* =========================
   INTERFACES
========================= */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  sentiment: "happy" | "neutral" | "sad";
}

export interface Artist {
  id: string;
  name: string;
  skill: string;
  location: string;
  image: string;
  coverImage?: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  tags: string[];
  story: string;
  experience: string;
  priceRange: string;
  services: Service[];
  gallery: string[];
  reviews: Review[];
}

/* =========================
   CATEGORIES (Required by Explore.tsx)
========================= */

export const categories = [
  { id: "dance", name: "Folk Dance", icon: "💃" },
  { id: "music", name: "Folk Music", icon: "🎵" },
  { id: "painting", name: "Painting", icon: "🎨" },
  { id: "sculpture", name: "Sculpture", icon: "🗿" },
  { id: "craft", name: "Craft", icon: "🧵" },
  { id: "wood", name: "Wood Art", icon: "🪵" },
];

/* =========================
   ARTISTS
========================= */

export const featuredArtists: Artist[] = [
  {
    id: "1",
    name: "Gulabo Sapera",
    skill: "Kalbeliya Dancer",
    location: "Rajasthan",
    image: gulabo,
    coverImage: gulabo,
    rating: 4.9,
    reviewCount: 210,
    verified: true,
    tags: ["dance"],
    story: "Renowned Kalbeliya dancer preserving Rajasthan’s folk tradition.",
    experience: "30+ years",
    priceRange: "₹50,000 - ₹2,00,000",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "2",
    name: "Kailash Kumar",
    skill: "Chhau Performer",
    location: "Jharkhand",
    image: kailash,
    coverImage: kailash,
    rating: 4.8,
    reviewCount: 145,
    verified: true,
    tags: ["dance"],
    story: "Traditional Chhau dancer performing across India.",
    experience: "18 years",
    priceRange: "₹30,000 - ₹1,50,000",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "3",
    name: "Falguni Pathak",
    skill: "Garba Singer",
    location: "Mumbai",
    image: falguni,
    coverImage: falguni,
    rating: 4.6,
    reviewCount: 320,
    verified: true,
    tags: ["music"],
    story: "Popular Garba and Dandiya Raas performer.",
    experience: "25+ years",
    priceRange: "₹2,00,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "4",
    name: "Mame Khan",
    skill: "Manganiyar Folk Singer",
    location: "Rajasthan",
    image: mamekhan,
    coverImage: mamekhan,
    rating: 4.7,
    reviewCount: 190,
    verified: true,
    tags: ["music"],
    story: "Famous Manganiyar folk singer from Rajasthan.",
    experience: "20+ years",
    priceRange: "₹1,00,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "5",
    name: "Nooran Sisters",
    skill: "Sufi Folk Singers",
    location: "Punjab",
    image: nooransisters,
    coverImage: nooransisters,
    rating: 4.7,
    reviewCount: 280,
    verified: true,
    tags: ["music"],
    story: "Powerful Sufi folk music duo.",
    experience: "15+ years",
    priceRange: "₹1,50,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "6",
    name: "Papon",
    skill: "Folk-Fusion Singer",
    location: "Assam",
    image: papon,
    coverImage: papon,
    rating: 4.5,
    reviewCount: 310,
    verified: true,
    tags: ["music"],
    story: "Blends Assamese folk with contemporary music.",
    experience: "20+ years",
    priceRange: "₹2,00,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "7",
    name: "Swati Pasari",
    skill: "Contemporary Painter",
    location: "Kolkata",
    image: swati,
    coverImage: swati,
    rating: 4.7,
    reviewCount: 120,
    verified: true,
    tags: ["painting"],
    story: "Modern artist promoting sustainability through art.",
    experience: "12 years",
    priceRange: "₹50,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "8",
    name: "Nalini Malani",
    skill: "Visual Artist",
    location: "Mumbai",
    image: nalini,
    coverImage: nalini,
    rating: 4.5,
    reviewCount: 98,
    verified: true,
    tags: ["painting"],
    story: "Internationally recognized contemporary visual artist.",
    experience: "40+ years",
    priceRange: "₹3,00,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "9",
    name: "Malji Arts",
    skill: "Sandalwood Carving",
    location: "Jaipur",
    image: maljiarts,
    coverImage: maljiarts,
    rating: 4.7,
    reviewCount: 160,
    verified: true,
    tags: ["wood", "craft"],
    story: "Masters of intricate sandalwood carvings.",
    experience: "35+ years",
    priceRange: "₹10,000 - ₹5,00,000",
    services: [],
    gallery: [],
    reviews: [],
  },
  {
    id: "10",
    name: "Ashok Gudigar",
    skill: "Temple Sculptor",
    location: "Karnataka",
    image: ashok,
    coverImage: ashok,
    rating: 4.2,
    reviewCount: 75,
    verified: true,
    tags: ["sculpture"],
    story: "Expert in traditional temple sculptures.",
    experience: "22 years",
    priceRange: "₹50,000+",
    services: [],
    gallery: [],
    reviews: [],
  },
];

export const nearbyArtists = featuredArtists;

/* =========================
   EVENT TYPES
========================= */

export const eventTypes = [
  { id: "wedding", name: "Wedding", icon: "💒", description: "Traditional performances" },
  { id: "festival", name: "Festival", icon: "🪔", description: "Cultural celebrations" },
  { id: "workshop", name: "Workshop", icon: "🎨", description: "Learn from artists" },
  { id: "private", name: "Private Event", icon: "🏛️", description: "Exclusive performances" },
];