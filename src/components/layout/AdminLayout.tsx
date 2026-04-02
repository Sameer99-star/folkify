import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import AdminSidebar from "../AdminSidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("CLICKED"); // debug
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex bg-[#FAF6F2] min-h-screen">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="ml-64 w-full">
        
        {/* HEADER */}
        <div className="flex justify-end items-center p-4 bg-white shadow">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">
          {children}
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;