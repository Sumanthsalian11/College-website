import React from "react";
import { FaUsers } from "react-icons/fa";

const clubsData = [
  { club: "Student Welfare Office", incharges: ["Mr. Ramesh Karla, M.Com."] },
  {
    club: "I.Q.A.C. & NAAC",
    incharges: [
      "Mrs. Shailaja H (Coordinator)",
      "Mrs. Vanitha (Co-Coordinator)",
    ],
  },
  {
    club: "EI & CG Bureau & Placement Cell",
    incharges: ["Mr. Vishwanath Pai (Convener)", "Mrs. Rashmi (Co-convener)"],
  },
  {
    club: "Women's Harassment Redressal Cell",
    incharges: ["Mrs. Veera Ida Pinto (Convener)"],
  },
  {
    club: "Women's Counsellors",
    incharges: [
      "Mrs. Rekha N Chandra (Convener)",
      "Mrs. Jyothsna (Co-convener)",
    ],
  },
  {
    club: "Anti Ragging Committee",
    incharges: ["Principal (Chairman)", "Staff Council (Members)"],
  },
  {
    club: "Human Rights & Religious Harmony Cell",
    incharges: ["Mr. Subodh Pai (Convener)"],
  },
  { club: "NCC Naval Wing", incharges: ["Mr. Samuel Marwin Pinto"] },
  { club: "NCC Army Wing", incharges: ["Capt. Navya, ANO"] },
  {
    club: "Alumni Forum",
    incharges: [
      "Prof. Kokkarne Surendranath Shetty, President",
      "Dr. M Vishwanath Pai, Secretary",
      "Mrs. Deepali Kamath, Treasurer",
    ],
  },
  {
    club: "Medical Advisors",
    incharges: ["Dr. Vijaya Ballal N., M.B.B.S.", "K.M.C. Manipal"],
  },
];

export default function ClubsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md border border-black relative mt-1">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Title Navbar */}
      <div className="relative z-10 text-center mb-10 p-5 bg-gradient-to-r from-blue-600/50 to-blue-700/70 rounded-t-xl border-b-2 border-gray-400">
        <h2 className="text-xl md:text-2xl font-semibold text-black leading-snug">
          Staff Advisors for Extra-Curricular and Co-Curricular Activities for
          the Academic Year 2024-2025
        </h2>
      </div>

      {/* Clubs Grid */}
      <div className="relative z-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {clubsData.map((club, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-purple-200/60"
          >
            {/* Club Header */}
            <div className="flex items-center mb-4 flex-wrap">
              <FaUsers className="text-2xl text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                {club.club}
              </h3>
            </div>

            {/* Incharges */}
            <div className="space-y-2">
              {club.incharges.map((person, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-sm text-gray-900"
                >
                  <span className="mr-2 text-blue-500">👤</span>
                  {person}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
