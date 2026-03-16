import React from 'react';

const AmruthaMahotsava = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#007BFF] via-[#0056b3] to-[#003d66] px-6 py-12 font-sans relative overflow-hidden">
  {/* Decorative Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#0056b3]/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#003d66]/40 rounded-full blur-2xl opacity-50 animate-pulse"></div>

  {/* Header */}
  <div className="text-center mb-14 relative z-10">
    <h1 className="text-6xl md:text-7xl font-serif font-extrabold text-white tracking-wider drop-shadow-lg">
      Amrutha Mahotsava – 75 Years of Excellence
    </h1>
    <p className="mt-8 text-xl md:text-2xl text-[#cce6ff] max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-md">
      MGM College Udupi celebrated its 75th anniversary with a grand three-day event blending cultural heritage, academic achievement, and community spirit. From vibrant processions and Yakshagana performances to exhibitions and keynote addresses, the Amrutha Mahotsava honored the institution’s legacy of nurturing talent and shaping futures.
    </p>
  </div>

  {/* YouTube Streams Section */}
  <div className="max-w-6xl mx-auto mb-20 relative z-10">
    <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center tracking-wide drop-shadow-lg">
      🎥 Watch the Celebration Streams
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        { title: 'Day 1 – Inauguration & Exhibition', url: 'https://www.youtube.com/embed/jHsbp_e_lrs' },
        { title: 'Day 2 – Cultural Parade & Symposium', url: 'https://www.youtube.com/embed/ed6Nuhi-MA4' },
        { title: 'Day 2 – Evening Performances (Part 2)', url: 'https://www.youtube.com/embed/S8c_KSl5uts' },
        { title: 'Day 3 – Felicitations & Closing Ceremony', url: 'https://www.youtube.com/embed/824Aao8JCZ8' },
      ].map((stream, idx) => (
        <div
          key={idx}
          className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-[#007BFF]/60 transition duration-300 hover:scale-[1.05] hover:shadow-blue-600/70"
        >
          <h3 className="text-2xl font-serif font-bold text-[#003d66] mb-6 tracking-wide drop-shadow-sm">
            {stream.title}
          </h3>
          <div className="aspect-video rounded-xl overflow-hidden shadow-inner">
            <iframe
              className="w-full h-full rounded-xl"
              src={stream.url}
              title={stream.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>

    {/* Visit Channel Button */}
    <div className="mt-14 text-center">
      <a
        href="https://www.youtube.com/@MGM.Journalism"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#FF0000] hover:bg-[#800000] text-white font-extrabold py-4 px-10 rounded-full shadow-lg transition duration-300 tracking-wider drop-shadow-lg"

      >
        Visit MGM Journalism YouTube Channel
      </a>
      <p className="mt-6 text-lg text-[#a3c8ff] max-w-xl mx-auto font-semibold drop-shadow-sm">
        The MGM Journalism channel documents campus events, student creativity, and academic milestones — including full coverage of the Amrutha Mahotsava celebrations.
      </p>
    </div>
  </div>

  {/* Instagram Section */}
  <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-20 border border-[#004aad]/70 relative z-10 text-center">
    <div className="flex items-center justify-center gap-4 mb-6">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram Logo"
        className="w-10 h-10"
      />
      <h2 className="text-3xl font-serif font-bold text-[#003d66] tracking-wide drop-shadow-md">
        Instagram Highlights
      </h2>
    </div>
    <p className="text-lg text-[#a3c8ff] mb-8 font-semibold max-w-xl mx-auto drop-shadow-sm">
      Explore behind-the-scenes moments, student performances, and cultural glimpses from the celebration.
    </p>

    {/* Instagram Previews */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {[
        'https://www.instagram.com/reel/DCWRVUjRuHW/',
        'https://www.instagram.com/reel/DCURnHHRzvu/',
        'https://www.instagram.com/p/DCWvPG5twDQ/',
        'https://www.instagram.com/reel/DCmbY1Lu0wu/',
      ].map((link, idx) => (
        <div
          key={idx}
          className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#004aad]/60"
        >
          <iframe
            src={`${link}embed`}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title={`Instagram Preview ${idx + 1}`}
          ></iframe>
        </div>
      ))}
    </div>

    {/* Centered Button */}
    <div className="text-center">
      <a
        href="https://www.instagram.com/mgm_journalism_/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white font-extrabold py-3 px-8 rounded-full transition duration-300 tracking-wider drop-shadow-md
    bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737]
    hover:from-[#6a2d8f] hover:via-[#a42869] hover:to-[#cc5e2a]"

      >
        View Full Gallery on Instagram
      </a>
    </div>
  </div>

  {/* Footer Placeholder */}
  <div className="text-center mt-12 relative z-10">
    <h3 className="text-xl font-serif font-bold text-white mb-4 tracking-wide drop-shadow-md">
      More Memories Coming Soon
    </h3>
    <p className="text-lg text-[#a3c8ff] font-semibold drop-shadow-sm">
      Stay tuned for photo galleries, student interviews, and press coverage from the Amrutha Mahotsava.
    </p>
  </div>
</section>

  );
};

export default AmruthaMahotsava;