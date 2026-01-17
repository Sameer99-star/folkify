import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CategoryTileProps {
  title: string;
  icon: ReactNode;
  image?: string;
  color?: string;
  onClick?: () => void;
}

export const CategoryTile = ({
  title,
  icon,
  image,
  onClick,
}: CategoryTileProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative aspect-square rounded-2xl overflow-hidden group"
    >
      {/* Background */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        <div className="w-12 h-12 flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-full mb-2 text-primary-foreground">
          {icon}
        </div>
        <span className="text-sm font-medium text-primary-foreground text-center">
          {title}
        </span>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-2 right-2 w-4 h-4">
        <svg viewBox="0 0 16 16" className="text-primary-foreground/30">
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="2" cy="8" r="1" fill="currentColor" />
          <circle cx="14" cy="8" r="1" fill="currentColor" />
          <circle cx="8" cy="2" r="1" fill="currentColor" />
          <circle cx="8" cy="14" r="1" fill="currentColor" />
        </svg>
      </div>
    </motion.button>
  );
};

// Horizontal scrolling category chip
export const CategoryChip = ({
  title,
  icon,
  isActive = false,
  onClick,
}: {
  title: string;
  icon?: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-lg'
          : 'bg-card text-foreground border border-border hover:border-primary/30'
      }`}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      <span className="text-sm font-medium">{title}</span>
    </motion.button>
  );
};
