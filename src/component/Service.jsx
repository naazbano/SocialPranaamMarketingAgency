import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importing specific icons related to your titles
import { 
  FiArrowUpRight, 
  FiCpu, 
  FiTrendingUp, 
  FiShare2, 
  FiLayers, 
  FiLayout, 
  FiTarget 
} from 'react-icons/fi'; 
import logoIcon from '../assets/images/Wireframe Cube.png';

const services = [
  { 
    id: '01', 
    title: 'AI Marketing Systems for Local Businesses', 
    description: 'Smart lead generation, follow‑ups, and local growth automation.', 
    icon: <FiCpu /> 
  },
  { 
    id: '02', 
    title: 'Performance Marketing', 
    description: 'High‑precision ad campaigns focused on ROAS, lead quality, and scalability.', 
    icon: <FiTrendingUp /> 
  },
  { 
    id: '03', 
    title: 'Social Media Management', 
    description: 'Data‑backed content planning, AI‑optimized posting, engagement insights, and brand growth.', 
    icon: <FiShare2 /> 
  },
  { 
    id: '04', 
    title: 'Funnel & Automation Setup', 
    description: 'Lead‑to‑conversion systems powered by AI workflows and automation.', 
    icon: <FiLayers /> 
  },
  { 
    id: '05', 
    title: 'Website & Landing Pages', 
    description: 'AI-optimized websites and high-converting landing pages designed to attract, engage, and convert your audience.', 
    icon: <FiLayout /> 
  },
  { 
    id: '06', 
    title: 'Brand Growth Consulting', 
    description: 'Strategic guidance for founders and leadership teams to scale marketing intelligently.', 
    icon: <FiTarget /> 
  },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="py-20 px-6 md:px-12 overflow-hidden max-w-7xl">
      <div className="grid md:grid-cols-2 gap-10 items-start mb-20  mx-auto">
        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-600 text-xl">✦</span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Services</span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black  leading-tight"> 
           <span  className="block text-transparent   bg-clip-text silver-gradient-text font-black">Our AI‑Driven Services</span> 
 <span className="text-orange-gradient  font-black">for you</span>
          </h2>
        </div>
        <div className="md:mt-14">
          <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-300 mb-6 lg:mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
            We combine AI, strategy, and automation to deliver marketing services that drive measurable growth and better ROI for your brand.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Services Accordion */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.id} className="border-b border-white/10 font-poppins">
                <button
                  onClick={() => toggleService(index)}
                  /* CHANGED: Reduced vertical padding from py-10 to py-6 */
                  className="w-full flex items-center justify-between py-6 text-left group transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className={`text-sm font-mono transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-white/20'}`}>
                      {`(${service.id})`}
                    </span>
                    
                    <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${isOpen ? 'text-white translate-x-2' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className={`text-xl md:text-2xl transition-all duration-500 ${isOpen ? 'text-orange-500 scale-110 rotate-[360deg]' : 'text-gray-600'}`}>
                    {service.icon}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* CHANGED: Reduced bottom padding from pb-7 to pb-5 and margin-bottom on text */}
                      <div className="pb-5 pl-[50px] md:pl-[70px] max-w-3xl ">
                        <p className="font-poppins text-gray-300 text-md md:text-lg leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="text-orange-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 border-b border-orange-500/30 pb-1"
                        >
                          Explore Solution <FiArrowUpRight />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};



export default Service;