import React from 'react';
import "../AutoMarquee.css";
import logoIcon from '../assets/images/Wireframe Cube.png';

const AutoMarquee = () => {
  // Pass a 'variant' to handle text/icon colors dynamically
  const MarqueeContent = ({ variant }) => (
    <>
      {['SOCIAL MEDIA', 'PERFORMANCE MARKETING', 'FUNNEL', 'AUTOMATION', 'BRAND GROWTH'].map((text, i) => (
        <div key={i} className="flex items-center gap-4 mx-8 whitespace-nowrap">
          <img 
            src={logoIcon} 
            alt="" 
            className={`h-10 w-10  ${variant === 'white' ? 'brightness-100' : 'brightness-0 invert'}`} 
          />
          <span className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl p-3 uppercase tracking-tighter font-bold ${variant === 'orange' ? 'text-white' : 'text-[#FF7A00]'}`}>
            {text}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="auto-marquee-root py-20">
      {/* Row 1: White Background, Orange Text */}
      <section className="marquee marquee-white" style={{ "--char-count": 30 }}>
        <div className="marquee--inner flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex" aria-hidden={i !== 0}>
              <MarqueeContent variant="white" />
            </div>
          ))}
        </div>
      </section>

      {/* Row 2: Orange Background, White Text */}
      <section className="marquee marquee-orange" style={{ "--char-count": 30 }}>
        <div className="marquee--inner flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex" aria-hidden={i !== 0}>
              <MarqueeContent variant="orange" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AutoMarquee;