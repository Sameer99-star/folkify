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

// ✅ NEW IMPORT
import miniatureImg from "@/assets/miniature.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <AppLayout>

      {/* HERO */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={heroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <DiyaIcon size={30} className="text-saffron mb-2" />

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Discover India's
            <span className="block text-primary">Living Traditions</span>
          </h1>

          <div className="mt-4 w-full max-w-xs">
            <div className="flex items-center bg-white rounded-full px-3 py-2 shadow">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                className="flex-1 ml-2 outline-none text-sm"
                placeholder="Search..."
                onClick={() => navigate("/explore")}
              />
              <Mic className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-3">
        <FolkDivider className="w-full h-3 text-primary" />
      </div>

      {/* ================= EXPLORE BY CRAFT ================= */}
      <section className="px-3 py-5">
        <h2 className="text-lg mb-4 font-semibold">Explore by Craft</h2>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {[
            { name: "Painting", image: paintingImg },
            { name: "Miniature Art", image: miniatureImg }, // ✅ ADDED HERE
            { name: "Folk Music", image: folkMusicImg },
            { name: "Folk Dance", image: folkDanceImg },
            { name: "Pottery", image: potteryImg },
            { name: "Weaving", image: weavingImg },
            { name: "Wooden Craft", image: woodenCraftImg },
            { name: "Textile", image: handmadeTextileImg },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/explore")}
              className="rounded-md overflow-hidden cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-center mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED ARTISTS ================= */}
      <section className="py-5">
        <h2 className="px-4 mb-3 text-lg font-semibold">
          Featured Artists
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 px-3">
          {featuredArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              {...artist}
              onClick={() => navigate("/artist/" + artist.id)}
            />
          ))}
        </div>
      </section>

      {/* ================= NEARBY ================= */}
      <section className="px-3 py-5 bg-muted/20">
        <h2 className="text-lg mb-3 font-semibold">
          Artists Near You
        </h2>

        <div className="space-y-2">
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
      <section className="px-3 py-6">
        <div className="bg-gradient-terracotta rounded-xl p-5 text-center">
          <h2 className="text-white font-semibold mb-2">
            Are You a Folk Artist?
          </h2>
          <Button onClick={() => navigate("/register")}>
            Join Now
          </Button>
        </div>
      </section>

    </AppLayout>
  );
};

export default Index;