import React from 'react';
const OldBlk = "/assets/Home%20&%20About/oldblck.jpg";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${OldBlk})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Content container */}
      <div className="px-6 py-10 md:px-20 lg:px-32 bg-white/40 backdrop-blur-sm text-gray-800 min-h-screen">


        
        {/* Vision Section */}
        <section className="mb-16">
        <h2 className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full text-gray-100">Our Vision</h2>
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
          <ul className="list-disc list-inside space-y-2 mb-6 text-black">
            <li>Endowed with the spirit of enquiry</li>
            <li>Eager to acquire knowledge and skills</li>
            <li>Competent to be employed in his/her field</li>
            <li>Possessing qualities of leadership, responsible to family, society and nation</li>
            <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
          </ul>
          </div>
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Vision Statement</h3>
            <p className="italic text-blue-700">
              "To be the leading institution of higher learning, fostering innovation, excellence, and global citizenship while preparing students for the challenges of tomorrow."
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full text-gray-100">Our Mission</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
          <ul className="list-disc list-inside space-y-2 mb-6 text-black">
            <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
            <li>To develop in them competence for employment as well as entrepreneurship</li>
            <li>To organize activities that will contribute to the understanding of their responsibilities to the family, the society and the nation</li>
            <li>To promote national integration through cordial relationships</li>
          </ul>
          </div>
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Mission Statement</h3>
            <p className="italic text-blue-700">
              The vision of our founder Dr. T.M.A. Pai was "to take education to the doorsteps of the people in and around Udupi." The lamp lit by him has lit hundreds of lamps. The college believes in the words of the Mahatma – 
              "The end of all knowledge must be building up of character".
            </p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <h2 className="bg-[#0b59e6] text-2xl font-bold py-2 mt-10 text-center w-full text-gray-100">Our Objectives</h2>
          <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-4">
          <p className="text-black text-center mb-8">
            Provide quality education through innovative methods, develop student competence for employment and entrepreneurship, foster thinking and creativity, and promote social responsibility.
          </p>
          </div>

          {/* Objective Cards */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">1. Character Building</h3>
              <p className="text-gray-600 leading-relaxed mb-4">To foster holistic development by:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Instilling integrity and ethical responsibility</li>
                <li>Cultivating empathy and community service</li>
                <li>Building resilience and self-discipline</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">2. Excellence in Teaching-Learning</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Ensuring high standards by:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Innovative teaching methodologies</li>
                <li>Continuous faculty development</li>
                <li>Integrating technology and research</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">3. Employability / Entrepreneurship</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Enhancing competence through:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hands-on learning and industry exposure</li>
                <li>Diverse cultural and collaborative projects</li>
                <li>Mentorship and incubation support</li>
              </ul>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Commitment to Excellence</h3>
            <p className="italic text-blue-700">
              "These objectives guide our strategic planning. We are committed to excellence with integrity in all we do."
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
