import React from 'react';

const banner = "https://placehold.co/1200x400/222/fff.png?text=StaffRoom";

const staffRoomCards = [
  { img: "https://placehold.co/400x300/EFEFEF/222?text=image+1" },
  { img: "https://placehold.co/400x300/DDEEFF/222?text=image+2" },
  { img: "https://placehold.co/400x300/CCDDEE/222?text=image+3" },
];

const StaffRoom = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Staff Room Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            StaffRoom
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Comfortable and collaborative faculty spaces across departments
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Content with Glass Effect */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        <p className="text-gray-700 mb-6 text-lg">
          All the departments of MGM College have a separate staff room for their faculty members, in addition to a common staff room provided for general use.
        </p>

        {/* Department Staff Rooms */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Department Staff Rooms</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            Each department staff room is equipped with basic furniture and storage facilities, enabling teachers to prepare lessons, evaluate assignments, and meet students for academic discussions. These spaces also provide privacy for departmental work and staff interactions.
          </p>
        </section>

        {/* Common Staff Room */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Common Staff Room</h2>
          <p className="text-gray-700 leading-relaxed">
            The common staff room serves as a shared space for faculty across departments. It encourages interaction, collaboration, and exchange of ideas among teachers. It is furnished with seating arrangements, tables, and notice boards for departmental and college-level communication.
          </p>
        </section>

        {/* Role in Campus Life */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Campus Life</h2>
          <p className="text-gray-700 leading-relaxed">
            The staff rooms provide faculty members with a comfortable environment for academic preparation, discussions, and short breaks in between classes, ensuring the smooth functioning of teaching and mentoring activities in the college.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Cards with dynamic grid and hover */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-8 ${
          staffRoomCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : staffRoomCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-12 mb-8`}
      >
        {staffRoomCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full"
          >
            <img
              src={card.img}
              alt={`Staff Room Image ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffRoom;
