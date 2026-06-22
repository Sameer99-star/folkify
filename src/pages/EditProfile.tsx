import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FolkLayout from "../components/layout/FolkLayout";
import { supabase } from "../supabase";

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (data) {
        setName(data.Name || "");
        setSkill(data.skill || "");
        setLocation(data.location || "");
        setExperience(data.experience || "");
        setBio(data.bio || "");
        setPhoneNumber(data.phone_number || "");
      }
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return;

    const { error } = await supabase
      .from("users")
      .update({
        Name: name,
        skill,
        location,
        experience,
        bio,
        phone_number: phoneNumber,
      })
      .eq("id", session.user.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile updated successfully");

    navigate("/folk/profile");
  };

  return (
    <FolkLayout>
      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-semibold">
          Edit Profile
        </h2>

        <input
          className="w-full border p-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Artist Name"
        />

        <input
          className="w-full border p-3 rounded"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Art Form"
        />

        <input
          className="w-full border p-3 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />

        <input
          className="w-full border p-3 rounded"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience"
        />

        <textarea
          className="w-full border p-3 rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />

        <input
          className="w-full border p-3 rounded"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />

        <button
          onClick={handleSave}
          className="bg-[#C04A1A] text-white px-6 py-3 rounded"
        >
          Save Changes
        </button>
      </div>
    </FolkLayout>
  );
};

export default EditProfile;