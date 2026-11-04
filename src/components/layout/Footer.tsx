import React, { useState } from 'react';
import { BrandEmblem } from '../common/BrandEmblem';
import { ArrowUpRight, Heart, Sparkles, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const navLinks = [
    { label: 'About Studio', href: '#about' },
    { label: 'Capabilities & Services', href: '#services' },
    { label: 'Client Archive', href: '#work' },
    { label: 'The Agency Advantage', href: '#why-us' },
    { label: 'Sprint Process', href: '#process' },
    { label: 'Start a Project', href: '#contact' },
  ];

  const servicesList = [
    'Brand Strategy & Identity',
    '3D WebGL Web Design',
    'Social Media Marketing',
    'Content & Art Direction',
    'Performance Paid Media',
    'E-Commerce Scaling'
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/chamomilemedia' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/chamomile-media' },
    { name: 'X / Twitter', href: 'https://twitter.com/chamomilemedia' },
    { name: 'Dribbble', href: 'https://dribbble.com/chamomilemedia' },
    { name: 'Behance', href: 'https://behance.net/chamomilemedia' },
  ];

  return (
    <footer className="relative bg-botanical-charcoal text-white pt-20 pb-12 overflow-hidden border-t border-botanical-teal/20">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-botanical-teal/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 space-y-5">
            <BrandEmblem 
              size={48} 
              textColor="text-white" 
              subtextColor="text-botanical-yellow" 
            />

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Chamomile Media is a premier American creative branding and digital marketing agency. 
              We calm the chaos of modern advertising through bespoke 3D design, strategic clarity, and measurable performance growth.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-botanical-sand-light">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>United States • New York & Los Angeles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-yellow">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-botanical-teal-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-teal-glow">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-botanical-sand">
              The Calm Dispatch
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Bi-weekly essays on US brand culture, 3D web design trends, and consumer psychology.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-botanical-teal/20 border border-botanical-teal/40 text-xs text-botanical-teal-glow flex items-center gap-2">
                <Check className="w-4 h-4 text-botanical-yellow" />
                <span>Welcome to the inner circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 pr-10 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-botanical-teal"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-botanical-yellow text-botanical-charcoal hover:bg-botanical-yellow-light transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-white/40 block">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Social Links Row */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold text-white">Follow Our Work:</span>
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-botanical-yellow transition-colors inline-flex items-center gap-1"
              >
                <span>{soc.name}</span>
                <ArrowUpRight className="w-3 h-3 text-white/40" />
              </a>
            ))}
          </div>

          <div className="text-white/60">
            Direct Inquiries: <a href="mailto:hello@chamomilemedia.com" className="text-botanical-yellow hover:underline">hello@chamomilemedia.com</a>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} Chamomile Media LLC. All rights reserved. Registered Creative Agency in the United States.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Client Portal</a>
            <span className="text-botanical-yellow font-medium">Made with Botanical Calm</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
