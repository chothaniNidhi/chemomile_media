import React, { useState } from 'react';
import { PROCESS_DATA } from '../../data/agencyData';
import { Search, Compass, Palette, Send, TrendingUp, Check, Clock, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Send':
        return <Send className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-botanical-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-botanical-teal" />
            <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
              05 / THE CALM SPRINT METHOD
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-botanical-charcoal tracking-tight">
            Our 5-Step Process.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-botanical-charcoal/75 leading-relaxed">
            From initial archaeology to compounding market expansion. 
            Here is the exact playbook we execute for modern brands.
          </p>
        </div>

        {/* Step Navigation Bar (Horizontal on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_DATA.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-botanical-teal text-white border-botanical-teal shadow-botanical-glow -translate-y-1'
                    : 'bg-white border-botanical-sand/50 text-botanical-charcoal/70 hover:border-botanical-teal/40 hover:bg-botanical-sand-light/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-botanical-yellow' : 'text-botanical-teal'}`}>
                    {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20' : 'bg-botanical-sand-light'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div>
                  <div className={`font-display font-bold text-sm sm:text-base ${isActive ? 'text-white' : 'text-botanical-charcoal'}`}>
                    {step.title}
                  </div>
                  <div className={`text-[10px] uppercase tracking-wider mt-0.5 ${isActive ? 'text-botanical-sand-light' : 'text-botanical-charcoal/50'}`}>
                    {step.phase}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Showcase */}
        {(() => {
          const step = PROCESS_DATA[activeStep];
          return (
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-botanical-sand/70 shadow-premium">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-display font-black text-botanical-teal">
                      {step.number}
                    </span>
                    <span className="text-xl sm:text-2xl font-display font-bold text-botanical-charcoal">
                      {step.title}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-botanical-sand-light text-botanical-charcoal/80 flex items-center gap-1.5 ml-auto sm:ml-0">
                      <Clock className="w-3.5 h-3.5 text-botanical-teal" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-botanical-charcoal/85 leading-relaxed pt-2">
                    {step.description}
                  </p>

                  <div className="pt-4 flex items-center gap-3 text-xs text-botanical-charcoal/70">
                    <Sparkles className="w-4 h-4 text-botanical-yellow" />
                    <span>Sprint milestone verified by senior creative director</span>
                  </div>
                </div>

                {/* Right Deliverables Checklist */}
                <div className="lg:col-span-5 bg-botanical-ivory p-6 rounded-2xl border border-botanical-sand/60">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-charcoal/70 mb-4">
                    Phase Deliverables:
                  </h4>
                  <div className="space-y-3">
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-botanical-charcoal font-medium">
                        <Check className="w-4 h-4 text-botanical-teal flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
