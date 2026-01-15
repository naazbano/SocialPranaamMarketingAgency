import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-4">
      <div className="max-w-7xl mx-auto custom-orange-gradient text-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Newsletter Section - Reduced padding from py-12 to py-8 */}
        <div className="px-8 md:px-12 py-8 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold tracking-wide uppercase opacity-80">
                <Sparkles size={14} />
                <span>Stay Updated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Subscribe to Our AI Marketing Insights
              </h2>
              <p className="font-poppins text-white/90 text-base">
                Latest trends and strategies delivered weekly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto font-poppins">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2.5 outline-none focus:bg-white/20 transition-all w-full lg:w-64 placeholder:text-white/60"
              />
              <button className="bg-white text-[#e85a1a] font-bold px-6 py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors whitespace-nowrap">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links - Reduced padding from py-16 to py-10 and tightened gaps */}
        <div className="px-8 md:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <p className="text-[14px] font-poppins leading-relaxed text-white max-w-xs">
                We help brands grow faster with data-driven strategies and AI automation. Your growth is our mission.
              </p>
              <div className="flex gap-2">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a key={index} href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all text-white/90 hover:text-white">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-md font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[14px] text-white/80 font-poppins">
                {['AI Strategy', 'Creative Engine', 'Performance Marketing', 'Data Analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                    <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-md font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-[14px] text-white/80 font-poppins">
                {['About Us', 'Our Team', 'Portfolio', 'Careers'].map((item) => (
                  <li key={item} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                    <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-md font-bold mb-4">Contact</h4>
              <div className="space-y-3 font-poppins">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="bg-white/10 p-2 rounded-lg text-white/90">
                    <Mail size={16} />
                  </div>
                  <span className="text-[14px] text-white/80 group-hover:text-white transition-colors">hello@socialpranaam.com</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="bg-white/10 p-2 rounded-lg text-white/90">
                    <Phone size={16} />
                  </div>
                  <span className="text-[14px] text-white/80 group-hover:text-white transition-colors">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar - Tighter py-4 padding */}
        <div className="w-full bg-[#9b3a0e]/50 py-4 px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/70">
            <p>© 2026 Social Pranaam. Crafted with AI & ❤️</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;