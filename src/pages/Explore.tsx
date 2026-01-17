import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mic, SlidersHorizontal, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { CategoryChip } from '@/components/ui/category-tile';
import { ArtistCard } from '@/components/ui/artist-card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { categories, featuredArtists } from '@/data/mockData';
import { FolkDivider } from '@/components/icons/FolkIcons';

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [rating, setRating] = useState(0);

  const filteredArtists = featuredArtists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || 
      artist.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 bg-muted rounded-full px-4 py-2.5">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artists, skills..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full flex-shrink-0"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto px-4 pb-4 scrollbar-hide">
          <CategoryChip
            title="All"
            isActive={!selectedCategory}
            onClick={() => setSelectedCategory(null)}
          />
          {categories.map((category) => (
            <CategoryChip
              key={category.id}
              title={category.name}
              icon={<span>{category.icon}</span>}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredArtists.length} artists found
          </p>
          <button className="text-sm text-primary font-medium">Sort by</button>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ArtistCard
                {...artist}
                onClick={() => navigate(`/artist/${artist.id}`)}
              />
            </motion.div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">No Artists Found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Filter Sheet */}
      <AnimatePresence>
        {showFilters && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-50"
              onClick={() => setShowFilters(false)}
            />
            
            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-card rounded-t-3xl max-h-[85vh] overflow-auto"
            >
              <div className="bottom-sheet-handle" />
              
              <div className="px-6 pb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl">Filters</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Location
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {['Near Me', 'Rajasthan', 'West Bengal', 'Bihar', 'Gujarat'].map((loc) => (
                      <CategoryChip
                        key={loc}
                        title={loc}
                        isActive={false}
                        onClick={() => {}}
                      />
                    ))}
                  </div>
                </div>

                <FolkDivider className="w-full h-4 text-primary/30 my-4" />

                {/* Skill Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Skill Type
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {categories.slice(0, 6).map((cat) => (
                      <CategoryChip
                        key={cat.id}
                        title={cat.name}
                        icon={<span>{cat.icon}</span>}
                        isActive={false}
                        onClick={() => {}}
                      />
                    ))}
                  </div>
                </div>

                <FolkDivider className="w-full h-4 text-primary/30 my-4" />

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Price Range
                  </label>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={100000}
                    step={1000}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <FolkDivider className="w-full h-4 text-primary/30 my-4" />

                {/* Rating */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Minimum Rating
                  </label>
                  <div className="flex gap-2">
                    {[0, 3, 4, 4.5].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRating(r)}
                        className={`px-4 py-2 rounded-full border transition-all ${
                          rating === r
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'border-border text-foreground hover:border-primary/50'
                        }`}
                      >
                        {r === 0 ? 'Any' : `${r}+ ⭐`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => {
                    setPriceRange([0, 100000]);
                    setRating(0);
                  }}>
                    Reset
                  </Button>
                  <Button className="flex-1" onClick={() => setShowFilters(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AppLayout>
  );
};

export default Explore;
