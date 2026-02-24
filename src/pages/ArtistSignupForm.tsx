import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import artistBg from "../assets/artist-bg.jpg";

const ArtistSignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/folk-dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative py-10 px-4"
      style={{ backgroundImage: "url(" + artistBg + ")" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white/95 backdrop-blur-md w-full max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl space-y-4"
      >
        <h1 className="text-3xl font-bold text-center mb-4">
          Create Artist Profile
        </h1>

        {/* BASIC INFO */}
        <Input placeholder="Artist Name / Stage Name" required />
        <Input placeholder="Art Form (e.g. Folk Singer, Painter)" required />

        {/* PROFILE IMAGE */}
        <Input type="file" accept="image/*" />

        {/* EXPERIENCE */}
        <Textarea
          placeholder="Professional Experience (events, awards, years of practice)"
          rows={3}
        />

        {/* LOCATION */}
        <Input placeholder="City / State" required />

        {/* ABOUT */}
        <Textarea
          placeholder="Tell us about yourself and your art"
          rows={4}
          required
        />

        {/* CONTACT */}
        <Input type="email" placeholder="Email Address" required />
        <Input type="password" placeholder="Password" required />
        <Input placeholder="Contact Number" />

        {/* SUBMIT */}
        <Button type="submit" className="w-full py-3 text-lg">
          Create Artist Profile
        </Button>
      </form>
    </div>
  );
};

export default ArtistSignupForm;