import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type") || "login"; // login | signup
  const role = searchParams.get("role") || "user"; // user | artist

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect after login/signup
    if (role === "artist") {
      navigate("/folk-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="bg-card p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          {type === "login" ? "Login" : "Sign Up"} as{" "}
          {role === "artist" ? "Artist" : "User"}
        </h1>

        {/* USER SIGNUP ONLY */}
        {type === "signup" && role === "user" && (
          <Input placeholder="Full Name" required />
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
