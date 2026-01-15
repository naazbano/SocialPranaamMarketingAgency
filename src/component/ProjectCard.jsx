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
      // max-w-6xl instead of 7xl to minimize overall width
      // mb-8 instead of 12 to reduce vertical spacing
      className={`max-w-6xl mx-auto flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-0 mb-8 w-full px-4 relative`}
    >
      
      {/* IMAGE SIDE - flex-1 basis-1/2 ensures exact 50% width */}
      <div className="flex-1 basis-1/2 relative group z-10">
        <div className="rounded-[24px] md:rounded-[32px] overflow-hidden h-full min-h-[250px] md:min-h-[400px] border border-white/10 shadow-xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* VISUAL CONNECTION - Tightened width */}
      <div className="hidden md:flex items-center justify-center relative w-8 z-20">
          <div className={`w-full h-[1px] ${isOrangeBg ? 'bg-white/20' : 'bg-orange-500/30'}`} />
          <div className={`absolute w-2 h-2 ${isOrangeBg ? 'bg-white' : 'bg-orange-500'} rounded-full`} />
      </div>

      {/* CONTENT SIDE - flex-1 basis-1/2 ensures exact 50% width */}
      <div className={`
        flex-1 basis-1/2
        ${isOrangeBg 
            ? 'custom-orange-gradient' 
            : 'card-gradient'
        }
        rounded-[24px] md:rounded-[32px] 
        p-5 md:p-7
        relative overflow-hidden border border-white/10 
        flex flex-col
        min-h-[350px] md:min-h-[400px]
        z-10
      `}>
        {/* Top Section - Tightened */}
        <div className="flex justify-between items-start mb-4">
          <div className={`${isOrangeBg ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'} p-2.5 rounded-xl shadow-md`}>
            {project.icon || <Sparkles size={20} />}
          </div>
          <div className={`text-xs font-bold px-2 py-1 rounded-md border ${isOrangeBg ? 'border-white/30 text-white' : 'border-white/10 text-white/40'}`}>
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>

        {/* Middle Section - Optimized spacing */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          <p className={`${isOrangeBg ? 'text-white/90' : 'text-white/60'} text-sm md:text-base font-medium leading-snug`}>
            {project.tagline}
          </p>
          
          <ul className="space-y-1.5 pt-3">
            {project.points?.slice(0, 3).map((point, i) => ( // Limiting to 3 points for compactness
              <li key={i} className="flex items-start gap-2 text-white/80 group">
                <div className="mt-1 shrink-0">
                  <FiCheckCircle className={`${isOrangeBg ? 'text-white' : 'text-orange-500'}`} size={14} />
                </div>
                <span className="text-sm leading-tight">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section - Pushed to bottom with mt-auto */}
        <div className={`mt-auto pt-4 border-t ${isOrangeBg ? 'border-white/20' : 'border-white/10'} flex flex-col gap-3`}>
           <div className={`flex items-start gap-2 ${isOrangeBg ? 'text-white/80' : 'text-white/50'} italic text-xs`}>
             <Sparkles size={12} className={`shrink-0 mt-0.5 ${isOrangeBg ? 'text-white' : 'text-orange-400'}`} />
             <p className="leading-tight">
                {project.footerLine || "AI-enhanced creativity for high performance."}
             </p>
           </div>
           
           <a href="#" className={`flex items-center gap-1.5 ${isOrangeBg ? 'text-white' : 'text-orange-400'} font-bold uppercase tracking-tighter text-[11px] transition-colors group w-fit`}>
             Learn More 
             <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
           </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;