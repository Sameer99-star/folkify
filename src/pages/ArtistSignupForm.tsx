import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ArtistSignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP: Direct artist to artist dashboard
    // Later this will be replaced with API call
    navigate("/folk-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background/60 via-background/40 to-background px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-card w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
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
        <Button type="submit" className="w-full">
          Create Artist Profile
        </Button>
      </form>
    </div>
  );
};

export default ArtistSignupForm;