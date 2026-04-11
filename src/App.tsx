import ArtistBookings from "./pages/ArtistBookings";
import AdminBookings from "./pages/AdminBookings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboardHome from "./pages/AdminDashboardHome";
import AdminArtists from "./pages/AdminArtists";
import AdminUsers from "./pages/AdminUsers";
import FolkDashboard from "./pages/FolkDashboard";
import FolkBookings from "./pages/FolkBookings";
import FolkProfile from "./pages/FolkProfile";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import ArtistProfile from "./pages/ArtistProfile";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import Auth from "./pages/Auth";
import AuthForm from "./pages/AuthForm";
import ArtistSignupForm from "./pages/ArtistSignupForm";

/* NEW PAGES */
import ProfileEdit from "./pages/ProfileEdit";
import Language from "./pages/Language";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

/* 🔐 PROTECTED ROUTE */
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        setAllowed(true);
      } else {
        window.location.href = "/auth/login";
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return allowed ? children : null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>

            {/* ================= LANDING ================= */}
            <Route path="/" element={<Landing />} />

            {/* ================= AUTH ================= */}
            <Route path="/auth/:type" element={<Auth />} />
            <Route path="/auth/form" element={<AuthForm />} />
            <Route path="/signup/artist" element={<ArtistSignupForm />} />

            {/* ================= USER ================= */}
            <Route path="/dashboard" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/artist/:id" element={<ArtistProfile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />

            {/* PROFILE SUB PAGES */}
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/profile/language" element={<Language />} />
            <Route path="/profile/settings" element={<Settings />} />

            {/* ================= ARTIST ================= */}
            <Route path="/folk-dashboard" element={<FolkDashboard />} />
            <Route path="/folk/bookings" element={<FolkBookings />} />
            <Route path="/folk/profile" element={<FolkProfile />} />

            {/* ================= ADMIN ================= */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboardHome />} />
              <Route path="artists" element={<AdminArtists />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="users" element={<AdminUsers />} />

              {/* ✅ FIXED ROUTE */}
              <Route path="artist-bookings" element={<ArtistBookings />} />
            </Route>

            {/* ================= 404 ================= */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;