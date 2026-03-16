import React from 'react';

const LatestNews = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#003366] mb-4 text-center">Latest & Recent News</h2>

      {/* Scrollable container */}
      <div className="max-h-[400px] overflow-y-auto pr-2">
        <div className="mb-5 pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>Sept 4, 2025:</strong> Installation Ceremony Of <strong> Students' Welfare Council</strong>  2025-26.
          </p>
          <a href="/swc25" className="text-[#ff6600] font-bold hover:underline">Read More</a>
        </div>

        <div className="mb-5 pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>Aug 23, 2025:</strong>  <strong>"LOG OUT"</strong> Farewell to MSC Batch 2023-25.
          </p>
          <a href="/logout-event" className="text-[#ff6600] font-bold hover:underline">Read More</a>
        </div>

        <div className="pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>Feb 10, 2025:</strong> <strong>"NSS Annual Camp".</strong>
          </p>
         <a
            href="/docs/NSS-25.pdf"
            target="_blank"
             rel="noopener noreferrer"
             className="text-[#ff6600] font-bold hover:underline"
            >
             Read More
              </a>
        </div>


        <div className="pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>Nov 19, 2024:</strong> <strong>"Amrutha Mahothsava" </strong>celebration of our cherished institution.
          </p>
          <a
            href="/docs/MGM_Amrutha_Mahothsava_Invitation.pdf"
            target="_blank"
             rel="noopener noreferrer"
             className="text-[#ff6600] font-bold hover:underline"
            >
             Read More
              </a>
        </div>


        <div className="mb-5 pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>May 20, 2024:</strong> <strong>"Annual Day Celebration."</strong>
          </p>
         <a
            href="/docs/Annual24.jpg"
            target="_blank"
             rel="noopener noreferrer"
             className="text-[#ff6600] font-bold hover:underline"
            >
             Read More
              </a>
        </div>

        
        <div className="mb-5 pb-3 border-b border-[#eee]">
          <p className="mb-2">
            <strong>June 25, 2024:</strong> International Conference on<strong> Artificial Intelligence:</strong> From<strong> Theory to Impact.</strong>
          </p>
         <a
            href="/docs/AIconf.pdf"
            target="_blank"
             rel="noopener noreferrer"
             className="text-[#ff6600] font-bold hover:underline"
            >
             Read More
              </a>
        </div>


        
        {/* Future events will go here */}
      </div>
    </div>
  );
};

export default LatestNews;