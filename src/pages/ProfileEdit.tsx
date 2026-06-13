import { useEffect, useState } from "react";
import { AppLayout } from "../components/layout/AppLayout";
import { supabase } from "../supabase";

const ProfileEdit = () => {
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (!error && data) {
        setName(data.name || "");
        setEmail(data.email || "");
        setPhoneNumber(
          data.phone_number
            ? String(data.phone_number)
            : ""
        );

        setInstagram(data.instagram || "");
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("User not found");
      return;
    }

    const { error } = await supabase
      .from("users")
      .update({
        name: name,
        email: email,
        phone_number: phoneNumber || null,
        instagram: instagram,
      })
      .eq("id", session.user.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile updated successfully");
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="p-6">
          Loading...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="px-4 py-6 max-w-lg mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          Personal Information
        </h1>

        <div className="space-y-4">

          <div>
            <label className="block mb-1 text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Phone Number
            </label>

            <input
              type="text"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Instagram
            </label>

            <input
              type="text"
              placeholder="your_instagram"
              value={instagram}
              onChange={(e) =>
                setInstagram(e.target.value)
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-primary text-white rounded-lg p-3"
          >
            Save Changes
          </button>

        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileEdit;