import React, { useState, useEffect } from 'react';
import { ChamomileScene3D } from '../3d/ChamomileScene3D';
import { ArrowUpRight, Sparkles, ChevronDown, Award, Globe2, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [nyTime, setNyTime] = useState('');
  const [laTime, setLaTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      // NY Time (America/New_York)
      setNyTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
      // LA Time (America/Los_Angeles)
      setLaTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-botanical-ivory via-botanical-sand-light/30 to-botanical-ivory">
      {/* Subtle Ambient Background Gradients & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-botanical-teal/10 via-botanical-sand/20 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-radial from-botanical-yellow/15 to-transparent blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Agency Typography & Strategic Value */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Label & US Region Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-botanical-sand-light/80 border border-botanical-sand text-[11px] sm:text-xs font-bold tracking-[0.18em] text-botanical-charcoal uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-botanical-teal animate-pulse" />
              <span>CREATIVE DIGITAL AGENCY | UNITED STATES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-botanical-charcoal tracking-tight leading-[1.08]">
              Calming the Chaos of{' '}
              <span className="relative inline-block text-botanical-teal">
                <span className="relative z-10">Branding.</span>
                <span className="absolute left-0 bottom-2 w-full h-3 bg-botanical-yellow/40 -z-0 rounded-sm transform -rotate-1" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-botanical-charcoal/80 max-w-2xl font-normal leading-relaxed">
              We turn ambitious businesses into unforgettable brands through strategy,
              creativity, and digital experiences that drive growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#work"
                data-cursor="PORTFOLIO"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-botanical-teal hover:bg-botanical-teal-dark active:scale-95 transition-all duration-300 shadow-botanical-glow group"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-botanical-yellow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                data-cursor="HELLO"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase text-botanical-charcoal bg-botanical-sand/40 hover:bg-botanical-sand/70 border border-botanical-sand transition-all duration-300 active:scale-95"
              >
                <span>Let's Talk</span>
                <Sparkles className="w-4 h-4 text-botanical-yellow" />
              </a>
            </div>

            {/* Trust Badges & Metrics Row */}
            <div className="pt-6 border-t border-botanical-sand/50 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-botanical-teal/10 text-botanical-teal">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-botanical-charcoal">Awwwards & FWA</div>
                  <div className="text-[11px] text-botanical-charcoal/60">Craft Recognition</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-botanical-yellow/20 text-botanical-yellow-dark">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-botanical-charcoal">Coast to Coast</div>
                  <div className="text-[11px] text-botanical-charcoal/60">NYC • LA • Austin</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <div className="p-2 rounded-xl bg-botanical-sage/20 text-botanical-sage-dark">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm text-botanical-charcoal">98.4% Retention</div>
                  <div className="text-[11px] text-botanical-charcoal/60">Long-term Partners</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Chamomile Flower Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background 3D Card Backdrop with Glassmorphism */}
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none rounded-3xl p-2 bg-gradient-to-br from-white/80 to-botanical-sand-light/40 border border-botanical-sand/50 shadow-premium backdrop-blur-md overflow-hidden">
              
              {/* Corner Watermarks */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-botanical-teal">
                  CHAMOMILE • 3D CANVAS
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none flex items-center gap-1.5 text-[10px] font-semibold text-botanical-charcoal/50">
                <span className="w-1.5 h-1.5 rounded-full bg-botanical-yellow" />
                <span>60 FPS WebGL</span>
              </div>

              {/* The 3D Chamomile Flower Canvas */}
              <div className="w-full h-full min-h-[360px] sm:min-h-[440px] flex items-center justify-center">
                <ChamomileScene3D enableInteraction={true} />
              </div>

              {/* Bottom Subtle Overlay Ribbon */}
              <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-[11px] text-botanical-charcoal/60">
                <span>Natural Aesthetics</span>
                <span>•</span>
                <span>Digital Velocity</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Live US Headquarters Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 z-10">
        <div className="flex flex-wrap items-center justify-between py-3 px-6 rounded-2xl bg-botanical-ivory/80 backdrop-blur-md border border-botanical-sand/40 text-xs text-botanical-charcoal/75 gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-botanical-charcoal">Studio Open:</span>
              <span>New York {nyTime || '09:00 AM EDT'}</span>
            </div>
            <span className="text-botanical-sand-dark hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-2">
              <span>Los Angeles {laTime || '06:00 AM PDT'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-botanical-charcoal/70">
              Accepting new brand partnerships for <strong className="text-botanical-teal">Q2/Q3 2026</strong>
            </span>
            <a
              href="#about"
              className="p-1 rounded-full text-botanical-teal hover:bg-botanical-sand-light transition-colors"
              aria-label="Scroll down to About section"
            >
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
