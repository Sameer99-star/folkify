import AdminBookings from "./pages/AdminBookings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboardHome from "./pages/AdminDashboardHome";
import AdminArtists from "./pages/AdminArtists";
import AdminUsers from "./pages/AdminUsers";
import FolkDashboard from "./pages/FolkDashboard";
import FolkBookings from "./pages/FolkBookings";
import FolkProfile from "./pages/FolkProfile";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Explore from "./pages/Explore";
import ArtistProfile from "./pages/ArtistProfile";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {

  // 🔥 SUPABASE TEST (DO NOT DELETE YET)
  

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>

            {/* ADMIN ROUTES */}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminDashboardHome />} />
              <Route path="artists" element={<AdminArtists />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="users" element={<AdminUsers />} />
            </Route>

            {/* USER ROUTES */}
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/artist/:id" element={<ArtistProfile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/folk-dashboard" element={<FolkDashboard />} />
            <Route path="/folk/bookings" element={<FolkBookings />} />
            <Route path="/folk/profile" element={<FolkProfile />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
