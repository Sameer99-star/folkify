import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import choiceBg from "../assets/auth-choice-bg.jpg"; // 👈 different background

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { type: paramType } = useParams();

  // Determine type: either "login" or "signup"
  const type =
    paramType === "signup" || paramType === "login"
      ? paramType
      : searchParams.get("type") || "login";

  const goUser = () => {
    navigate("/auth/form?type=" + type + "&role=user");
  };

  const goArtist = () => {
    if (type === "signup") {
      navigate("/signup/artist");
    } else {
      navigate("/auth/form?type=login&role=artist");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url(" + choiceBg + ")" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          {type === "login" ? "Login As" : "Sign Up As"}
        </h1>

        <Button
          className="w-full py-3 text-lg"
          size="lg"
          onClick={goUser}
        >
          As User
        </Button>

        <Button
          className="w-full py-3 text-lg"
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