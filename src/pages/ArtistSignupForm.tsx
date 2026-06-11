import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import artistBg from "../assets/artist-bg.jpg";

const ArtistSignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // CREATE AUTH ACCOUNT

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (!data.user) {
        alert("Failed to create artist account.");
        return;
      }

      // SAVE ARTIST DATA

      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            id: data.user.id,
            name: name,
            email: email,
            role: "artist",
            skill: skill,
            location: location,
            experience: experience,
            bio: bio,
            phone_number: phoneNumber || null,
            avatar_url: null,
          },
        ]);

      if (insertError) {
        alert(insertError.message);
        return;
      }

      alert("Artist profile created successfully!");

      navigate("/folk-dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative py-10 px-4"
      style={{
        backgroundImage: `url(${artistBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white/95 backdrop-blur-md w-full max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-4">
          Create Artist Profile
        </h1>

        <Input
          placeholder="Artist Name / Stage Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          placeholder="Art Form (e.g. Folk Singer, Painter)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          required
        />

        <Input type="file" accept="image/*" />

        <Textarea
          placeholder="Professional Experience"
          rows={3}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <Input
          placeholder="City / State"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <Textarea
          placeholder="Tell us about yourself and your art"
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Input
          placeholder="Contact Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Button
          type="submit"
          className="w-full py-3 text-lg"
        >
          Create Artist Profile
        </Button>
      </form>
    </div>
  );
};

export default ArtistSignupForm;