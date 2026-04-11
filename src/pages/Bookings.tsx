import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import { AppLayout } from "../components/layout/AppLayout";
import { FolkDivider } from "../components/icons/FolkIcons";

const statusConfig = {
  requested: { label: "Requested", color: "bg-turmeric/20 text-clay" },
  accepted: { label: "Accepted", color: "bg-primary/10 text-primary" },
  completed: { label: "Completed", color: "bg-muted text-muted-foreground" },
  cancelled: { label: "Cancelled", color: "bg-destructive/10 text-destructive" },
};

const Bookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
  const fetchBookings = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) return;

    const userId = sessionData.session.user.id;

    // 1. get bookings
    const { data: bookingsData } = await supabase
      .from("bookings")
      .select("*")
      .eq("user_id", userId);

    if (!bookingsData) return;

    // 2. get artist data for each booking
    const updatedBookings = await Promise.all(
      bookingsData.map(async (booking) => {
        const { data: artist } = await supabase
          .from("users")
          .select("name, skill, avatar_url")
          .eq("id", booking.artist_id)
          .single();

        return {
          ...booking,
          artistName: artist?.name,
          artistSkill: artist?.skill,
          artistImage: artist?.avatar_url,
        };
      })
    );

    setBookings(updatedBookings);
  };

  fetchBookings();
}, []);

  return (
    <AppLayout>
      <div className="px-4 py-6 safe-top">
        <h1 className="font-display text-3xl text-foreground mb-2">
          My Bookings
        </h1>
        <p className="text-muted-foreground mb-6">
          Track your cultural experiences
        </p>

        <FolkDivider className="w-full h-4 text-primary/30 mb-6" />

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6">
            {bookings.map((booking, index) => {
              const status = statusConfig[booking.status] || statusConfig.requested;

              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full border-4 border-background ${
                      booking.status === "accepted"
                        ? "bg-primary"
                        : booking.status === "requested"
                        ? "bg-turmeric"
                        : booking.status === "completed"
                        ? "bg-muted-foreground"
                        : "bg-destructive"
                    }`}
                  />

                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">


                    <div className="flex items-center gap-3 mb-3">
  <img
    src={booking.artistImage || "https://via.placeholder.com/50"}
    className="w-12 h-12 rounded-full object-cover"
  />

  <div className="flex-1">
    <h3 className="font-display text-lg">
      {booking.artistName || "Artist"}
    </h3>
    <p className="text-sm text-muted-foreground">
      {booking.artistSkill || "Performer"}
    </p>
  </div>



                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Event</p>
                        <p className="font-medium">
                          {booking.event_type}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-xs">Date</p>
                        <p className="font-medium">
                          {booking.event_date}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-xs">Price</p>
                        <p className="font-medium text-primary">₹500</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-16">
            <h3>No bookings yet</h3>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Bookings;