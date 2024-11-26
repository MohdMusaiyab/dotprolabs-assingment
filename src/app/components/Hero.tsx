import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-white relative overflow-hidden ">
     
      <div className="absolute inset-0 pointer-events-none">
      
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[110%] h-[70%] border-2 border-white/10 rounded-[70%] opacity-20 rotate-[-15deg]"
        />

       
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[130%] h-[90%] border border-yellow-100 rounded-[70%] opacity-10 rotate-[10deg]"
        />

       
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[150%] h-[110%] border border-yellow rounded-[70%] opacity-5 rotate-[-5deg]"
        />
      </div>

      {/* Yellow glow effect in the background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E4B40D] opacity-10 blur-[100px] transform -translate-x-1/4 -translate-y-1/4" />

      {/* Content container */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 mt-20 lg:mt-40 relative z-10">
            {/* Animated star with glow */}
            <div className="absolute left-[35px] top-[-70px] animate-pulse">
              <div className="relative">
                <div className="absolute inset-0 bg-[#E4B40D] opacity-30 blur-xl w-8 h-8" />
                <span className="text-white text-xl lg:text-2xl relative z-10">
                  ★
                </span>
              </div>
            </div>

            {/* Main heading with gradient effect */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight relative">
              <span className="relative inline-block">Trusted Multi-Chain</span>
              
              <span className="text-[#E4B40D] relative inline-block">
                DEX
              </span>{" "}
              Platform
            </h1>

            {/* Subtitle with gradient underline */}
            <div className="text-lg mt-6 relative inline-block text-[#9E9E9E]">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX.
            </div>

            {/* Call to action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-[#E4B40D] text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-[#E4B40D]/20 transform ">
                Connect Wallet
              </button>
              <button className="px-8 py-3 border-2 border-[#E4B40D] text-white font-semibold rounded-full hover:bg-[#E4B40D]/10 transition-all duration-300">
                Trade Crypto
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 flex justify-center relative z-10">
            {/* Top star with glow */}
            <div className="absolute top-[-70px] right-1/4 animate-pulse">
              <div className="relative">
                <div className="absolute inset-0 bg-[#E4B40D] opacity-30 blur-xl w-8 h-8" />
                <span className="text-white text-xl lg:text-2xl relative z-10">
                  ★
                </span>
              </div>
            </div>

            {/* Moon image with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#E4B40D] opacity-10 blur-3xl w-[300px] h-[300px]" />
              <Image
                src="/moon.svg"
                alt="Hero Image"
                width={263}
                height={263}
                className="relative z-10 transform hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#E4B40D] opacity-5 blur-[100px] transform translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#E4B40D] opacity-5 blur-[100px]" />
    </section>
  );
};

export default Hero;
