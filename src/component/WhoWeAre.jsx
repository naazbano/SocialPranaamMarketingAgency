import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'; //
import themeImg from "../assets/images/theme.png"
import cubeImg from "../assets/images/Wireframe Cube.png"
import AnimatedButton from '../component/ui/AnimatedButton';
const WhoWeAre = () => {
  return (
   <>
     <div className="mt-44 ml-10  grid lg:grid-cols-[1fr_300px] gap-10 items-start relative">
          
          {/* Left Side: Content & Theme Image */}
          <div className="relative pl-0 lg:pl-36"> 
            
            {/* Theme Spiral & Label - Absolute to stay on the left margin */}
            <div className="hidden lg:block absolute left-0 top-0  ">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-orange-600 text-lg">✦</span>
                <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Who We Are</span>
              </div>
              <motion.img 
                src={themeImg} 
                alt="theme spiral" 
                className="w-40 h-50" 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="flex-1 ml-20 animate-slideInRight ">
              <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-6 lg:mb-8 leading-tight">
                <span className="block text-transparent bg-clip-text silver-gradient-text font-black">Driving Smarter, Faster,</span>
              <span className="text-orange-gradient  font-black">and Predictable Growth for Modern Brands</span>
              </h2>

              <p className="text-base sm:text-lg  font-poppins text-gray-300 mb-6 lg:mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
              At Social Pranaam, we help modern brands grow smarter and faster through AI-powered, data-driven marketing. We build intelligent marketing systems that combine strategy, creative execution, automation, and performance marketing to deliver predictable results. Our approach focuses on attracting the right audience, improving lead quality, optimizing conversions, and scaling growth using real-time insights and continuous optimization.

              </p>

              <div className="flex flex-wrap items-center gap-8 mb-16">
                 <AnimatedButton text={"Get's Started Today"} />
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?u=director" className="w-12 h-12 rounded-full grayscale" alt="Director" />
                  <div>
                    <p className="text-white text-sm font-bold">Johnathan Alan Po</p>
                    <p className="text-white/40 text-[9px] uppercase font-medium tracking-widest">Director</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-12 border-t border-white/10">
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Established for</span>
                    <h3 className="text-white text-6xl font-bold ">10 <span className="text-[10px] text-white/40 uppercase ml-1">Years</span></h3>
                </div>
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Work Across</span>
                    <h3 className="text-white text-6xl font-bold ">12 <span className="text-[10px] text-white/40 uppercase ml-1">Countries</span></h3>
                </div>
                <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] uppercase font-bold mb-2 tracking-widest">Over</span>
                    <h3 className="text-white text-6xl font-bold ">100 <span className="text-orange-500 text-2xl font-light">+</span> <span className="text-[10px] text-white/40 uppercase block mt-1">Projects</span></h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Cube & Typography */}
          <div className="relative flex flex-col items-end ">
            <motion.img 
              src={cubeImg} 
              alt="Wireframe Cube" 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-90 h-100 mb-30 opacity-80"
            />
            
            <div className="text-right mr-20 ">
              <div className="flex items-start justify-end gap-1">
                <h2 className="text-white text-[140px] font-bold leading-[0.7] tracking-tighter silver-text-graident">70</h2>
                <span className="text-orange-500 text-6xl font-light mt-4">+</span>
                
                
              </div>
              <p className="text-white text-4xl  font-trajan-pro  leading-none mt-4">
                Satisfied <br/> customers
              </p>
              <p className=" text-[11px] mt-8 max-w-[240px]  text-base  font-poppins text-gray-300 ">
                To deliver innovative ideas to elevate customer's digital products and sharpen their brand.
              </p>
            </div>
          </div>

        </div>
   
   
   </>
  )
}

export default WhoWeAre