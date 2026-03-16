import React from 'react';

const banner = "/assets/Activities/Facilities/libr Banner.jpg";
const libr1 = "/assets/Activities/Facilities/libr1.jpg";
const libr2 = "/assets/Activities/Facilities/libr2.jpg";

// import libr3 from '../../assets/Facilities-Thejas/libr3.jpg';

const galleryCards = [
  { img: libr1 },
  { img: libr2 },
  // { img: libr3 },
];

const Library = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Library Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            Library
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            A key academic resource fostering learning and research
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Content Card with Glass Effect */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        <p className="text-gray-700 mb-6 text-lg">
          The <b>Library of MGM College</b> is one of the key learning resources on campus. Spanning an area of about <b>13,037 sq. ft. (carpet area),</b> it is housed in a separate and spacious building designed to provide a peaceful environment for study and research.
        </p>

        {/* Collection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            The library maintains a rich collection of textbooks, reference materials, journals, periodicals, and newspapers catering to both PU and Degree courses. The collection is updated from time to time to meet the academic needs of students and faculty.
          </p>
        </section>

        {/* Facilities */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            The library offers well-furnished reading halls with ample seating capacity for students and staff. Separate sections are maintained for textbooks, reference books, and periodicals, making it convenient for students to locate resources. The calm and studious atmosphere of the library encourages effective learning and concentration.
          </p>
        </section>

        {/* Role in Academics */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Academics</h2>
          <p className="text-gray-700 leading-relaxed">
            Serving as the academic hub of the college, the library supports students in their curriculum, assignments, project work, and exam preparation. With its extensive collection and quiet setting, it continues to promote reading habits, self-study, and research-oriented learning.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Images with dynamic alignment based on count */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-8 ${
          galleryCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : galleryCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-12 mb-8`}
      >
        {galleryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full"
          >
            <img
              src={card.img}
              alt={`Library Image ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
