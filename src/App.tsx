import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { ProjectEstimator } from './components/sections/ProjectEstimator';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { MessageSquare, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [estimatedScope, setEstimatedScope] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-botanical-ivory text-botanical-charcoal font-sans selection:bg-botanical-teal/20 selection:text-botanical-charcoal">
      {/* Precision Interactive Cursor */}
      <CustomCursor />

      {/* Global Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with 3D Chamomile Emblem */}
        <Hero />

        {/* 2. About Section with Asymmetrical Grid & Philosophy */}
        <About />

        {/* 3. Interactive Services Section */}
        <Services />

        {/* 4. Portfolio / Our Work Case Studies */}
        <Portfolio />

        {/* 5. Why Choose Us / The Agency Advantage */}
        <WhyChooseUs />

        {/* 6. 5-Step Process Sprint */}
        <Process />

        {/* 7. Interactive Brand Velocity & Scope Simulator */}
        <ProjectEstimator onApplyScope={(scope) => setEstimatedScope(scope)} />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Contact / Consultation Form */}
        <Contact initialDetails={estimatedScope} />
      </main>

      {/* Global Agency Footer */}
      <Footer />

      {/* Quick Floating Action Tools on Bottom Corner */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={scrollToTop}
          title="Scroll to top"
          className="p-3 rounded-full bg-botanical-ivory/90 backdrop-blur-md border border-botanical-sand/70 text-botanical-charcoal hover:bg-botanical-sand-light shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-botanical-teal" />
        </button>

        <a
          href="#contact"
          data-cursor="HELLO"
          title="Start a project"
          className="p-3.5 rounded-full bg-botanical-teal text-white shadow-botanical-glow hover:bg-botanical-teal-dark transition-all hover:scale-105 active:scale-95 flex items-center justify-center group"
          aria-label="Contact Chamomile Media"
        >
          <MessageSquare className="w-5 h-5 text-botanical-yellow group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default App;
