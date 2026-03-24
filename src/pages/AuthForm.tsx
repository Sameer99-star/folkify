import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import loginBg from "../assets/login-bg.jpg";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type") || "login";
  const role = searchParams.get("role") || "user";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "artist") {
      navigate("/folk-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login Coming Soon 🚀");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
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

        <div className="flex items-center gap-2 my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;