import React from 'react';
import Announcement from '../UpdateComp/Announcement.jsx';
import LatestNews from '../UpdateComp/LatestNews.jsx';
import UpcomingEvents from '../UpdateComp/UpcomingEvents.jsx';

const Updatetab = () => {
  return (
    <div
      id="update-tab-section"
      className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 min-h-screen px-5 py-10 font-sans"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 drop-shadow-md">
        MGM College Updates
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* 🎓 Announcement card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-lg p-5 flex flex-col h-full border border-blue-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-[#FFD700]/30">
          <Announcement />
        </div>

        {/* 📰 Latest News card */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-xl shadow-lg p-5 flex flex-col h-full border border-indigo-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-[#FFD700]/30">
          <LatestNews />
        </div>

        {/* 🎉 Upcoming Events card */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-pink-100 rounded-xl shadow-lg p-5 flex flex-col h-full border border-pink-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-[#FFD700]/30">
          <UpcomingEvents />
        </div>

      </div>
    </div>
  );
};

export default Updatetab;