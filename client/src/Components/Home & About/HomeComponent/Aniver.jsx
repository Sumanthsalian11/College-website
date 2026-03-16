import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  FaSchool,
  FaBookOpen,
  FaGlobe,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

const Aniver = () => {
  return (
    <section className="bg-black text-white px-5 py-10 text-center font-sans">
      {/* Heading */}
      <h1 className="text-[2.5rem] md:text-[2.8rem] font-bold mb-5 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#FFD700]">
  75 Years of Academic Excellence in Udupi: Our Legacy
</h1>



      <p className="lg:whitespace-nowrap text-[1rem] mb-8 max-w-[1000px] mx-auto leading-relaxed">
  Rooted in the cultural and educational landscape of Karnataka, MGM College Udupi has been a beacon of learning and excellence for over 75 years.
  <p className="max-w-[800px] mx-auto mb-8 text-[1rem] leading-relaxed">
        <p>With a legacy of nurturing talent, it continues to inspire generations of students to thrive in a global future.</p> 
      </p>
</p>

      
      
      {/* Stats Section */}
      <div className="flex justify-center flex-wrap gap-8 mt-5">
        {[
          { icon: <FaSchool size={48} />, value: 2, label: "INSTITUTES" },
          { icon: <FaBookOpen size={48} />, value: 20, label: "PROGRAMS" },
          { icon: <FaGlobe size={48} />, value: 3, label: "RESEARCH CENTERS" },
          { icon: <FaUserGraduate size={48} />, value: 1642, label: "STUDENTS" },
          { icon: <FaUsers size={48} />, value: 50000, label: "ALUMNI" },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[120px] text-center"
          >
            <div className="mb-2 text-white">{stat.icon}</div>
           <h2 className="text-blue-200 text-[28px] font-bold mb-1">



              <CountUp end={stat.value} duration={25} />+
            </h2>
            <p className="text-[14px] text-gray-300 uppercase tracking-wider m-0">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

     
  <img
    src="/img/75Am.jpg"
    alt="MGM Motto"
    className="mx-auto mb-6 w-[250px] h-auto"
  />

      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <Link
          to="/amrutha-mahotsava"
          className="bg-[#b71c1c] text-white text-[16px] px-6 py-3 rounded-full transition-transform duration-300 hover:bg-[#7f0000] hover:text-[#ffcccb] hover:scale-105"
        >
          Explore the Amrutha Mahotsava
        </Link>
      </div>



    </section>
  );
};

export default Aniver;