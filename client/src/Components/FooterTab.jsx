import React from 'react';
import footerLogo from '../assets/MGM-footer-img.png';

export default function Footer() {
  return (
    <footer className="bg-[#f9f6f6] text-[#333] py-3 text-[13px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-wrap justify-center md:justify-between items-center gap-y-6 text-center md:text-left">

        {/* Logo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={footerLogo}
            alt="MGM College logo"
            className="w-[240px] h-auto"
          />
        </div>

        {/* Info & Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-2">
          <p>©2025 Mahatma Gandhi Memorial College, Udupi</p>
          <div className="flex flex-wrap justify-center gap-2 text-[12px]">
            <a href="#" className="hover:text-[#004080]">Terms of Use</a>
            <span className="text-[#999]">|</span>
            <a href="#" className="hover:text-[#004080]">Privacy Policy</a>
            <span className="text-[#999]">|</span>
            <a href="#" className="hover:text-[#004080]">Disclaimer</a>
          </div>
          <p>Developed by MSc Students 2024–26 <span className="text-red-500">❤️</span></p>
        </div>

        {/* Address & Social */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end space-y-2 text-[12px]">
          <p>📍 Kunjibettu, Udupi, Karnataka - 576106</p>
          <p>
            ✉️ <a href="mailto: principal_mgm@yahoo.co.in" className="text-[#0066cc] hover:underline"> principal_mgm@yahoo.co.in</a>
          </p>
          <p>📞  0820 - 2520359</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end text-[18px] text-[#0066cc] space-x-3 mt-1">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.instagram.com/mgm_journalism_" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/school/mgm-college-udupi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.youtube.com/@MGM.Journalism" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}