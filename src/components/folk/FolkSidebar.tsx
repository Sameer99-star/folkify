import { NavLink } from "react-router-dom";

const linkBase =
  "block px-4 py-2 rounded-lg font-medium transition";

const FolkSidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-sm fixed left-0 top-0 p-6">
      <h2 className="text-xl font-bold text-[#5A2E1B] mb-8">
        Folk Dashboard
      </h2>

      <nav className="space-y-2">
        <NavLink
          to="/folk-dashboard"
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

        <NavLink
          to="/folk-dashboard/bookings"
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

        <NavLink
          to="/folk-dashboard/portfolio"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/folk-dashboard/reviews"
          className={({ isActive }) =>
            `${linkBase} ${
              isActive
                ? "bg-orange-100 text-[#C04A1A]"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          Reviews
        </NavLink>
      </nav>
    </aside>
  );
};

export default FolkSidebar;
