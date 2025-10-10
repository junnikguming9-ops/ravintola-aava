'use client'; // Add this line if you are using the App Router

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full p-6 z-50 transition-all duration-300 
      ${hasScrolled 
        ? 'fixed top-0 left-0 backdrop-blur-lg shadow-md' 
        : 'absolute top-0 left-0 bg-transparent'
      }`}
    >
      <nav className="relative flex items-center justify-between">
        {/* Logo - Color is now always text-gold */}
        <div>
          <Link href="/" className="text-5xl font-playfair italic text-gold">
            AAVA
          </Link>
        </div>

        {/* Desktop Navigation - Color is now always text-gold */}
        <div className="hidden md:flex items-center space-x-8">        
          <Link href="#Tarina" className="text-lg font-poppins text-gold hover:text-pale transition-colors duration-300">
            Tarina
          </Link>
          <Link href="#Menu" className="text-lg font-poppins text-gold hover:text-pale transition-colors duration-300">
            Menu
          </Link>
          <Link href="#Galleria" className="text-lg font-poppins text-gold hover:text-pale transition-colors duration-300">
            Galleria
          </Link>
          <Link href="#Ota-Yhteyttä" className="text-lg font-poppins text-gold hover:text-pale transition-colors duration-300">
            Ota Yhteyttä
          </Link>
        </div>

        {/* Desktop Call to Action Button (Unchanged) */}
        <div className="hidden md:block">
          <Link href="#Ota-Yhteyttä" className="px-6 py-2 text-lg font-poppins bg-gold text-pale border border-gold hover:bg-transparent hover:text-gold transition-colors duration-300">
            Varaa Pöytä
          </Link>
        </div>

        {/* Mobile Menu Button - Color is now always text-gold */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none text-gold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Unchanged) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-off-navy/90 p-6 rounded-lg">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="#Tarina" className="text-2xl font-poppins text-pale" onClick={() => setIsMenuOpen(false)}>Tarina</Link>
            </li>
            <li>
              <Link href="#Menu" className="text-2xl font-poppins text-pale" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            </li>
            <li>
              <Link href="#Galleria" className="text-2xl font-poppins text-pale" onClick={() => setIsMenuOpen(false)}>Galleria</Link>
            </li>
            <li>
              <Link href="#Ota-Yhteyttä" className="text-2xl font-poppins text-pale" onClick={() => setIsMenuOpen(false)}>Ota Yhteyttä</Link>
            </li>
            <li>
              <Link href="#Ota-Yhteyttä" className="mt-4 px-8 py-3 text-lg font-poppins bg-gold text-pale border border-gold" onClick={() => setIsMenuOpen(false)}>
                Varaa Pöytä
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;