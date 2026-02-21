import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

const UsersTable = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState("User");

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
      .insert([{ name, email, role }]);

    if (error) {
      console.error("Error adding user:", error);
    } else {
      setName("");
      setEmail("");
      setRole("User");
      fetchUsers();
    }
  };

  const handleDeleteUser = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting user:", error);
    } else {
      fetchUsers();
    }
  };

  const handleUpdateUser = async () => {
    if (!editingId) return;

    const { error } = await supabase
      .from("users")
      .update({ name: editName, email: editEmail, role: editRole })
      .eq("id", editingId);

    if (error) {
      console.error("Error updating user:", error);
    } else {
      setEditingId(null);
      fetchUsers();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* CREATE USER FORM */}
      <div className="p-6 border-b flex gap-4 items-end flex-wrap">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Artist">Artist</option>
          </select>
        </div>

        <button
          onClick={handleAddUser}
          className="bg-[#5A2E1B] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          Add User
        </button>
      </div>

      {loading && (
        <div className="p-6 text-center text-gray-500">
          Loading users...
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No users found.
        </div>
      )}

      {!loading && users.length > 0 && (
        <table className="w-full text-left">
          <thead className="bg-orange-50 text-[#5A2E1B]">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Created At</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-orange-50 transition"
              >
                <td className="px-6 py-4">
                  {editingId === user.id ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td className="px-6 py-4">
                  {editingId === user.id ? (
                    <input
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.email
                  )}
                </td>

                <td className="px-6 py-4">
                  {editingId === user.id ? (
                    <select
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                      <option value="Artist">Artist</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>

                <td className="px-6 py-4">
                  {new Date(user.created_at).toLocaleString()}
                </td>

                <td className="px-6 py-4 text-right space-x-2">
                  {editingId === user.id ? (
                    <>
                      <button
                        onClick={handleUpdateUser}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingId(user.id);
                          setEditName(user.name);
                          setEditEmail(user.email);
                          setEditRole(user.role);
                        }}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </>
                  )}
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
