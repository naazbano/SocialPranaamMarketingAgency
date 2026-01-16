
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowUpRight, 
  FiCpu, 
  FiTrendingUp, 
  FiShare2, 
  FiLayers, 
  FiLayout, 
  FiTarget 
} from 'react-icons/fi'; 

const services = [
  { id: '01', title: 'AI Marketing Systems', description: 'Smart lead generation, follow‑ups, and local growth automation.', icon: <FiCpu /> },
  { id: '02', title: 'Performance Marketing', description: 'High‑precision ad campaigns focused on ROAS and lead quality.', icon: <FiTrendingUp /> },
  { id: '03', title: 'Social Media Management', description: 'Data‑backed content planning and engagement insights.', icon: <FiShare2 /> },
  { id: '04', title: 'Funnel & Automation Setup', description: 'Lead‑to‑conversion systems powered by AI workflows.', icon: <FiLayers /> },
  { id: '05', title: 'Website & Landing Pages', description: 'High-converting landing pages designed to attract and convert.', icon: <FiLayout /> },
  { id: '06', title: 'Brand Growth Consulting', description: 'Strategic guidance for founders to scale marketing intelligently.', icon: <FiTarget /> },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* HEADER SECTION */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-600 text-xl">✦</span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Services</span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black leading-tight"> 
            <span className="block text-transparent bg-clip-text silver-gradient-text">Our AI‑Driven Services</span> 
            <span className="text-orange-gradient">for you</span>
          </h2>
        </div>
        <div className="md:mt-12 lg:mt-16">
          <p className="text-base sm:text-lg font-poppins text-gray-300 leading-relaxed max-w-lg">
            We combine AI, strategy, and automation to deliver marketing services that drive measurable growth and better ROI for your brand.
          </p>
        </div>
      </div>

      {/* ACCORDION SECTION */}
      <div className="relative z-10 border-t border-white/10">
        {services.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={service.id} className="border-b border-white/10 font-poppins">
              <button
                onClick={() => toggleService(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group transition-all duration-300"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className={`text-[10px] md:text-xs font-mono transition-colors duration-300 ${isOpen ? 'text-orange-500' : 'text-white/20'}`}>
                    {`(${service.id})`}
                  </span>
                  
              <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${isOpen ? 'text-white translate-x-2' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {service.title}
                    </h3>
                </div>

                <div className={`text-xl md:text-2xl transition-all duration-500 ${isOpen ? 'text-orange-500 rotate-[360deg]' : 'text-gray-600'}`}>
                  {service.icon}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pl-10 md:pl-20 max-w-2xl">
                      <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="text-orange-500 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2 border-b border-orange-500/30 pb-1"
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
    </section>
  );
};

export default Service;