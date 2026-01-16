import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-4 pb-8">
      <div className="max-w-7xl mx-auto custom-orange-gradient text-white rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Newsletter Section */}
        <div className="px-6 sm:px-8 md:px-12 py-10 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-xs font-semibold tracking-wide uppercase opacity-80">
                <Sparkles size={14} />
                <span>Stay Updated</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Subscribe to Our AI Marketing Insights
              </h2>
              <p className="font-poppins text-white/90 text-sm sm:text-base">
                Latest trends and strategies delivered weekly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto font-poppins max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:bg-white/20 transition-all w-full lg:w-64 placeholder:text-white/60 text-sm"
              />
              <button className="bg-white text-[#e85a1a] font-bold px-8 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-50 transition-all whitespace-nowrap text-sm">
                Subscribe <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="px-6 sm:px-8 md:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
            
            {/* Brand Column */}
            <div className="space-y-6 text-center sm:text-left">
              <p className="text-[14px] font-poppins leading-relaxed text-white/90 max-w-xs mx-auto sm:ml-0">
                We help brands grow faster with data-driven strategies and AI automation. Your growth is our mission.
              </p>
              <div className="flex justify-center sm:justify-start gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a key={index} href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all text-white/90">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold mb-5">Services</h4>
              <ul className="space-y-3 text-[14px] text-white/80 font-poppins">
                {['AI Strategy', 'Creative Engine', 'Performance Marketing', 'Data Analytics'].map((item) => (
                  <li key={item} className="cursor-pointer hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold mb-5">Company</h4>
              <ul className="space-y-3 text-[14px] text-white/80 font-poppins">
                {['About Us', 'Our Team', 'Portfolio', 'Careers'].map((item) => (
                  <li key={item} className="cursor-pointer hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold mb-5">Contact</h4>
              <div className="space-y-4 font-poppins flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-3 group">
                  <Mail size={18} className="text-white/60" />
                  <span className="text-[14px] text-white/80">hello@socialpranaam.com</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone size={18} className="text-white/60" />
                  <span className="text-[14px] text-white/80">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-black/10 py-6 px-6 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-white/60 tracking-wider">
            <p className="text-center uppercase">© 2026 Social Pranaam. Crafted with AI & ❤️</p>
            <div className="flex gap-8 uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;