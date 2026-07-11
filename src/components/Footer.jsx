import React, { useState, useEffect } from 'react';
import { ShieldCheck, Heart, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = docHeight - scrollPos - winHeight < 500;
      
      if (scrollPos > 600 && !nearBottom) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky CTA for Mobile */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 transform ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Free Webinar</p>
            <h4 className="text-xs font-bold text-slate-800">Limited Seats Left</h4>
          </div>
          <a
            href="#register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full shadow-md text-xs transition-all duration-200"
          >
            Reserve Seat Free
          </a>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-6xl mx-auto mb-10">
            
            {/* Logo and About */}
            <div className="md:col-span-6 space-y-4">
              <a href="#home" className="flex items-center w-fit">
                <img 
                  src={logo} 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                  alt="Bawra Digitals Logo" 
                />
              </a>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
                Rajasthan's Leading Healthcare Social Media Marketing Agency. Helping clinics, hospitals, and medical practitioners establish visibility, build patient trust, and simplify appointment systems online.
              </p>
              <div className="flex items-center space-x-2 text-3xs font-semibold text-slate-500 uppercase tracking-widest bg-slate-800/50 p-2.5 rounded-lg w-fit">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>HIPAA Standards Compliant Campaigns</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Webinar Sections</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#target" className="hover:text-white transition-colors">Target Audience</a></li>
                <li><a href="#learn" className="hover:text-white transition-colors">What You'll Learn</a></li>
                <li><a href="#speaker" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#agenda" className="hover:text-white transition-colors">Agenda Timeline</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ Accordions</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Contact Organiser</h4>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <a href="mailto:contact@bawradigitals.com" className="hover:text-white break-all">
                    contact@bawradigitals.com
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a href="tel:+916377790409" className="hover:text-white">+91 63777 90409</a>
                    <a href="tel:+919950683442" className="hover:text-white">+91 99506 83442</a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="font-light text-slate-400">
                    Behind Arora Honda Motors, Near Bombay Motors Circle, Pratap Nagar, Jodhpur, Rajasthan - 342001
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Compliance & Ad Policy Disclaimers (StartupFrat Style) */}
          <div className="border-t border-slate-800/80 pt-8 mt-8 text-slate-500 text-[10px] sm:text-3xs leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
            <p>
              Please be advised that the results, case studies, and patient growth figures shown are extraordinary and are not intended to serve as guarantees. In fact, as stipulated by law, we cannot and do not make any guarantees about your clinic's ability to get results or earn more revenue using our ideas, templates, tools, or strategies. Your results in healthcare marketing depend on your specialties, local patient density, clinical reputation, and execution.
            </p>
          </div>

          {/* Legal / Copyright Bottom */}
          <div className="border-t border-slate-800/80 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-3xs text-slate-500 max-w-6xl mx-auto">
            <p className="text-center md:text-left leading-relaxed max-w-lg mb-4 md:mb-0">
              Disclaimer: The contents, strategies, and case insights shared in this webinar are for educational purposes. Results may vary depending on local clinic location, patient niche, specialties, and implementation compliance.
            </p>
            <p className="flex items-center space-x-1 font-semibold">
              <span>© {new Date().getFullYear()} Bawra Digitals. Made with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-current" />
              <span>for Healthcare.</span>
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
