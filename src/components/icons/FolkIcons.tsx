import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  filled?: boolean;
}

export const DiscoverIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle 
      cx="12" 
      cy="12" 
      r="9" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill={filled ? "currentColor" : "none"}
      opacity={filled ? 0.15 : 1}
    />
    <path 
      d="M12 3v2M12 19v2M3 12h2M19 12h2" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <path 
      d="M12 9v6M9 12h6" 
      stroke={filled ? "hsl(var(--background))" : "hsl(var(--background))"} 
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const ExploreIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle 
      cx="11" 
      cy="11" 
      r="7" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill={filled ? "currentColor" : "none"}
      opacity={filled ? 0.15 : 1}
    />
    <path 
      d="M11 8v3l2 2" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16 16l4 4" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    {/* Decorative folk elements */}
    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="14" cy="8" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="8" cy="14" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);

export const BookingsIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect 
      x="3" 
      y="4" 
      width="18" 
      height="18" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill={filled ? "currentColor" : "none"}
      opacity={filled ? 0.15 : 1}
    />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Decorative dot pattern */}
    <circle cx="8" cy="15" r="1.5" fill="currentColor" />
    <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    <circle cx="16" cy="15" r="1.5" fill="currentColor" />
  </svg>
);

export const ProfileIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle 
      cx="12" 
      cy="8" 
      r="4" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill={filled ? "currentColor" : "none"}
      opacity={filled ? 0.15 : 1}
    />
    <path 
      d="M4 20c0-4 4-6 8-6s8 2 8 6" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
      fill={filled ? "currentColor" : "none"}
      opacity={filled ? 0.15 : 1}
    />
    {/* Decorative bindi */}
    <circle cx="12" cy="5" r="0.5" fill="currentColor" />
  </svg>
);

export const DiyaIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path 
      d="M12 3c0 0-1 3-1 4s.5 2 1 2 1-1 1-2-1-4-1-4z" 
      fill="currentColor" 
      className="animate-diya"
    />
    <ellipse cx="12" cy="14" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5 14v4c0 2.2 3.1 4 7 4s7-1.8 7-4v-4" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="14" rx="4" ry="2" fill="currentColor" opacity="0.2" />
  </svg>
);

export const StarIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill={filled ? "currentColor" : "none"}
    />
  </svg>
);

export const HeartIcon = ({ size = 24, filled = false, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      d="M12 21s-8-5-8-11a5 5 0 0110 0 5 5 0 0110 0c0 6-8 11-8 11z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill={filled ? "currentColor" : "none"}
    />
  </svg>
);

export const LocationIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="11" r="2" fill="currentColor" />
  </svg>
);

export const VerifiedIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      d="M12 2l2.5 2.5H18v3.5l2.5 2.5L18 13v3.5h-3.5L12 19l-2.5-2.5H6V13L3.5 10.5 6 8V4.5h3.5L12 2z" 
      fill="currentColor"
    />
    <path d="M9 11l2 2 4-4" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WedddingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 13v8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 8c0-1.7 1.3-3 3-3s3 1.3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
  </svg>
);

export const FestivalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 22h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path 
      d="M6 22v-8c0-3.3 2.7-6 6-6s6 2.7 6 6v8" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <circle cx="12" cy="6" r="1" fill="currentColor" className="animate-diya" />
    <path d="M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const WorkshopIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 12v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PrivateEventIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      d="M12 3L2 9l10 6 10-6-10-6z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    <path d="M2 9v8l10 6 10-6V9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="13" r="2" fill="currentColor" />
  </svg>
);

// Decorative Warli-inspired pattern
export const WarliPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <defs>
      <pattern id="warli" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
        <path d="M10 5L15 15H5L10 5z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100" height="20" fill="url(#warli)" />
  </svg>
);

// Decorative border
export const FolkDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 10" className={className} preserveAspectRatio="none">
    <path 
      d="M0 5h60 M70 5a5 5 0 110-5 5 5 0 110 5 M80 5h40 M130 5a5 5 0 110-5 5 5 0 110 5 M140 5h60" 
      stroke="currentColor" 
      strokeWidth="1" 
      fill="none"
      opacity="0.4"
    />
    <circle cx="100" cy="5" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);
