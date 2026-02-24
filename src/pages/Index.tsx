import { motion } from "framer-motion";
import { Search, Mic } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ArtistCard, ArtistCardCompact } from "@/components/ui/artist-card";
import { Button } from "@/components/ui/button";
import { FolkDivider, DiyaIcon } from "@/components/icons/FolkIcons";
import { featuredArtists, nearbyArtists } from "@/data/mockData";

import heroImage from "@/assets/hero-illustration.jpg";
import paintingImg from "@/assets/painting.jpg";
import folkMusicImg from "@/assets/folk-music.jpg";
import folkDanceImg from "@/assets/folk-dance.jpg";
import potteryImg from "@/assets/pottery.jpg";
import weavingImg from "@/assets/weaving.jpg";
import woodenCraftImg from "@/assets/woodencraft.jpg";
import handmadeTextileImg from "@/assets/handmade-textile.jpg";

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
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Indian folk artists"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <DiyaIcon size={40} className="text-saffron animate-diya" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl"
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

          {/* Search */}
          <motion.div
            variants={itemVariants}
            className={`relative w-full max-w-md transition-all duration-300 ${
              searchFocused ? "scale-105" : ""
            }`}
          >
            <div
              className={`flex items-center gap-3 bg-card/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-elevated border-2 transition-all ${
                searchFocused ? "border-primary" : "border-transparent"
              }`}
            >
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for artists, skills, or events..."
                className="flex-1 bg-transparent focus:outline-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onClick={() => navigate("/explore")}
              />
              <button className="p-2 -mr-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="px-8 py-4">
        <FolkDivider className="w-full h-4 text-primary" />
      </div>

      {/* Explore by Craft */}
      <section className="px-4 py-8">
        <h2 className="font-display text-2xl mb-6">Explore by Craft</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Painting", image: paintingImg },
            { name: "Folk Music", image: folkMusicImg },
            { name: "Folk Dance", image: folkDanceImg },
            { name: "Pottery", image: potteryImg },
            { name: "Weaving", image: weavingImg },
            { name: "Wooden Craft", image: woodenCraftImg },
            { name: "Handmade Textile", image: handmadeTextileImg },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/explore")}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-2">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-6">
        <div className="px-4 mb-4">
          <h2 className="font-display text-2xl">Featured Artists</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto px-4 pb-4">
          {featuredArtists.slice(0, 4).map((artist) => (
            <div key={artist.id} className="flex-shrink-0 w-64">
              <ArtistCard
                {...artist}
                onClick={() => navigate("/artist/" + artist.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Artists */}
      <section className="px-4 py-6 bg-muted/30">
        <h2 className="font-display text-2xl mb-4">Artists Near You</h2>

        <div className="space-y-3">
          {nearbyArtists.map((artist) => (
            <ArtistCardCompact
              key={artist.id}
              {...artist}
              onClick={() => navigate("/artist/" + artist.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-terracotta rounded-3xl p-8 text-center"
        >
          <h2 className="font-display text-2xl text-primary-foreground mb-3">
            Are You a Folk Artist?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Share your craft with the world. Join our community.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-background text-primary"
            onClick={() => navigate("/register")}
          >
            Join as Folk Professional
          </Button>
        </motion.div>
      </section>
    </AppLayout>
  );
};

export default Index;