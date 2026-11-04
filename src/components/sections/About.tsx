import React, { useState } from 'react';
import { AGENCY_STATS } from '../../data/agencyData';
import { FloatingShapesCanvas } from '../3d/FloatingShapesCanvas';
import { CheckCircle2, XCircle, Sparkles, ArrowRight, Compass, HeartHandshake, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calm' | 'noise'>('calm');

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-botanical-ivory overflow-hidden">
      {/* Ambient 3D floating background canvas */}
      <FloatingShapesCanvas theme="light" shapeCount={12} className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-botanical-teal" />
          <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
            01 / WHO WE ARE
          </span>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Headline & Narrative Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-botanical-charcoal tracking-tight leading-[1.12]">
              Good Brands Don't Happen by Accident.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-botanical-charcoal/80 font-normal leading-relaxed">
              <p>
                In an era drowned in algorithmic noise and hollow templates, true brand authority is rare. 
                <strong className="text-botanical-charcoal font-semibold"> Chamomile Media</strong> is a modern US creative digital marketing and brand strategy agency built on a single conviction:
              </p>
              <p className="p-5 rounded-2xl bg-botanical-sand-light/50 border-l-4 border-botanical-teal italic text-botanical-charcoal/90 font-serif text-lg">
                “When you strip away chaotic marketing theater, what remains is authentic emotional connection, intentional design, and relentless commercial velocity.”
              </p>
              <p>
                We partner with ambitious founders, emerging category creators, and modern enterprise leaders to establish meaningful identities, build immersive 3D digital flagship experiences, and engineer full-funnel growth engines that scale sustainably.
              </p>
            </div>

            {/* Strategic Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/70 border border-botanical-sand/40 shadow-xs">
                <Compass className="w-5 h-5 text-botanical-teal mb-2" />
                <h4 className="font-bold text-sm text-botanical-charcoal">Intentional Strategy</h4>
                <p className="text-xs text-botanical-charcoal/70 mt-1">Grounded in competitive psychology and US consumer culture.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-botanical-sand/40 shadow-xs">
                <Zap className="w-5 h-5 text-botanical-yellow-dark mb-2" />
                <h4 className="font-bold text-sm text-botanical-charcoal">Digital Velocity</h4>
                <p className="text-xs text-botanical-charcoal/70 mt-1">High-speed 3D WebGL experiences built to convert.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 border border-botanical-sand/40 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-botanical-sage-dark mb-2" />
                <h4 className="font-bold text-sm text-botanical-charcoal">Partnership First</h4>
                <p className="text-xs text-botanical-charcoal/70 mt-1">Direct access to executive directors, not junior hand-offs.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive "The Calm vs The Noise" Comparison Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-botanical-sand/60 shadow-premium backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-botanical-teal">
                    OUR PHILOSOPHY
                  </span>
                  <h3 className="text-xl font-display font-bold text-botanical-charcoal mt-0.5">
                    The Difference
                  </h3>
                </div>

                {/* Switcher Pills */}
                <div className="flex items-center p-1 rounded-full bg-botanical-sand-light border border-botanical-sand text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('calm')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'calm'
                        ? 'bg-botanical-teal text-white shadow-xs'
                        : 'text-botanical-charcoal/70 hover:text-botanical-charcoal'
                    }`}
                  >
                    Chamomile
                  </button>
                  <button
                    onClick={() => setActiveTab('noise')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeTab === 'noise'
                        ? 'bg-botanical-charcoal text-white shadow-xs'
                        : 'text-botanical-charcoal/70 hover:text-botanical-charcoal'
                    }`}
                  >
                    Market Noise
                  </button>
                </div>
              </div>

              {/* Dynamic Tab Content */}
              {activeTab === 'calm' ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-botanical-teal/10 border border-botanical-teal/20 text-xs font-semibold text-botanical-teal flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-botanical-yellow" />
                    <span>The Chamomile Calm Approach</span>
                  </div>

                  <ul className="space-y-3 text-sm text-botanical-charcoal">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-botanical-teal flex-shrink-0 mt-0.5" />
                      <span><strong>Bespoke 3D & Digital Craft:</strong> Hand-tailored experiences with organic botanical harmony that won’t fade next quarter.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-botanical-teal flex-shrink-0 mt-0.5" />
                      <span><strong>Measurable Commercial Return:</strong> Clear attribution, CAC optimization, and scalable LTV growth.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-botanical-teal flex-shrink-0 mt-0.5" />
                      <span><strong>Unified Brand Ecosystem:</strong> Identity, social, web, and paid ads all sing the identical harmonious tune.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-botanical-teal flex-shrink-0 mt-0.5" />
                      <span><strong>Direct Senior Partnership:</strong> Work directly with our principals with zero agency bureaucracy.</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    <span>The Conventional Agency Pitfall</span>
                  </div>

                  <ul className="space-y-3 text-sm text-botanical-charcoal/80">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Generic templates and repurposed WordPress themes that look like every other competitor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Vanity metrics (impressions, clicks) with zero accountability to actual revenue impact.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Siloed freelancers leading to disjointed messaging between social media, website, and ads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Pitched by seasoned executives, then immediately handed off to inexperienced juniors.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Bottom Quick Link */}
              <div className="pt-6 mt-6 border-t border-botanical-sand/40 flex items-center justify-between">
                <span className="text-xs text-botanical-charcoal/60">Ready for clear brand direction?</span>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-botanical-teal hover:text-botanical-teal-dark transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Statistics Grid */}
        <div className="mt-20 pt-12 border-t border-botanical-sand/60 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/80 border border-botanical-sand/40 hover:border-botanical-teal/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-botanical-charcoal group-hover:text-botanical-teal transition-colors">
                {stat.value}
              </div>
              <div className="font-bold text-sm text-botanical-charcoal mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-botanical-charcoal/60 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
