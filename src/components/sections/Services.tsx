import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/agencyData';
import { ServiceItem } from '../../types';
import { 
  Compass, 
  Share2, 
  Camera, 
  Code2, 
  TrendingUp, 
  ArrowUpRight, 
  Check, 
  X, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-botanical-sand-light/30 overflow-hidden">
      
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-botanical-teal/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-botanical-yellow/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-botanical-teal" />
            <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
              02 / CAPABILITIES & EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-botanical-charcoal tracking-tight">
            Strategic Architecture.{' '}
            <span className="text-botanical-teal">Sensory Digital Execution.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-botanical-charcoal/75 leading-relaxed">
            We operate at the intersection of brand elegance and mathematical growth. 
            Select any capability below to explore deliverables, technical stacks, and expected impact.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                data-cursor="INSPECT"
                className={`group relative rounded-3xl p-8 bg-white/90 border border-botanical-sand/60 hover:border-botanical-teal/50 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isWide ? 'lg:col-span-1.5' : ''
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-botanical-ivory border border-botanical-sand flex items-center justify-center text-botanical-teal group-hover:bg-botanical-teal group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <span className="text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-botanical-sand-light text-botanical-charcoal/80 border border-botanical-sand/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-display font-bold text-botanical-charcoal group-hover:text-botanical-teal transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-botanical-teal mt-1">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-botanical-charcoal/75 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Deliverables Pill List */}
                  <div className="mt-6 space-y-2 border-t border-botanical-sand/40 pt-4">
                    <span className="text-[11px] font-bold text-botanical-charcoal/60 uppercase tracking-wider block mb-1">
                      Featured Scope:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-botanical-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-botanical-yellow flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Metrics & Quick Trigger */}
                <div className="mt-8 pt-4 border-t border-botanical-sand/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-botanical-charcoal/60 uppercase tracking-wider block">
                      Target Impact
                    </span>
                    <span className="text-sm font-bold text-botanical-teal">
                      {service.metrics}
                    </span>
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-botanical-charcoal group-hover:text-botanical-teal transition-colors p-2 rounded-full hover:bg-botanical-sand-light"
                    aria-label={`View details for ${service.title}`}
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Subtle top-right colored accent dot */}
                <div 
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: service.featuredVisual.color }}
                />
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-botanical-charcoal/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-botanical-ivory rounded-3xl p-6 sm:p-10 shadow-2xl border border-botanical-sand overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-botanical-sand-light hover:bg-botanical-sand text-botanical-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-botanical-teal">
                {selectedService.badge}
              </span>
              <span>•</span>
              <span className="text-xs font-semibold text-botanical-yellow-dark">
                {selectedService.metrics}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-botanical-charcoal">
              {selectedService.title}
            </h3>
            <p className="text-sm font-medium text-botanical-teal mt-1">
              {selectedService.subtitle}
            </p>

            <p className="mt-4 text-base text-botanical-charcoal/80 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Complete Deliverables Breakdown */}
            <div className="mt-8 pt-6 border-t border-botanical-sand/60">
              <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-charcoal mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-botanical-yellow" />
                <span>Complete Deliverables & Specifications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-botanical-sand/40 flex items-start gap-2.5 text-xs text-botanical-charcoal font-medium"
                  >
                    <Check className="w-4 h-4 text-botanical-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 pt-6 border-t border-botanical-sand/60 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-botanical-charcoal/70">
                Ready to deploy this capability for your brand?
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-botanical-teal hover:bg-botanical-teal-dark text-white font-bold text-xs tracking-wider uppercase transition-all shadow-botanical-glow"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-4 h-4 text-botanical-yellow" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
