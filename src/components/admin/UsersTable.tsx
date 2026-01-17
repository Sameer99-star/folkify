const users = [
  {
    name: "Amit Sharma",
    email: "amit@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    name: "Neha Verma",
    email: "neha@gmail.com",
    role: "Artist",
    status: "Blocked",
  },
];

const UsersTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-orange-50 text-[#5A2E1B]">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-t hover:bg-orange-50 transition"
            >
              <td className="px-6 py-4 font-medium">{user.name}</td>
              <td className="px-6 py-4 text-gray-600">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="px-4 py-1 rounded-full bg-gray-200 text-sm hover:bg-gray-300">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
