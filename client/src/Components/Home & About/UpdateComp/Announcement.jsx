import React from 'react';
import announcementImg from '/img/adminis.jpg'; // Make sure this path is correct

const Announcement = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#003366] mb-4 text-center">
        Announcement
      </h2>
      <img
        src={announcementImg}
        alt="Announcement"
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-2">
        <strong>Date:</strong>{' '}
        <span className="inline-block bg-[#003366] text-white px-3 py-1 rounded-md">
          24th August, 2025
        </span>
      </p>
      
      <p className="mb-2">
        <strong>Time:</strong> 4 PM - 8 PM (IST)
      </p>
      <p>
        <strong>Venue:</strong> A V  Hall, MGM College.
      </p>
    </div>
  );
};

export default Announcement;

