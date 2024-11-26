"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price.",
      image: "/feature1.svg",
    },
    {
      title: "CerTIK",
      description:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform.",
      image: "/feature2.svg",
    },
    {
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets.",
      image: "/feature3.svg",
    },
    {
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price.",
      image: "/feature4.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="text-white px-6 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-center mb-16 relative"
        >
          Our <span className="text-[#E4B40D]">Features</span>
        </motion.h2>

        {/* Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group flex-1 max-w-xs"
            >
              {/* Square Card with Border and Background */}
              <div
                className={`w-[280px] h-[300px] rounded-lg p-6 shadow-md bg-white/10 backdrop-blur-lg flex flex-col justify-start text-center relative overflow-hidden transition-transform duration-300 hover:-translate-y-2`}
              >
                {/* Perfect Circular Image Container */}
                <div className="absolute w-24 h-24 rounded-full border-4 border-white top-4 left-4 flex items-center justify-center bg-white/10">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col items-center justify-center mt-28 px-4">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
