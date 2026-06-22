import { useEffect, useState } from "react";
import { Search, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

import { AppLayout } from "../components/layout/AppLayout";
import { ArtistCard, ArtistCardCompact } from "../components/ui/artist-card";
import { FolkDivider, DiyaIcon } from "../components/icons/FolkIcons";
import { featuredArtists, nearbyArtists } from "../data/mockData";

import heroImage from "../assets/hero-illustration.jpg";
import paintingImg from "../assets/painting.jpg";
import folkMusicImg from "../assets/folk-music.jpg";
import folkDanceImg from "../assets/folk-dance.jpg";
import potteryImg from "../assets/pottery.jpg";
import weavingImg from "../assets/weaving.jpg";
import woodenCraftImg from "../assets/woodencraft.jpg";
import handmadeTextileImg from "../assets/handmade-textile.jpg";
import miniatureImg from "../assets/miniature.jpg";

const Index = () => {
  const navigate = useNavigate();

  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("role", "artist");

      if (error) {
        console.error(error);
        return;
      }

      setArtists(data || []);
    };

    fetchArtists();
  }, []);

  const realArtists = artists.map((artist) => ({
    id: artist.id,
    name: artist.name || artist.Name || "Artist",
    skill: artist.skill || "Artist",
    location: artist.location || "India",
    image:
      artist.image ||
      "https://via.placeholder.com/300x300.png?text=Artist",
    rating: 5,
    reviewCount: 0,
    verified: false,
  }));

  const allFeaturedArtists = [
    ...featuredArtists,
    ...realArtists,
  ];

  const allNearbyArtists = [
    ...nearbyArtists,
    ...realArtists,
  ];

  return (
    <AppLayout>

      {/* HERO */}
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          <DiyaIcon
            size={30}
            className="text-saffron mb-2"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Discover India's
            <span className="block text-primary">
              Living Traditions
            </span>
          </h1>

          <div className="mt-4 w-full max-w-xs">
            <div className="flex items-center bg-white rounded-full px-3 py-2 shadow">
              <Search className="w-4 h-4 text-gray-500" />

              <input
                className="flex-1 ml-2 outline-none text-sm"
                placeholder="Search artists..."
                onClick={() => navigate("/explore")}
                readOnly
              />

              <Mic className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-3">
        <FolkDivider className="w-full h-3 text-primary" />
      </div>

      {/* EXPLORE BY CRAFT */}
      <section className="px-3 py-5">
        <h2 className="text-lg mb-4 font-semibold">
          Explore by Craft
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {[
            { name: "Painting", image: paintingImg },
            { name: "Miniature Art", image: miniatureImg },
            { name: "Folk Music", image: folkMusicImg },
            { name: "Folk Dance", image: folkDanceImg },
            { name: "Pottery", image: potteryImg },
            { name: "Weaving", image: weavingImg },
            { name: "Wooden Craft", image: woodenCraftImg },
            { name: "Textile", image: handmadeTextileImg },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(
                  `/explore?skill=${encodeURIComponent(
                    item.name
                  )}`
                )
              }
              className="rounded-md overflow-hidden cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs text-center mt-1">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section className="py-5">
        <h2 className="px-4 mb-3 text-lg font-semibold">
          Featured Artists
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 px-3">
          {allFeaturedArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              {...artist}
              onClick={() =>
                navigate(`/artist/${artist.id}`)
              }
            />
          ))}
        </div>
      </section>

      {/* ARTISTS NEAR YOU */}
      <section className="px-3 py-5 bg-muted/20">
        <h2 className="text-lg mb-3 font-semibold">
          Artists Near You
        </h2>

        <div className="space-y-2">
          {allNearbyArtists.map((artist) => (
            <ArtistCardCompact
              key={artist.id}
              {...artist}
              onClick={() =>
                navigate(`/artist/${artist.id}`)
              }
            />
          ))}
        </div>
      </section>

    </AppLayout>
  );
};

export default Index;