import UsersTable from "../components/admin/UsersTable";

const AdminUsers = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-[#5A2E1B]">
        Users Management
      </h1>

      <p className="text-gray-600 mt-2 mb-6">
        View and manage all platform users.
      </p>

      <UsersTable />
    </>
  );
};

export default AdminUsers;


