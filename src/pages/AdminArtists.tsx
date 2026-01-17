import ArtistsTable from "../components/admin/ArtistsTable";
  // smart hacakhtn project
const AdminArtists = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-[#5A2E1B] mb-2">
        Artists Management
      </h1>

      <p className="text-gray-600 mb-6">
        Approve, reject and manage folk artists here.
      </p>

      <ArtistsTable />
    </>
  );
};

export default AdminArtists;


