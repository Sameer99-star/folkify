import FolkLayout from "../components/layout/FolkLayout";

const FolkProfile = () => {
  return (
    <FolkLayout>
      <div className="space-y-8">

        {/* PAGE HEADER */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#5A2E1B]">
            Artist Profile
          </h2>
          <p className="text-gray-600">
            View and manage your personal details
          </p>
        </section>

        {/* PROFILE CARD */}
        <section className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center text-4xl">
            🎨
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#5A2E1B]">
              Lakshmi Devi
            </h3>
            <p className="text-gray-600">Madhubani Painter</p>
            <p className="text-sm text-gray-500">
              ⭐ 4.9 · Madhubani, Bihar
            </p>
          </div>

          <button className="ml-auto px-5 py-2 rounded-full bg-[#C04A1A] text-white text-sm hover:bg-[#a83f15]">
            Edit Profile
          </button>
        </section>

        {/* DETAILS */}
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#5A2E1B] mb-4">
            Personal Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Detail label="Full Name" value="Lakshmi Devi" />
            <Detail label="Art Form" value="Madhubani Painting" />
            <Detail label="Location" value="Madhubani, Bihar" />
            <Detail label="Experience" value="10+ Years" />
          </div>
        </section>

      </div>
    </FolkLayout>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="border rounded-xl p-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-[#5A2E1B]">{value}</p>
  </div>
);

export default FolkProfile;
