import React from 'react';

const banner = "/assets/Activities/Facilities/lab Banner.jpg";
const lab1 = "/assets/Activities/Facilities/lab1.jpg";
const lab2 = "/assets/Activities/Facilities/lab2.jpg";
const lab3 = "/assets/Activities/Facilities/lab3.jpg";
const lab4 = "/assets/Activities/Facilities/lab4.jpg";


const labCards = [
  { img: lab1, label: "Physics Lab" },
  { img: lab2, label: "Chemistry Lab" },
  { img: lab3, label: "Zoology Lab" },
  { img: lab4, label: "Botany Lab" },
];

const Labs = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Labs Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            Laboratories
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Modern labs fostering scientific exploration and research
          </p>
        </div>
      </div>

      {/* Info Content with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        {/* Physics */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Physics Lab</h2>
          <p className="text-gray-700 leading-relaxed">
            The Physics Laboratory provides instruments for experiments in mechanics, optics, electricity 
            and magnetism, giving students a deeper understanding of physical principles.
          </p>
        </section>

        {/* Chemistry */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Chemistry Lab</h2>
          <p className="text-gray-700 leading-relaxed">
            Equipped with modern apparatus, fume hoods and chemicals, the Chemistry Laboratory supports 
            analytical, organic and inorganic experiments essential for grasping chemical concepts.
          </p>
        </section>

        {/* Zoology */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Zoology Lab</h2>
          <p className="text-gray-700 leading-relaxed">
            The Zoology Laboratory offers specimens, microscopes and models to help students study 
            animal anatomy, physiology, and taxonomy in detail.
          </p>
        </section>

        {/* Botany */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Botany Lab</h2>
          <p className="text-gray-700 leading-relaxed">
            The Botany Laboratory is designed for the exploration of plant biology with microscopes, slides, 
            and live samples, encouraging research in botany and environmental science.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Lab Image Cards with Labels and dynamic grid */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-8 ${
          labCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : labCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        } mt-12 mb-8`}
      >
        {labCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-full"
          >
            <img 
              src={card.img} 
              alt={card.label} 
              className="w-full h-60 object-cover" 
            />
            <div className="py-3 text-center border-t border-blue-100">
              <span className="font-medium text-lg text-blue-700">{card.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
