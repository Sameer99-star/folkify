import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { motion } from "framer-motion";
import { AppLayout } from "../components/layout/AppLayout";

const statusConfig = {
  requested: { label: "Requested", color: "bg-yellow-100 text-yellow-700" },
  accepted: { label: "Accepted", color: "bg-green-100 text-green-700" },
  completed: { label: "Completed", color: "bg-gray-200 text-gray-700" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700" },
};

const Bookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  const handleCancelBooking = async (id: string) => {
    await supabase
      .from("bookings")
      .update({ status: "cancelled" })
      .eq("id", id);

    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" } : b
      )
    );
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) return;

      const userId = sessionData.session.user.id;

      const { data: bookingsData } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", userId);

      if (!bookingsData) return;

      const updatedBookings = await Promise.all(
        bookingsData.map(async (booking) => {
          const { data: artist } = await supabase
            .from("users")
            .select("*")
            .eq("id", booking.artist_id)
            .maybeSingle();

          return {
            ...booking,
            artistName: artist?.name ?? "Artist",
            artistSkill: artist?.skill ?? "Performer",
            artistImage:
              artist?.avatar_url ||
              `https://ui-avatars.com/api/?name=${artist?.name || "Artist"}`,
          };
        })
      );

      setBookings(updatedBookings);
    };

    fetchBookings();
  }, []);

  return (
    <AppLayout>
      <div className="px-4 py-6">
        <h1 className="text-3xl font-semibold mb-2">My Bookings</h1>
        <p className="text-muted-foreground mb-6">
          Track your cultural experiences
        </p>

        {/* ✅ CLEAN DIVIDER (REPLACEMENT) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* TIMELINE */}
        <div className="relative pl-6">
          {/* LEFT LINE */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full"></div>

          <div className="space-y-6">
            {bookings.map((booking, index) => {
              const status =
                statusConfig[booking.status?.toLowerCase()] ||
                statusConfig.requested;

              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative"
                >
                  {/* DOT */}
                  <div className="absolute -left-[3px] top-6 w-4 h-4 rounded-full bg-red-500 border-4 border-white shadow"></div>

                  {/* CARD */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border hover:shadow-lg transition">
                    
                    {/* TOP */}
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 items-center">
                        <img
                          src={booking.artistImage}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                          <h3 className="font-semibold text-base">
                            {booking.artistName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {booking.artistSkill}
                          </p>
                        </div>
                      </div>

                      {/* STATUS */}
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${status.color}`}
                        >
                          {status.label}
                        </span>

                        {booking.status !== "cancelled" && (
                          <button
                            onClick={() =>
                              handleCancelBooking(booking.id)
                            }
                            className="block text-xs text-red-500 mt-1 hover:underline"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="grid grid-cols-3 mt-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">
                          Event
                        </p>
                        <p className="font-medium">
                          {booking.event_type}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-xs">
                          Date
                        </p>
                        <p className="font-medium">
                          {new Date(
                            booking.event_date
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-xs">
                          Price
                        </p>
                        <p className="font-medium text-primary">
                          ₹500
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {bookings.length === 0 && (
          <div className="text-center mt-10">
            No bookings yet
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Bookings;