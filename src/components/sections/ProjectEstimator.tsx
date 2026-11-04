import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Zap, ShieldAlert } from 'lucide-react';

interface EstimatorProps {
  onApplyScope?: (scopeText: string) => void;
}

export const ProjectEstimator: React.FC<EstimatorProps> = ({ onApplyScope }) => {
  const [selectedService, setSelectedService] = useState<'brand' | 'web' | 'growth' | 'full'>('full');
  const [selectedStage, setSelectedStage] = useState<'startup' | 'scaling' | 'enterprise'>('scaling');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated'>('standard');
  const [applied, setApplied] = useState(false);

  const getScopeDetails = () => {
    switch (selectedService) {
      case 'brand':
        return {
          title: 'Brand Identity & Visual System',
          weeks: timelineSpeed === 'accelerated' ? '4 Weeks' : '6 Weeks',
          deliverables: ['Logo & Mark Architecture', 'Color & Type Tokens', 'Brand Guidelines Book', 'Packaging / Asset Guidelines', 'Figma Design System'],
          squad: '1 Creative Director, 1 Senior Brand Designer, 1 Strategist'
        };
      case 'web':
        return {
          title: '3D WebGL Digital Flagship',
          weeks: timelineSpeed === 'accelerated' ? '5 Weeks' : '8 Weeks',
          deliverables: ['Three.js 3D Interactive Canvas', 'Responsive React / Next.js Build', 'Full E-Commerce / CMS Setup', 'Conversion Rate Optimization', 'Core Web Vitals 95+ Guarantee'],
          squad: '1 Creative Technologist, 1 UI/UX Lead, 1 Frontend Engineer'
        };
      case 'growth':
        return {
          title: 'Full-Funnel Performance & Content',
          weeks: timelineSpeed === 'accelerated' ? '2 Weeks to Live' : '3 Weeks to Live',
          deliverables: ['Ad Creative Testing Suite (24 Assets)', 'Omnichannel Meta/Google Setup', 'Attribution Modeling Dashboard', 'Weekly Optimization Sprints', 'High-Converting Landing Pages'],
          squad: '1 Growth Lead, 1 Motion Designer, 1 Copywriter'
        };
      case 'full':
      default:
        return {
          title: 'The Total Brand Transformation (Flagship)',
          weeks: timelineSpeed === 'accelerated' ? '6-8 Weeks' : '10-12 Weeks',
          deliverables: ['End-to-End Brand Identity System', 'Award-Winning 3D Interactive Website', 'Omnichannel Launch Campaign', 'Packaging / Digital Asset Library', 'Quarterly Scale Retainer'],
          squad: 'Dedicated Executive Squad (4 Specialists + Executive Partner)'
        };
    }
  };

  const scope = getScopeDetails();

  const handleApply = () => {
    const text = `Estimated Scope: ${scope.title} | Stage: ${selectedStage} | Velocity: ${timelineSpeed} (${scope.weeks})`;
    if (onApplyScope) {
      onApplyScope(text);
    }
    setApplied(true);
    setTimeout(() => setApplied(false), 3000);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white border-y border-botanical-sand/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-sand-light border border-botanical-sand text-[11px] font-bold uppercase tracking-wider text-botanical-teal mb-3">
            <Calculator className="w-3.5 h-3.5 text-botanical-yellow-dark" />
            <span>Interactive Scope Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-botanical-charcoal tracking-tight">
            Calculate Your Brand Velocity.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-botanical-charcoal/70">
            Configure your project parameters to immediately preview estimated sprint timelines, squad composition, and deliverables.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 bg-botanical-ivory p-6 sm:p-8 rounded-3xl border border-botanical-sand/70">
            
            {/* Step 1: Core Service Requirement */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-3">
                1. Select Strategic Scope:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'full', label: 'Total Brand Overhaul', sub: 'Identity + 3D Web + Ads' },
                  { id: 'brand', label: 'Brand Identity System', sub: 'Logos, Tokens & Assets' },
                  { id: 'web', label: '3D WebGL Digital Flagship', sub: 'Interactive Website & Shop' },
                  { id: 'growth', label: 'Performance & Paid Social', sub: 'Full-Funnel Ad Machine' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(item.id as unknown as typeof selectedService)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedService === item.id
                        ? 'bg-botanical-teal text-white border-botanical-teal shadow-xs'
                        : 'bg-white border-botanical-sand/60 text-botanical-charcoal hover:bg-botanical-sand-light'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                    <div className={`text-[11px] ${selectedService === item.id ? 'text-botanical-sand-light' : 'text-botanical-charcoal/60'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Company Stage */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-3">
                2. Your Company Stage:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'startup', label: 'Emerging / Seed' },
                  { id: 'scaling', label: 'Series A-C / Scale' },
                  { id: 'enterprise', label: 'Mid-Market / Enterprise' },
                ].map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStage(stage.id as unknown as typeof selectedStage)}
                    className={`py-2.5 px-3 rounded-xl text-center text-xs font-semibold border transition-all ${
                      selectedStage === stage.id
                        ? 'bg-botanical-charcoal text-white border-botanical-charcoal'
                        : 'bg-white border-botanical-sand/60 text-botanical-charcoal hover:bg-botanical-sand-light'
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Speed Velocity */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-3">
                3. Deployment Timeline:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setTimelineSpeed('standard')}
                  className={`py-3 px-4 rounded-xl text-left border transition-all ${
                    timelineSpeed === 'standard'
                      ? 'bg-botanical-sand text-botanical-charcoal font-bold border-botanical-sand-dark'
                      : 'bg-white border-botanical-sand/60 text-botanical-charcoal'
                  }`}
                >
                  <div className="text-xs font-bold">Standard Sprint Pace</div>
                  <div className="text-[10px] text-botanical-charcoal/70">Thorough organic exploration</div>
                </button>

                <button
                  onClick={() => setTimelineSpeed('accelerated')}
                  className={`py-3 px-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                    timelineSpeed === 'accelerated'
                      ? 'bg-botanical-yellow text-botanical-charcoal font-bold border-botanical-yellow-dark'
                      : 'bg-white border-botanical-sand/60 text-botanical-charcoal'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold flex items-center gap-1">
                      <span>Accelerated Launch</span>
                      <Zap className="w-3 h-3 fill-current" />
                    </div>
                    <div className="text-[10px] text-botanical-charcoal/70">Fast-track dedicated squad</div>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Real-Time Preview Card Column */}
          <div className="lg:col-span-5 flex">
            <div className="w-full p-8 rounded-3xl bg-botanical-charcoal text-white flex flex-col justify-between shadow-premium border border-botanical-teal/30">
              
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/15">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-botanical-yellow">
                    Calculated Blueprint
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-botanical-teal text-white">
                    {scope.weeks}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-white">
                  {scope.title}
                </h3>

                <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-botanical-sand-light">
                  <strong className="text-white block mb-0.5">Assigned Agency Squad:</strong>
                  {scope.squad}
                </div>

                {/* Deliverables */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-botanical-sand block mb-2">
                    Included Architectural Deliverables:
                  </span>
                  {scope.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                      <Check className="w-4 h-4 text-botanical-yellow flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <button
                  onClick={handleApply}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-botanical-yellow hover:bg-botanical-yellow-light text-botanical-charcoal font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
                >
                  <span>{applied ? 'Scope Added to Contact Form!' : 'Lock In & Apply This Scope'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
