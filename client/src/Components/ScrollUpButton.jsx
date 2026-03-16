import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${
        visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full p-4 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white text-xl" />
      </button>
    </div>
  );
}

export default ScrollUpButton;