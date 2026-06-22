import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Explore = () => {
const [artists, setArtists] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

const [searchParams] = useSearchParams();
const navigate = useNavigate();

const skill = searchParams.get("skill");

useEffect(() => {
const fetchArtists = async () => {
let query = supabase
.from("users")
.select("*")
.eq("role", "artist");

  if (skill) {
    query = query.eq("skill", skill);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
  } else {
    setArtists(data || []);
  }

  setLoading(false);
};

fetchArtists();

}, [skill]);

return (
<div className="p-8">
<h1 className="text-2xl font-bold mb-6">
{skill ? "${skill} Artists" : "Explore Artists 🎨"}
</h1>

  {loading && <p>Loading artists...</p>}

  {!loading && artists.length === 0 && (
    <p>No artists found.</p>
  )}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {artists.map((artist) => (
      <div
        key={artist.id}
        onClick={() => navigate(`/artist/${artist.id}`)}
        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:scale-105 transition"
      >
        <h2 className="text-lg font-semibold">
          {artist.name || artist.Name}
        </h2>

        <p className="text-gray-500">
          {artist.location || "India"}
        </p>

        <p className="text-sm text-orange-600 mt-2">
          {artist.skill || "Artist"}
        </p>
      </div>
    ))}
  </div>
</div>

);
};

export default Explore;