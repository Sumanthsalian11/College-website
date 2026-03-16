import React from 'react';

const banner = "/assets/Activities/Facilities/Cls Banner1.jpg";
const cls1 = "/assets/Activities/Facilities/cls1.jpg";
const cls2 = "/assets/Activities/Facilities/cls2.jpg";
const cls3 = "/assets/Activities/Facilities/cls3.jpg";


const facilityCards = [
  { img: cls1, label: "Class Room" },
  { img: cls2, label: "Computer Centre" },
  { img: cls3, label: "AV Hall" },
];

const ClsAndCompAv = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Facilities Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            Classrooms, Computer Centre & AV Hall
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Modern facilities supporting quality education and interactive learning
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Main Info with Glass Layout */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        {/* Classrooms */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Classrooms</h2>
          <p className="text-gray-700 leading-relaxed">
            The college has spacious, well-ventilated classrooms designed for an effective learning
            atmosphere. Traditional blackboards are being steadily replaced with modern green boards
            and digital aids, making every class more engaging and interactive.
          </p>
        </section>

        {/* Computer Centre */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Computer Centre</h2>
          <p className="text-gray-700 leading-relaxed">
            The Computer Centre, with over 250 computers, high-speed internet, projectors, and servers, 
            empowers students to gain hands-on experience with technology. It supports practical sessions,
            workshops, and research across all streams of study.
          </p>
        </section>

        {/* Audio-Visual Hall */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Audio-Visual Hall</h2>
          <p className="text-gray-700 leading-relaxed">
            The modern Audio-Visual Hall offers facilities for presentations, guest lectures, and
            multimedia-based sessions. Its advanced audio and projection systems make it a hub for
            interactive teaching and events.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Image Cards with dynamic centering */}
<div
  className={`max-w-5xl mx-auto px-4 grid gap-8 ${
    facilityCards.length === 1
      ? "grid-cols-1 justify-items-center"
      : facilityCards.length === 2
      ? "grid-cols-2 justify-items-center"
      : "grid-cols-1 md:grid-cols-3"
  } mt-12 mb-8`}
>
  {facilityCards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full flex flex-col"
    >
      <img
        src={card.img}
        alt={card.label}
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

export default ClsAndCompAv;
