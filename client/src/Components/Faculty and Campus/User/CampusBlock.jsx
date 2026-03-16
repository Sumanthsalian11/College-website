import React from "react";

export default function Block() {
  const blocksData = [
    {
      name: "Madhava Raksha",
      description: [
        "The administrative block was inaugurated by Dr. Murali Manohar Joshi on 30th April, 1998.",
        "The Principal's chamber, Vice principal's chamber, Conference hall, Administrative office, NSS office, Student counsellor's office, Faculty room and Cooperative society are all located in this block.",
      ],
    },
    {
      name: "Nuthana Ravindra Mantapa",
      description: [
        "Was inaugurated by Sri. Damu Javeri on 4th February, 1992.",
        "This auditorium is well furnished and can accommodate around 450 people.",
        "The hall is fully air-conditioned, providing a comfortable environment for all events and gatherings.",
      ],
    },
    {
      name: "Old Administrative Block",
      description: [
        'The Old Administrative Block has two wings - The "Anantha Baliga Memorial Hall" and the "Silver Jubilee Memorial Hall".',
        "The Karnataka State Open University office is situated in this block.",
      ],
    },
    {
      name: "Vikramashila",
      description: [
        "Was inaugurated by Sri. A R Badarinarayana (the then Mysore State Education Minister).",
      ],
    },
    { name: "Vajrasoudha", description: ["Computer Science Block"] },
    {
      name: "Indoor Stadium",
      description: [
        "Full-fledged indoor sports complex consists of 3 Badminton courts, 2 gyms, 3 Table Tennis and Chess Board facilities.",
      ],
    },
    {
      name: "Parvathi Nilaya",
      description: ["The ladies retiring room was inaugurated in 1975."],
    },
    {
      name: "Gitanjali",
      description: [
        "(House of Culture) acts as a conference hall for the RRC.",
      ],
    },
    { name: "Muddana Mantapa", description: ["Open Air Theatre"] },
    {
      name: "Madhava Pai Vijnana Mandir",
      description: ["Was inaugurated by H A B Parpia in 1961."],
    },
    {
      name: "Gurukula",
      description: [
        "The college provides quarters facilities for the teaching and the non-teaching staff.",
        "There are 34 staff quarters in the college campus.",
      ],
    },
    {
      name: "Rashtrakavi Govind Pai Samshodhana Kendra (Sister Institution)",
      description: [
        "Was inaugurated by Sri D V Arasu (Vice Chancellor, Mysore University) in 1976.",
      ],
    },
    {
      name: "Nalanda (Sister Institution)",
      description: [
        "Was inaugurated by Sri K Sooryanarayana Adiga ( Dir. of Karnataka Bank Ltd. ) on 14th August, 1980.",
        "A full fledged bank(Syndicate Bank Branch) and not an extension as in many other colleges operates in the ground floor of Nalanda.",
      ],
    },
    {
      name: "Kamalaksha-Gurubhavana (Sister Institution)",
      description: ["5 Apartments and a Yakshagana Museum"],
    },
  ];

  const marqueeImages = [
    "/Faculty and campus/NewBuild.jpg",
    "/Faculty and campus/Madava.jpg",
    "/Faculty and campus/Vijnana.jpg",
    "/Faculty and campus/Old.jpg",
    "/Faculty and campus/Vajra.jpg",
    "/Faculty and campus/Indoor.jpg",
    "/Faculty and campus/Ind.jpg",
    "/Faculty and campus/Vikrama.jpg",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md border border-black relative mt-1">
      {/* Marquee */}
      <div className="relative overflow-hidden w-full h-72 mx-auto mb-12 rounded-xl">
        <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
          {marqueeImages.concat(marqueeImages).map((img, i) => (
            <div className="flex-none mr-5" key={i}>
              <img
                src={img}
                alt={`Campus Block ${i + 1}`}
                className="w-[400px] h-72 object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-white shadow-md rounded-xl py-6 px-8 mb-10 bg-gradient-to-r from-blue-600 to-cyan-400">
        🏛️ Campus Blocks
      </h2>

      {/* Grid of Blocks */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {blocksData.map((block, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4 text-white rounded-t-xl">
              <h3 className="text-lg font-semibold">{block.name}</h3>
            </div>
            <div className="p-4">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {block.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
