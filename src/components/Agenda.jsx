import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Lightbulb, Share2, HelpCircle } from 'lucide-react';

export default function Agenda() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 1,
      name: "Module 1",
      title: "How patient behaviour has changed",
      desc: "An in-depth look at how patients search for doctors online, what factors build immediate confidence, and the shift from traditional offline referrals to online validation.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "blue"
    },
    {
      id: 2,
      name: "Module 2",
      title: "Why many clinics struggle with online visibility",
      desc: "Common technical and strategic errors in Google Business Profiles, unoptimized websites, and random social media postings that fail to generate patient bookings.",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "amber"
    },
    {
      id: 3,
      name: "Module 3",
      title: "The patient acquisition framework",
      desc: "The exact 3-step system to turn local search visibility into clinic enquiries and patient visits, creating a reliable appointment-booking machine.",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "sky"
    },
    {
      id: 4,
      name: "Module 4",
      title: "Digital channels explained",
      desc: "A simplified breakdown of Search Engine Optimization (SEO), Google Search Ads, and Meta Ads (Facebook/Instagram). Learn what to choose based on your specialty.",
      icon: <Share2 className="w-5 h-5" />,
      color: "indigo"
    },
    {
      id: 5,
      name: "Module 5",
      title: "Questions & Answers Session",
      desc: "Open floor Q&A. Ask specific questions about your clinic's digital channels, Google profile rankings, and local advertising issues.",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "emerald"
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-sky-50 border border-sky-100 rounded-full px-3.5 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider">
            <span>Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Webinar Agenda
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-xl mx-auto">
            A comprehensive, high-value structured schedule designed to respects your time and deliver high impact.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left: Dynamic Timeline Navigator */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-10 space-y-8 reveal-element">
            {/* Animated Connector Line */}
            <div className="absolute left-[29px] sm:left-[33px] top-3 bottom-3 w-1 bg-slate-200 rounded-full -z-10">
              <div 
                className="w-full bg-gradient-to-b from-blue-600 to-sky-500 rounded-full transition-all duration-500"
                style={{ height: `${(activeModule / (modules.length - 1)) * 100}%` }}
              />
            </div>

            {modules.map((mod, idx) => {
              const isActive = idx === activeModule;
              const isPassed = idx < activeModule;
              
              return (
                <div 
                  key={mod.id}
                  className={`relative flex items-start space-x-4 sm:space-x-6 cursor-pointer p-4.5 rounded-2xl border transition-all duration-300 group text-left ${
                    isActive 
                      ? 'bg-white border-slate-100 shadow-md translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-slate-100/50'
                  }`}
                  onClick={() => setActiveModule(idx)}
                >
                  {/* Icon Node */}
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 z-10 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-110' 
                      : isPassed
                        ? 'bg-white border-blue-500 text-blue-600'
                        : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300'
                  }`}>
                    {mod.icon}
                  </div>

                  {/* Module Details */}
                  <div className="space-y-1">
                    <span className={`text-3xs font-extrabold uppercase tracking-widest ${
                      isActive ? 'text-blue-600' : 'text-slate-400'
                    }`}>
                      {mod.name}
                    </span>
                    <h3 className={`font-display text-sm sm:text-base font-bold transition-colors duration-200 ${
                      isActive ? 'text-slate-900 font-extrabold' : 'text-slate-700'
                    }`}>
                      {mod.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Module Preview Panel */}
          <div className="lg:col-span-5 reveal-element lg:sticky lg:top-28">
            <div className="bg-white border border-slate-100 rounded-3xl p-6.5 shadow-lg text-left space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
              
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {modules[activeModule].icon}
                </div>
                <div>
                  <span className="text-3xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                    {modules[activeModule].name}
                  </span>
                  <h4 className="font-display text-base font-extrabold text-slate-800 mt-1">
                    Topic Breakdown
                  </h4>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {modules[activeModule].title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {modules[activeModule].desc}
                </p>
              </div>

              {/* Extra micro features for high fidelity */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center text-2xs font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Includes downloadable framework worksheet.
                </div>
                <div className="flex items-center text-2xs font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2"></span>
                  Q&A open microphone access for this section.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
