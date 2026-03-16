import React from 'react';
const Vanitha = "/assets/Home & About/Vanitha.gif";
const adminis = "/assets/Home%20&%20About/adminis.jpg";


function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center overflow-y-auto p-4"
      style={{ backgroundImage: `url(${adminis})` }}
    >
      <div className="w-full max-w-5xl backdrop-blur-lg bg-white/40 rounded-lg p-6 shadow-xl">
       <header className="flex justify-center items-center mb-4">
         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Principal's Welcome
        </h1>
      </header>


        {/* Blue Title Bar */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">
          Message from Principal
        </div>

       {/* Content Area */}
<div className="bg-white shadow-md rounded-lg p-6">
  {/* Text and Image Side-by-Side */}
  <div className="flex flex-col md:flex-row md:space-x-6">
    {/* Text Content */}
    <div className="flex-1 space-y-4 text-justify">
      <p>
        We are all proud of our - Mahatma Gandhi Memorial College. Our college makes one of the recognizable landmarks, located near the Lord Krishna temple of Udupi.
      </p>
      <p>
        We are creating responsible and educated students and equipping them with necessary skills to tackle the needs of today's career and life.
        I welcome your interest in MGM College and hope you will find the courses suitably matching your aptitude, aspirations and the goals of your life.
      </p>
      <p>
        Our College is a great place to learn. Our teaching staff are energetic, enthusiastic and passionate in what they teach.
        We have eminent local personalities and countless accomplished personalities spread far and wide in the globe and you might hear many of them call M.G.M their ‘Alma Mater’.
        And most of all, our teachers are optimistic about the future of India, that is… YOU.
        They see great artists, creative minds, technocrats sprouting in you.
        We have a highly skilled and professional team of staff waiting to guide and support you through your learning experience at college.
        We, at MGM strongly believe that the only constant thing about life is ‘change’.
        And we offer courses to meet the ever-changing needs of the society from creative social sciences to fundamental sciences and applied sciences.
        We never tire in improving ourselves, for we believe that he who thinks that the improvement is complete stagnates himself.
        In MGM, students are helped to focus on confidence building, while nurturing a strong sense of social and environmental responsibility through academic and co-curricular activities.
      </p>
      <p>I look forward to welcome you to the college in the near future.</p>
      <p>Thanking you</p>
      <p>Yours Sincerely</p>
      <p>
        Vanitha Maiya<br />
        (Principal)
      </p>
    </div>

    {/* Principal Image */}
    <div className="mt-6 md:mt-0 shrink-0">
      <img
        src={Vanitha}
        alt="Principal Vanitha"
        className="w-40 md:w-48 h-auto rounded-md shadow-md"
      />
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default App;