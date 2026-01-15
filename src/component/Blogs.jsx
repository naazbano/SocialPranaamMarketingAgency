import React from 'react';
import { motion } from 'framer-motion';
// Import the icon here
import { HiOutlineArrowUpRight } from "react-icons/hi2"; 
import AnimatedButton from '../component/ui/AnimatedButton';
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
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto relative z-10 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">✦</span>
            <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold">Blogs</span>
          </div>
          
          <h2 className="text-3xl sm:text-3xl md:text-4xl  font-black mb-6 lg:mb-8 leading-tight">
              <span className= "bg-clip-text silver-gradient-text ">Insights & AI Marketing </span>  
            <span className="text-orange-gradient  font-black">Updates </span>
          </h2>
        </div>

        <p className="text-base sm:text-lg  font-poppins text-gray-300 leading-relaxed  animate-fadeInUp animate-delay-200 max-w-xs mt-10">
         Stay ahead with the latest trends, strategies, and innovations in AI-powered marketing. 
         At Social Pranaam, we share expert insights, case studies, and news that help brands make smarter decisions,
          optimize campaigns, and achieve measurable growth.

        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-[40px] mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 text-xs font-medium">{post.category}</span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-white/40 text-xs">{post.author}</span>
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-poppins  font-bold leading-snug mb-6  transition-colors">
              {post.title}
            </h3>

            {/* Action Button */}
            <button className="btn-orange-gradient border border-white/10 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500  transition-all group/btn">
              Read More 
              <HiOutlineArrowUpRight className="text-lg transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="flex justify-center mt-20">
        <AnimatedButton text={"View All Articles"} />
      </div>
    </section>
  );
};

export default Blogs;