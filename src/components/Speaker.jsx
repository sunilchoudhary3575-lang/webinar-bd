import React from 'react';
import { Star, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Speaker() {
  const testimonials = [
    {
      name: "Dr. Hemant Patil",
      role: "Owner - Bright Smiles Dental Clinic",
      stars: 5,
      text: "\"Bawra Digitals optimized our Google Business Profile and local search rankings. We went from getting 5 enquiries a month to getting 45+ patient bookings in less than 5 weeks!\""
    },
    {
      name: "Dr. Aisha Verma",
      role: "Aesthetic Dermatologist - Skin & Soul Aesthetics",
      stars: 5,
      text: "\"They helped channel our Instagram and YouTube content into a structured patient acquisition funnel. We are now able to book cosmetic consultations consistently without depending on referrals.\""
    },
    {
      name: "Dr. Rajesh Sharma",
      role: "Founder - Sharma Multispeciality Hospital",
      stars: 5,
      text: "\"The Bawra team productized our health check packages and configured Google Search Ads. We tripled our average monthly diagnostic appointments within 60 days.\""
    }
  ];

  const stats = [
    {
      label: "Clinics Helped",
      value: "50+ Private Clinics",
      desc: "Optimized local patient acquisition frameworks."
    },
    {
      label: "Combined Experience",
      value: "8+ Years Experience",
      desc: "Specialized in local medical marketing & SEO."
    },
    {
      label: "Campaign Budgets Managed",
      value: "₹50 Lakhs+ Spends",
      desc: "Optimized healthcare campaigns yielding high ROI."
    }
  ];

  return (
    <section id="speaker" className="py-20 bg-slate-50 relative overflow-hidden text-slate-800">
      
      {/* Testimonials Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="max-w-3xl mx-auto mb-12 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider">
            <span>Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have A Look At What They Have To Say About It
          </h2>
          <p className="text-base text-slate-500 font-light max-w-xl mx-auto">
            Real feedback from clinics, specialists, and hospital owners who attended our sessions.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {testimonials.map((test, i) => (
            <div 
              key={i} 
              className="reveal-element bg-white border border-slate-100 rounded-2xl p-6.5 text-left shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(test.stars)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light italic">
                  {test.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-850">{test.name}</h4>
                <p className="text-3xs text-slate-400 font-semibold uppercase mt-0.5">{test.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* repeated CTA */}
        <div className="space-y-2 reveal-element max-w-md mx-auto">
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

      {/* Know Your Coach Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Column: Team Identity Graphic */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center reveal-element">
            <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-[32px] bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-150 border border-slate-100 shadow-xl overflow-hidden flex flex-col justify-end p-6">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl" />
              
              <div className="z-10 flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="flex -space-x-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-md">BD</div>
                  <div className="w-16 h-16 rounded-full bg-sky-500 border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-md">M</div>
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-md">S</div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">BAWRA DIGITALS</h4>
                  <p className="text-2xs font-semibold text-slate-400 mt-1">Healthcare Agency Core Team</p>
                </div>
              </div>

              <div className="z-10 bg-white/95 backdrop-blur-xs border border-slate-100 shadow-md rounded-2xl p-4.5 text-left">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-wider">Expert Panelists</span>
                </div>
                <h5 className="text-xs font-bold text-slate-800 mt-1">Healthcare Marketing Specialists</h5>
                <p className="text-3xs text-slate-500 mt-0.5 leading-relaxed font-light">
                  Helping private practices and corporate clinics outrank competitors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Coach Copy matched to StartupFrat */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-element">
            <div className="space-y-3.5">
              <div className="inline-flex items-center space-x-1 bg-rose-50 border border-rose-100 rounded-full px-3.5 py-1 text-xs font-bold text-rose-800 uppercase tracking-wider">
                <span>Meet Your Coach</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Know Your Coach
              </h2>
              <h3 className="text-base sm:text-lg font-bold text-blue-800">
                Bawra Digitals Team — Healthcare Marketing Strategists
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Hi, we are the Bawra Digitals Core Team. After audit and engineering local patient engines for dozens of private practices, we discovered the key factors that drive patient choices online.
              <br /><br />
              Today we have helped 50+ clinics and medical specialists to establish visibility, bypass expensive digital agency fire-fighting, and build self-managed local patient channels.
            </p>

            {/* Credential items list */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-150 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="text-2xs font-extrabold text-blue-600 block uppercase tracking-wider mb-2">
                      {stat.label}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {stat.value}
                    </h4>
                    <p className="text-3xs text-slate-400 mt-1 leading-snug font-light">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* repeated CTA */}
            <div className="space-y-2 pt-4">
              <a
                href="#register"
                className="block bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 text-center max-w-md"
              >
                Register Now For The LIVE Training!
              </a>
              <p className="text-xs font-bold text-rose-600 uppercase tracking-wider max-w-md text-center">
                And Get Bonuses Worth ₹14,999 Absolutely Free!!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
