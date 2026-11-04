import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data/agencyData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-24 lg:py-32 bg-botanical-sand-light/25 overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-botanical-teal/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-botanical-teal" />
              <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
                06 / CLIENT VOICES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-botanical-charcoal tracking-tight">
              Calm Collaboration.{' '}
              <span className="text-botanical-teal">Exponential Impact.</span>
            </h2>
          </div>

          {/* Identification Note Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-sand/40 border border-botanical-sand text-[11px] text-botanical-charcoal/70">
            <Info className="w-3.5 h-3.5 text-botanical-teal" />
            <span>Illustrative client case reviews from US portfolio engagements</span>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-14 rounded-3xl bg-white border border-botanical-sand/70 shadow-premium">
            
            <Quote className="absolute top-8 right-8 w-16 h-16 text-botanical-sand/30 pointer-events-none" />

            {/* Stars & Metric Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1 text-botanical-yellow">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-botanical-teal/10 text-botanical-teal border border-botanical-teal/20">
                {current.highlightMetric}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-botanical-charcoal italic leading-relaxed">
              "{current.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="mt-10 pt-6 border-t border-botanical-sand/40 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-botanical-teal/30"
                />
                <div>
                  <div className="font-display font-bold text-base text-botanical-charcoal flex items-center gap-1.5">
                    <span>{current.author}</span>
                    <CheckCircle className="w-4 h-4 text-botanical-teal inline" />
                  </div>
                  <div className="text-xs text-botanical-charcoal/70">
                    {current.role} • <strong className="text-botanical-charcoal font-semibold">{current.company}</strong> ({current.location})
                  </div>
                  <div className="text-[11px] text-botanical-teal font-medium mt-0.5">
                    Engagement: {current.projectType}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-full bg-botanical-sand-light hover:bg-botanical-sand text-botanical-charcoal transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-botanical-charcoal/60 px-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-3 rounded-full bg-botanical-sand-light hover:bg-botanical-sand text-botanical-charcoal transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
