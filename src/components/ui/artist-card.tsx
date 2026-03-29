import { motion } from "framer-motion";
import { StarIcon, LocationIcon, VerifiedIcon } from "../icons/FolkIcons";

interface ArtistCardProps {
  id: string;
  name: string;
  skill: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  verified?: boolean;
  onClick?: () => void;
}

export const ArtistCard = ({
  name,
  skill,
  location,
  image,
  rating,
  reviewCount,
  verified = false,
  onClick,
}: ArtistCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="relative h-40 rounded-lg overflow-hidden shadow-sm">

        {/* 🔥 BLUR BACKGROUND (fills empty space) */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />

        {/* 🔥 ORIGINAL IMAGE (FULLY VISIBLE) */}
        <img
          src={image}
          alt={name}
          className="relative w-full h-full object-contain"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* VERIFIED */}
        {verified && (
          <div className="absolute top-2 right-2">
            <VerifiedIcon size={14} className="text-saffron" />
          </div>
        )}

        {/* TEXT */}
        <div className="absolute bottom-2 left-2 right-2 text-white">
          <div className="flex items-center gap-1 text-xs">
            <StarIcon size={12} filled className="text-saffron" />
            <span>{rating}</span>
            <span className="opacity-80">({reviewCount})</span>
          </div>

          <h3 className="text-sm font-semibold truncate">{name}</h3>
          <p className="text-xs opacity-80 truncate">{skill}</p>

          <div className="flex items-center gap-1 text-xs opacity-70">
            <LocationIcon size={10} />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================= */
/* COMPACT CARD                  */
/* ============================= */

export const ArtistCardCompact = ({
  name,
  skill,
  location,
  image,
  rating,
  verified = false,
  onClick,
}: Omit<ArtistCardProps, "reviewCount">) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex gap-2 p-2 bg-card rounded-lg shadow-sm cursor-pointer"
    >
      <div className="relative w-14 h-14 rounded-md overflow-hidden">

        {/* Blur BG */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />

        {/* Main Image */}
        <img
          src={image}
          alt={name}
          className="relative w-full h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-xs font-semibold truncate">{name}</h4>
        <p className="text-xs text-muted-foreground truncate">{skill}</p>

        <div className="flex items-center gap-2 text-xs">
          <span>{rating} ⭐</span>
          <span className="truncate">{location}</span>
        </div>
      </div>
    </motion.div>
  );
};