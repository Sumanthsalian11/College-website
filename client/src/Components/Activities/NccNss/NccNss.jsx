import React, { useState, useEffect } from "react";

const nccImages = [
  "https://mgmudupi.ac.in/images/NCC.jpg",
  "https://mgmudupi.ac.in/images/NCC1.jpg",
  "https://mgmudupi.ac.in/images/NCC2.jpg",
  "https://mgmudupi.ac.in/images/NCC3.jpg",
  "https://mgmudupi.ac.in/images/NCC4.jpg",
  "https://mgmudupi.ac.in/images/NCC5.jpg",
  "https://mgmudupi.ac.in/images/NCC6.jpg",
];
const rangerImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];
const nssImages = ["https://mgmudupi.ac.in/images/NCC6.jpg"];
const roversImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];

const tabsData = [
  {
    label: "NCC (National Cadet Corps)",
    value: "ncc",
    color: "#2563EB",
    content: (
      <>
        MGM College offers <b>Army</b> and <b>Naval</b> NCC wings for boys and girls. Students with an NCC "C" certificate can earn extra credit for higher education and employment.
        <br />
        <br />
        Activities include parades, training camps, social service, and cadets' participation in major events, adventurous national camps, and leadership programs. The NCC instills discipline, patriotism, and leadership qualities.
        <br />
        <br />
        Cadets receive training for national events like Republic Day and Kargil Vijay Diwas observances.
        <br />
        NCC participates in vaccination drives, crime prevention awareness, ecosystem restoration, and International Yoga Day celebrations.
        <br />
        The NCC band and cadets actively participate in college and public events, promoting discipline and patriotism.
        <br />
        Overall, NCC develops physical fitness, leadership, and community service spirit among students.
      </>
    ),
    images: nccImages,
  },
  {
    label: "NSS (National Service Scheme)",
    value: "nss",
    color: "#16A34A",
    content: (
      <>
        NSS is rooted in the motto <b>"Not Me But You"</b>. It trains students to take up social responsibility through awareness programs, cleaning drives, plantation, blood donation camps, health, and literacy initiatives.
        <br />
        <br />
        The program emphasizes voluntary service and develops empathy and social commitment among youth.
        <br />
        NSS organizes annual special camps involving community service, health checkups, cleaning drives, tree plantations, voter awareness, Covid-19 awareness, and social welfare activities.
        <br />
        NSS adopts villages for sustained community development and conducts workshops, orientation programs, and personality development camps.
        <br />
        Volunteers participate in youth parliaments, pulse polio campaigns, and national event celebrations.
        <br />
        Benefits include leadership training, social responsibility, and recognition at national integration camps, boosting employability and personal growth.
      </>
    ),
    images: nssImages,
  },
  {
    label: "MGM Rangers",
    value: "rangers",
    color: "#7C3AED",
    content: (
      <>
        Introduced in 1996, the Rangers’ Wing provides girls with training in self-discipline, cooperation, community service, physical fitness, and leadership skills.
        <br />
        <br />
        The Rangers foster a spirit of selfless service, responsibility, and teamwork among women students.
        <br />
        They regularly engage in camps and social service activities including blood donation camps, tree plantation, cleaning drives, and anti-drug rallies.
        <br />
        Rangers receive training in first aid, mapping, compass reading, and leadership skills development.
        <br />
        Despite lack of external funding, Rangers maintain their own outfits and equipment, demonstrating dedication and self-reliance.
      </>
    ),
    images: rangerImages,
  },
  {
    label: "Rovers",
    value: "rovers",
    color: "#F59E0B",
    content: (
      <>
        The Rovers program complements the Rangers, focusing on boys’ leadership, volunteerism, adventure activities, community development, and character building.
        <br />
        <br />
        Rovers participate in social service projects, survival training, leadership camps, blood donation drives, tree plantation, and social awareness rallies.
        <br />
        They develop scouting skills, leadership abilities, first aid knowledge, event organization, and earn merit badges.
        <br />
        Together with Rangers, Rovers contribute significantly to college events and community outreach programs, fostering responsible citizenship and personal growth.
      </>
    ),
    images: roversImages,
  },
];

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images?.length) return null;

  return (
    <div style={{ position: "relative", width: "100%", maxHeight: "400px", overflow: "hidden", borderRadius: "10px" }}>
      <img
        src={images[index]}
        alt={`slide-${index}`}
        style={{ width: "100%", height: "auto", objectFit: "cover", transition: "opacity 1s ease-in-out" }}
      />
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setIndex(idx)}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: idx === index ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              border: "1px solid #00000040",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Nss() {
  const [activeTab, setActiveTab] = useState("ncc");

  const activeTabData = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div style={{ maxWidth: 900, margin: "auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem", fontWeight: "700", fontSize: "2rem" }}>MGM College - NCC, NSS, Rangers & Rovers</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: "1rem" }}>
        {tabsData.map(({ label, value, color }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            style={{
              backgroundColor: activeTab === value ? color : "#e2e8f0",
              color: activeTab === value ? "#fff" : "#333",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: 30,
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: activeTab === value ? `0 0 10px ${color}` : "none",
              transition: "all 0.3s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== value) e.currentTarget.style.backgroundColor = color + "bb";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== value) e.currentTarget.style.backgroundColor = "#e2e8f0";
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        key={activeTab}
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
          animation: "fadein 0.5s ease-out",
        }}
      >
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#f9fafb",
            borderRadius: 12,
            padding: "1.5rem",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            lineHeight: "1.6",
            fontSize: "1rem",
            color: "#111827",
            minWidth: 320,
          }}
        >
          {activeTabData?.content}
        </div>
        <div style={{ flex: "1 1 400px", minWidth: 320 }}>
          <Carousel images={activeTabData?.images || []} />
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from {opacity: 0;}
          to {opacity: 1;}
        }
      `}</style>
    </div>
  );
}