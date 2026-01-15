import React from 'react'
import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'; 
import ProjectCard from './ProjectCard';
import AnimatedButton from '../component/ui/AnimatedButton';
import { Brain, Layout, BarChart3, Bot, PieChart } from 'lucide-react'
const projectsData = [
  { 
    id: 1, 
    name: "AI Strategy & Intelligence", 
    tagline: "Every engagement starts with intelligence.",
    icon: <Brain size={24} />,
    points: [
      "AI-based market and competitor analysis",
      "Audience intent and behavior modeling",
      "Opportunity mapping and predictive planning",
      "Data-driven growth roadmaps"
    ],
    footerLine: "We replace assumptions with insights, ensuring every action has a purpose.",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80' 
  },
  { 
    id: 2, 
    name: "AI Content & Creative Engine", 
    tagline: "Content drives attention and conversion.",
    icon: <Layout size={24} />,
    points: [
      "AI-assisted content ideation and scripting",
      "Hook and headline optimization",
      "Short-form video and reel performance analysis",
      "Ad copy and landing page optimization"
    ],
    footerLine: "Human creativity enhanced by AI insights.",
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80' 
  },
  { 
    id: 3, 
    name: "AI Performance Marketing", 
    tagline: "Paid media where precision matters most.",
    icon: <BarChart3 size={24} />,
    points: [
      "Meta, Google, LinkedIn advertising.",
      "AI‑based creative testing iteration.",
      "Smart budget allocation optimization",
      "Conversion rate optimization"
    ],
    footerLine: "We scale what works and eliminate waste.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80' 
  },
  { 
    id: 4, 
    name: "Automation & AI CRM", 
    tagline: "Conversion happens in follow-up.",
    icon: <Bot size={24} />,
    points: [
      "WhatsApp and social chatbots",
      "AI lead scoring and qualification",
      "Automated follow-up sequences",
      "Sales funnel CRM integration"
    ],
    footerLine: "Stay responsive and consistent 24/7.",
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80' 
  },
  { 
    id: 5, 
    name: "AI Analytics & Reporting", 
    tagline: "Data should guide decisions.",
    icon: <PieChart size={24} />,
    points: [
      "Real-time performance dashboards",
      "Funnel drop-off behavior insights",
      "AI-generated summaries",
      "Clear KPIs tied to outcomes"
    ],
    footerLine: "Turn data into clear growth opportunities.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80' 
  },
];

const ProjectSection = () => {
    
      // State to manage how many items to show
      const [showAll, setShowAll] = useState(false);
      // Logic to determine which projects to display
      const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);
  return (
   <>
    <div className="py-20 px-6 md:px-12 overflow-hidden max-w-7xl">

      {/* Projects Header */}
         <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 text-xs">✦</span>
              <span className="text-white uppercase tracking-[0.4em] text-[10px] font-semibold opacity-80">Projects</span>
            </div>
            <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-6 lg:mb-8 leading-tight">
              <span  className="text-transparent   bg-clip-text silver-gradient-text font-black">  Our Core  </span> 
              <span  className="text-orange-gradient  font-black"> Pillars</span>
         
            </h2>
          </div>

          <div className="md:mt-14">
            <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-300 mb-6 lg:mb-8 leading-relaxed animate-fadeInUp animate-delay-200">
              From intelligent planning to automated execution and data-driven insights, our core pillars power scalable growth.
            </p>
          </div>
        </div>

        {/* Projects List */}
    <div className="space-y-10">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} // Passed for the circle number
              isReverse={index % 2 !== 0} 
            />
          ))}
        </div>

        {/* Dynamic View All Projects Button */}
      {/* Button */}
        {projectsData.length > 3 && (
          <div className="flex justify-center mt-20">
            <AnimatedButton 
              onClick={() => setShowAll(!showAll)} 
              text={showAll ? "Show Less" : "View All Pillars"}
            >
              <FiArrowUpRight className={`text-xl transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </AnimatedButton>
          </div>
        )}

    </div>
   </>
  )
}

export default ProjectSection