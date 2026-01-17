import { motion } from 'framer-motion';
import { ChevronRight, Globe, Heart, HelpCircle, LogOut, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { FolkDivider } from '@/components/icons/FolkIcons';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'Personal Information', path: '/profile/edit' },
    { icon: Heart, label: 'Saved Artists', path: '/profile/saved' },
    { icon: Globe, label: 'Language', value: 'English', path: '/profile/language' },
    { icon: Settings, label: 'Settings', path: '/profile/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
  ];

  return (
    <AppLayout>
      <div className="px-4 py-6 safe-top">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Avatar */}
          <div className="ornamental-frame w-28 h-28 mx-auto mb-4">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
          </div>
          
          <h1 className="font-display text-2xl text-foreground mb-1">Guest User</h1>
          <p className="text-muted-foreground mb-4">Exploring India's heritage</p>
          
          <div className="flex gap-3 justify-center">
            <Button onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="outline" onClick={() => navigate('/register')}>
              Create Account
            </Button>
          </div>
        </div>

        <FolkDivider className="w-full h-4 text-primary/30 mb-6" />

        {/* Join as Artist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-terracotta rounded-2xl p-5 mb-6 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="font-display text-lg text-primary-foreground mb-2">
              Are You a Folk Artist?
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-3">
              Share your craft with the world and connect with admirers of traditional art.
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="bg-background text-primary hover:bg-background/90"
            >
              Join as Professional
            </Button>
          </div>
          
          {/* Decorative pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
            <svg viewBox="0 0 50 100" className="h-full" preserveAspectRatio="xMaxYMid slice">
              <circle cx="25" cy="20" r="15" fill="white" />
              <circle cx="25" cy="50" r="10" fill="white" />
              <circle cx="25" cy="80" r="15" fill="white" />
            </svg>
          </div>
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.label}</p>
                {item.value && (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-6 pt-6 border-t border-border">
          <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-destructive/5 transition-colors text-left">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <p className="font-medium text-destructive">Log Out</p>
          </button>
        </div>

        {/* App Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Smart Folk Services v1.0</p>
          <p className="text-xs text-muted-foreground mt-1">Made with ❤️ for Indian Heritage</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
