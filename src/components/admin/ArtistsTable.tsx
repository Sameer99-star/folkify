const artists = [
  {
    name: "Ramesh Bhagat",
    craft: "Baul Singer",
    location: "West Bengal",
    status: "Pending",
  },
  {
    name: "Mohammad Yusuf",
    craft: "Blue Pottery",
    location: "Rajasthan",
    status: "Pending",
  },
];

const ArtistsTable = () => {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#FAF6F1] text-gray-700 text-sm">
          <tr>
            <th className="px-6 py-4">Artist</th>
            <th className="px-6 py-4">Craft</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {artists.map((artist, index) => (
            <tr
           key={index}
           className="border-t hover:bg-orange-50 hover:shadow-sm transition"
          >

              <td className="px-6 py-4 font-medium text-[#5A2E1B]">
                {artist.name}
              </td>
              <td className="px-6 py-4">{artist.craft}</td>
              <td className="px-6 py-4">{artist.location}</td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                  {artist.status}
                </span>
              </td>

              <td className="px-6 py-4 text-right space-x-2">
                <button className="px-4 py-1 rounded-full bg-green-600 text-white text-sm hover:bg-green-700">
                  Approve
                </button>
                <button className="px-4 py-1 rounded-full bg-red-500 text-white text-sm hover:bg-red-600">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistsTable;
