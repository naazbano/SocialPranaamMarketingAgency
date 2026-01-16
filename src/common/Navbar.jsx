import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/social pranaam.webp';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
// 1. Import the icon
import { HiOutlineArrowUpRight } from 'react-icons/hi2'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'ABOUT US', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'PORTFOLIO', href: '#' },
    { name: 'ARTICLES', href: '#' },
    { name: 'CONTACT-US', href: '#' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-3 sm:py-4 card-graident backdrop-blur-md' : 'py-5 sm:py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex-1 flex justify-start">
          <div 
            className="cursor-pointer transition-transform duration-300 active:scale-95"
            onClick={() => navigate('/')}
          >
            <img 
              src={Logo} 
              alt="Social Pranaam" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* MIDDLE: Desktop Nav Links */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-2 py-2 rounded-full backdrop-blur-sm">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 xl:px-6 py-2.5 rounded-full text-[11px] xl:text-[12px] font-bold tracking-wider transition-all duration-300 flex items-center gap-1 ${
                  link.active 
                    ? 'custom-orange-gradient text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {/* 2. Conditionally render the icon for Contact Us */}
                {link.name === 'CONTACT-US' && (
                  <HiOutlineArrowUpRight 
                    className={`text-[14px] ${link.active ? 'text-white' : 'text-[#FF6B00]'}`} 
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button 
            className="text-white p-2 bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-0 top-[70px] sm:top-[90px] lg:hidden transition-all duration-500 z-[99] ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}>
        <div className="mx-4 sm:mx-8 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold tracking-widest p-4 rounded-xl transition-colors flex items-center justify-between ${
                link.active ? 'bg-orange-500/20 text-[#FF6B00]' : 'text-gray-300 hover:bg-white/5'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              {/* Icon for Mobile Menu as well */}
              {link.name === 'CONTACT-US' && (
                <HiOutlineArrowUpRight className="text-lg text-[#FF6B00]" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;