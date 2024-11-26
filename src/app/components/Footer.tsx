"use client";
import React from "react";
import Image from "next/image";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main Layout - Horizontally aligned */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Logo Section */}
          <div className="flex items-center lg:items-start">
            <Image
              src="/footerimag.svg"
              alt="Logo"
              width={155}
              height={155}
              className="rounded-full"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-8 my-6 lg:my-0">
            <a href="/" className="hover:text-yellow-200">
              About
            </a>
            <a href="/" className="hover:text-yellow-200">
              Services
            </a>
            <a href="/" className="hover:text-yellow-200">
              FAQ
            </a>
            <a href="/" className="hover:text-yellow-200">
              Contact
            </a>
          </nav>

          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-xl font-semibold mb-4">
              Contact<span className="text-[#E4B40D]"> Us</span>
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#0088cc] transition-colors"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#5865F2] transition-colors"
              >
                <FaDiscord />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#1DA1F2] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
