import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
  const getUser = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (sessionData.session) {
      const userId = sessionData.session.user.id;

      const { data } = await supabase
        .from("users")
        .select("name")
        .eq("id", userId)
        .single();

      if (data) {
        setUserName(data.name);
      }
    }
  };

  getUser();
}, []);
  return (
    <div className="flex min-h-screen bg-[#FAF6F1]">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6">
        {/* Admin Header */}
        <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm mb-6">
          <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center text-2xl">
            🛡️
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5A2E1B]">
  Welcome {userName } 👋
</h2>
            <p className="text-sm text-gray-500">
              Smart Folk Services
            </p>
          </div>

          <button
  onClick={async () => {
    console.log("LOGOUT CLICKED");
    await supabase.auth.signOut();
    window.location.href = "/";
  }}
  className="ml-auto px-4 py-2 rounded-full bg-[#C04A1A] text-white text-sm"
>
  Logout
</button>
        </div>

        {/* Child pages will appear here */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;

