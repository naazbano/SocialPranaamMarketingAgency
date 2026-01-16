
import "../AutoMarquee.css";
import logoIcon from '../assets/images/Wireframe Cube.png';

const AutoMarquee = () => {
  const MarqueeContent = ({ variant }) => (
    <div className="flex items-center">
      {['SOCIAL MEDIA', 'PERFORMANCE MARKETING', 'FUNNEL', 'AUTOMATION', 'BRAND GROWTH'].map((text, i) => (
        <div key={i} className="flex items-center gap-2 md:gap-4 mx-4 md:mx-8 whitespace-nowrap">
          <img 
            src={logoIcon} 
            alt="" 
            className={`h-6 w-6 md:h-10 md:w-10 ${variant === 'white' ? 'brightness-100' : 'brightness-0 invert'}`} 
          />
          <span className={`text-base sm:text-2xl lg:text-4xl uppercase tracking-tighter font-bold ${variant === 'orange' ? 'text-white' : 'text-[#FF7A00]'}`}>
            {text}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="auto-marquee-root">
      <section className="marquee marquee-white" style={{ "--char-count": 40 }}>
        <div className="marquee--inner">
          <MarqueeContent variant="white" />
          <MarqueeContent variant="white" /> {/* Duplicate for seamless loop */}
        </div>
      </section>

      <section className="marquee marquee-orange" style={{ "--char-count": 40 }}>
        <div className="marquee--inner">
          <MarqueeContent variant="orange" />
          <MarqueeContent variant="orange" />
        </div>
      </section>
    </div>
  );
};

export default AutoMarquee;