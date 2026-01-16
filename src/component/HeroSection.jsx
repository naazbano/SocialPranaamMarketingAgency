import React from 'react'
import { motion } from 'framer-motion'
import saturn from '../assets/images/shape-style.png'
import reviewImg from "../assets/images/Logos.png"
import teamImage from '../assets/images/Exclude.png'
import AI from "../assets/images/Hero.png"

const HeroSection = () => {
  return (
    // Added pb-10 and adjusted pt for mobile spacing
    <section className="relative w-full overflow-hidden pt-10 sm:pt-16 lg:pt-20 pb-10">
      
      {/* BACKGROUND AI IMAGE - Adjusted opacity and size for mobile readability */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 opacity-50 pointer-events-none hidden md:block">
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={AI} 
          alt="AI Background" 
          // object-top for mobile so it doesn't hide under the team image
          className="w-full h-full object-contain object-top lg:object-right-top"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `linear-gradient(#fafafcff 1px, transparent 1px), linear-gradient(90deg, #fafafcff 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)', // Responsive grid size
            maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* TOP CONTENT */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Kept your exact classes, just ensured text-4xl is the base for mobile */}
                     <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-black mb-6 lg:mb-8 leading-tight   relative">
              <span className="inline-flex flex-wrap items-center gap-2 md:gap-4 text-transparent bg-clip-text silver-gradient-text">
                AI-Powered 
              </span>
              <br />
              <span className="text-orange-gradient">Marketing</span>
              <span className=" text-transparent bg-clip-text silver-gradient-text"> Agency</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-300 mb-10 max-w-lg leading-relaxed">
              At Social Pranaam, we help brands grow faster with data-driven strategies, 
              smart automation, and performance-focused marketing systems.
            </p>
          </motion.div>
        </div>

        {/* TEAM IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 sm:mt-14 md:mt-24 relative"
        >
          {/* Floating Saturn Asset - Adjusted size for mobile */}
          <motion.img 
            src={saturn} 
            alt="decoration" 
            animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute -left-6 md:-left-20 -top-5 md:top-[-10px] w-16 sm:w-32 md:w-48 z-10 opacity-60 pointer-events-none" 
          />
          
          <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10 bg-[#0a0a0a]">
            {/* Added dynamic height (h-[250px] for mobile) */}
            <img 
              src={teamImage} 
              alt="Our Team" 
              className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover opacity-90" 
            />
            
            {/* Review Badge - Scaled for small screens */}
            <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 bg-black/70 backdrop-blur-2xl border border-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 shadow-2xl">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-orange-500 bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg md:text-2xl leading-none">200K+</h4>
                <p className="text-white/50 text-[8px] md:text-[10px] uppercase tracking-widest font-bold mt-1">Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* TRUSTED BY LOGOS */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="mt-10 mb-10 sm:mb-20 border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-orange-600 to-orange-400"
        >
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-white/70 text-[10px] uppercase font-bold tracking-[0.2em]">Trusted by</span>
            <span className="text-white text-lg md:text-xl font-extrabold tracking-tight">25,000+ businesses</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 grayscale invert brightness-200 opacity-90">
            <img src={reviewImg} alt="Partner Logos" className="h-6 md:h-9 w-auto object-contain" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection