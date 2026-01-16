
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowUpRight } from "react-icons/hi2"; 
import AnimatedButton from '../component/ui/AnimatedButton';

// ... blogPosts array remains same
const blogPosts = [
  {
    id: 1,
    category: "AI",
    author: "Admin",
    title: "Our Vision Is To Empower Brands And Small Businesses",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "ML",
    author: "Admin",
    title: "Our Vision Is To Empower Brands And Small Businesses",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Networking",
    author: "Admin",
    title: "Our Vision Is To Empower Brands And Small Businesses",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
  }
];

const Blogs = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8 text-center lg:text-left">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="text-orange-500 text-lg">✦</span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Blogs</span>
          </div>
          
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-black leading-tight">
            <span className="bg-clip-text silver-gradient-text">Insights & AI Marketing</span> <br className="hidden sm:block" />
            <span className="text-orange-gradient">Updates</span>
          </h2>
        </div>

        <p className="text-base sm:text-lg font-poppins text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
      Stay ahead with the latest trends, strategies, and innovations in AI-powered marketing. 
         At Social Pranaam, we share expert insights, case studies, and news that help brands make smarter decisions,
          optimize campaigns, and achieve measurable growth.

        </p>
      </div>

      {/* Blog Grid - 1 col mobile, 3 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Container - Responsive aspect ratio */}
            <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-[30px] md:rounded-[40px] mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Meta & Title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-500 text-[10px] font-bold uppercase tracking-wider">{post.category}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40 text-[10px] uppercase font-medium">{post.author}</span>
            </div>

            <h3 className="text-white text-xl font-bold leading-snug mb-6 group-hover:text-orange-400 transition-colors">
              {post.title}
            </h3>

            <button className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-orange-500 transition-all">
              Read More 
              <HiOutlineArrowUpRight className="text-base" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16 md:mt-24">
        <AnimatedButton text={"View All Articles"} />
      </div>
    </section>
  );
};

export default Blogs;