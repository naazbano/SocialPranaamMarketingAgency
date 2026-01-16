
import React from 'react'
import { motion } from 'framer-motion'
import videoThumb from '../assets/images/Exclude.png' 

const VideoSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
        {/* Video Thumbnail - Responsive Height */}
        <img 
          src={videoThumb} 
          alt="Team Meeting" 
          className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        {/* Play Button and Title Area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          {/* Play Button - Scaled for mobile */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 mb-6"
          >
            <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[14px] md:border-l-[18px] border-l-orange-600 border-b-[8px] md:border-b-[10px] border-b-transparent ml-1.5 md:ml-2"></div>
          </motion.div>

          {/* Orange Glow - Scaled for mobile */}
          <div className="absolute w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-orange-500/30 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"></div>

          {/* Text Overlay */}
          <div className="text-center z-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Most trusted agency <br />
              <span className="opacity-80 font-medium">in your town</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection