import React, { useState } from 'react';
import { CheckSquare, Square, ArrowRight, AlertCircle, Sparkles, UserCheck } from 'lucide-react';

export default function Audience() {
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  });

  const checklistItems = [
    {
      id: 1,
      text: "We depend mostly on offline referrals & word-of-mouth, which makes our month-on-month clinic revenue unpredictable."
    },
    {
      id: 2,
      text: "Our Google Business Profile is active, but it isn't generating patient enquiries or bookings consistently."
    },
    {
      id: 3,
      text: "We are active on Instagram and Facebook, but unsure if the content is actually helping our clinic get bookings."
    },
    {
      id: 4,
      text: "We want to scale our medical practice using digital marketing, but don't know where to start or who to trust."
    },
    {
      id: 5,
      text: "We are confused whether Google Search Ads, Meta Video Ads, or Local SEO is the right fit for our specialty."
    },
    {
      id: 6,
      text: "Prospective patients call our reception desk to enquire, but our staff fails to convert them into actual clinic visits."
    }
  ];

  const whoAttend = [
    "General Physicians & Consultants looking to establish local digital presence.",
    "Dental Clinic Owners who want to fill their chairs with high-value cases.",
    "Dermatologists & Cosmetologists seeking to scale aesthetic treatments.",
    "Private Hospital Owners & Administrators aiming to build community trust.",
    "Pediatricians, Gynecologists, and Orthopedics wanting to stand out.",
    "Clinic Managers looking for ready-to-use receptionist scripting templates.",
    "Doctors preparing to launch a new clinic and wanting a patient pipeline.",
    "Healthcare marketers looking to outrank local hospital chains."
  ];

  const toggleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checkCount = Object.values(checked).filter(Boolean).length;

  return (
    <section id="target" className="py-20 bg-slate-50 relative overflow-hidden text-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pain Point Checklist Section */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4 reveal-element">
          <div className="inline-flex items-center space-x-1 bg-rose-50 border border-rose-100 rounded-full px-3.5 py-1 text-xs font-bold text-rose-800 uppercase tracking-wider">
            <span>Interactive Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Please Check All Boxes Where Your Answer Is <span className="text-rose-600">YES!</span>
          </h2>
          <p className="text-base text-slate-500 font-light">
            Be honest. Check the challenges you are currently facing in your medical practice.
          </p>
        </div>

        {/* Interactive Checklist Cards */}
        <div className="max-w-4xl mx-auto space-y-4.5 text-left reveal-element mb-10">
          {checklistItems.map((item) => {
            const isChecked = checked[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`flex items-start space-x-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isChecked 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white border-slate-150 hover:bg-slate-50/50 hover:border-slate-350'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckSquare className="w-5.5 h-5.5 text-white" />
                  ) : (
                    <Square className="w-5.5 h-5.5 text-slate-300" />
                  )}
                </div>
                <span className={`text-sm sm:text-base font-semibold leading-relaxed ${
                  isChecked ? 'text-white' : 'text-slate-700'
                }`}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Warning Alert Tag */}
        {checkCount > 0 && (
          <div className="max-w-4xl mx-auto mb-16 bg-rose-50 border border-rose-100 rounded-2xl p-5 text-left flex items-start space-x-3.5 animate-scale-in">
            <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-extrabold text-rose-800 uppercase tracking-wider">
                👉 If You Checked ANY Of The Boxes Above, Then This LIVE Training Is For You!
              </h4>
              <p className="text-xs text-rose-600 font-medium mt-0.5 leading-relaxed">
                You checked <span className="font-extrabold">{checkCount}</span> pain points. We have designed specific modules in the webinar to solve these exact hurdles.
              </p>
            </div>
          </div>
        )}

        {/* Repeated CTA */}
        <div className="mb-20 space-y-2 reveal-element max-w-md mx-auto">
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

        {/* Who Should Attend Section */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-[32px] p-6.5 sm:p-10 shadow-lg text-left relative reveal-element">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          
          <div className="flex items-center space-x-3.5 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <UserCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-3xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
                Target Profile
              </span>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                Who Should Attend This Webinar?
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whoAttend.map((item, i) => (
              <div key={i} className="flex items-start space-x-3 bg-slate-50/50 p-3.5 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
                <span className="text-xs shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  {i+1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Reference Page Note */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs sm:text-sm font-bold text-slate-500 leading-relaxed italic bg-slate-50 rounded-2xl p-4 border border-slate-100">
              ℹ️ <span className="text-slate-800">Please Note:</span> Although we start off with free tools and profile optimization techniques, this workshop is mainly for growth-minded doctors who do not mind using paid advertising to beat competitors and outrank local hospital chains.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
