
import React from "react";
const college = "/assets/Activities/WhatsNew/college.jpg";
import ArticleCard from "./ArticleCard";

const navLinks = [
  { label: "Classic", url: "http://mgmcollegeudupi.blogspot.com/?view=classic" },
  { label: "Flipcard", url: "http://mgmcollegeudupi.blogspot.com/?view=flipcard" },
  { label: "Magazine", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=magazine" },
  { label: "Mosaic", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=mosaic" },
  { label: "Sidebar", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=sidebar" },
  { label: "Snapshot", url: "http://mgmcollegeudupi.blogspot.com/?view=snapshot" },
  { label: "Timeslide", url: "http://mgmcollegeudupi.blogspot.com/?view=timeslide" }
];

function WhatsNew() {
  return (
    <>
      {/* Hero section with overlay */}
      <div className="relative w-screen h-96">
        {/* College image as background */}
        <img
          src={college}
          alt="MGM College Udupi"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
  className="absolute top-0 left-0 w-full h-full pointer-events-none"
  style={{
    background: "rgba(0,0,0,0.40)" // 0.40 means 40% dark; adjust as needed
  }}
></div>
        {/* Overlayed Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
          <h1 className="text-white text-3xl font-bold mb-3 drop-shadow">
            MGM: What is New?
          </h1>
          <p className="text-white text-base mb-6 drop-shadow text-center px-4">
            This blog throws light on various activities conducted at MGM College, Udupi and maintained by MGM College...
          </p>
          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => window.open(link.url, "_blank")}
                className="bg-[#073a78] text-white px-5 py-2 rounded-md text-base transition hover:bg-blue-500 hover:text-white drop-shadow"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Add ArticleCard and BackToTop if needed */}
      {/* <ArticleCard /> */}
      {/* <BackToTop /> */}
      <ArticleCard />
    </>
  );
}

export default WhatsNew;
