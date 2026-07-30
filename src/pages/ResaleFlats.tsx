import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { ShieldCheck, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ResaleFlats: React.FC = () => {
  const meta = SEO_PAGES_META["/resale-flats-kandivali-west"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties-in-kandivali-west" className="hover:text-white transition-colors">Kandivali West</Link>
          <span>/</span>
          <span className="text-gray-200">Resale Flats</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Pre-Owned Property • Clear Title Assurance
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Call NP for Resale Properties</span>
              </a>
              <Link to="/property-valuation-kandivali" className="liquid-glass border border-white/25 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <span>Check Resale Valuation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Why Buy Resale in Kandivali West?
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero GST impact compared to under-construction projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Immediate possession & instant rental income capability</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Established cooperative housing societies with low maintenance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Larger room dimensions & proven building construction quality</li>
            </ul>
          </div>

          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white">Title Clear Legal Due Diligence</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every resale flat listed with Nidhi Properties undergoes comprehensive document auditing: share certificate verification, chain of agreements search, NOC from society, and property tax receipt clearance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
