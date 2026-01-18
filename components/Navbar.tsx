import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isVisible, setIsVisible] = useState(true); // Always visible or scroll logic if strictly "scrolled to end" needed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simplified: The user said "always appear when page is scrolled", usually means sticky.
  // We'll keep it fixed at the top (or slightly floating).

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'About Us', id: 'about', path: '/about' },
    { name: 'Services', id: 'services', path: '/services' },
    { name: 'News', id: 'news', path: '#' },
    { name: 'Webflow', id: 'webflow', path: '#' },
  ];

  return (
    <>
      {/* Desktop Navbar Container */}
      <nav className={`hidden lg:flex absolute w-full z-50 top-0 transition-all duration-300 py-6 px-12 items-center justify-between`}>

        {/* Left: Logo with Glow */}
        <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="relative z-50">
          <img
            src="/resources/labflow-2.png"
            alt="LabFlow Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_25px_rgba(0,229,209,1.2)]"
          />
        </a>

        {/* Center: Floating Pill Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md text-white px-8 py-3 rounded-full border-2 border-white/20 shadow-lg flex items-center space-x-8 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                if (link.id !== 'news' && link.id !== 'webflow') {
                  handleNavClick(e, link.id);
                } else {
                  e.preventDefault();
                }
              }}
              className={`text-base font-medium transition-colors hover:text-phunk-cyan ${currentPage === link.id ? 'text-white' : 'text-gray-300'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Talk to Us Button */}
        <div className="relative z-50">
          <a href="/contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-phunk-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-phunk-cyan transition-all duration-300 shadow-[0_0_20px_rgba(37,173,249,0.3)] hover:shadow-[0_0_30px_rgba(0,229,209,0.5)]">
            Talk to us
          </a>
        </div>

      </nav>

      {/* Mobile Navbar (Standard for usability) */}
      <nav className="lg:hidden absolute top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-sm p-4 flex justify-between items-center border-b border-white/10">
        <div className="w-10 overflow-hidden">
          {/* Simple Logo Placeholder since we might assume logo is globally present or needed for mobile */}
          {ASSETS.logo}
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center text-center space-y-8 p-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                if (link.id !== 'news' && link.id !== 'webflow') handleNavClick(e, link.id);
                else setIsMenuOpen(false);
              }}
              className="text-3xl font-bold text-white hover:text-phunk-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;