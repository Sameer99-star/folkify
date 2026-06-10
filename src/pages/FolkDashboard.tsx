import React, { useEffect, useState } from "react";
import FolkLayout from "../components/layout/FolkLayout";
import { supabase } from "../supabase";

interface ArtistData {
  name: string;
  skill: string;
  location: string;
}

const FolkDashboard: React.FC = () => {
  const [artist, setArtist] = useState<ArtistData | null>(null);

  useEffect(() => {
    const loadArtist = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { data, error } = await supabase
        .from("users")
        .select("name, skill, location")
        .eq("id", session.user.id)
        .single();

      if (!error && data) {
        setArtist(data);
      }
    };

    loadArtist();
  }, []);

  return (
    <FolkLayout>
      <div className="space-y-8">
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-[#5A2E1B]">
            Artist Dashboard
          </h1>

          <p className="text-gray-600 mt-1">
            Manage your bookings, portfolio and reviews
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-3xl">
            🎨
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5A2E1B]">
              {artist?.name || "Loading..."}
            </h2>

            <p className="text-[#8B5E3C]">
              {artist?.skill || "Artist"}
            </p>

            <p className="text-sm text-gray-500">
              {artist?.location || "Location not added"}
            </p>
          </div>

          <button className="ml-auto px-5 py-2 rounded-full bg-[#C04A1A] text-white text-sm">
            Edit Profile
          </button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Bookings" value="0" />
          <StatCard title="Pending Requests" value="0" />
          <StatCard title="Rating" value="0.0" />
          <StatCard title="Profile Views" value="0" />
        </section>
      </div>
    </FolkLayout>
  );
};

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-[#5A2E1B]">{value}</p>
  </div>
);

export default FolkDashboard;