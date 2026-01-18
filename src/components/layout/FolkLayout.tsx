import React from "react";
import FolkSidebar from "../FolkSidebar";

const FolkLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen flex">
      <FolkSidebar />

      <main className="ml-64 w-full px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default FolkLayout;
