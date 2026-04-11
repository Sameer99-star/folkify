import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const statusStyles: any = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const ArtistBookings = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    cancelled: 0,
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, filter, sort, bookings]);

  const fetchBookings = async () => {
    const { data } = await supabase.from("bookings").select("*");

    if (!data) return;

    const enriched = await Promise.all(
      data.map(async (booking) => {
        const { data: artist } = await supabase
          .from("users")
          .select("name, skill")
          .eq("id", booking.artist_id)
          .single();

        return {
          ...booking,
          artistName: artist?.name || "Unknown",
          artistSkill: artist?.skill || "Performer",
        };
      })
    );

    setBookings(enriched);

    setStats({
      total: enriched.length,
      pending: enriched.filter(b => b.status === "pending").length,
      accepted: enriched.filter(b => b.status === "accepted").length,
      cancelled: enriched.filter(b => b.status === "cancelled").length,
    });
  };

  const applyFilters = () => {
    let data = [...bookings];

    // 🔍 SEARCH
    if (search) {
      data = data.filter(b =>
        b.artistName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🎯 FILTER
    if (filter !== "all") {
      data = data.filter(b => b.status === filter);
    }

    // ⬇️ SORT
    data.sort((a, b) => {
      if (sort === "latest") {
        return new Date(b.event_date).getTime() - new Date(a.event_date).getTime();
      } else {
        return new Date(a.event_date).getTime() - new Date(b.event_date).getTime();
      }
    });

    setFiltered(data);
  };

  const handleAccept = async (id: string) => {
    await supabase.from("bookings").update({ status: "accepted" }).eq("id", id);
    fetchBookings();
  };

  const handleReject = async (id: string) => {
    await supabase.from("bookings").update({ status: "cancelled" }).eq("id", id);
    fetchBookings();
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Booking Requests</h1>
        <p className="text-gray-500">Manage all artist bookings</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-xl font-bold">{stats.total}</h2>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl shadow">
          <p className="text-sm text-yellow-600">Pending</p>
          <h2 className="text-xl font-bold">{stats.pending}</h2>
        </div>

        <div className="bg-green-50 p-4 rounded-xl shadow">
          <p className="text-sm text-green-600">Accepted</p>
          <h2 className="text-xl font-bold">{stats.accepted}</h2>
        </div>

        <div className="bg-red-50 p-4 rounded-xl shadow">
          <p className="text-sm text-red-600">Cancelled</p>
          <h2 className="text-xl font-bold">{stats.cancelled}</h2>
        </div>
      </div>

      {/* 🔥 CONTROLS */}
      <div className="flex flex-wrap gap-4 items-center">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg w-60"
        />

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="cancelled">Cancelled</option>
        </select>

        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>

      </div>

      {/* BOOKINGS */}
      <div className="space-y-4">
        {filtered.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center justify-between bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center text-white font-bold">
                {booking.artistName?.[0]}
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {booking.artistName}
                </h2>

                <p className="text-sm text-gray-500">
                  {booking.artistSkill}
                </p>

                <div className="text-sm mt-1 text-gray-600">
                  {booking.event_type} •{" "}
                  {new Date(booking.event_date).toDateString()}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusStyles[booking.status]
                }`}
              >
                {booking.status}
              </span>

              {booking.status === "pending" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAccept(booking.id)}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleReject(booking.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ArtistBookings;