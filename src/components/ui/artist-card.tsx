import { motion } from 'framer-motion';
import { StarIcon, LocationIcon, VerifiedIcon } from '../icons/FolkIcons';

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

export const ArtistCard = ({
  name,
  skill,
  location,
  image,
  rating,
  reviewCount,
  verified = false,
  tags = [],
  onClick,
}: ArtistCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Ornamental frame */}
      <div className="ornamental-frame">
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Artist image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Verified badge */}
          {verified && (
            <div className="absolute top-3 right-3">
              <VerifiedIcon size={24} className="text-saffron drop-shadow-lg" />
            </div>
          )}
          
          {/* Content overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4">
            {/* Rating with diya glow */}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex items-center gap-1 px-2 py-0.5 bg-background/90 backdrop-blur-sm rounded-full">
                <StarIcon size={14} filled className="text-saffron diya-glow" />
                <span className="text-sm font-semibold text-foreground">{rating}</span>
                <span className="text-xs text-muted-foreground">({reviewCount})</span>
              </div>
            </div>
            
            {/* Artist name */}
            <h3 className="font-display text-xl text-primary-foreground font-semibold mb-1 line-clamp-1">
              {name}
            </h3>
            
            {/* Skill */}
            <p className="text-primary-foreground/80 text-sm font-medium mb-2">
              {skill}
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
              <LocationIcon size={14} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tags as fabric chips */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 px-1">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="fabric-chip text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Compact horizontal card variant
export const ArtistCardCompact = ({
  name,
  skill,
  location,
  image,
  rating,
  verified = false,
  onClick,
}: Omit<ArtistCardProps, 'reviewCount' | 'tags'>) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex gap-3 p-3 bg-card rounded-2xl shadow-soft cursor-pointer"
    >
      {/* Image with frame */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-gold-muted/30">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {verified && (
          <div className="absolute top-1 right-1">
            <VerifiedIcon size={16} className="text-saffron" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="font-display text-base font-semibold text-foreground truncate">
          {name}
        </h4>
        <p className="text-sm text-muted-foreground mb-1">{skill}</p>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <StarIcon size={12} filled className="text-saffron" />
            <span className="font-medium">{rating}</span>
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
