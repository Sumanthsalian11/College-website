import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function HeaderSection() {
  const isMobile = useIsMobile();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && openDropdown && navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, openDropdown]);

  const navItems = [
    {
      title: "About",
      links: [
        ["Vision & Mission", "/vision_mission"],
        ["Principal", "/principal"],
        ["Management", "/management"],
        ["History", "/history"],
        ["Image Gallery", "/gallery"],
        ["Gandhian Study Centre", "/docs/MGM Gandhian Study Centre - A Brief Information.pdf"],
        ["Contact us", "/contact"],
      ],
    },
    {
      title: "Academics",
      links: [
        ["Courses", "#"],
        ["Admissions", "#"],
        ["SEP", "#"],
        ["Job Placement ", "#"],
        ["NAAC", "#"],
        ["IQAC", "#"],
        ["NIRF", "#"],
        ["Scholarships", "#"],
        ["Rank Lists", "/ranklist"],
        ["Rules And Regulations", "#"],
        ["Research Cell", "#"],
        ["E-Resources", "#"],
        ["Programme/Course", "#"],
        ["Feedback", "#"],
        ["Grievance and Suggestions", "#"],
      ],
    },
    {
      title: "Faculty and Campus",
      links: [
        ["Department", "department"],
        ["Library", "library"],
        ["Museum", "museum"],
        ["Garden", "garden"],
        ["Campus Facilities", "/facilities"],
        ["Campus Blocks", "block"],
        ["Campus Cells", "cell"],
      ],
    },
    {
      title: "Cultural Centres",
      links: [
        ["RGPai Research Centre", "#"],
        ["Yakshagana Kendra", "#"],
        ["Regional Research Centre", "#"],
      ],
    },
    {
      title: "Activities",
      links: [
        ["Alumni", "/Alumni/Alumni"],
        ["NCC and NSS", "/NccNss/NccNss"],
        ["Clubs @ MGM", "/Clubs/Clubs"],
        ["Sports", "/Sports/Sports"],
        ["Events Calendar", "/events"],
        ["MGM: What is new?", "/WhatsNew"],
      ],
    },
  ];

  return (
    <>
      {/* Compact Header */}
      <header className="bg-gradient-to-r from-[#0052a5] to-[#1a75ff] px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex-shrink-0 mb-1 sm:mb-0">
            <img src="/img/mgm_logo.png" alt="College Emblem" className="h-[48px] sm:h-[64px] w-auto drop-shadow-xl" />
          </div>

          <div className="text-center sm:flex-1 sm:px-4">
            <h1 className="text-[#f3f3eb] font-bold text-[16px] sm:text-[28px] lg:text-[36px] font-[Georgia] drop-shadow-[1px_1px_3px_#00050a] leading-tight">
              Mahatma Gandhi Memorial College Udupi
            </h1>
            <p className="text-[#e0e0e0] text-[10px] sm:text-[13px] lg:text-[15px] font-normal mt-1 drop-shadow-[1px_1px_2px_#000307] font-sans">
              (Accredited by NAAC with an ‘A+’ Grade (CGPA 3.36) in the IV Cycle of Accreditation)
            </p>
          </div>

          <div className="flex-shrink-0 mt-1 sm:mt-0">
            <img src="/img/75Am.jpg" alt="75 Years Emblem" className="h-[48px] sm:h-[64px] w-auto drop-shadow-xl" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav ref={navRef} className="sticky top-0 z-50 bg-[#003366] border-t-2 border-b-2 border-white w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6">
          <ul className="flex flex-row flex-nowrap justify-start gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible py-1 sm:py-2 scrollbar-thin scrollbar-thumb-[#0059b3] scrollbar-track-transparent w-full">
            <li>
              <Link
                to="/home"
                className="block px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium text-white hover:bg-white hover:text-[#004080] transition whitespace-nowrap"
              >
                Home
              </Link>
            </li>

            {navItems.map(({ title, links }) => (
              <li key={title} className={`relative ${isMobile ? "" : "group"}`}>
                <button
                  onClick={() => isMobile && setOpenDropdown(openDropdown === title ? null : title)}
                  className="block px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium text-white hover:bg-white hover:text-[#004080] transition whitespace-nowrap text-left"
                >
                  {title}
                </button>

                <ul
                  className={`absolute top-full left-0 bg-[#004080] min-w-[160px] shadow-lg z-50 transition-all duration-300
                    ${isMobile ? (openDropdown === title ? "block" : "hidden") : "hidden group-hover:block"}
                    ${links.length > 6 ? "max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0059b3] scrollbar-track-transparent" : ""}
                  `}
                >
                  {links.map(([label, link]) => (
                    <li key={label} className="border-b border-[#0059b3] last:border-b-0">
                      {link.endsWith(".pdf") ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-1 text-[11px] sm:text-[13px] text-white font-normal text-left whitespace-nowrap hover:bg-white hover:text-[#003366] transition"
                          onClick={() => {
                            if (isMobile) setOpenDropdown(null);
                          }}
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          to={link}
                          className="block px-3 py-1 text-[11px] sm:text-[13px] text-white font-normal text-left whitespace-nowrap hover:bg-white hover:text-[#003366] transition"
                          onClick={() => {
                            if (isMobile) setOpenDropdown(null);
                          }}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Apply Now Button */}
          <div className="mt-2 sm:mt-0 sm:ml-auto">
            <Link
              to="/apply"
              className="inline-block text-center font-semibold text-[11px] sm:text-[13px] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md transition-all"
              style={{
                backgroundColor: "#FFD700",
                color: "#003366",
                fontWeight: "bold",
                textDecoration: "none",
                whiteSpace: "nowrap",
                lineHeight: "1.2",
              }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;