import React from 'react';

const banner = "/assets/Activities/Facilities/co-op banner.webp";
const coOp1 = "/assets/Activities/Facilities/co-op1.jpg";
const coOp2 = "/assets/Activities/Facilities/co-op2.jpg";
// import coOp3 from '../../assets/Facilities-Thejas/co-op.jpg';

const coopCards = [
  { img: coOp1 },
  { img: coOp2 },
  // { img: coOp3 },
];

const CoOpStore = () => {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8">
        <img
          src={banner}
          alt="Co-operative Store Banner"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-pink-400/80 flex flex-col justify-center pl-10">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-2xl mb-3 transition-all">
            MGM Students’ Co-operative Store
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium italic opacity-90">
            Supporting students with affordable academic essentials since 1952
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10">
        <p className="text-gray-700 mb-6 text-lg">
          The <i>MGM Students’ Co-operative Store</i> was registered as a Co-operative Society in <b>June 1952</b> and has since been an integral part of campus life. The store was established with the aim of providing essential academic materials to students at competitive rates, making education more affordable and accessible.
        </p>

        {/* Membership */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Membership</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            All students of the college are considered Associative Members or Shareholders of the store, which makes it a student-owned initiative. By being a part of this co-operative system, students contribute to its smooth functioning and benefit directly from its services.
          </p>
        </section>

        {/* Facilities and Services */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities and Services</h2>
          <p className="text-gray-700 leading-relaxed">
            The store supplies all the textbooks, stationery, and academic essentials required by students throughout the year. It also keeps other necessary articles for daily student use. Students are encouraged to make their purchases from the store to ensure quality products at reasonable prices.
          </p>
        </section>

        {/* Social Commitment */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Social Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            One of the unique features of the Co-operative Store is its social responsibility. The profits generated are not retained for business but are distributed as scholarships to deserving and needy students, making it a noble initiative that supports education and inclusivity.
          </p>
        </section>

        {/* Management */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Management</h2>
          <p className="text-gray-700 leading-relaxed">
            The store is efficiently managed under the supervision of <b>Mr. Anil Kumar B., M.Com., Lecturer, Honourary Secretary</b> and <b>Mr. B. Udaya, Sales Clerk,</b> who ensure the smooth day-to-day functioning of the store.
          </p>
        </section>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full opacity-50"></div>

      {/* Bottom CoOp Image Cards with dynamic alignment */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-8 ${
          coopCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : coopCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-12 mb-8`}
      >
        {coopCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-blue-400/40 duration-300 border-2 border-blue-100 max-w-xs w-full"
          >
            <img
              src={card.img}
              alt={`Co-op Image ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoOpStore;
