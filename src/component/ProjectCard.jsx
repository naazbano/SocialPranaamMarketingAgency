// 
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';

const ProjectCard = ({ project, isReverse, index }) => {
  const reverse = isReverse || false;
  const isOrangeBg = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Changed flex-col to stack on mobile, md:flex-row to stay horizontal on desktop
      // Added gap-4 for mobile stacking spacing
      className={`max-w-6xl mx-auto flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-4 md:gap-0 mb-12 md:mb-8 w-full px-4 relative`}
    >
      
      {/* IMAGE SIDE - Responsive min-heights */}
      <div className="flex-1 w-full md:basis-1/2 relative group z-10">
        <div className="rounded-[24px] md:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-full border border-white/10 shadow-xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* VISUAL CONNECTION - Strictly hidden on mobile/tablet, only flex on Desktop (md) */}
      <div className="hidden md:flex items-center justify-center relative w-8 z-20">
          <div className={`w-full h-[1px] ${isOrangeBg ? 'bg-white/20' : 'bg-orange-500/30'}`} />
          <div className={`absolute w-2 h-2 ${isOrangeBg ? 'bg-white' : 'bg-orange-500'} rounded-full`} />
      </div>

      {/* CONTENT SIDE - flex-1 md:basis-1/2 ensures 50% width on desktop */}
      <div className={`
        flex-1 w-full md:basis-1/2
        ${isOrangeBg 
            ? 'custom-orange-gradient' 
            : 'card-gradient'
        }
        rounded-[24px] md:rounded-[32px] 
        p-6 sm:p-7 md:p-8
        relative overflow-hidden border border-white/10 
        flex flex-col
        min-h-[320px] md:min-h-[400px]
        z-10
      `}>
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4">
          <div className={`${isOrangeBg ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'} p-2.5 rounded-xl shadow-md`}>
            {project.icon || <Sparkles size={20} />}
          </div>
          <div className={`text-xs font-bold px-2 py-1 rounded-md border ${isOrangeBg ? 'border-white/30 text-white' : 'border-white/10 text-white/40'}`}>
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          <p className={`${isOrangeBg ? 'text-white/90' : 'text-white/60'} text-sm sm:text-base font-medium leading-snug`}>
            {project.tagline}
          </p>
          
          <ul className="space-y-1.5 pt-3">
            {project.points?.slice(0, 4).map((point, i) => ( 
              <li key={i} className="flex items-start gap-2 text-white/80 group">
                <div className="mt-1 shrink-0">
                  <FiCheckCircle className={`${isOrangeBg ? 'text-white' : 'text-orange-500'}`} size={14} />
                </div>
                <span className="text-sm sm:text-base leading-tight">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className={`mt-auto pt-6 border-t ${isOrangeBg ? 'border-white/20' : 'border-white/10'} flex flex-col gap-4`}>
            <div className={`flex items-start gap-2 ${isOrangeBg ? 'text-white/80' : 'text-white/50'} italic text-[11px] sm:text-xs`}>
              <Sparkles size={12} className={`shrink-0 mt-0.5 ${isOrangeBg ? 'text-white' : 'text-orange-400'}`} />
              <p className="leading-tight">
                {project.footerLine || "AI-enhanced creativity for high performance."}
              </p>
            </div>
            
            <a href="#" className={`flex items-center gap-1.5 ${isOrangeBg ? 'text-white' : 'text-orange-400'} font-bold uppercase tracking-tighter text-[11px] sm:text-[12px] transition-colors group w-fit`}>
              Learn More 
              <FiArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;