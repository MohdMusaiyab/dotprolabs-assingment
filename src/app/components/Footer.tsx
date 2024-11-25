"use client"
import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white  py-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile Layout - Stack everything vertically */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start">
          {/* Logo Section */}
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <Image
              src="/footerimag.svg"
              alt="Logo"
              width={155}
              height={155}
              className="rounded-full"
            />
            <span className="text-xl font-semibold">Moonx</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
            <a href="/" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="/about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="/services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="/faq" className="hover:opacity-80 transition-opacity">FAQ</a>
            <a href="/contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>

          {/* Contact Information */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <FaPhoneAlt className="text-white" />
                <span className="text-sm sm:text-base">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <FaEnvelope className="text-white" />
                <span className="text-sm sm:text-base">support@moonx.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <FaMapMarkerAlt className="text-white" />
                <span className="text-sm sm:text-base">123 Moonx St, Blockchain City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Optional */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Moonx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;