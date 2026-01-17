// smart hacakhtn project
const bookings = [
  {
    event: "Wedding Performance",
    artist: "Lakshmi Devi",
    date: "25 Jan 2026",
    location: "Jaipur",
    status: "Pending",
  },
  {
    event: "Cultural Festival",
    artist: "Ramesh Bhagat",
    date: "2 Feb 2026",
    location: "Delhi",
    status: "Approved",
  },
];

const AdminBookings = () => {
  return (
    <>
      {/* Page Header */}
      <h1 className="text-2xl font-semibold text-[#5A2E1B] mb-2">
        Bookings Management
      </h1>

      <p className="text-gray-600 mb-6">
        View, approve and track all platform bookings.
      </p>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FAF6F1] text-gray-700 text-sm">
            <tr>
              <th className="px-6 py-4">Event</th>
              <th className="px-6 py-4">Artist</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-t hover:bg-orange-50 transition"
              >
                <td className="px-6 py-4 font-medium text-[#5A2E1B]">
                  {booking.event}
                </td>
                <td className="px-6 py-4">{booking.artist}</td>
                <td className="px-6 py-4">{booking.date}</td>
                <td className="px-6 py-4">{booking.location}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-4 py-1 rounded-full bg-green-600 text-white text-sm hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminBookings;
