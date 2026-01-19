import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DiyaIcon } from "@/components/icons/FolkIcons";
import heroImage from "@/assets/hero-illustration.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indian folk traditions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Logo */}
        <div className="mb-6">
          <DiyaIcon size={56} className="text-saffron animate-diya" />
        </div>

        {/* App Name */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 max-w-2xl">
          Discover India’s
          <span className="block text-primary">Living Traditions</span>
        </h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;