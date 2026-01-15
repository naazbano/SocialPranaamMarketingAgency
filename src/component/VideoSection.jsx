import React from 'react'
import { motion } from 'framer-motion'

// Replace with your actual video thumbnail or team image path

import videoThumb from '../assets/images/Exclude.png' 



const VideoSection = () => {

  return (

    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">

      <div className="relative rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">

        {/* Video Thumbnail */}

        <img 

          src={videoThumb} 

          alt="Team Meeting" 

          className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"

        />



        {/* Overlay Gradient */}

        <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>



        {/* Play Button and Title Area */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* Play Button */}

          <motion.div 

            whileHover={{ scale: 1.1 }}

            className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 mb-6"

          >

            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-orange-600 border-b-[10px] border-b-transparent ml-2"></div>

          </motion.div>



          {/* Green Glassmorphism Circle */}

          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/30 rounded-full blur-[80px] pointer-events-none"></div>



          {/* Text Overlay */}

          <div className="text-center z-10 px-4">

            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">

              Most trusted agency <br />

              <span className="opacity-90">in your town</span>

            </h2>

          </div>

        </div>

      </div>

    </section>

  )

}



export default VideoSection 