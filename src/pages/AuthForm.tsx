import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import loginBg from "../assets/login-bg.jpg";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type") || "login";
  const role = searchParams.get("role") || "user";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: role,
          },
        },
      });

      console.log("SIGNUP DATA:", data);
      console.log("SIGNUP ERROR:", error);

      if (error) {
        alert(error.message);
        return;
      }

      // Insert into public.users table
      if (data.user) {
        await supabase.from("users").insert([
          {
            id: data.user.id,
            name: fullName,
            email: email,
            role: role,
          },
        ]);
      }

      alert("Signup successful!");
      navigate("/auth/login");
    } else {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("LOGIN DATA:", data);
  console.log("LOGIN ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  // ✅ Get user from database
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", data.user.id)
    .single();

  console.log("DB USER:", userData);

  if (userError) {
    alert("User data not found");
    return;
  }

  // ✅ Redirect based on DB role
  if (userData.role === "artist") {
  navigate("/folk-dashboard");
} else if (userData.role === "admin") {
  navigate("/admin/users");
} else {
  navigate("/dashboard");
}
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
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            {role === "artist" && (
              <>
                <Input placeholder="Skill / Art Form" required />
                <Input placeholder="Portfolio / Website Link" />
              </>
            )}
          </>
        )}

        <Input
          type="email"
          placeholder="Email"
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