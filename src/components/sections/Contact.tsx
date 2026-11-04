import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Clock 
} from 'lucide-react';

interface ContactProps {
  initialDetails?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialDetails = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    services: [] as string[],
    budget: '$25k - $50k',
    details: initialDetails,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialDetails) {
      setFormData((prev) => ({
        ...prev,
        details: initialDetails
      }));
    }
  }, [initialDetails]);

  const serviceOptions = [
    'Brand Strategy & Identity',
    '3D WebGL Web Experience',
    'Social Media Marketing',
    'Content & Art Direction',
    'Performance Marketing',
    'Full Brand Transformation'
  ];

  const budgetOptions = [
    'Under $15k',
    '$15k - $30k',
    '$30k - $60k',
    '$60k - $120k+',
  ];

  const toggleService = (s: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(s);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== s)
          : [...prev.services, s]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger botanical celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#398DA5', '#F7B638', '#E6D2B3', '#A9BBA5']
      });
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-botanical-ivory overflow-hidden">
      
      {/* Background organic glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-botanical-teal/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-botanical-sand/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-botanical-teal" />
            <span className="text-xs font-bold tracking-[0.2em] text-botanical-teal uppercase">
              07 / INITIATE PARTNERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-botanical-charcoal tracking-tight">
            Let's Build Something <span className="text-botanical-teal">Meaningful.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-botanical-charcoal/80 leading-relaxed">
            Have a vision? Let's turn it into a brand people remember. 
            Fill out the discovery brief below, or book a direct senior consultation.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-botanical-sand/70 shadow-premium">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-botanical-teal/10 text-botanical-teal flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-botanical-charcoal">
                  Message Received.
                </h3>
                <p className="text-sm sm:text-base text-botanical-charcoal/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Chamomile Media. Our creative directors in New York & Los Angeles will review your vision and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-botanical-teal bg-botanical-sand-light hover:bg-botanical-sand transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name & Business Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-botanical-ivory border border-botanical-sand/70 focus:border-botanical-teal focus:outline-none text-sm text-botanical-charcoal"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-botanical-ivory border border-botanical-sand/70 focus:border-botanical-teal focus:outline-none text-sm text-botanical-charcoal"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solstice Botanicals"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-botanical-ivory border border-botanical-sand/70 focus:border-botanical-teal focus:outline-none text-sm text-botanical-charcoal"
                  />
                </div>

                {/* Service Required Multi-Select Pills */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-2">
                    Services Required (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-botanical-teal text-white border-botanical-teal shadow-xs'
                              : 'bg-botanical-sand-light/60 border-botanical-sand/60 text-botanical-charcoal/80 hover:bg-botanical-sand-light'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-2">
                    Target Budget Range (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-3 rounded-xl text-center text-xs font-semibold border transition-all ${
                          formData.budget === b
                            ? 'bg-botanical-charcoal text-white border-botanical-charcoal'
                            : 'bg-botanical-ivory border-botanical-sand/60 text-botanical-charcoal/80 hover:bg-botanical-sand-light'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal block mb-1.5">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand vision, key challenges, target launch timeframe..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-botanical-ivory border border-botanical-sand/70 focus:border-botanical-teal focus:outline-none text-sm text-botanical-charcoal resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-botanical-teal hover:bg-botanical-teal-dark active:scale-98 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-botanical-glow disabled:opacity-70 group"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Start a Conversation'}</span>
                  <Send className="w-4 h-4 text-botanical-yellow group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center text-[11px] text-botanical-charcoal/60">
                  Protected by NDA standards. We respect your confidentiality.
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Cards, US Offices & Fast Booking */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Consultation Card */}
            <div className="p-8 rounded-3xl bg-botanical-sand-light/50 border border-botanical-sand/70">
              <span className="text-[10px] font-bold uppercase tracking-widest text-botanical-teal block mb-1">
                FAST TRACK
              </span>
              <h3 className="text-xl font-display font-bold text-botanical-charcoal">
                Direct Discovery Call
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-botanical-charcoal/70 leading-relaxed">
                Prefer an immediate conversation? Schedule a 20-minute introductory discovery session directly with our Managing Partner.
              </p>

              <div className="mt-4 pt-4 border-t border-botanical-sand/50 space-y-3">
                <div className="flex items-center gap-3 text-xs text-botanical-charcoal">
                  <Clock className="w-4 h-4 text-botanical-teal" />
                  <span>20 Minutes • Strategic Assessment</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-botanical-charcoal">
                  <Calendar className="w-4 h-4 text-botanical-teal" />
                  <span>Next slots available: This Thursday & Friday</span>
                </div>
              </div>

              <a
                href="mailto:partnerships@chamomilemedia.com?subject=Strategic%20Discovery%20Call%20Request"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-botanical-charcoal hover:bg-botanical-charcoal-light text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Book Discovery Slot</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-botanical-yellow" />
              </a>
            </div>

            {/* US Headquarters Locations */}
            <div className="p-8 rounded-3xl bg-white border border-botanical-sand/70 space-y-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-botanical-charcoal/70">
                United States Studios:
              </h4>

              {/* NYC Office */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-botanical-charcoal">
                  <MapPin className="w-4 h-4 text-botanical-teal" />
                  <span>New York Studio (HQ)</span>
                </div>
                <div className="text-xs text-botanical-charcoal/70 pl-6">
                  485 Fifth Avenue, 14th Floor<br />
                  New York, NY 10017
                </div>
              </div>

              {/* LA Office */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-botanical-charcoal">
                  <MapPin className="w-4 h-4 text-botanical-yellow-dark" />
                  <span>Los Angeles Studio</span>
                </div>
                <div className="text-xs text-botanical-charcoal/70 pl-6">
                  1335 Abbot Kinney Blvd<br />
                  Venice, CA 90291
                </div>
              </div>

              {/* Direct Inquiries */}
              <div className="pt-4 border-t border-botanical-sand/40 space-y-2">
                <div className="flex items-center gap-3 text-xs text-botanical-charcoal">
                  <Mail className="w-4 h-4 text-botanical-teal" />
                  <a href="mailto:hello@chamomilemedia.com" className="hover:text-botanical-teal transition-colors font-medium">
                    hello@chamomilemedia.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-botanical-charcoal">
                  <Phone className="w-4 h-4 text-botanical-teal" />
                  <span>+1 (212) 847-3920</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
