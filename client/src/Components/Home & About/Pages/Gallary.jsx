import React, { useState } from "react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const cards = [
    {
      id: 1,
      category: "events",
      title: "College Fest",
      heading: "College Fest 2025",
      description: "Annual cultural fest with music, dance, and drama.",
      img: "/galary/fest.jpg",
    },
    {
      id: 2,
      category: "labs",
      title: "Computer Lab",
      heading: "Computer Science Lab",
      description: "Equipped with 60 latest PCs for student projects.",
      img: "images/computer-lab.jpg",
    },
    {
      id: 3,
      category: "sports",
      title: "Football Match",
      heading: "Inter-College Football Match",
      description: "Our college team competing at district level.",
      img: "images/football.jpg",
    },
  ];

  // Filter + Search
  const visibleCards = cards.filter((c) => {
    const matchCat = filter === "all" || c.category === filter;
    const hay = `${c.title} ${c.heading} ${c.description}`.toLowerCase();
    const matchSearch = search === "" || hay.includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Stats
  const stats = {
    total: cards.length,
    events: cards.filter((c) => c.category === "events").length,
    faculty: cards.filter((c) => c.category === "faculty").length,
    campus: cards.filter((c) => c.category === "campus").length,
    labs: cards.filter((c) => c.category === "labs").length,
    sports: cards.filter((c) => c.category === "sports").length,
    amrutha: cards.filter((c) => c.category === "amrutha").length,
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                College Image Gallery
              </h1>
              <p className="text-sm text-gray-600">
                Browse photos by category. Click any image to view larger.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="search"
                placeholder="Search (e.g., labs, fest, football)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-80 px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setSearch("")}
                className="shrink-0 px-3 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              "all",
              "events",
              "faculty",
              "campus",
              "labs",
              "sports",
              "amrutha",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  filter === cat
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.total}</p>
          <p className="text-sm text-gray-600">Total</p>
        </div>
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.events}</p>
          <p className="text-sm text-gray-600">Events</p>
        </div>
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.faculty}</p>
          <p className="text-sm text-gray-600">Faculty</p>
        </div>
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.campus}</p>
          <p className="text-sm text-gray-600">Campus</p>
        </div>
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.labs}</p>
          <p className="text-sm text-gray-600">Labs</p>
        </div>
        <div className="p-4 text-center bg-white rounded-xl border">
          <p className="text-xl font-bold">{stats.sports}</p>
          <p className="text-sm text-gray-600">Sports</p>
        </div>
      </section>

      {/* Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleCards.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="mt-4 text-lg font-semibold">
                No images match your filters.
              </p>
              <p className="text-sm text-gray-600">
                Try clearing search or choose a different category.
              </p>
            </div>
          )}

          {visibleCards.map((card) => (
            <article
              key={card.id}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </figure>
              <div className="p-4">
                <span className="inline-flex rounded-full bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 capitalize">
                  {card.category}
                </span>
                <h3 className="font-semibold">{card.heading}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
}
