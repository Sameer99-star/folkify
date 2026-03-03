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
  tags?: string[];
  onClick?: () => void;
}

/* ============================= */
/* Main Artist Card              */
/* ============================= */

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
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card">
        
        {/* Portrait Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {verified && (
            <div className="absolute top-3 right-3">
              <VerifiedIcon size={18} className="text-saffron drop-shadow-md" />
            </div>
          )}

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1 mb-1">
              <StarIcon size={14} filled className="text-saffron" />
              <span className="text-sm font-semibold">{rating}</span>
              <span className="text-xs opacity-80">
                ({reviewCount})
              </span>
            </div>

            <h3 className="text-base font-semibold truncate">
              {name}
            </h3>

            <p className="text-sm opacity-90 truncate">
              {skill}
            </p>

            <div className="flex items-center gap-1 text-xs opacity-80 mt-1">
              <LocationIcon size={12} />
              <span className="truncate">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================= */
/* Compact Horizontal Card       */
/* ============================= */

export const ArtistCardCompact = ({
  name,
  skill,
  location,
  image,
  rating,
  verified = false,
  onClick,
}: Omit<ArtistCardProps, "reviewCount" | "tags">) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex gap-3 p-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
    >
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />

        {verified && (
          <div className="absolute top-1 right-1">
            <VerifiedIcon size={14} className="text-saffron" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold truncate">
          {name}
        </h4>

        <p className="text-xs text-muted-foreground truncate">
          {skill}
        </p>

        <div className="flex items-center gap-3 text-xs mt-1">
          <div className="flex items-center gap-1">
            <StarIcon size={12} filled className="text-saffron" />
            <span>{rating}</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <LocationIcon size={12} />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};