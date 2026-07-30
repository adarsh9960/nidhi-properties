import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { Calculator, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertyValuation: React.FC = () => {
  const meta = SEO_PAGES_META["/property-valuation-kandivali"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Property Valuation</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Advisory Service • Accurate Market Appraisal
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Request Valuation Report</span>
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              Factors Included in NP Property Valuation
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Micro-market prevailing square-foot carpet rates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Building age, OC status, and society maintenance history</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Floor height, park view, and corner unit premium</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Capital gains tax & stamp duty valuation benchmarks</li>
            </ul>
          </div>

          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white">Why Get an Independent Valuation?</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pricing your property correctly is crucial to avoid leaving money on the table or letting your property sit unsold for months. Nidhi Properties provides empirical real estate appraisal backed by 30+ years of localized market sales data.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
