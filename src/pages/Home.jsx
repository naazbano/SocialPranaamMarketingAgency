import React from 'react'
import Navbar from "../common/Navbar"
import HeroSection from '../component/HeroSection'
import WhoWeAre from '../component/WhoWeAre'
import Service from '../component/Service'
import AutoMarquee from '../component/AutoMarquee'
import ProjectSection from '../component/ProjectSection'
import VideoSection from '../component/VideoSection'
import Process from '../component/Process'
import Testimonials from '../component/Testominals'
import FAQS from '../component/FAQS'
import Blogs from '../component/Blogs'
import GetInTouch from '../component/GetInTouch'
import Footer from '../common/Footer'

const Home = () => {
  return (
    // Added overflow-x-hidden to prevent layout breaking from floating background orbs
    <div className="min-h-screen bg-gradient-to-r from-purple-600/20 to-purple-900 overflow-x-hidden">
      {/* Navbar Container: Responsive padding top for fixed nav height */}
      <div className='pt-20 sm:pt-24 lg:pt-28'>
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroSection />
        <WhoWeAre />
        <Service />
        <AutoMarquee />
        <ProjectSection />
        <VideoSection />
        <Process />
        <Testimonials />
        <FAQS />
        <Blogs />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  )
}

export default Home
