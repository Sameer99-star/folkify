import React from "react";
import FolkLayout from "../components/layout/FolkLayout";

const FolkBookings: React.FC = () => {
  return (
    <FolkLayout>
      <div className="space-y-6">

        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#5A2E1B] mb-1">
            Booking Requests
          </h2>
          <p className="text-gray-500 mb-6">
            Manage and respond to booking requests
          </p>

          <div className="divide-y rounded-xl border overflow-hidden">

            <BookingRow
              event="Wedding Performance"
              client="Rahul Sharma"
              date="25 Jan 2026"
              location="Jaipur"
            />

            <BookingRow
              event="Cultural Festival"
              client="Anita Verma"
              date="2 Feb 2026"
              location="Delhi"
            />
          </div>
        </section>

      </div>
    </FolkLayout>
  );
};

const BookingRow = ({
  event,
  client,
  date,
  location,
}: {
  event: string;
  client: string;
  date: string;
  location: string;
}) => (
  <div className="flex justify-between items-center p-4 hover:bg-orange-50 transition">

    <div>
      <p className="font-semibold text-[#5A2E1B]">{event}</p>
      <p className="text-sm text-gray-600">Client: {client}</p>
      <p className="text-sm text-gray-600">Date: {date}</p>
      <p className="text-sm text-gray-600">Location: {location}</p>
    </div>

    <div className="flex gap-3">
      <button className="px-4 py-1 rounded-full bg-green-600 text-white text-sm">
        Accept
      </button>
      <button className="px-4 py-1 rounded-full bg-red-500 text-white text-sm">
        Reject
      </button>
    </div>
  </div>
);

export default FolkBookings;
