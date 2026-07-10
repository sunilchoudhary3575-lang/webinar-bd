import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audience from './components/Audience';
import WhatYouLearn from './components/WhatYouLearn';
import PatientJourney from './components/PatientJourney';
import Speaker from './components/Speaker';
import Agenda from './components/Agenda';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  // Activate IntersectionObserver scroll reveal hooks
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main>
        {/* Section 1: Hero Banner & Snippets */}
        <Hero />

        {/* Section 2: Audience Problem identification */}
        <Audience />

        {/* Section 3: Core Curriculum details */}
        <WhatYouLearn />

        {/* Section 4: Patient Lifecycle flowchart */}
        <PatientJourney />

        {/* Section 5: Host details & Credibility */}
        <Speaker />

        {/* Section 6: Actionable Agenda */}
        <Agenda />

        {/* Section 7: FAQs Accordions */}
        <FAQ />

        {/* Section 8: Register Conversion Form */}
        <RegistrationForm />
      </main>

      {/* Footer & Mobile sticky CTA */}
      <Footer />
    </div>
  );
}

export default App;
