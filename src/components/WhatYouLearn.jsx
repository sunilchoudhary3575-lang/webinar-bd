import React from 'react';
import { Search, Eye, Sparkles, MapPin, Globe, ArrowLeftRight, Key, ArrowRight } from 'lucide-react';

export default function WhatYouLearn() {
  const learningPoints = [
    {
      title: "The 4 Sources of Patient Enquiries",
      desc: "A detailed comparison of Local SEO, Google Search Ads, Meta Video Ads, and Organic Channels. Learn their pros, cons, and budget requirements."
    },
    {
      title: "Access to 50 Lakh+ Local Searches",
      desc: "Tap into patients actively searching for specialists in your area using Google and Meta backend database algorithms."
    },
    {
      title: "High-Converting Enquiry Funnel",
      desc: "How to handle incoming chats, website form submissions, and calls, converting them into confirmed clinic visits."
    },
    {
      title: "Shortcut to Local Medical Authority",
      desc: "How to establish yourself as the top trusted specialist in your city, even if you have just opened your practice."
    },
    {
      title: "Bawra Digitals' Clinic Launchpad",
      desc: "Step-by-step framework to set up and launch your local patient engine in 15 Days using our templates."
    }
  ];

  const secrets = [
    {
      num: "Secret 1",
      title: "GOOGLE MAPS & LOCAL SEO",
      desc: "Tap into the local search intent database. Learn how to rank in the Google local pack so patients find you first."
    },
    {
      num: "Secret 2",
      title: "VALUE-FIRST BOOKING FUNNEL",
      desc: "Get patients to trust you before they visit. Use automated pre-consultation sheets to build confidence and reduce cancellations."
    },
    {
      num: "Secret 3",
      title: "HIGH-LEVERAGE SCHEDULING",
      desc: "Authority-based conversion script. Double your receptionist booking rates by replacing normal talk with optimized scripts."
    }
  ];

  return (
    <section id="learn" className="py-20 bg-white relative text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Learn */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider">
            <span>Core Syllabus</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            During Workshop What You Are Going To Learn!
          </h2>
          <p className="text-base text-slate-500 font-light max-w-xl mx-auto">
            Practical strategies customized specifically for local healthcare brands and clinics.
          </p>
        </div>

        {/* 5 Learning Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="reveal-element bg-slate-50/50 border border-slate-100 rounded-2xl p-6.5 text-left hover:shadow-lg hover:bg-white hover:border-blue-100 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-display group-hover:scale-105 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="font-display text-base font-bold text-slate-800">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* repeated CTA */}
        <div className="mb-24 space-y-2 reveal-element max-w-md mx-auto text-center">
          <a
            href="#register"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Register Now For The LIVE Training!
          </a>
          <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            And Get Bonuses Worth ₹14,999 Absolutely Free!!
          </p>
        </div>

        {/* 3 Secrets Section */}
        <div className="border-t border-slate-100 pt-20">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 reveal-element">
            <div className="inline-flex items-center space-x-1 bg-rose-50 border border-rose-100 rounded-full px-3.5 py-1 text-xs font-bold text-rose-800 uppercase tracking-wider">
              <span>The Secrets</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              The 3 Secrets To Automate Your Clinic Bookings
            </h2>
            <p className="text-base text-slate-500 font-light max-w-xl mx-auto">
              We will pull back the curtain on the patient journey blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {secrets.map((secret, i) => (
              <div 
                key={i} 
                className="reveal-element bg-white border border-slate-150 rounded-[28px] p-6 sm:p-7.5 shadow-sm text-left hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-3xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                    {secret.num}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-extrabold text-slate-800 tracking-wide">
                    {secret.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                    {secret.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* repeated CTA */}
          <div className="space-y-2 reveal-element max-w-md mx-auto text-center">
            <a
              href="#register"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Register Now For The LIVE Training!
            </a>
            <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              And Get Bonuses Worth ₹14,999 Absolutely Free!!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
