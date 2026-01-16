// 
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import logos from "../assets/images/Logos.png";

const Testimonials = () => {
  return (
    <section className='py-12 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden max-w-7xl mx-auto'>
      <div className="max-w-6xl mx-auto border border-white/10 rounded-[32px] p-6 sm:p-8 lg:p-12 relative bg-gradient-to-b from-purple-800/40 to-transparent backdrop-blur-md">
        
        {/* Header Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-orange-500 text-lg">✦</span>
          <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold opacity-70">Testimonials</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black mb-8 leading-tight">
              <span className="bg-clip-text silver-gradient-text">Hear what others say about</span> 
              <span className="text-orange-gradient"> partnering with us</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-white text-6xl font-bold tracking-tighter leading-none">4.8</h3>
                <div className="flex justify-center sm:justify-start gap-1 text-yellow-500 mt-3">
                  {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={16}/>)}
                </div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-white/10 mx-4"></div>
              <p className="text-sm md:text-base font-poppins text-gray-400 max-w-[240px]">
                We Deliver Innovative Ideas to Elevate Customer's Digital Products.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="card-gradient backdrop-blur-xl border border-white/10 rounded-[28px] p-6 md:p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex gap-1 text-orange-500 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={14} />)}
              </div>
              
              <p className="text-white  font-poppins text-base md:text-xl font-medium leading-relaxed mb-10">
                "Our vision is to empower brands and small businesses through smart, data-driven digital solutions. Building Brands through Brilliant Web Design focuses on how a well-crafted website."
              </p>

              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?u=john" className="w-12 h-12 rounded-full ring-2 ring-orange-500/20" alt="John Doe" />
                  <div>
                    <h4 className="text-white font-bold text-base">John Doe</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">CEO, TECHVIBE</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-all">
                    <FiArrowLeft size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 transition-all">
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos Footer */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] text-center font-bold uppercase tracking-widest text-white/30 mb-6">
            Trusted by Industry Leaders
          </p>
          <div className="flex justify-center items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img src={logos} alt="partner logos" className="max-h-8 md:max-h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;