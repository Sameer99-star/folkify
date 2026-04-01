import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import AdminSidebar from "../AdminSidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow relative z-50">
      <AdminSidebar />

      <main className="ml-64 w-full">
        {/* HEADER */}
        <div className="flex justify-end items-center p-4 bg-white shadow relative z-50">
          <button
  onClick={async () => {
    console.log("CLICKED"); // 👈 ADD THIS
    await supabase.auth.signOut();
    navigate("/");
  }}
  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 z-50"
>
  Logout
</button>
        </div>

        {/* CONTENT */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;