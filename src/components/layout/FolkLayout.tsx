import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import FolkSidebar from "../FolkSidebar";

const FolkLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen flex">
      <FolkSidebar />

      <main className="ml-64 w-full px-6 py-8">

        {/* Back to Home Button */}
        <div className="flex justify-end mb-6">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C04A1A] text-white hover:bg-[#a53d15] transition"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        {children}

      </main>
    </div>
  );
};

export default FolkLayout;