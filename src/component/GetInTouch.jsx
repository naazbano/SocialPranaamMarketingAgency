import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiZap } from "react-icons/fi"; // Added Zap for the lightning icon

const GetInTouch = () => {
  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative z-10 overflow-hidden text-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content - UNCHANGED */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-orange-500 text-lg"
            >
              ✦
            </motion.span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-6 lg:mb-8 leading-tight">
            <span className='block text-transparent bg-clip-text silver-gradient-text font-black'> Ready to Grow </span>
            <span className="text-orange-500 pr-2"> Smarter with</span>
            <span className="silver-gradient-text "> AI?</span>
          </h2>

          <p className="text-base sm:text-lg  font-poppins text-gray-300 max-w-md leading-relaxed">
            Partner with Social Pranaam to transform your marketing into a predictable growth engine.
            Leverage AI-driven strategies, automation, and performance marketing to attract the right audience, convert leads efficiently,
            and scale your business faster. Let’s build smarter growth together.
          </p>
        </div>

        {/* Right Side: Updated Decorative Section (Figma Match) */}
        <div className="relative flex justify-center items-center h-[500px]">
          
          {/* Outer Glowing Rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/10" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5" />

          {/* Orbiting Points (Moving Particles) */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              animate={{
                rotate: 360,
                x: [0, Math.random() * 10, 0],
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                x: { duration: 2, repeat: Infinity, yoyo: true }
              }}
              style={{
                width: i === 0 ? '8px' : '4px',
                height: i === 0 ? '8px' : '4px',
                left: '50%',
                top: '50%',
                transformOrigin: `${160 + i * 20}px ${160 + i * 20}px`,
                opacity: 0.6
              }}
            />
          ))}

          {/* Main Visual Container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-80 h-80 flex items-center justify-center rounded-full bg-gradient-to-b from-purple-800/70 to-purple-900/20 shadow-2xl border border-white/10"
          >
            {/* Inner Shadow Circle */}
            <div className="absolute inset-4 rounded-full bg-purple-90  shadow-[inset_0_4px_20px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center p-8 text-center">
              
              {/* Lightning Icon (Figma Zap) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiZap className="text-orange-500 text-5xl mb-4 fill-orange-500" />
              </motion.div>

              {/* Text Content */}
              <p className="text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                Book a Free
              </p>
              <h3 className="text-white text-xl  font-black leading-tight mb-4">
                GROWTH<br/>CONSULTATION
              </h3>

              {/* Arrow Icon */}
              <FiArrowUpRight className="text-orange-500 text-3xl" />
            </div>

            {/* Moving Decorative Star (Top Right) */}
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 right-10 text-orange-300 text-xl"
            >
              ✧
            </motion.span>
          </motion.div>

          {/* Ambient Purple/Orange Glow */}
          <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute w-40 h-40 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none -bottom-10"></div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;