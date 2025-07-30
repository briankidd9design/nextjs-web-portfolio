"use client";
import React, { useState } from "react";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Color Palette Display */}
      {/* <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:block hidden">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-12 h-6 bg-blue-900"></div>
          <div className="w-12 h-6 bg-blue-500"></div>
          <div className="w-12 h-6 bg-green-500"></div>
        </div>
      </div> */}

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick("hero")}
                className="bg-gradient-to-r from-blue-900 to-green-500 text-white px-3 py-1 rounded font-bold hover:shadow-lg transition-shadow"
                aria-label="Go to top"
              >
                BK
              </button>
            </div>

            {/* Desktop Navigation Items - Hidden on mobile (400px and below) */}
            <div className="hidden min-[401px]:flex space-x-2 sm:space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 py-2 sm:px-3 text-xs sm:text-sm lg:text-base font-medium transition-all duration-200 rounded-md ${
                    activeSection === item.id
                      ? "text-blue-900 bg-blue-50 border-b-2 border-blue-900"
                      : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Hamburger Menu Button - Visible on mobile (400px and below) */}
            <div className="min-[401px]:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Visible when hamburger is clicked */}
        <div
          className={`min-[401px]:hidden ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-200 rounded-md ${
                  activeSection === item.id
                    ? "text-blue-900 bg-blue-50 border-l-4 border-blue-900"
                    : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
