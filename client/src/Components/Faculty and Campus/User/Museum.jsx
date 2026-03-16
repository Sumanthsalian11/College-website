import React from "react";

export default function Museum() {
  const banners = [
    "/Faculty and campus/M4.jpg",
    "/Faculty and campus/M5.jpg",
    "/Faculty and campus/M6.jpg",
    "/Faculty and campus/M7.jpg",
  ];

  const museums = [
    {
      id: "botanical",
      icon: "🌿",
      title: "Botanical Museum",
      description: [
        "Orderly arrangement of vast diversity of plants, from primitive algae to advanced Angiosperms.",
        "The Botany Museum is housed in the Vijnana Mandira Wing.",
        "Specimens arranged in about 30 large cupboards.",
        "Charts and models adorn the Museum.",
        "Specimens collected during annual field trips.",
      ],
      highlights: [
        "150+ species of Algae",
        "100+ species of Fungi",
        "40+ species of Bryophytes",
        "120+ species of Pteridophytes",
        "41 species of Gymnosperms",
        "150+ species of Angiosperms",
        "40 pathological specimens",
        "5–6 insectivorous plants",
        "Huge preserved Cycas cones",
        "Large mushroom preserved",
        "25+ freak plant specimens",
        "Mosses of South India (4 cupboards)",
        "Algae collection from Lakshadweep",
        "Rare fossil charts",
        "Ferns from Ooty",
      ],
      theme: "from-green-100 to-green-200 border-l-green-600",
    },
    {
      id: "zoological",
      icon: "🦴",
      title: "Zoological Museum",
      description: [
        "Located in Vijnana Mandira wing.",
        "Specimens arranged by Phyla.",
        "Contains models, dissections, charts, and teaching aids.",
      ],
      highlights: [
        "Specimens of 1027 species, 742 genera",
        "Skeleton of Baleen Whale (13m vertebral column)",
        "Saw fish snout specimen",
        "Aquatic creatures like jellyfish, octopus, etc.",
        "Huge turtle shell",
        "Fishes from West Coast of India",
        "Otter and Pangolin specimens",
        "2 cupboards of sea shells",
        "Beautiful coral collection",
        "Silkworm cocoon garland",
        "Preserved embryos (porcupine, cow, human, rabbit, deer)",
        "Silk Moth, Honey Bee, and chick development stages",
        "Osteology: skeletons of man, blackbuck, animals",
        "Animal skulls: tiger, crocodile, monkey, tortoise, etc.",
        "Models of dinosaurs",
      ],
      theme: "from-blue-100 to-blue-200 border-l-blue-600",
    },
  ];

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="max-w-6xl mx-auto mt-1 p-6 bg-white border border-black rounded-2xl font-poppins">
      {/* Showcase Section */}
      <div className="p-6 bg-gray-50 rounded-2xl">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-400 p-6 rounded-2xl mb-8">
          🏛 Museums at MGM College
        </h1>
        <div className="bg-green-200/60 p-5 rounded-lg">
          <p className="text-lg text-gray-800 leading-7 mb-4">
            A not too small number of successful professionals and scientists
            recall their passion and curiosity to study was sparked by a visit
            to a museum. Thus the museum became the kernel from which the
            learning grew. These sui generis crystallizing experiences motivate
            the visitors to learn and embark on a journey of lifelong learning,
            make their life more meaningful. Come, visit our two museums to get
            the sparks of imagination flying, touch the sky and get the feel of
            what is next for you.
          </p>
          <p className="text-lg text-gray-800 leading-7">
            The different museums available in MGM collge are Govind Pai
            Archaeological Museum, Well equipped Botany Museum, Yakshagana
            Museum in Yakshagana Kendra.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Carousel */}
      <div className="overflow-hidden my-6 w-full rounded-2xl">
        <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
          {banners.concat(banners).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Museum Banner ${i + 1}`}
              className="w-[280px] h-[280px] object-cover mr-3 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center gap-4 mb-10">
        {museums.map((museum, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(museum.id)}
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-base font-medium transition-transform hover:bg-blue-600 hover:scale-105"
          >
            {museum.title}
          </button>
        ))}
      </div>

      {/* Museum Sections */}
      {museums.map((museum, i) => (
        <div
          key={i}
          id={museum.id}
          className={`bg-gradient-to-br ${museum.theme} p-8 mb-10 rounded-2xl shadow-lg border-l-[6px] transition-transform hover:scale-[1.01]`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold flex justify-center items-center gap-3 mb-4">
              <span className="text-2xl">{museum.icon}</span> {museum.title}
            </h2>

            <h3 className="text-lg font-semibold underline text-left mb-3">
              Description :
            </h3>
            <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-left text-base">
              {museum.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold underline text-left mb-3">
              Highlights :
            </h3>
            <ul className="space-y-2 text-left text-base">
              {museum.highlights.map((h, idx) => (
                <li key={idx}>✔ {h}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Tailwind keyframes for carousel */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
