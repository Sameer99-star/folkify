import React from "react";
import AdminSidebar from "../AdminSidebar";
// smart hacakhtn project

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex bg-[#FAF6F2] min-h-screen">
      <AdminSidebar />

      <main className="ml-64 w-full p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
