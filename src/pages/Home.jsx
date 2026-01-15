import React from 'react'
import Footer from '../common/Footer'
import ProjectCard from '../component/ProjectCard' 
import Service from '../component/Service'
import FAQS from '../component/FAQS'
import VideoSection from '../component/VideoSection'
import Process from '../component/Process'
import Testimonials from '../component/Testominals'
import Blogs from '../component/Blogs'
import GetInTouch from '../component/GetInTouch'

import HeroSection from '../component/HeroSection'
import WhoWeAre from '../component/WhoWeAre'
import { useState } from 'react'
import AutoMarquee from '../component/AutoMarquee'
import Header from '../component/Header'
import ProjectSection from '../component/ProjectSection'


const Home = () => {

  
  return (
    <div className="min-h-screen  bg-gradient-to-r from-purple-600/20 to-purple-900">
       <div className='pb-8 sm:pb-10 sm:mt-5 lg:-mt-0 xl:-mt-0 md:pb-12 lg:pb-16 xl:pb-16'>
          <Header/>
          </div>
            <main className=" max-w-7xl mx-auto relative z-10">
              {/* Hero Section Component */}
             <HeroSection/>

                 {/* --- WHO WE ARE SECTION (FIGMA MATCHED) --- */}
      
                  <WhoWeAre/>

                   {/* --- Service  SECTION (ADDED BELOW SERVICE) --- */}
                   <Service />

                        
                   {/* --- Service  SECTION (ADDED BELOW SERVICE) --- */}
                  <AutoMarquee />
          
            <ProjectSection/>
       
           {/* Video Section */}
              <VideoSection/>


        
        <Process/>

        <Testimonials/>

        <FAQS/>

        <Blogs/>

        <GetInTouch/>

        <Footer/>
      </main>
    </div>
  )
}

export default Home
