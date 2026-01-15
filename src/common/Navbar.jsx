import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/social pranaam.webp';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import AnimatedButton from '../component/ui/AnimatedButton'; 
import { FiArrowUpRight } from "react-icons/fi";
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
    {name:'CONTACT-US' , href:'#'}
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 card-graident backdrop-blur-md' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        
        {/* 1. LEFT: Logo Only */}
        <div className="flex-1 flex justify-start ml-10">
          <div 
            className="cursor-pointer transition-transform duration-300 active:scale-95"
            onClick={() => navigate('/')}
          >
            <img 
              src={Logo} 
              alt="Social Pranaam" 
              className="h-10 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* 2. MIDDLE: Nav Links (The Figma Pill Container) */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-2 py-2 rounded-full backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider transition-all duration-300 ${
                  link.active 
                    ? 'custom-orange-gradient text-white shadow-lg' // Matches the orange pill in Figma
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
              
            ))}
          </div>
          
        </div>

       

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={28}/> : <FiMenu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}>
        <div className="mx-6 mt-2 bg-[#1A0B2E] border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold tracking-widest p-3 rounded-xl ${link.active ? 'text-[#FF6B00]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
                    <div onClick={() => {navigate('/contactus'); setIsMobileMenuOpen(false)}}>
         
                  
         
          </div>
            </a>
          ))}
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;