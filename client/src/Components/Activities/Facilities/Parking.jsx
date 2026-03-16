import React from 'react';

const banner = "/assets/Activities/Facilities/Parking Banner1.jpg";
const parking1 = "/assets/Activities/Facilities/parking1.jpg";
const parking2 = "/assets/Activities/Facilities/parking2.jpg";
const parking3 = "/assets/Activities/Facilities/parking3.jpg";


const parkingCards = [
  { img: parking1, label: "Staff Parking" },
  { img: parking2, label: "Car Parking" },
  { img: parking3, label: "Student's Parking" },
];

const ParkingInfo = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Parking Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            Parking Places
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Organized and secure vehicle parking within the MGM College campus
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        <p className="text-gray-700 mb-6 text-lg">
          MGM College provides well-organized vehicle parking facilities for both students and staff within the campus. Designated parking areas ensure smooth traffic flow and easy access to the academic blocks, hostels, and other facilities.
        </p>

        {/* Student Parking */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Student Parking</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
           Separate parking slots are allotted for students, accommodating two-wheelers and bicycles. These areas are conveniently located near the main entrance and academic buildings for ease of access. Students are required to display valid parking permits and follow the parking guidelines set by the college to maintain order and safety.
          </p>
        </section>

        {/* Staff Parking */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Staff Parking</h2>
          <p className="text-gray-700 leading-relaxed">
            Exclusive parking spaces are reserved for lecturers and staff members, allowing them quick and secure access to the campus. Staff parking areas are located closer to faculty offices and administrative sections, ensuring convenience during working hours.
          </p>
        </section>

        {/* Safety and Regulations */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Safety and Regulations</h2>
          <p className="text-gray-700 leading-relaxed">
            All parking zones are monitored by security personnel and covered under CCTV surveillance. Entry and exit points are regulated to avoid congestion, and only authorized vehicles are permitted within the campus. The college encourages disciplined parking habits to ensure maximum utilization of space and safety for all.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Parking Image Cards */}
<div
  className={`max-w-5xl mx-auto px-4 grid gap-8 ${
    parkingCards.length === 1
      ? "grid-cols-1 justify-items-center"
      : parkingCards.length === 2
      ? "grid-cols-2 justify-items-center"
      : "grid-cols-1 md:grid-cols-3"
  } mt-12 mb-8`}
>
  {parkingCards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full flex flex-col"
    >
      <img
        src={card.img}
        alt={`Parking Image ${index + 1}`}
        className="w-full h-60 object-cover"
      />
      {/* Label below image */}
      <div className="py-3 text-center bg-white border-t border-blue-100">
        <span className="font-semibold text-blue-700 text-lg">{card.label}</span>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default ParkingInfo;
