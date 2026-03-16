import React from 'react';
const banner = "/assets/Activities/Facilities/Canteen Banner.jpg";
const canteen1 = "/assets/Activities/Facilities/Canteen1.jpg";
const canteen2 = "/assets/Activities/Facilities/Canteen2.jpg";
const canteen3 = "/assets/Activities/Facilities/Canteen3.jpg";


const hostelCards = [
  { img: canteen1 },
  { img: canteen2 },
  { img: canteen3 },
];

const facilities = [
  {
    icon: "🍱",
    title: "Mid-day Meals",
    desc: "Nutritious, affordable food"
  },
  {
    icon: "☕",
    title: "Snacks & Beverages",
    desc: "Served all day"
  },
  {
    icon: "🪑",
    title: "Seating",
    desc: "400+ capacity"
  }
];

const Canteen = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Canteen Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            Annapoorna Canteen
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Serving healthy, affordable meals on campus since 1990
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        <p className="text-gray-700 mb-6 text-lg">
          The Annapoorna Canteen of MGM College was inaugurated on <b>23rd March, 1990</b> by <i>Dr. M. I. Savadatti, Vice-Chancellor of Mangalore University.</i> Since then, it has been serving as an important support facility for students and staff, offering affordable and hygienic food within the campus.
        </p>

        {/* Facilities Icon Cards */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Facilities</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white/80 rounded-xl shadow-md p-5 flex flex-col items-center w-40 transition-shadow hover:shadow-blue-200 hover:-translate-y-1 duration-300">
                <span className="text-4xl mb-2">{f.icon}</span>
                <span className="font-bold text-blue-700 mb-1">{f.title}</span>
                <span className="text-gray-700 text-sm text-center">{f.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-16 h-1 mx-auto my-4 bg-gradient-to-r from-pink-200 via-blue-200 to-yellow-100 rounded-full opacity-50"></div>

        {/* Role in Campus Life */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Campus Life</h2>
          <p className="text-gray-700 leading-relaxed">
            The canteen is more than just a dining space—it is a hub of interaction and community life. It plays a vital role during college events, as the availability of on-campus meals makes organizing seminars, workshops, and cultural programs easier and more convenient.
          </p>
        </section>

        {/* Section Divider */}
        <div className="w-16 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 via-pink-200 to-yellow-100 rounded-full opacity-50"></div>

        {/* Healthy and Hygienic Dining */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Healthy and Hygienic Dining</h2>
          <p className="text-gray-700 leading-relaxed">
            Annapoorna maintains high standards of cleanliness and hygiene, ensuring that students receive nutritious meals in a safe environment. Both vegetarian and light snack options are available to cater to different preferences. The canteen staff work under the guidance of the management to provide timely and efficient service throughout the day.
          </p>
        </section>
      </div>

      {/* Another Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom Hostel Image Cards */}
      <div
  className={`max-w-5xl mx-auto mt-12 mb-8 px-4 grid gap-8 ${
    hostelCards.length === 1
      ? "grid-cols-1 justify-items-center"
      : hostelCards.length === 2
      ? "grid-cols-2 justify-items-center"
      : "grid-cols-1 md:grid-cols-3"
  }`}
>
  {hostelCards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full"
    >
      <img
        src={card.img}
        className="w-full h-60 object-cover"
        alt={`Image ${index + 1}`}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Canteen;
