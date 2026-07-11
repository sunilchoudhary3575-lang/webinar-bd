import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Benefits', href: '#target' },
    { name: 'What You\'ll Learn', href: '#learn' },
    { name: 'Speaker', href: '#speaker' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo */}
          <a href="#home" className="flex items-center group">
            <img 
              src={logo} 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              alt="Bawra Digitals Logo" 
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Live Session
            </div>
            <a
              href="#register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5.5 py-2.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Reserve My Seat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-45 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 max-w-sm bg-white shadow-2xl p-6 transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <a href="#home" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img 
              src={logo} 
              className="h-8 w-auto object-contain" 
              alt="Bawra Digitals Logo" 
            />
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-slate-700 p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-600 hover:text-blue-600 py-2 border-b border-slate-100 text-base"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <div className="flex items-center text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-3 py-1.5 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Live Online Webinar
            </div>
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              Reserve My Seat
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
