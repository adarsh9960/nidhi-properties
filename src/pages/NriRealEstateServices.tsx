import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { Globe, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NriRealEstateServices: React.FC = () => {
  const meta = SEO_PAGES_META["/nri-real-estate-services-mumbai"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">NRI Services</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Global Indian Advisory • NRI Real Estate Desk
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>NRI WhatsApp Desk (+91 98200 00000)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-400" />
              End-to-End NRI Solutions
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Power of Attorney (POA) drafting & Indian Consulate attestation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Remote property inspection & physical site video tours</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tenant placement & rent collection in NRE / NRO bank accounts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> RBI FEMA compliance & repatriation of sale proceeds assistance</li>
            </ul>
          </div>

          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white">Trusted NRI Representation in Mumbai</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Managing real estate assets in Mumbai while living in the US, UK, UAE, Singapore, or Canada can be stressful. Nidhi Properties acts as your dedicated local fiduciary in Kandivali West, taking care of tenant issues, society meetings, tax filings, and legal transfers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
