import React from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 mesh-gradient-bg overflow-hidden text-slate-800">
      
      {/* Top Banner Alert Strip */}
      <div className="bg-rose-600 text-white text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider font-sans">
        ⚠️ Attention Doctors, Clinic Owners & Hospital Administrators: Get More Bookings without being pushy!
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center space-y-8">
        
        {/* Banner Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4.5 py-1.5 shadow-xs mx-auto">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          <span className="text-xs font-bold tracking-wider text-blue-800 uppercase font-sans">
            🔥 A LIVE TRAINING
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-3xl mx-auto">
          Attract{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
            50+ New Patients
          </span>{' '}
          & Build a Consistent Flow of Appointments Each Month
        </h1>

        {/* High Converting Subheading */}
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 bg-blue-50/60 border-l-4 border-blue-600 p-4 rounded-r-2xl leading-relaxed text-center font-sans">
            "Clinic ko Auto-pilot Mode pe chalaana sikhiye! Learn how patients discover healthcare providers online and understand the key elements that influence appointment decisions in today's digital landscape."
          </p>
          <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed max-w-2xl mx-auto font-sans">
            Discover the exact digital patient acquisition framework to fill your clinic schedule without relying on offline word-of-mouth or aggressive advertising.
          </p>
        </div>

        {/* Reference Style Info Grid (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm max-w-2xl mx-auto">
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">When?</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center font-sans">
              <Calendar className="w-4 h-4 text-blue-600 mr-2" />
              Monday, July 13th
            </span>
          </div>
          <div className="space-y-0.5 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">Time</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center font-sans">
              <Clock className="w-4 h-4 text-blue-600 mr-2" />
              7:30 PM - 9:30 PM
            </span>
          </div>
          <div className="space-y-0.5 border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">Registration Fee</span>
            <span className="text-xs sm:text-sm font-extrabold text-emerald-600 flex items-center justify-center bg-emerald-50 w-fit px-3 py-1 rounded mx-auto font-sans">
              FREE
            </span>
          </div>
        </div>

        {/* Embedded YouTube Video Block */}
        <div className="max-w-2xl mx-auto aspect-video rounded-[24px] overflow-hidden shadow-2xl border border-slate-100 bg-black my-8 relative">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oM9cWlXwj-0"
            title="Healthcare Webinar Video Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Centered CTA */}
        <div className="space-y-3.5 max-w-md mx-auto pt-2">
          <a
            href="#register"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 text-center text-base sm:text-lg font-sans"
          >
            Register Now For The LIVE Training!
          </a>
          <p className="text-xs font-extrabold text-rose-600 uppercase tracking-widest font-sans">
            And Get Bonuses Worth ₹14,999 Absolutely Free!!
          </p>
        </div>
        
        {/* Social Trust */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-semibold pt-1 font-sans">
          <div className="flex items-center">
            <Users className="w-4.5 h-4.5 text-blue-600 mr-1.5" />
            <span>👥 <span className="font-extrabold text-slate-900">49,000+ Doctors</span> have attended our trainings</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
          <div className="flex items-center">
            <Star className="w-4.5 h-4.5 text-amber-500 fill-amber-500 mr-1.5" />
            <span><span className="font-extrabold text-slate-900">4.9/5</span> Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
