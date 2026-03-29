import { motion } from 'framer-motion';
import {
  ChevronRight,
  Globe,
  Heart,
  HelpCircle,
  LogOut,
  Settings,
  User,
  Edit,
  Instagram
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'Personal Information', path: '/profile/edit' },
    { icon: Heart, label: 'Saved Artists', path: '/profile/saved' },
    { icon: Globe, label: 'Language', path: '/profile/language' },
    { icon: Settings, label: 'Settings', path: '/profile/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
  ];

  return (
    <AppLayout>
      <div className="px-4 py-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-6">

          {/* Avatar */}
          <div className="relative w-24 h-24 mx-auto mb-3">
            <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center text-3xl shadow-md">
              👤
            </div>

            {/* Edit Button */}
            <button
              onClick={() => navigate('/profile/edit')}
              className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-md"
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>

          {/* Name */}
          <h1 className="text-lg font-semibold text-foreground">
            Your Name
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground mb-2">
            Manage your account
          </p>

          {/* Instagram */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Instagram className="w-4 h-4" />
            <span>@your_handle</span>
          </div>
        </div>

        {/* ===== MENU ===== */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/40 transition text-left"
            >
              <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </div>

              <span className="flex-1 text-sm font-medium">
                {item.label}
              </span>

              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          ))}
        </div>

        {/* ===== LOGOUT ===== */}
        <div className="mt-6 pt-5 border-t border-border">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition text-left">
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
              <LogOut className="w-4 h-4 text-red-500" />
            </div>
            <span className="text-sm font-medium text-red-500">
              Log Out
            </span>
          </button>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Smart Folk Services v1.0
          </p>
        </div>

      </div>
    </AppLayout>
  );
};

export default Profile;