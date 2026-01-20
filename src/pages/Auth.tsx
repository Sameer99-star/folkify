import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { type: paramType } = useParams();

  const type =
    paramType === "signup" || paramType === "login"
      ? paramType
      : searchParams.get("type") || "login";

  // User flow (login & signup stay same)
  const goUser = () => {
    navigate("/auth/form?type=" + type + "&role=user");
  };

  // Artist flow
  const goArtist = () => {
    if (type === "signup") {
      navigate("/signup/artist");
    } else {
      navigate("/auth/form?type=login&role=artist");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold">
          {type === "login" ? "Login As" : "Sign Up As"}
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