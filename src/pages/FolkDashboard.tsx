import React from "react";
import FolkLayout from "../components/layout/FolkLayout";

const FolkDashboard: React.FC = () => {
  return (
    <FolkLayout>

      {/* PAGE CONTAINER */}
      <div className="space-y-10">

        {/* PROFILE HEADER */}
        <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-3xl">
            🎨
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#5A2E1B]">
              Lakshmi Devi
            </h2>
            <p className="text-[#8B5E3C]">Madhubani Painter</p>
            <p className="text-sm text-gray-500">
              ⭐ 4.9 · Madhubani, Bihar
            </p>
          </div>

          <button className="ml-auto px-5 py-2 rounded-full bg-[#C04A1A] text-white text-sm hover:bg-[#a83f15]">
            Edit Profile
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="Total Bookings" value="12" />
          <StatCard title="Pending Requests" value="3" />
          <StatCard title="Rating" value="4.9" />
          <StatCard title="Profile Views" value="120" />
        </div>

        {/* BOOKINGS */}
        <section>
          <h3 className="text-xl font-semibold text-[#5A2E1B] mb-4">
            Booking Requests
          </h3>

          <div className="space-y-4">
            <BookingCard
              event="Wedding Performance"
              client="Rahul Sharma"
              date="25 Jan 2026"
              location="Jaipur"
            />
            <BookingCard
              event="Cultural Festival"
              client="Anita Verma"
              date="2 Feb 2026"
              location="Delhi"
            />
          </div>
        </section>

        {/* PORTFOLIO */}
        <section>
          <h3 className="text-xl font-semibold text-[#5A2E1B] mb-4">
            Portfolio
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-40 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-medium hover:shadow-md transition"
              >
                Artwork {item}
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section>
          <h3 className="text-xl font-semibold text-[#5A2E1B] mb-4">
            Recent Reviews
          </h3>

          <div className="space-y-4">
            <ReviewCard
              name="Rahul Sharma"
              rating="5.0"
              review="Amazing performance! Very professional and punctual."
            />
            <ReviewCard
              name="Anita Verma"
              rating="4.5"
              review="Beautiful work. Guests really loved it."
            />
          </div>
        </section>

      </div>
    </FolkLayout>
  );
};

/* COMPONENTS */

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-semibold text-[#5A2E1B]">{value}</p>
  </div>
);

const BookingCard = ({
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
  <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
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

const ReviewCard = ({
  name,
  rating,
  review,
}: {
  name: string;
  rating: string;
  review: string;
}) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <p className="font-medium">{name}</p>
    <p className="text-sm text-gray-500">⭐ {rating}</p>
    <p className="text-gray-700 mt-1">{review}</p>
  </div>
);

export default FolkDashboard;
