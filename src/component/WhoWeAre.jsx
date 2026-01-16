
import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'; 
import themeImg from "../assets/images/theme.png"
import cubeImg from "../assets/images/Wireframe Cube.png"
import AnimatedButton from '../component/ui/AnimatedButton';

const WhoWeAre = () => {
  return (
    <>
      
      <div className="mt-10 md:mt-24 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 lg:gap-10 items-start relative max-w-7xl mx-auto">
          
          {/* Left Side: Content & Theme Image */}
          <div className="relative pl-0 lg:pl-36"> 
            
            {/* Theme Spiral & Label - Hidden on mobile to save vertical space, absolute on desktop */}
            <div className="hidden lg:block absolute left-0 top-0">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-orange-600 text-lg">✦</span>
                <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Who We Are</span>
              </div>
              <motion.img 
                src={themeImg} 
                alt="theme spiral" 
                className="w-32 h-auto" 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Mobile-only section label */}
            <div className="flex lg:hidden items-center gap-2 mb-6">
              <span className="text-orange-600 text-lg">✦</span>
              <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Who We Are</span>
            </div>

            {/* Content wrapper - Removed ml-20 for mobile, applied only on lg */}
            <div className="flex-1 lg:ml-20 animate-slideInRight">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-black mb-6 lg:mb-8 leading-tight">
                <span className=" text-transparent bg-clip-text silver-gradient-text font-black">Driving Smarter, Faster,</span>
                <span className="text-orange-gradient font-black"> and Predictable Growth for Modern Brands</span>
              </h2>

              <p className="text-base sm:text-lg font-poppins text-gray-300 mb-6 lg:mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
                At Social Pranaam, we help modern brands grow smarter and faster through AI-powered, data-driven marketing. We build intelligent marketing systems that combine strategy, creative execution, automation, and performance marketing to deliver predictable results. Our approach focuses on attracting the right audience, improving lead quality, optimizing conversions, and scaling growth using real-time insights and continuous optimization.
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-16">
                 <AnimatedButton text={"Get's Started Today"} />
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?u=director" className="w-12 h-12 rounded-full grayscale" alt="Director" />
                  <div>
                    <p className="text-white text-sm font-bold">Johnathan Alan Po</p>
                    <p className="text-white/40 text-[9px] uppercase font-medium tracking-widest">Director</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Responsive: 1 col on small mobile, 3 cols on sm up */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 pt-12 border-t border-white/10">
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Established for</span>
                    <h3 className="text-white text-5xl md:text-6xl font-bold">10 <span className="text-[10px] text-white/40 uppercase ml-1">Years</span></h3>
                </div>
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Work Across</span>
                    <h3 className="text-white text-5xl md:text-6xl font-bold">12 <span className="text-[10px] text-white/40 uppercase ml-1">Countries</span></h3>
                </div>
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Over</span>
                    <h3 className="text-white text-5xl md:text-6xl font-bold">100 <span className="text-orange-500 text-2xl font-light">+</span> <span className="text-[10px] text-white/40 uppercase block mt-1">Projects</span></h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Cube & Typography */}
          {/* Changed: Items center on mobile, items end on desktop */}
          <div className="relative flex flex-col items-center lg:items-end mt-12 lg:mt-0">
            <motion.img 
              src={cubeImg} 
              alt="Wireframe Cube" 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-70 lg:h-80 mb-10 lg:mb-20 opacity-80"
            />
            
            {/* Removed 'mr-20', text centers on mobile, right-aligns on desktop */}
            <div className="text-center lg:text-right">
              <div className="flex items-start justify-center lg:justify-end gap-1">
                {/* Scaled the text for mobile: text-7xl -> md:text-[140px] */}
                <h2 className="text-white text-4xl sm:text-6xl md:text-8xl  font-bold leading-[0.7] tracking-tighter silver-text-graident">70</h2>
                <span className="text-orange-500 text-4xl  font-light mt-2 md:mt-4">+</span>
              </div>
              <p className="text-white text-2xl md:text-4xl leading-none mt-4">
                Satisfied <br className="hidden lg:block"/> customers
              </p>
              <p className="text-[11px] mt-6 max-w-[240px] text-base font-poppins text-gray-300 mx-auto lg:mr-0">
                To deliver innovative ideas to elevate customer's digital products and sharpen their brand.
              </p>
            </div>
          </div>

        </div>
    </>
  )
}

export default WhoWeAre