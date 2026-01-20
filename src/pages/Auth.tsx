import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { type: paramType } = useParams();

  // Determine type: either "login" or "signup"
  const type =
    paramType === "signup" || paramType === "login"
      ? paramType
      : searchParams.get("type") || "login";

  // Navigate to AuthForm page for user (login or signup)
  const goUser = () => {
    navigate("/auth/form?type=" + type + "&role=user");
  };

  // Navigate for artist
  const goArtist = () => {
    if (type === "signup") {
      // Sign up as artist → extended profile form
      navigate("/signup/artist");
    } else {
      // Login as artist → normal login form
      navigate("/auth/form?type=login&role=artist");
    }
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