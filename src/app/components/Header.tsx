"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Roadmap', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  return (
    <header className="bg-[#071624] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E4B40D] opacity-10 blur-[100px] transform -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px] transform translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Two Images with enhanced glow effect */}
          <div className="flex space-x-6 relative z-10">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-[#E4B40D] opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-300" />
              {/* Additional ambient glow */}
              <div className="absolute inset-0 bg-[#E4B40D] opacity-10 blur-3xl scale-150" />
              <Image
                src="/logo1.svg"
                alt="Logo 1"
                width={40}
                height={40}
                className="rounded-full relative z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-[#E4B40D] opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-300" />
              {/* Additional ambient glow */}
              <div className="absolute inset-0 bg-[#E4B40D] opacity-10 blur-3xl scale-150" />
              <Image
                src="/logo2.svg"
                alt="Logo 2"
                width={40}
                height={40}
                className="rounded-full relative z-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Middle: Navigation Links - Hidden on mobile */}
          <nav className="hidden md:block relative z-10">
            <ul className="flex space-x-8 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#E4B40D] transition-colors duration-300 relative group py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E4B40D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 bg-[#E4B40D] opacity-0 group-hover:opacity-10 blur-xl -z-10 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Connect Wallet Button - Hidden on mobile */}
          <div className="relative group hidden md:block z-10">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-[#E4B40D] opacity-20 blur-xl scale-110 group-hover:opacity-30 transition-opacity duration-300" />
            <button className="relative bg-[#E4B40D] text-black font-semibold px-8 py-2.5 rounded-lg hover:bg-[#E4B40D] transition-all duration-300 hover:shadow-lg hover:shadow-[#E4B40D]/30 transform hover:-translate-y-0.5">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-[#E4B40D]/10 rounded-lg transition-colors duration-300 relative z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with enhanced styling */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#071624]/95 backdrop-blur-lg border-t border-[#E4B40D]/20 z-50">
          <nav className="px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-3 px-4 hover:bg-[#E4B40D]/10 rounded-lg hover:text-[#E4B40D] transition-all duration-300 relative group"
                  >
                    {item.label}
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 bg-[#E4B40D] opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative group mt-4 mb-2">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-[#E4B40D] opacity-20 blur-xl scale-110 group-hover:opacity-30 transition-opacity duration-300" />
              <button className="w-full relative bg-[#E4B40D] text-black font-semibold px-4 py-3 rounded-lg hover:bg-[#E4B40D] transition-all duration-300 hover:shadow-lg hover:shadow-[#E4B40D]/20">
                Connect Wallet
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;