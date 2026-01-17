import { motion } from 'framer-motion';
import { Search, Mic } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { CategoryTile } from '@/components/ui/category-tile';
import { ArtistCard, ArtistCardCompact } from '@/components/ui/artist-card';
import { Button } from '@/components/ui/button';
import { FolkDivider, DiyaIcon } from '@/components/icons/FolkIcons';
import { categories, featuredArtists, nearbyArtists } from '@/data/mockData';
import heroImage from '@/assets/hero-illustration.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Indian folk artists"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        >
          {/* Decorative diya */}
          <motion.div variants={itemVariants} className="mb-4">
            <DiyaIcon size={40} className="text-saffron animate-diya" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-4 max-w-2xl"
          >
            Discover India's
            <span className="block text-primary">Living Traditions</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg mb-8 max-w-md"
          >
            Connect with authentic folk artists, artisans, and performers for your special moments
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={itemVariants}
            className={`relative w-full max-w-md transition-all duration-300 ${
              searchFocused ? 'scale-105' : ''
            }`}
          >
            <div
              className={`flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-elevated border-2 transition-all ${
                searchFocused ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for artists, skills, or events..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onClick={() => navigate('/explore')}
              />
              <button className="p-2 -mr-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            {searchFocused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-xl"
              />
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Decorative Divider */}
      <div className="px-8 py-4">
        <FolkDivider className="w-full h-4 text-primary" />
      </div>

      {/* Categories Section */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-2xl text-foreground">Explore by Craft</h2>
          <button className="text-primary text-sm font-medium">View All</button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {categories.slice(0, 6).map((category) => (
            <CategoryTile
              key={category.id}
              title={category.name}
              icon={<span className="text-2xl">{category.icon}</span>}
              onClick={() => navigate('/explore')}
            />
          ))}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-6">
        <div className="flex items-center justify-between px-4 mb-4">
          <div>
            <h2 className="font-display text-2xl text-foreground">Featured Artists</h2>
            <p className="text-sm text-muted-foreground">Masters of their craft</p>
          </div>
          <button className="text-primary text-sm font-medium">See All</button>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {featuredArtists.slice(0, 4).map((artist) => (
            <div key={artist.id} className="flex-shrink-0 w-64">
              <ArtistCard
                {...artist}
                onClick={() => navigate(`/artist/${artist.id}`)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Artists Section */}
      <section className="px-4 py-6 bg-muted/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display text-2xl text-foreground">Artists Near You</h2>
            <p className="text-sm text-muted-foreground">Based on your location</p>
          </div>
        </div>

        <div className="space-y-3">
          {nearbyArtists.map((artist) => (
            <ArtistCardCompact
              key={artist.id}
              {...artist}
              onClick={() => navigate(`/artist/${artist.id}`)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-terracotta rounded-3xl p-8 text-center relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="warli-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="3" fill="white" />
                  <path d="M10 3L17 17H3L10 3z" stroke="white" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#warli-pattern)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-2xl text-primary-foreground mb-3">
              Are You a Folk Artist?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-sm mx-auto">
              Share your craft with the world. Join our community of traditional artists.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
              onClick={() => navigate('/register')}
            >
              Join as Folk Professional
            </Button>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
};

export default Index;
