import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { MapPin, PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertiesBorivaliWest: React.FC = () => {
  const meta = SEO_PAGES_META["/properties-in-borivali-west"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Properties in Borivali West</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Neighboring Hub • Borivali West Real Estate
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Contact NP Borivali Desk</span>
              </a>
              <Link to="/properties-in-kandivali-west" className="liquid-glass border border-white/25 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <span>Explore Kandivali West</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              IC Colony & Mount Poinsur
            </h3>
            <p className="text-xs text-gray-400">Green, peaceful residential enclave with premium apartments and heritage charm.</p>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Shimpoli & Chandavarkar Road
            </h3>
            <p className="text-xs text-gray-400">High-demand family hub adjacent to Metro station and SV Road shopping market.</p>
          </div>
          <div className="liquid-glass p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Gorai & LT Road Corridor
            </h3>
            <p className="text-xs text-gray-400">Vibrant commercial & residential hub connecting Borivali Station to Gorai Creek.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
