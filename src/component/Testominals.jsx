import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import logos from "../assets/images/Logos.png";

const Testimonials = () => {
  return (
    <>
      {/* Reduced outer padding and max-width for a tighter look */}
      <div className='py-10 px-6 md:px-12 overflow-hidden max-w-6xl mx-auto'>
        
        {/* Adjusted max-width to 5xl and reduced inner padding */}
        <div className="max-w-5xl mx-auto border border-white/10 lg:rounded-3xl p-6 lg:p-10 relative bg-gradient-to-b from-purple-800/70 to-purple-900/20">
          
          {/* Header Section */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">✦</span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold opacity-70">Testimonials</span>
          </div>

          {/* Reduced gap between columns */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Side */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-4 leading-tight">
                <span className="bg-clip-text silver-gradient-text  font-black">Hear what others say about</span> 
                <span className="text-orange-gradient font-black"> partnering with us</span>
              </h2>
              
              <div className="flex items-end gap-6">
                <div>
                  <h3 className="text-white text-5xl font-bold tracking-tighter leading-none">4.8</h3>
                  <div className="flex gap-1 text-yellow-500 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={14}/>)}
                  </div>
                  <p className="text-sm sm:text-base font-poppins text-gray-300 mb-4 leading-relaxed mt-4 max-w-[280px]">
                    We Deliver Innovative Ideas to Elevate Customer's Digital Products.
                  </p>
                </div>
                
                {/* Note: Ensure googgleReview is imported or defined
                <div className="pb-2">
                   <img src={googgleReview} className="h-8 w-auto object-contain" alt="reviews"/>
                </div> */}
              </div>
            </div>

            {/* Right Side: Active Card */}
            <div className="relative">
              <div className="relative p-[1px] rounded-[24px] bg-gradient-to-r">
                {/* Reduced internal padding of the testimonial card */}
                <div className="card-gradient backdrop-blur-sm border border-purple-500/20 rounded-[23px] p-6 lg:p-8 relative overflow-hidden hover:scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-800/30 hover:to-purple-700/20 animate-fadeInUp">
                  
                  <div className="flex gap-1 text-orange-500 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={14} />)}
                  </div>
                  
                  <p className="text-white/90 font-poppins text-lg leading-relaxed mb-6 relative z-10 font-medium">
                    "Our vision is to empower brands and small businesses through smart, data-driven digital solutions. Building Brands through Brilliant Web Design focuses on how a well-crafted website."
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/100?u=john" className="w-12 h-12 rounded-full grayscale" alt="John Doe" />
                      <div>
                        <h4 className="text-white font-bold text-base">John Doe</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">CEO, TECHVIBE</p>
                      </div>
                    </div>

                    {/* Smaller Navigation Buttons */}
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                        <FiArrowLeft size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                        <FiArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Logos Footer - Tightened margins */}
          <div className="mt-8 pt-6 border-t border-white/10 relative">
            <p className="silver-gradient-text text-[9px] font-bold uppercase tracking-[0.2em] absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a0b2e] px-4">
              10+ Brands Trust Us
            </p>
            <div className="flex justify-center items-center">
              <img src={logos} alt="partner logos" className="max-h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;