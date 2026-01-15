import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiMap, 
  FiZap, 
  FiBarChart2, 
  FiTrendingUp 
} from 'react-icons/fi'; 
import infinity from '../assets/images/Infinity Strip.png';

const steps = [
  { 
    id: 'STEP 01', 
    title: 'Discover & Diagnose', 
    icon: <FiSearch />, 
    desc: 'AI‑powered business and market analysis.' 
  },
  { 
    id: 'STEP 02', 
    title: 'Strategy & Design', 
    icon: <FiMap />, 
    desc: 'Growth roadmap and AI architecture.' 
  },
  { 
    id: 'STEP 03', 
    title: 'Launch & Automate', 
    icon: <FiZap />, 
    desc: 'Execution with automation at the core.' 
  },
  { 
    id: 'STEP 04', 
    title: 'AI Insights', 
    icon: <FiBarChart2 />, 
    desc: 'Deep-learning analytics to monitor and optimize performance.' 
  },
  { 
    id: 'STEP 05', 
    title: 'Scale What Works', 
    icon: <FiTrendingUp />, 
    desc: 'Expand proven channels and systems.' 
  },
];

const Process = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-6 md:px-12 overflow-hidden max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="text-orange-500 text-lg">✦</span>
        <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Process</span>
      </motion.div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-3xl md:text-4xl  font-black  leading-tight"
        >
          <span className='text-transparent bg-clip-text silver-gradient-text'>How We</span>
          <span className="text-orange-gradient"> Work</span>
        </motion.h2>
        <motion.img 
          src={infinity} 
          animate={{ rotate: 360 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
          className="w-16 h-auto opacity-80" 
        />
      </div>

      {/* Timeline Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4"
      >
        {/* Horizontal Line (Desktop Only) */}
        <div className="hidden md:block absolute top-1 left-0 w-full h-[1px] bg-white/10"></div>
        
        {/* Vertical Line (Mobile Only) */}
        <div className="block md:hidden absolute top-0 left-1 w-[1px] h-full bg-white/10"></div>

        {steps.map((step, idx) => (
          <motion.div 
            key={idx} 
            variants={cardVariants}
            className="relative pt-8 w-full group"
          >
            {/* Step Dot */}
            <div className="absolute top-[-4px] md:top-[-4px] left-0 md:left-0 w-2 h-2 rounded-full custom-orange-gradient shadow-[0_0_10px_#f97316] z-10"></div>
            
            <span className="silver-gradient-text text-[9px] font-bold tracking-widest block mb-4 ml-4 md:ml-0">
              {step.id}
            </span>
            
            <div className="bg-gradient-to-br from-purple-600/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-800/30 hover:to-purple-700/20 group-hover:-translate-y-2">
              <div className="lg:w-12 lg:h-12 h-10 w-10 custom-orange-gradient rounded-2xl flex items-center justify-center mb-4 text-white">
                {React.cloneElement(step.icon, { size: 20 })}
              </div>
              <h3 className="lg:text-xl text-lg font-bold text-white mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 font-poppins text-sm lg:text-md leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;