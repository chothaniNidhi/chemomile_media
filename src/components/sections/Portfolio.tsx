import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/agencyData';
import { ProjectItem } from '../../types';
import { ArrowUpRight, X, ExternalLink, Sparkles, MapPin, Calendar, Award } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Brand Identity', 'Web & 3D', 'Social & Growth', 'Performance'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-botanical-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-botanical-teal" />
              <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
                03 / SELECTED CLIENT ARCHIVE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-botanical-charcoal tracking-tight">
              Crafted for Market Leaders.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-botanical-charcoal text-white shadow-sm'
                    : 'bg-botanical-sand-light/70 text-botanical-charcoal/75 hover:bg-botanical-sand-light hover:text-botanical-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="CASE STUDY"
              className={`group relative rounded-3xl overflow-hidden bg-white border border-botanical-sand/50 shadow-sm hover:shadow-premium-hover transition-all duration-500 cursor-pointer ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Container with Smooth Zoom Reveal */}
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-[360px] sm:h-[480px]' : 'h-[320px] sm:h-[380px]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-botanical-charcoal/80 via-botanical-charcoal/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Floating Tags Top */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-botanical-charcoal shadow-sm">
                    {project.category}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-botanical-charcoal/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-botanical-yellow" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Card */}
                <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-botanical-yellow uppercase tracking-wider mb-1">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white group-hover:text-botanical-sand-light transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mt-1 max-w-xl">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Footer Bar: Metrics & Action */}
              <div className="p-6 bg-white border-t border-botanical-sand/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-base sm:text-lg font-bold text-botanical-teal font-display">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-botanical-charcoal/60 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-botanical-charcoal group-hover:text-botanical-teal transition-colors">
                  <span>View Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-botanical-sand-light group-hover:bg-botanical-teal group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-botanical-charcoal/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-botanical-ivory rounded-3xl shadow-2xl border border-botanical-sand overflow-y-auto max-h-[92vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-botanical-charcoal shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative h-64 sm:h-96 w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-charcoal/90 via-botanical-charcoal/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-botanical-yellow mb-1">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 mt-1 max-w-2xl font-serif italic">
                  "{selectedProject.tagline}"
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Metrics Highlights Row */}
              <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white border border-botanical-sand/50 shadow-xs">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-3xl font-display font-extrabold text-botanical-teal">
                      {m.value}
                    </div>
                    <div className="text-xs text-botanical-charcoal/70 font-medium mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Strategic Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-charcoal/60">
                    The Client Challenge
                  </h4>
                  <p className="text-sm text-botanical-charcoal/85 leading-relaxed bg-botanical-sand-light/40 p-5 rounded-2xl border border-botanical-sand/30">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-teal">
                    The Chamomile Strategic Solution
                  </h4>
                  <p className="text-sm text-botanical-charcoal/85 leading-relaxed bg-white p-5 rounded-2xl border border-botanical-teal/20">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Full Description & Deliverables */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-charcoal/60">
                  Project Narrative
                </h4>
                <p className="text-sm sm:text-base text-botanical-charcoal/80 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-3">
                    Delivered Assets & Architecture:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-botanical-sand-light border border-botanical-sand/60 text-botanical-charcoal"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Call to Action */}
              <div className="pt-6 border-t border-botanical-sand/60 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-botanical-charcoal/70">
                  Looking for results like this for your brand?
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-botanical-teal hover:bg-botanical-teal-dark text-white font-bold text-xs tracking-wider uppercase transition-all shadow-botanical-glow"
                >
                  <span>Discuss Your Project</span>
                  <Sparkles className="w-4 h-4 text-botanical-yellow" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
