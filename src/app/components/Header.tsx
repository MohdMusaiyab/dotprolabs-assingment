"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: React.MouseEvent) => {
      if (
        mobileMenuRef.current &&
        // @ts-ignore
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as any);
    return () => document.removeEventListener("mousedown", handleClickOutside as any);
  }, []);

  return (
    <header className="bg-[#071624] text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E4B40D] opacity-10 blur-[100px] transform -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4B40D] opacity-5 blur-[100px] transform translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Logos */}
          <div className="flex space-x-4">
            <Image
              src="/logo1.svg"
              alt="Logo 1"
              width={75}
              height={73}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            />
            <Image
              src="/logo2.svg"
              alt="Logo 2"
              width={106}
              height={28}
              className="mt-5 hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Middle: Navigation Links - Visible on larger screens */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#E4B40D] transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Connect Wallet Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-[#FFE68F] to-[#E4B40D] text-black font-semibold px-6 py-2 rounded-3xl hover:bg-gradient-to-r hover:from-[#FFD95B] hover:to-[#D9A20F] transition-all duration-300 hover:shadow-lg">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-[#E4B40D]/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 bg-[#071624] bg-opacity-95 z-50 flex flex-col items-center justify-center"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#E4B40D]/10 transition-colors duration-300"
          >
            <X size={32} />
          </button>

          <nav className="text-center">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-lg text-white hover:text-[#E4B40D] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-[#E4B40D] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#D9A20F] transition-all duration-300"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;