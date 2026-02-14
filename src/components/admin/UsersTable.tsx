import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

const UsersTable = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data || []);
    }

    setLoading(false);
  };

  const handleAddUser = async () => {
    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([{ name, email }]);

    if (error) {
      console.error("Error adding user:", error);
    } else {
      setName("");
      setEmail("");
      fetchUsers();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* FORM SECTION */}
      <div className="p-6 border-b flex gap-4 items-end flex-wrap">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Enter email"
          />
        </div>

        <button
          onClick={handleAddUser}
          className="bg-[#5A2E1B] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Add User
        </button>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="p-6 text-center text-gray-500">
          Loading users...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && users.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No users found.
        </div>
      )}

      {/* TABLE */}
      {!loading && users.length > 0 && (
        <table className="w-full text-left">
          <thead className="bg-orange-50 text-[#5A2E1B]">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Created At</th>
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
                <td className="px-6 py-4 text-gray-600">
                  {new Date(user.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
};

export default UsersTable;
