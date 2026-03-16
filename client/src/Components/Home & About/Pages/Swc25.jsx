import React from "react";

function LogOutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">

      {/* 🔵 Floating gradient circles for celebratory vibe */}
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* 🖼️ Background Image Card */}
      <div
        className="w-[90%] max-w-3xl h-[600px] bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-200 relative z-10 bg-no-repeat bg-center bg-contain p-8 flex flex-col justify-center items-center text-center hover:shadow-3xl transition duration-300"
        style={{ backgroundImage: 'url("src/assets/SWC25.jpg")' }}
      >
       
      </div>
    </div>
  );
}

export default LogOutPage;
