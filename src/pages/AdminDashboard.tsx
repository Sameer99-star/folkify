// smart hacakhtn project
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
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
              Platform Admin
            </h2>
            <p className="text-sm text-gray-500">
              Smart Folk Services
            </p>
          </div>

          <button className="ml-auto px-4 py-2 rounded-full bg-[#C04A1A] text-white text-sm">
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

