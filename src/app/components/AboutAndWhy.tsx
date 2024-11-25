"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutAndWhy = () => {
  const tableData = [
    { comparison: 'Decentralized', moonx: 'Yes', uniswap: 'Yes' },
    { comparison: 'Token Pairs', moonx: 'Multi-chain Support', uniswap: 'Ethereum Only' },
    { comparison: 'Fees', moonx: 'Low Fees', uniswap: 'Medium Fees' },
    { comparison: 'User Interface', moonx: 'Customizable', uniswap: 'Standard UI' },
    { comparison: 'Community', moonx: 'Active Community', uniswap: 'Large Community' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="text-white px-6 py-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px] transform translate-x-1/2" />

      {/* Content container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading with animation */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-center mb-16 relative"
        >
          Why Moonx?
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#E4B40D] to-transparent" />
        </motion.h2>

        {/* Table container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative rounded-xl overflow-hidden backdrop-blur-sm"
        >
          {/* Yellow glow effect between Comparison and Moonx */}
          <div className="absolute bottom-0 left-[33%] w-0.5 h-full bg-[#E4B40D] opacity-20 blur-sm" />
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2 border-[#E4B40D]/30">
                  <motion.th 
                    variants={itemVariants}
                    className="px-6 py-4 text-lg font-semibold bg-[#071624]/80"
                  >
                    Comparison
                  </motion.th>
                  <motion.th 
                    variants={itemVariants}
                    className="px-6 py-4 text-lg font-semibold text-[#E4B40D] bg-[#071624]/80"
                  >
                    Moonx
                  </motion.th>
                  <motion.th 
                    variants={itemVariants}
                    className="px-6 py-4 text-lg font-semibold bg-[#071624]/80"
                  >
                    Uniswap
                  </motion.th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <motion.tr 
                    key={row.comparison}
                    variants={itemVariants}
                    className="border-b border-gray-700/30 hover:bg-[#E4B40D]/5 transition-colors duration-300"
                  >
                    <td className="px-6 py-4">{row.comparison}</td>
                    <td className="px-6 py-4 text-[#E4B40D]">{row.moonx}</td>
                    <td className="px-6 py-4">{row.uniswap}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#E4B40D]/30" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#E4B40D]/30" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#E4B40D]/30" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#E4B40D]/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndWhy;