import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

interface CTASectionProps {
  onOpenContact?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-amber-900/10 to-emerald-900/10 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="liquid-glass rounded-3xl p-10 md:p-20 border border-white/20 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

          <FadeIn className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-300 font-semibold mb-4 inline-block">
              30+ Years Trust • Est. 1995
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6 leading-tight">
              Looking for Your Ideal Property in Kandivali & Mumbai?
            </h2>
            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed mb-10">
              Connect directly with NP (Nidhi Properties) at Mahavir Nagar, Kandivali West for expert advice on buying, selling, or renting properties.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={onOpenContact}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Contact NP Properties</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:022043126"
                className="w-full sm:w-auto liquid-glass border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call NP Office</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
