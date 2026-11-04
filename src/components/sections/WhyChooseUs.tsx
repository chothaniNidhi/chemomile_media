import React, { useState } from 'react';
import { WHY_CHOOSE_US_DATA } from '../../data/agencyData';
import { Target, Sparkles, BarChart3, Rocket, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeAdvantage = WHY_CHOOSE_US_DATA[selectedIndex];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-botanical-charcoal text-white overflow-hidden">
      
      {/* Botanical glowing background orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-botanical-teal/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-botanical-yellow/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-botanical-yellow" />
            <span className="text-xs font-bold tracking-[0.2em] text-botanical-yellow uppercase">
              04 / THE AGENCY ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
            Creativity Meets <span className="text-botanical-teal-glow">Strategy.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Most agencies force you to choose between boundary-pushing artistic design or dry analytical performance. 
            At Chamomile Media, we fuse both disciplines into a singular, tranquil growth engine.
          </p>
        </div>

        {/* 4 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {WHY_CHOOSE_US_DATA.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-botanical-charcoal-light border-botanical-teal shadow-botanical-glow'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-botanical-teal text-white' : 'bg-white/10 text-botanical-sand'}`}>
                        {getPillarIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/60">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-botanical-yellow animate-ping' : 'bg-transparent'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Inspection Panel for Selected Advantage */}
          <div className="lg:col-span-7 flex">
            <div className="w-full p-8 sm:p-12 rounded-3xl bg-botanical-charcoal-light border border-botanical-teal/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {/* Subtle Watermark */}
              <div className="absolute top-4 right-6 text-7xl font-display font-black text-white/5 pointer-events-none select-none">
                0{selectedIndex + 1}
              </div>

              <div>
                {/* Header of Active Card */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-botanical-yellow">
                    PILLAR 0{selectedIndex + 1}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs text-botanical-teal-glow font-medium">
                    {activeAdvantage.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4">
                  {activeAdvantage.title}
                </h3>

                <p className="text-base text-white/80 leading-relaxed font-normal">
                  {activeAdvantage.description}
                </p>

                {/* Bullets List */}
                <div className="mt-8 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-botanical-sand">
                    Core Operational Tenets:
                  </h4>
                  {activeAdvantage.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-botanical-teal flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Card */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-botanical-yellow">
                    {activeAdvantage.statNumber}
                  </div>
                  <div className="text-xs text-white/70 max-w-[140px] leading-tight">
                    {activeAdvantage.statLabel}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-botanical-teal-glow hover:text-white transition-colors"
                >
                  <span>Build with Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
