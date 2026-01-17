import { NavLink } from "react-router-dom";
// smart hacakhtn project

const linkBase =
  "block px-4 py-2 rounded-lg font-medium transition";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-sm fixed left-0 top-0 p-6">
      <h2 className="text-xl font-bold text-[#5A2E1B] mb-8">
        Smart Folk Admin
      </h2>

      <nav className="space-y-2">
        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        {/* Artists */}
        <NavLink
          to="/admin/artists"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Artists
        </NavLink>

        {/* Bookings */}
        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Bookings
        </NavLink>

        {/* ✅ Users (NEW) */}
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

