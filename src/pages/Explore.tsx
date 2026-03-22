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
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-background border-b">
        <div className="px-3 py-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 bg-muted rounded-full px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artists..."
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
              <Mic className="w-4 h-4 text-primary" />
            </div>

            <Button variant="outline" size="icon" className="rounded-full">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="flex gap-2 overflow-x-auto px-3 pb-3">
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

      {/* RESULTS */}
      <div className="px-3 py-5">
        <p className="text-xs text-muted-foreground mb-3">
          {filteredArtists.length} artists found
        </p>

        {/* 🔥 4 PER ROW + COMPACT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <ArtistCard
                {...artist}
                onClick={() => navigate("/artist/" + artist.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="text-lg mb-1">No Artists Found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Explore;