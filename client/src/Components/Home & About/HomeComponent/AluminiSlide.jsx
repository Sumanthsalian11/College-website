// AlumniLogoStrip.jsx
import { useEffect, useRef } from "react";

// Dynamically import all images from the folder
const logos = Object.values(
  import.meta.glob("../../assets/aluminilogo/*", { eager: true, as: "url" })
);

export default function AlumniLogoStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;

    const scrollLogos = () => {
      scrollAmount += 1;
      if (track) {
        track.scrollLeft = scrollAmount;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollLogos, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#f0f9ff] via-[#e0f2fe] to-[#f0f9ff] py-12 shadow-sm border-y border-blue-200">
      {/* Heading Section */}
      <div className="mb-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Our Proud Alumni are Working at Esteemed Companies Like:
        </h2>
      </div>

      {/* Logo Slider Section */}
      <div
        ref={trackRef}
        className="flex w-full overflow-hidden whitespace-nowrap px-6"
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Logo ${idx + 1}`}
            className="h-16 mx-8 shrink-0 pointer-events-none opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}
