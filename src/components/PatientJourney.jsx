import React, { useState } from 'react';
import { Search, Map, Star, Globe, MessageCircle, Phone, Calendar, Heart, ArrowRight, ArrowDown } from 'lucide-react';

export default function PatientJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Search Online",
      icon: <Search className="w-5 h-5" />,
      desc: "Patient searches for symptoms or nearby specialists on Google.",
      stat: "84% start here"
    },
    {
      id: 2,
      title: "Google Profile",
      icon: <Map className="w-5 h-5" />,
      desc: "Finds your local practice listed on Google Maps.",
      stat: "62% click local pack"
    },
    {
      id: 3,
      title: "Reviews",
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
      desc: "Reads doctor ratings and patients' success stories.",
      stat: "90% trust reviews"
    },
    {
      id: 4,
      title: "Website",
      icon: <Globe className="w-5 h-5" />,
      desc: "Visits the clinic website to verify treatments and check expertise.",
      stat: "75% judge credibility"
    },
    {
      id: 5,
      title: "Social Media",
      icon: <MessageCircle className="w-5 h-5" />,
      desc: "Checks Instagram/YouTube for educational content and doctor's vibe.",
      stat: "44% research social"
    },
    {
      id: 6,
      title: "Contact Clinic",
      icon: <Phone className="w-5 h-5" />,
      desc: "Calls or sends an enquiry via WhatsApp/web form.",
      stat: "Requires fast response"
    },
    {
      id: 7,
      title: "Appointment",
      icon: <Calendar className="w-5 h-5" />,
      desc: "Visits clinic for first clinical consultation.",
      stat: "First impression count"
    },
    {
      id: 8,
      title: "Follow-up",
      icon: <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />,
      desc: "Receives recovery care, leaves positive review, and refers family.",
      stat: "Completes the loop"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-sky-50 border border-sky-100 rounded-full px-3.5 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider">
            <span>Patient Lifecycle</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Modern Patient Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-xl mx-auto">
            See how prospective patients move from finding you online to booking an appointment and becoming loyal promoters.
          </p>
        </div>

        {/* Desktop Horizontal flow (lg and up) */}
        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto mb-12 relative py-4">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 -z-10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-sky-500 transition-all duration-700 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, idx) => {
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;
            return (
              <div 
                key={step.id}
                className="flex flex-col items-center relative w-24 group cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                {/* Step Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30 scale-110' 
                    : isActive 
                      ? 'bg-white text-blue-600 border-blue-500' 
                      : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                }`}>
                  {step.icon}
                </div>

                {/* Step Number Tag */}
                <div className={`absolute -top-6 text-3xs font-extrabold px-1.5 py-0.5 rounded transition-all duration-300 ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  0{step.id}
                </div>

                {/* Step Title */}
                <span className={`mt-3 text-2xs font-bold text-center tracking-tight transition-colors duration-200 ${
                  isCurrent ? 'text-blue-600 font-extrabold' : 'text-slate-700'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical flow (below lg) */}
        <div className="lg:hidden flex flex-col space-y-6 max-w-md mx-auto mb-10 relative pl-8">
          {/* vertical line */}
          <div className="absolute left-4.5 top-2 bottom-2 w-1 bg-slate-200 -z-10 rounded-full" />
          
          {steps.map((step, idx) => (
            <div 
              key={step.id}
              className={`flex items-start space-x-4 cursor-pointer p-3 rounded-2xl transition-all duration-200 ${
                activeStep === idx ? 'bg-white shadow-md border border-slate-100' : 'hover:bg-slate-100/50'
              }`}
              onClick={() => setActiveStep(idx)}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-200 ${
                idx === activeStep 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
                  : 'bg-white text-slate-400 border-slate-200'
              }`}>
                {step.icon}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-3xs font-bold text-blue-600 uppercase bg-blue-50 px-1.5 py-0.5 rounded">
                    Step 0{step.id}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-light">{step.desc}</p>
                <span className="text-3xs text-slate-400 font-medium mt-1.5 block">{step.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Step Detail Panel (Desktop preview) */}
        <div className="hidden lg:block max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-6.5 shadow-md text-left reveal-element">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md">
              Selected Stage: Step 0{steps[activeStep].id}
            </span>
            <h3 className="font-display text-xl font-bold text-slate-800">
              {steps[activeStep].title}
            </h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            {steps[activeStep].desc}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-2xs font-semibold text-slate-400">
            <span>Market Insight: {steps[activeStep].stat}</span>
            <span className="text-blue-500 flex items-center space-x-1">
              <span>Interactive Step Tracker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Subtitle statement */}
        <div className="mt-12 text-center reveal-element">
          <p className="inline-block text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-100 rounded-2xl px-6 py-3.5 shadow-xs">
            💡 Patient acquisition is a <span className="text-blue-600">system</span>, not a single advertisement.
          </p>
        </div>

      </div>
    </section>
  );
}
