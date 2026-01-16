import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMap, FiZap, FiBarChart2, FiTrendingUp } from 'react-icons/fi'; 
import infinity from '../assets/images/Infinity Strip.png';

const steps = [
  { id: 'STEP 01', title: 'Discover & Diagnose', icon: <FiSearch />, desc: 'AI‑powered business and market analysis.' },
  { id: 'STEP 02', title: 'Strategy & Design', icon: <FiMap />, desc: 'Growth roadmap and AI architecture.' },
  { id: 'STEP 03', title: 'Launch & Automate', icon: <FiZap />, desc: 'Execution with automation at the core.' },
  { id: 'STEP 04', title: 'AI Insights', icon: <FiBarChart2 />, desc: 'Deep-learning analytics to monitor and optimize.' },
  { id: 'STEP 05', title: 'Scale What Works', icon: <FiTrendingUp />, desc: 'Expand proven channels and systems.' },
];

const Process = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-12 overflow-hidden max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-orange-500 text-lg">✦</span>
        <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Process</span>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black leading-tight">
          <span className='text-transparent bg-clip-text silver-gradient-text'>How We</span>
          <span className="text-orange-gradient"> Work</span>
        </h2>
        <motion.img 
          src={infinity} 
          animate={{ rotate: 360 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
          className="w-12 md:w-16 h-auto opacity-60" 
        />
      </div>

      {/* Timeline Section */}
      {/* Added items-stretch to ensure grid children take up full height */}
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 items-stretch">
        {/* Horizontal Line (Desktop) */}
        <div className="hidden md:block absolute top-[4px] left-0 w-full h-[1px] bg-white/10"></div>
        
        {/* Vertical Line (Mobile) */}
        <div className="block md:hidden absolute top-0 left-[11px] w-[1px] h-full bg-white/10"></div>

        {steps.map((step, idx) => (
          /* Added flex flex-col to the step container */
          <div key={idx} className="relative pt-0 md:pt-8 pl-8 md:pl-0 group flex flex-col">
            {/* Step Dot */}
            <div className="absolute top-[8px] left-[7px] md:top-[-4px] md:left-0 w-2.5 h-2.5 rounded-full custom-orange-gradient shadow-[0_0_10px_#f97316] z-20"></div>
            
            <span className="silver-gradient-text text-[10px] font-bold tracking-widest block mb-4">
              {step.id}
            </span>
            
            {/* FIX: Added "flex-1" and "h-full" 
              This ensures that even if the description text is shorter, 
              the card grows to match the tallest one in the row.
            */}
            <div className="flex-1 h-full bg-gradient-to-br from-purple-600/20 backdrop-blur-md border border-white/5 rounded-3xl p-6 transition-all duration-500 hover:border-orange-500/30 group-hover:-translate-y-2 flex flex-col">
              <div className="w-10 h-10 md:w-12 md:h-12 custom-orange-gradient rounded-xl flex items-center justify-center mb-4 text-white shadow-lg shrink-0">
                {React.cloneElement(step.icon, { size: 20 })}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;