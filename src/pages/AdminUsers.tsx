import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import UsersTable from "../components/admin/UsersTable";

const AdminUsers = () => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      navigate("/auth/login");
      return;
    }

    const userId = sessionData.session.user.id;

    const { data: userData, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error || userData.role !== "admin") {
      alert("Access denied ❌");
      navigate("/");
    } else {
      setAuthorized(true); // ✅ allow render
    }
  };

  if (!authorized) {
    return <div className="p-6">Checking access...</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-[#5A2E1B]">
        Users Management
      </h1>

      <p className="text-gray-600 mt-2 mb-6">
        View and manage all platform users.
      </p>

      <UsersTable />
    </>
  );
};

export default AdminUsers;