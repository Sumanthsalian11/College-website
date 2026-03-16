import React from 'react';

const UpcomingEvents = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#003366] mb-4 text-center">
        Upcoming Events
      </h2>

      {/* Event 1 */}
      <div className="max-h-[400px] overflow-y-auto pr-2"></div>

      {/* Event 2 */}
      <div className="mb-5 pb-3 border-b border-[#eee] flex items-start gap-4">
        <div className="text-center px-3 py-2 bg-[#003366] text-white rounded-md">
          <div className="text-xl font-bold">Coming</div>
          <small className="text-sm">Soon!!</small>
        </div>
        <div>
          <p className="mb-1 font-semibold"><strong>"MGM Talents Day" 2025</strong></p>
          <a href="#" className="text-[#ff6600] font-bold hover:underline">
            Read More
          </a>
        </div>
      </div>

      {/* Event 3 */}
      <div className="pb-3 border-b border-[#eee] flex items-start gap-4">
        <div className="text-center px-3 py-2 bg-[#003366] text-white rounded-md">
          <div className="text-xl font-bold">10</div>
          <small className="text-sm">Dec 2025</small>
        </div>
        <div>
          <p className="mb-1 font-semibold">Annual Tech Symposium</p>
          <a href="#" className="text-[#ff6600] font-bold hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
