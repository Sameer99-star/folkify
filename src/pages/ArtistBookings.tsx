import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import FolkLayout from "../components/layout/FolkLayout";

const ArtistBookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return;

    const { data } = await supabase
      .from("bookings")
      .select("*")
      .eq("artist_id", session.user.id)
      .order("created_at", { ascending: false });

    if (data) {
      setBookings(data);
    }
  };

  const updateBooking = async (
    bookingId: string,
    status: string
  ) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", bookingId);

    if (!error) {
      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId
            ? { ...b, status }
            : b
        )
      );
    }
  };

  return (
    <FolkLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-2xl font-bold">
            Booking Requests
          </h1>

          <p className="text-gray-500">
            Accept or reject requests
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            No booking requests yet
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <div className="space-y-2">

                <p>
                  <strong>Event:</strong>{" "}
                  {booking.event_type}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {booking.event_date}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {booking.status}
                </p>

              </div>

              {booking.status === "requested" && (
                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() =>
                      updateBooking(
                        booking.id,
                        "accepted"
                      )
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() =>
                      updateBooking(
                        booking.id,
                        "rejected"
                      )
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>

                </div>
              )}
            </div>
          ))
        )}
      </div>
    </FolkLayout>
  );
};

export default ArtistBookings;