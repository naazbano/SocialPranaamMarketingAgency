import React from 'react'
import { motion } from 'framer-motion'
import saturn from '../assets/images/shape-style.png'
import reviewImg from "../assets/images/Logos.png"
import teamImage from '../assets/images/Exclude.png'
import AI from "../assets/images/Hero.png"

const HeroSection = () => {
  return (
    <section className="relative w-full hero-bg ">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#fafafcff 1px, transparent 1px), linear-gradient(90deg, #fafafcff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        ></div>

        {/* Dynamic Glow Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* TOP CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-center ">
          
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 z-20 animate-slideInLeft ">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-black mb-6 lg:mb-8 leading-tight   relative">
              <span className="inline-flex flex-wrap items-center gap-2 md:gap-4 text-transparent bg-clip-text silver-gradient-text">
                AI-Powered 
              </span>
              <br />
              <span className="text-orange-gradient">Marketing</span>
              <span className=" text-transparent bg-clip-text silver-gradient-text"> Agency</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl ml-0 sm:ml-1 font-poppins text-gray-300 mb-6 lg:mb-8 max-w-lg animate-fadeInUp animate-delay-200 relative">
              At Social Pranaam, we help brands grow faster with data-driven strategies, smart automation, and performance-focused marketing systems.
            </p>
          </div>

          {/* AI IMAGE CONTAINER - The Fix is here */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-slideInRight">
            <img
              src={AI}
              alt="AI Illustration"
      
              className="
                /* Positioning Fix */
                relative
                z-10
                /* This allows the large image to sit correctly in the grid */
                lg:translate-x-[5%] 
                md:scale-110
                
                /* Keep your original size & styling */
                w-[90vw]
                max-w-[900px]
                h-auto
                opacity-80
                pointer-events-none
             
              "
            />
          </div>
        </div>

        {/* TEAM IMAGE SECTION */}
        <div className="mt-16 md:mt-24 relative">
          <motion.img 
            src={saturn} 
            alt="saturn" 
            animate={{ x: [-10, 10, -10], rotate: [0, -5, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute -left-20 md:-left-30 top-0 w-24 md:w-56 z-0 opacity-40 pointer-events-none" 
          />
          
          <div className="rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-[#0a0a0a]">
            <img 
              src={teamImage} 
              alt="Our Team" 
              className="w-full h-[350px] sm:h-[450px] md:h-[650px] object-cover opacity-90" 
            />
            
            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl flex items-center gap-3 md:gap-5 shadow-2xl">
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-orange-500 bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg md:text-3xl leading-none">200K+</h4>
                <p className="text-white/50 text-[8px] md:text-[10px] uppercase tracking-widest font-bold mt-1">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* TRUSTED BY LOGOS */}
        <div className="mt-10 mb-16 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-orange-600 to-orange-500">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Trusted by</span>
            <span className="text-white text-sm md:text-lg font-bold">25,000+ businesses </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 grayscale invert brightness-200 opacity-80">
            <img src={reviewImg} alt="Partner Logos" className="h-6 md:h-8 w-auto object-contain" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
