import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RealEstateAgentKandivali: React.FC = () => {
  const meta = SEO_PAGES_META["/real-estate-agent-kandivali-west"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">About Nidhi Properties</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Established 1995 • Justdial Verified Real Estate Agent
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Call NP Office (+91 98200 00000)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-1">
            <div className="text-3xl font-bold text-white">1995</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Year Established</div>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-1">
            <div className="text-3xl font-bold text-emerald-400">1,500+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Flats & Shops Transacted</div>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-1">
            <div className="text-3xl font-bold text-amber-400">4.0 / 5.0</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Justdial Rating (26+ Votes)</div>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-1">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Title Clearance Rate</div>
          </div>
        </section>

        <section className="liquid-glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-4">
          <h2 className="text-2xl font-light text-white">Core Values of Nidhi Properties</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            For three decades, Nidhi Properties (NP) has stood as a beacon of integrity and transparency in the North-West Mumbai real estate market. Operating out of Mahavir Nagar, Kandivali West, our agency simplifies property transactions for buyers, sellers, landlords, and tenants.
          </p>
        </section>
      </div>
    </div>
  );
};
