import React, { useState, useEffect } from 'react';
import { BrandEmblem } from '../common/BrandEmblem';
import { AudioController } from '../common/AudioController';
import { ArrowUpRight, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'services', 'work', 'why-us', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Our Work', href: '#work', id: 'work' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`transition-all duration-500 rounded-full flex items-center justify-between px-5 py-2.5 ${
              scrolled
                ? 'glass-nav-scrolled'
                : 'bg-botanical-ivory/60 backdrop-blur-md border border-botanical-sand/40'
            }`}
          >
            {/* Brand Logo & Emblem */}
            <a href="#" className="flex items-center gap-2 group">
              <BrandEmblem size={40} />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    data-cursor="GOTO"
                    className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-botanical-teal bg-botanical-teal/10 font-bold'
                        : 'text-botanical-charcoal/75 hover:text-botanical-teal hover:bg-botanical-sand-light/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-botanical-yellow" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Elements: Sound Toggle & "Let's Talk" CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <AudioController />

              <a
                href="#contact"
                data-cursor="TALK"
                className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-botanical-charcoal bg-botanical-yellow hover:bg-botanical-yellow-light active:scale-95 transition-all duration-200 shadow-sm shadow-botanical-yellow/30 group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-botanical-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Hamburger Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <AudioController />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-full text-botanical-charcoal hover:bg-botanical-sand-light transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-botanical-charcoal/60 backdrop-blur-md animate-fadeIn">
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-botanical-ivory shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-botanical-sand/40">
                <BrandEmblem size={36} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-botanical-sand-light text-botanical-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-semibold text-botanical-charcoal hover:bg-botanical-sand-light/60 transition-colors"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-botanical-teal" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom info inside drawer */}
            <div className="pt-6 border-t border-botanical-sand/40 space-y-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-botanical-teal text-white font-bold text-sm tracking-wide shadow-md"
              >
                <span>Let's Talk</span>
                <Sparkles className="w-4 h-4 text-botanical-yellow" />
              </a>

              <div className="text-xs text-botanical-charcoal/70 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-botanical-teal" />
                  <span>New York & Los Angeles, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-botanical-yellow" />
                  <span>Available for Q2/Q3 Brand Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
