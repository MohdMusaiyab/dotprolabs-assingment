"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1. This is where you can highlight key aspects of the feature.",
      icon: "🚀"
    },
    {
      title: "Feature 2",
      description: "Description of feature 2. This section describes the next feature and its benefits.",
      icon: "⚡"
    },
    {
      title: "Feature 3",
      description: "Description of feature 3. Explain why this feature is beneficial for users.",
      icon: "🔒"
    },
    {
      title: "Feature 4",
      description: "Description of feature 4. Share details about the final feature here.",
      icon: "💎"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="text-white px-6 py-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-center mb-16 relative"
        >
          Our Features
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#E4B40D] to-transparent" />
        </motion.h2>

        {/* Scroll Container */}
        <div className="relative">
          {/* Scroll Indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full pointer-events-none bg-gradient-to-r from-[#071624] to-transparent z-10" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full pointer-events-none bg-gradient-to-l from-[#071624] to-transparent z-10" />
          
          {/* Cards Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex-none w-[300px] group snap-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="bg-[#071624] p-8 rounded-xl border border-[#E4B40D]/10 backdrop-blur-sm relative h-full hover:border-[#E4B40D]/30 transition-all duration-300 transform hover:-translate-y-1">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#E4B40D] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <span className="text-4xl mb-6 block">{feature.icon}</span>
                    <h3 className="text-xl font-semibold mb-4 text-[#E4B40D]">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E4B40D]/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="text-center mt-6 text-sm text-gray-400"
        >
          Scroll horizontally to see more features
        </motion.p>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Features;