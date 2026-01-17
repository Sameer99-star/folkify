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
  sentiment: 'happy' | 'neutral' | 'sad';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: 'music', name: 'Folk Music', icon: '🎵', count: 234 },
  { id: 'dance', name: 'Traditional Dance', icon: '💃', count: 189 },
  { id: 'painting', name: 'Folk Art', icon: '🎨', count: 312 },
  { id: 'craft', name: 'Handicrafts', icon: '🏺', count: 256 },
  { id: 'textile', name: 'Textiles', icon: '🧵', count: 178 },
  { id: 'pottery', name: 'Pottery', icon: '🫖', count: 145 },
  { id: 'storytelling', name: 'Storytelling', icon: '📖', count: 89 },
  { id: 'puppetry', name: 'Puppetry', icon: '🎭', count: 67 },
];

export const featuredArtists: Artist[] = [
  {
    id: '1',
    name: 'Lakshmi Devi',
    skill: 'Madhubani Painter',
    location: 'Madhubani, Bihar',
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    tags: ['Madhubani', 'Wall Art', 'Workshops'],
    story: 'Born into a family of traditional Madhubani artists in the heart of Bihar, I learned this sacred art form at my grandmother\'s feet. Each stroke tells a story passed down through five generations. My paintings celebrate the divine feminine, nature\'s abundance, and the timeless tales from our epics.',
    experience: '25+ years of preserving and teaching Madhubani art',
    priceRange: '₹5,000 - ₹50,000',
    services: [
      { id: 's1', name: 'Custom Wall Painting', description: 'Transform your space with authentic Madhubani murals', price: '₹15,000 onwards', duration: '3-5 days' },
      { id: 's2', name: 'Workshop (Group)', description: 'Learn traditional techniques in an immersive session', price: '₹2,500/person', duration: '4 hours' },
      { id: 's3', name: 'Commission Artwork', description: 'Personalized paintings for your special occasions', price: '₹5,000 onwards', duration: '1-2 weeks' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=400',
    ],
    reviews: [
      { id: 'r1', userName: 'Priya M.', rating: 5, comment: 'Lakshmi ji\'s work transformed our home. The attention to detail is extraordinary!', date: '2 weeks ago', sentiment: 'happy' },
      { id: 'r2', userName: 'Rahul S.', rating: 5, comment: 'Best workshop experience. Learned so much about our heritage.', date: '1 month ago', sentiment: 'happy' },
    ],
  },
  {
    id: '2',
    name: 'Ramesh Bhagat',
    skill: 'Baul Singer',
    location: 'Santiniketan, West Bengal',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop',
    rating: 4.8,
    reviewCount: 89,
    verified: true,
    tags: ['Baul', 'Live Performance', 'Spiritual'],
    story: 'The Baul tradition flows through my veins. For thirty years, I have wandered singing the songs of divine love. My ektara and dotara carry the wisdom of the mystic poets - Lalon Fakir, Rabindranath. Each performance is a spiritual journey.',
    experience: '30 years as a wandering Baul performer',
    priceRange: '₹15,000 - ₹1,00,000',
    services: [
      { id: 's1', name: 'Wedding Performance', description: 'Sacred music for your special day', price: '₹35,000 onwards', duration: '2-3 hours' },
      { id: 's2', name: 'Festival Performance', description: 'Authentic Baul experience for cultural events', price: '₹25,000 onwards', duration: '1-2 hours' },
    ],
    gallery: [],
    reviews: [
      { id: 'r1', userName: 'Ananya D.', rating: 5, comment: 'His voice touched our souls. Unforgettable wedding ceremony!', date: '3 weeks ago', sentiment: 'happy' },
    ],
  },
  {
    id: '3',
    name: 'Sunita Kumari',
    skill: 'Kathak Dancer',
    location: 'Lucknow, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=600&fit=crop',
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    tags: ['Kathak', 'Classical', 'Training'],
    story: 'Trained in the Lucknow gharana, I have dedicated my life to preserving the grace and storytelling of Kathak. From the courts of Nawabs to international stages, each footwork pattern carries centuries of tradition.',
    experience: '20 years of performance and teaching',
    priceRange: '₹20,000 - ₹2,00,000',
    services: [
      { id: 's1', name: 'Stage Performance', description: 'Full classical Kathak recital', price: '₹50,000 onwards', duration: '1.5-2 hours' },
      { id: 's2', name: 'Private Classes', description: 'One-on-one Kathak training', price: '₹3,000/session', duration: '1.5 hours' },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: '4',
    name: 'Mohammad Yusuf',
    skill: 'Blue Pottery Artisan',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=600&fit=crop',
    rating: 4.7,
    reviewCount: 98,
    verified: true,
    tags: ['Blue Pottery', 'Ceramics', 'Decor'],
    story: 'My family has been crafting blue pottery for seven generations. This Persian-influenced art form found its home in Jaipur centuries ago. Each piece I create carries the distinctive cobalt blue that has made our craft world-renowned.',
    experience: '35 years mastering traditional techniques',
    priceRange: '₹500 - ₹25,000',
    services: [
      { id: 's1', name: 'Custom Orders', description: 'Bespoke pottery for homes and events', price: 'Price varies', duration: '2-4 weeks' },
      { id: 's2', name: 'Pottery Workshop', description: 'Hands-on experience creating your own piece', price: '₹1,500/person', duration: '3 hours' },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: '5',
    name: 'Geeta Rabari',
    skill: 'Kutchi Embroiderer',
    location: 'Bhuj, Gujarat',
    image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=400&h=600&fit=crop',
    rating: 4.8,
    reviewCount: 73,
    verified: false,
    tags: ['Embroidery', 'Textile', 'Traditional'],
    story: 'The mirror work and intricate stitches of Kutchi embroidery are my inheritance. In the vast Rann, our women have created this vibrant art for generations. Each piece takes months of patient, meditative work.',
    experience: '28 years of traditional Kutchi craft',
    priceRange: '₹2,000 - ₹50,000',
    services: [
      { id: 's1', name: 'Custom Garments', description: 'Traditional embroidered clothing', price: '₹8,000 onwards', duration: '4-6 weeks' },
    ],
    gallery: [],
    reviews: [],
  },
  {
    id: '6',
    name: 'Raju Naik',
    skill: 'Warli Artist',
    location: 'Dahanu, Maharashtra',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
    rating: 4.6,
    reviewCount: 64,
    verified: true,
    tags: ['Warli', 'Tribal Art', 'Murals'],
    story: 'Born into the Warli tribe, this art is not just my profession but my identity. The simple geometric forms - circles, triangles, squares - tell stories of our daily life, our festivals, our connection with nature.',
    experience: '22 years preserving tribal heritage',
    priceRange: '₹3,000 - ₹30,000',
    services: [
      { id: 's1', name: 'Wall Murals', description: 'Transform spaces with authentic Warli art', price: '₹10,000 onwards', duration: '2-4 days' },
    ],
    gallery: [],
    reviews: [],
  },
];

export const nearbyArtists = featuredArtists.slice(0, 4);

export const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: '💒', description: 'Traditional performances for your celebration' },
  { id: 'festival', name: 'Festival', icon: '🪔', description: 'Cultural events and community celebrations' },
  { id: 'workshop', name: 'Workshop', icon: '🎨', description: 'Learn traditional arts and crafts' },
  { id: 'private', name: 'Private Event', icon: '🏛️', description: 'Intimate gatherings and special occasions' },
];
