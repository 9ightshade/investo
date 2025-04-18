"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function NavBar() {
  const navItems = ["About", "Services", "Pricing", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#171717] rounded-full w-full max-w-5xl mx-auto flex flex-wrap py-3 px-4 md:px-8 justify-between items-center sticky top-4 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/30 scale-95 md:scale-98" : ""
      }`}>
      {/* Logo and brand */}
      <div className="flex text-white items-center gap-2 group">
        <div className="overflow-hidden rounded-full transition-transform duration-300 hover:scale-110">
          <Image
            src="/logo.png"
            alt="Investo logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain transition-transform duration-500 group-hover:rotate-12"
          />
        </div>
        <h1 className="font-medium text-lg tracking-wide transition-all duration-300 group-hover:text-[#D1F701]">
          Investo
        </h1>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center text-white p-2 transition-colors duration-300 hover:text-[#D1F701] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              className="transition-transform duration-300"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              className="transition-transform duration-300"
            />
          )}
        </svg>
      </button>

      {/* Navigation links - responsive */}
      <div
        className={`${
          isMenuOpen
            ? "max-h-64 opacity-100 visible"
            : "max-h-0 opacity-0 invisible md:max-h-64 md:opacity-100 md:visible"
        } transition-all duration-300 ease-in-out w-full md:w-auto overflow-hidden md:overflow-visible flex flex-col md:flex-row md:items-center absolute md:relative top-full left-0 right-0 md:top-auto bg-[#171717] md:bg-transparent rounded-b-lg md:rounded-none mt-1 md:mt-0`}>
        <ul className="flex flex-col md:flex-row items-start md:items-center text-white md:justify-between gap-0 md:gap-8 lg:gap-12 w-full md:w-auto p-4 md:p-0">
          {navItems.map((item) => (
            <li className="relative w-full md:w-auto py-3 md:py-0" key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#D1F701] cursor-pointer transition-colors duration-300 relative inline-block after:absolute after:w-0 after:h-0.5 after:bg-[#D1F701] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 md:p-0 w-full hidden md:block md:w-auto">
        <button className="text-black bg-[#D1F701] rounded-full cursor-pointer px-6 py-2.5 md:px-8 md:py-3 font-medium text-lg md:text-xl transition-all duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-[#D1F701]/20 hover:translate-y-[-2px] hover:bg-[#daff02] active:translate-y-[1px]">
          Download App
        </button>
      </div>
    </nav>
  );
}
