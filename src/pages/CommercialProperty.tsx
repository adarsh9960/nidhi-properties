import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { Store, Building, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommercialProperty: React.FC = () => {
  const meta = SEO_PAGES_META["/commercial-property-kandivali-west"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties-in-kandivali-west" className="hover:text-white transition-colors">Kandivali West</Link>
          <span>/</span>
          <span className="text-gray-200">Commercial Property</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Commercial Real Estate • Retail & Office
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919820000000" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Inquire Commercial Spaces</span>
              </a>
              <Link to="/property-valuation-kandivali" className="liquid-glass border border-white/25 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <span>Commercial Valuation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white flex items-center gap-2">
              <Store className="w-5 h-5 text-emerald-400" />
              Ground Floor Retail Shops
            </h2>
            <p className="text-sm text-gray-300">High footfall retail units in Mahavir Nagar, Link Road, and MG Road Kandivali West.</p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ideal for Restaurants, Boutiques, Pharmacies & Doctor Clinics</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Heavy daily pedestrian & vehicle traffic density</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Options for outright purchase or long term corporate lease</li>
            </ul>
          </div>

          <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
            <h2 className="text-xl font-medium text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-400" />
              Boutique & Corporate Offices
            </h2>
            <p className="text-sm text-gray-300">Modern office suites with glass facades, high speed elevators, and 24/7 security.</p>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Perfect for CA Firms, IT Offices, Lawyers & Financial Consultants</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Carpet sizes from 250 sq.ft to 3,500 sq.ft</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High rental yield ROI for commercial property investors</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
