import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What would be covered in the workshop?",
      a: "An easy-to-understand walkthrough on how to use local search databases, Google Maps optimization, and Facebook/Instagram ads to attract 50+ consistent patient bookings in 60 days or less."
    },
    {
      q: "What if I miss the live webinar session?",
      a: "This webinar is 100% Live. Since there are no free recordings or replays shared publicly, we highly recommend attending on time. If you want the recordings afterwards, they can be purchased for ₹2,999 after the event is over."
    },
    {
      q: "How will it help me in my medical practice & clinic growth?",
      a: "It will show you how to build a consistent patient flow, establish yourself as a local medical authority, and implement a private booking system to minimize manual front-desk work."
    },
    {
      q: "Will I be able to generate quality patient bookings from social media?",
      a: "Most local social media tips are generic and don't work for clinics. This workshop shows you the exact systems to filter out junk enquiries and generate high-intent patients who actively show up for consultations."
    },
    {
      q: "Will there be any product promotion at the end?",
      a: "For doctors who attend the entire live session and want to fast-track their clinic growth, we will offer a special discounted opportunity to work with our agency, Bawra Digitals, personally. However, there is no obligation, and the webinar itself is packed with actionable strategies."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider">
            <span>FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-500 font-light max-w-xl mx-auto">
            Got questions? We have answers.
          </p>
        </div>

        {/* Accordions List */}
        <div className="max-w-3xl mx-auto space-y-4 reveal-element">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border border-slate-100 rounded-2xl transition-all duration-300 ${
                  isOpen ? 'bg-slate-50/50 shadow-md border-blue-100' : 'bg-white hover:bg-slate-50/30'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-5.5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                      isOpen ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <span className="font-display text-sm sm:text-base font-bold text-slate-800">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 transform ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`} />
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5.5 sm:p-6 text-sm text-slate-500 leading-relaxed font-light">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
