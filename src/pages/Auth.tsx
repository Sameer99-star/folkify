import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type") || "login"; // "login" or "signup"

  // Navigate to AuthForm page for user
  const goUser = () => {
    navigate("/auth/form?type=" + type + "&role=user");
  };

  // Navigate to AuthForm page for artist
  const goArtist = () => {
    navigate("/auth/form?type=" + type + "&role=artist");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold">
          {type === "login" ? "Login As" : "Sign In As"}
        </h1>

        <Button className="w-full" size="lg" onClick={goUser}>
          As User
        </Button>

        <Button
          className="w-full"
          size="lg"
          variant="outline"
          onClick={goArtist}
        >
          As Artist
        </Button>
      </div>
    </div>
  );
};

export default Auth;