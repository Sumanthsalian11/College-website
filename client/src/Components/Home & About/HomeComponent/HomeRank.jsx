import React from 'react';

const pallavi = "/assets/Home & About/Rankimg/pallavi.jpg";
const sushmitha = "/assets/Home & About/Rankimg/sushmitha.jpg";
const vasudha = "/assets/Home & About/Rankimg/vasudha.jpg";
const vinay = "/assets/Home & About/Rankimg/vinay.jpg";
const ria = "/assets/Home & About/Rankimg/ria.jpg";
const rakshita = "/assets/Home & About/Rankimg/rakshita.jpg";

const HomeRank = () => {
  const achievers = [
    { id: 1, name: 'Pallavi Kodagu', class: 'B.A.(E)(H)', rank: 'IV', image: pallavi },
    { id: 2, name: 'Sushmitha U G', class: 'B.Com.(Voc)', rank: 'VII', image: sushmitha },
    { id: 3, name: 'Vasudha Kamath', class: 'B.Sc.(Z)', rank: 'VI', image: vasudha },
    { id: 4, name: 'Vinay Kumar', class: 'B.A.(E)(H)', rank: 'X', image: vinay },
    { id: 5, name: 'Ria Lobo', class: 'B.A.(E)(H)', rank: 'IX', image: ria },
    { id: 6, name: 'Rakshitha Rajaram', class: 'B.Sc.(BZ)', rank: 'X', image: rakshita },
  ];

  const handleImgError = (event) => {
    event.currentTarget.src =
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
          <rect width="160" height="180" fill="#f0f0f0"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="Arial, sans-serif" font-size="10">No Image</text>
        </svg>`
      );
  };

  return (
    <section className="bg-gradient-to-br from-[#e6f7ff] via-[#d0f0ff] to-[#b3e5fc] py-10 px-5 font-[Poppins]">
      <div className="max-w-full">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[36px] font-extrabold text-[#0b2b4b] border-b-[3px] border-[#0a7c75] pb-2 mb-2 tracking-wide inline-block">
            MGM Rank Holders–2024
          </h2>
          <p className="text-[20px] text-[#FF0000] font-semibold mt-2">
           CONGRATULATIONS TO THE RANK HOLDERS!!
          </p>
          <p className="text-[20px] text-[#0a7c75] font-semibold mt-2">
            We proudly celebrate the exceptional academic accomplishments of our rank holders.
          </p>
          <p className="text-[20px] text-[#0a7c75] font-semibold mt-2">
            Their dedication, discipline, and pursuit of excellence reflect the true spirit of MGM.
          </p>
        </div>

        {/* Scrollable Achievers Section */}
        <div className="flex flex-nowrap justify-start gap-4 mt-6 overflow-x-auto p-4 scroll-smooth scrollbar-thin scrollbar-thumb-[#0a7c75] scrollbar-track-transparent bg-gradient-to-r from-[#e0f7fa] via-[#d0f0ff] to-[#c8e6c9] rounded-xl shadow-[inset_0_0_20px_rgba(10,124,117,0.2)]">
          {achievers.map((person) => (
            <article
              key={person.id}
              className="w-[220px] min-h-[300px] bg-white border border-[#dbeaf0] rounded-[15px] p-6 text-center flex flex-col items-center justify-start shrink-0 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(9,58,91,0.18)] hover:border-[#0a7c75]"
            >
              <img
                className="block w-full h-[200px] object-cover object-top rounded-[10px] mb-3"
                src={person.image}
                alt={`${person.name} - ${person.rank}`}
                onError={handleImgError}
              />
              <h3 className="mt-2 mb-1 text-[20px] font-extrabold text-[#0f0f0f] uppercase tracking-[0.4px] leading-[1.3]">
                {person.name}
              </h3>
              <p className="my-1 text-[14px] font-medium text-[#666] leading-[1.2]">
                {person.class}
              </p>
              <p className="text-[16px] font-semibold text-[#555]">
                {person.rank}
              </p>
            </article>
          ))}
        </div>

        {/* Archive Button */}
        <div className="mt-10 text-center">
          <a
            href="/ranklist"
            className="inline-block bg-[#0a7c75] hover:bg-[#075e5a] text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            View Rank Holders from Previous Years
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeRank;