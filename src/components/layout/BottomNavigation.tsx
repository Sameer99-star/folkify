import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { DiscoverIcon, ExploreIcon, BookingsIcon, ProfileIcon } from '../icons/FolkIcons';

interface NavItem {
  path: string;
  label: string;
  icon: typeof DiscoverIcon;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Discover', icon: DiscoverIcon },
  { path: '/explore', label: 'Explore', icon: ExploreIcon },
  { path: '/bookings', label: 'Bookings', icon: BookingsIcon },
  { path: '/profile', label: 'Profile', icon: ProfileIcon },
];

export const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-card/95 backdrop-blur-lg border-t border-border safe-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center justify-center flex-1 h-full tap-target"
              whileTap={{ scale: 0.9 }}
            >
              {/* Ripple effect container */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-2 top-1 bottom-2 bg-primary/10 rounded-xl"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              
              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon 
                  size={22} 
                  filled={isActive}
                  className={`transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <span className={`text-[10px] font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};
