import React from "react";

const FolkLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#FAF6F2] min-h-screen">
      <main className="w-full px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default FolkLayout;
