
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: "What is Social Pranaam?",
    answer:
      "Social Pranaam is an AI-Powered Marketing Agency that helps brands grow through data-driven strategies, AI-assisted content, automation, and performance marketing. We design end-to-end marketing systems that deliver measurable results and improved ROI."
  },
  {
    question: "How does Social Pranaam use AI in marketing?",
    answer:
      "We leverage AI to analyze markets, predict audience behavior, optimize ad creatives and budgets, automate lead follow-ups, and generate real-time performance insights — ensuring smarter, faster, and more efficient marketing campaigns."
  },
  {
    question: "What services does Social Pranaam offer?",
    answer: "Our AI-driven services include:",
    point: [
      "AI Marketing Systems for Local Businesses",
      "Performance Marketing",
      "Social Media Management",
      "Funnel & Automation Setup",
      "Website & Landing Pages",
      "Brand Growth Consulting"
    ]
  },
  {
    question: "Which businesses can benefit from Social Pranaam?",
    answer:
      "Any business looking to scale efficiently—from local service providers to e-commerce brands—can benefit from our AI-driven growth systems and automated lead nurturing."
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Book a free growth consultation on our website, and our team will assess your marketing, identify gaps, and create a custom AI-powered strategy to attract leads, improve conversions, and scale growth."
  }
];


const FAQS = () => {
  const [activeId, setActiveId] = useState(0);


  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE QUESTION MARK - Adjusted for mobile visibility */}
      <div className="absolute top-1/2 lg:top-3/4 left-1/2 lg:left-40 -translate-x-1/2 lg:translate-x-1/4 -translate-y-1/2 pointer-events-none z-0 opacity-10 lg:opacity-50">
        <motion.div
          style={{ perspective: 1000 }}
          animate={{
            rotateY: 360,
            rotateZ: [2, -2, 2],
            y: [0, -10, 0]
          }}
          transition={{
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative"
        >
          <span className="text-[150px] md:text-[250px] font-bold silver-gradient-text leading-none select-none inline-block">
            ?
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 h-40 md:h-64 bg-silver-gradient blur-[60px] md:blur-[100px] rounded-full -z-10"></div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start relative z-10">
        {/* Left Side */}
        <div className="relative text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <motion.span
              animate={{ rotate: 180 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-orange-500 text-lg"
            >
              ✦
            </motion.span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">FAQS</span>
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text silver-gradient-text">Frequently Asked Questions</span>{" "}
            <span className="text-orange-gradient">Solutions</span>
          </h2>

            <p className="text-base sm:text-lg text-gray-300 font-poppins leading-relaxed">
              Here are answers to some common questions about Social Pranaam and our AI-powered marketing services.
              We help brands grow smarter, faster, and more predictably through data-driven strategies, automation, and performance marketing.
            </p>
        </div>

        {/* Right Side Accordion */}
        <div className="card-gradient backdrop-blur-md border border-white/5 rounded-[32px] md:rounded-[40px] p-6 md:p-12 shadow-2xl relative z-10">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className={`border-b border-white/10 last:border-0 transition-all duration-300 ${activeId === index ? 'pb-6' : 'pb-4'}`}>
                <button
                  onClick={() => setActiveId(activeId === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left group pt-2"
                >
                                    <span className={`text-md md:text-lg font-bold transition-colors duration-300 ${activeId === index ? 'text-white/90' : 'text-white/80 hover:text-white'}`}>
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${activeId === index ? 'bg-orange-500 border-orange-500 text-black' : 'border-white/10 text-white'}`}>
                    {activeId === index ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 md:pr-10">
                        <p className="text-gray-400 text-sm leading-relaxed font-poppins">
                          {item.answer}
                        </p>
                        {item.point && (
                          <ul className="mt-4 space-y-2">
                            {item.point.map((p, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                                <span className="text-orange-500 mt-1">✦</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;