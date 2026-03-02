import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mic, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { CategoryChip } from "@/components/ui/category-tile";
import { ArtistCard } from "@/components/ui/artist-card";
import { Button } from "@/components/ui/button";
import { categories, featuredArtists } from "@/data/mockData";

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArtists = featuredArtists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      artist.tags.some((tag) =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-3 bg-muted rounded-full px-4 py-2.5">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artists..."
                className="flex-1 bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              <Mic className="w-5 h-5 text-primary" />
            </div>

            <Button variant="outline" size="icon" className="rounded-full">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto px-4 pb-4">
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
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredArtists.length} artists found
        </p>

        {/* 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ArtistCard
                {...artist}
                onClick={() => navigate("/artist/" + artist.id)}
              />
            </motion.div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl mb-2">No Artists Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Explore;