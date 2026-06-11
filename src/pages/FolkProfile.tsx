import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FolkLayout from "../components/layout/FolkLayout";
import { supabase } from "../supabase";

interface ArtistProfileData {
  Name: string;
  skill: string;
  location: string;
  experience: string;
  bio: string;
  phone_number: string;
  email: string;
}

const FolkProfile = () => {
  const navigate = useNavigate();

  const [artist, setArtist] = useState<ArtistProfileData | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { data, error } = await supabase
        .from("users")
        .select(
          "Name, skill, location, experience, bio, phone_number, email"
        )
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setArtist(data);
    };

    loadProfile();
  }, []);

  return (
    <FolkLayout>
      <div className="space-y-8">

        {/* PAGE HEADER */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#5A2E1B]">
            Artist Profile
          </h2>

          <p className="text-gray-600">
            View and manage your personal details
          </p>
        </section>

        {/* PROFILE CARD */}
        <section className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center text-4xl">
            🎨
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5A2E1B]">
              {artist?.Name || "Loading..."}
            </h3>

            <p className="text-gray-600">
              {artist?.skill || "Artist"}
            </p>

            <p className="text-sm text-gray-500">
              {artist?.location || "Location not added"}
            </p>
          </div>

          <button
            onClick={() => navigate("/edit-profile")}
            className="ml-auto px-5 py-2 rounded-full bg-[#C04A1A] text-white text-sm hover:bg-[#a53d15]"
          >
            Edit Profile
          </button>

        </section>

        {/* DETAILS */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">

          <h3 className="text-lg font-semibold text-[#5A2E1B] mb-4">
            Personal Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <Detail
              label="Artist Name"
              value={artist?.Name || ""}
            />

            <Detail
              label="Art Form"
              value={artist?.skill || ""}
            />

            <Detail
              label="Location"
              value={artist?.location || ""}
            />

            <Detail
              label="Experience"
              value={artist?.experience || ""}
            />

            <Detail
              label="Email"
              value={artist?.email || ""}
            />

            <Detail
              label="Phone Number"
              value={artist?.phone_number || ""}
            />

          </div>

          {/* BIO */}

          <div className="mt-6">
            <h4 className="font-semibold text-[#5A2E1B] mb-2">
              About Artist
            </h4>

            <p className="text-gray-700">
              {artist?.bio || "No bio added yet"}
            </p>
          </div>

        </section>

      </div>
    </FolkLayout>
  );
};

const Detail = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="border rounded-xl p-4">
    <p className="text-sm text-gray-500">
      {label}
    </p>

    <p className="font-medium text-[#5A2E1B]">
      {value}
    </p>
  </div>
);

export default FolkProfile;