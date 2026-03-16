import React from 'react';

export default function AboutMGM() {
  const cards = [
    { img: '/img/estd.jpg', label: 'Established:', value: '1949', link: '/history' },
    { img: '/img/mgm_logo.png', label: 'Institution Type:', value: 'Autonomous Institution' },
    {
      img: '/img/naac.jpeg',
      label: 'Accreditation:',
      value: 'NAAC "A+"',
      link: '/docs/NAAC4.pdf',
    },
    { img: '/img/OIP.jpeg', label: 'Approval:', value: 'AICTE' },
    { img: '/img/deal.png', label: 'Affiliation:', value: 'MAHE Manipal', link: 'https://www.manipal.edu/' },
    { img: '/img/area.jpeg', label: 'Campus Size:', value: '75 Acres', link: 'https://maps.app.goo.gl/pZgVfN2wNikLJXoV7' },
  ];

  const scrollToUpdateTab = () => {
    const updateTabElement = document.getElementById('update-tab-section');
    if (updateTabElement) {
      updateTabElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#0052a5] to-[#6cb7f6] text-white py-16 px-5 font-sans shadow-lg">

      {/* Header */}
      <div className="text-center mb-10">
        <span className="block w-[500px] h-[5px] mx-auto mb-2 rounded bg-gradient-to-r from-[#faf9f6] via-[#ffd700] to-[#f8f8f7] animate-classyShine"></span>
        <h2 className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full">About MGM College</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {cards.map((card, idx) => {
          const cardContent = (
            <div className="bg-white text-black font-bold rounded-xl p-5 shadow-md flex items-center gap-5 transition-transform duration-200 hover:-translate-y-2 cursor-pointer">
              <img src={card.img} alt={`${card.label} Icon`} className="w-10 h-10 object-contain flex-shrink-0" />
              <div>
                <span className="block text-yellow-500 font-semibold text-sm mb-1">{card.label}</span>
                <p className="text-base font-bold m-0">{card.value}</p>
              </div>
            </div>
          );

          return card.link ? (
            <a
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              {cardContent}
            </a>
          ) : (
            <div key={idx}>{cardContent}</div>
          );
        })}
      </div>

      {/* Description Text */}
      <div className="max-w-[1000px] mx-auto mt-10 text-center text-white text-xl leading-normal space-y-4">
        <p className="font-semibold whitespace-normal">
          <strong>Founded in 1949, MGM is one of the largest and most respected colleges in Karnataka.</strong>
        </p>
        <p className="whitespace-normal">
          Ours is a diverse learning community. We invite you to explore this website to discover the opportunities that will help launch your career to new horizons.
        </p>
        <p className="font-semibold whitespace-normal">
          <strong>Welcome onboard for an exciting journey to discover your true self with true knowledge.</strong>
        </p>

        <img
          src="/img/mgm_logo.png"
          alt="MGM Motto"
          className="mx-auto mb-6 w-[250px] h-auto"
        />

        <p className="whitespace-normal">
          Our motto is <strong>Sathwath Sanjayathe Jnanam (सत्त्वात् संजायते ज्ञानम्).</strong>
          <p>It means: <strong>From virtue springs knowledge - Bhagavadgeetha.</strong></p>
        </p>

        <p className="whitespace-normal">
          The Githaic motto of MGM College proclaims that knowledge is a sublime goal to be pursued as a culmination of the moral endeavour of man. Knowledge bereft of virtue is equivalent to ignorance. True knowledge comes from understanding the essence of existence. Honest introspection, passionate learning are the cornerstones for acquiring true knowledge.
        </p>
      </div>

      {/* Section headers and content */}
      <div className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full">
        Why choose MGM
      </div>
      <div className="max-w-[1000px] mx-auto mt-10 text-center text-white text-xl leading-normal space-y-4">
        <p>MGM College is a premier institution in terms of facilities, equipment, staff and achievement.</p>
        <p>
          With a tradition of excellence in work and achievement established by scholarly teachers,
          <p>the College has become a byword for quality and merit.</p>
        </p>
        <p>
          The College Trust has been the most enlightened one and has spared no effort to raise the college to its foremost position.
        </p>
      </div>

      <div className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full">
        Our college at a glance
      </div>
      <div className="max-w-[1000px] mx-auto mt-10 text-center text-white text-xl leading-normal space-y-4">
        <p className="mb-4">
          Our departments have a strong focus on overall student development. All classroom teaching is supplemented with practical skills augmenting activities, strengthening communication and confidence.
        </p>
        <p className="mb-4">
          The highly academic bent of mind and concern of our teachers is proved by the fact that in recent years many have obtained doctoral degree after pursuing research in various fields of study.
        </p>
        <p>
          In accordance with the order of Karnataka Government, the Mahatma Gandhi Memorial College now has been bifurcated into Mahatma Gandhi Memorial College and Mahatma Gandhi Memorial Pre-University College in the same campus. The staff of the college have earned a reputation for unstinted devotion to work and an undiluted adherence to quality, excellent teaching and learning infrastructure including the labs, library all with one focus: YOU the student. Indeed, the college is fully prepared and committed to assist students in achieving their academic and professional goals.
        </p>
      </div>

      {/* Animated Button at Bottom Center */}
      <div className="flex justify-center mt-16">
        <button
          onClick={scrollToUpdateTab}
         className="text-white font-bold py-3 px-6 rounded-full shadow-lg bg-gradient-to-r from-[#003973] via-[#004ba8] to-[#005dc1] hover:from-[#002d5c] hover:via-[#003c7e] hover:to-[#004899] transition duration-300"

          style={{
            animation: 'pulse-scale 2s ease-in-out infinite',
          }}
        >
          Click For MGM Updates!!
        </button>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes classyShine {
            0% { background-position: left center; }
            50% { background-position: right center; }
            100% { background-position: left center; }
          }
          .animate-classyShine {
            background-size: 200% 100%;
            animation: classyShine 2.5s infinite ease-in-out;
          }

          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>
    </section>
  );
}
