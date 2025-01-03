"use client";
import React from "react";
import Image from "next/image";

const AboutAndWhy = () => {
  const tableData = [
    { comparison: "Decentralized", moonx: true, uniswap: false },
    { comparison: "Token Pairs", moonx: true, uniswap: false },
    { comparison: "Fees", moonx: true, uniswap: false },
    { comparison: "User Interface", moonx: true, uniswap: false },
    { comparison: "Community", moonx: true, uniswap: false },
  ];

  return (
    <section className="text-white px-6 py-16 relative overflow-hidden">
      {/* Content Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 relative text-center lg:text-left">
          Why <span className="text-[#E4B40D]">MoonEX</span>?
        </h2>

        <div className="w-full rounded-lg p-4 sm:p-8 backdrop-blur-md ">
          <div className="relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-700/30 text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-[#E4B40D]/30">
                    <th className="px-3 py-2 sm:px-6 sm:py-4 font-semibold text-[#E4B40D] border-r border-gray-700/30">
                      Comparison
                    </th>
                    <th className="px-3 py-2 sm:px-6 sm:py-4 text-center border-r border-gray-700/30">
                      {/* Image for MoonEX Column Header */}
                      <Image
                        src="/seconfcol.svg" 
                        alt="MoonEX"
                        width={200}
                        height={100}
                        className="inline-block"
                      />
                    </th>
                    <th className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                      {/* Image for Uniswap Column Header */}
                      <Image
                        src="/thirdcol.svg" // Replace with the correct image URL
                        alt="Uniswap"
                        width={180}
                        height={100}
                        className="inline-block"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700/30 hover:bg-[#E4B40D]/5 transition-colors duration-300"
                    >
                      <td className="px-3 py-2 sm:px-6 sm:py-4 text-center border-r border-gray-700/30">
                        {row.comparison}
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 text-center border-r border-gray-700/30">
                        <span className="text-[#B2FFAC] text-lg sm:text-xl">
                          ✅
                        </span>
                      </td>
                      <td className="px-3 py-2 sm:px-6 sm:py-4 text-center">
                        <span className="text-[#FF5050] text-lg sm:text-xl">
                          ❌
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Apply the effect to cover the last three rows between the 1st and 2nd columns */}
            <div className="absolute top-[calc(100%-3*60px)] left-0 w-[calc(50%+2rem)] h-[180px] bg-yellow-500 opacity-10 blur-[100px] transform -translate-x-1/4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndWhy;
