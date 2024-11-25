"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index:any) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const faqItems = [
    {
      question: "What is Moonx?",
      answer: "Moonx is a decentralized exchange (DEX) platform offering multi-chain support for trading and earning crypto assets."
    },
    {
      question: "How can I trade on Moonx?",
      answer: "You can trade on Moonx by connecting your wallet and selecting your preferred tokens. Moonx supports multiple blockchains."
    },
    {
      question: "What are the fees on Moonx?",
      answer: "Moonx charges a minimal fee on trades to cover network costs. The exact fee varies depending on the network used."
    },
    {
      question: "Is Moonx safe to use?",
      answer: "Yes, Moonx prioritizes security with decentralized protocols and audits to ensure a safe trading experience."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl">FAQs</h2>
      
      {/* Accordion */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none group"
            >
              <span className="text-lg font-semibold sm:text-xl">{item.question}</span>
              <span className="ml-4 flex-shrink-0 transition-transform duration-200">
                {open === index ? (
                  <Minus className="h-6 w-6" />
                ) : (
                  <Plus className="h-6 w-6" />
                )}
              </span>
            </button>
            
            {/* Answer panel */}
            <div
              className={`overflow-hidden transition-all duration-200 ${
                open === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 text-base sm:text-lg">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;