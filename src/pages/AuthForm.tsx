import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import loginBg from "../assets/login-bg.jpg";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type") || "login";
  const role = searchParams.get("role") || "user";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "artist") navigate("/folk-dashboard");
    else navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url(" + loginBg + ")" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          {type === "login" ? "Login" : "Sign Up"} as{" "}
          {role === "artist" ? "Artist" : "User"}
        </h1>

        {type === "signup" && (
          <>
            <Input placeholder="Full Name" required />
            {role === "artist" && (
              <>
                <Input placeholder="Skill / Art Form" required />
                <Input placeholder="Portfolio / Website Link" />
              </>
            )}
          </>
        )}

        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />

        <Button type="submit" className="w-full">
          {type === "login" ? "Login" : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;