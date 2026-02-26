import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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


    if (role === "artist") navigate("/folk-dashboard");
    else navigate("/dashboard");

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

  alert("Signup successful! Please check your email.");
  navigate("/auth/login");
}
    else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (role === "artist") navigate("/folk-dashboard");
      else navigate("/admin/users"); // change later if needed
    }
 
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
          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
      </form>
    </div>
  );
};

export default AuthForm;