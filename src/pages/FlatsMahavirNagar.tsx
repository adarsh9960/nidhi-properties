import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { MapPin, Building2, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FlatsMahavirNagar: React.FC = () => {
  const meta = SEO_PAGES_META["/flats-for-sale-mahavir-nagar"];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties-in-kandivali-west" className="hover:text-white transition-colors">Kandivali West</Link>
          <span>/</span>
          <span className="text-gray-200">Flats in Mahavir Nagar</span>
        </nav>

        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Micro-Market Guide • Mahavir Nagar
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />

            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              Mahavir Nagar is the prized heart of Kandivali West. Renowned for its prime connectivity, Sachin Tendulkar Gymkhana, premier eateries, and modern high-rise housing societies, finding verified flats for sale in Mahavir Nagar requires local agent expertise.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact-np" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Inquire Mahavir Nagar Listings</span>
              </a>
              <Link to="/2bhk-flats-kandivali-west" className="liquid-glass border border-white/25 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <span>View 2 BHK Flats</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={100}>
            <div className="liquid-glass p-8 rounded-2xl border border-white/10 space-y-3">
              <MapPin className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-medium text-white">Prime Landmark</h3>
              <p className="text-sm text-gray-400">Located opposite Sachin Tendulkar Gymkhana & beside Pizza Hut with instant access to Link Road.</p>
            </div>
          </FadeIn>
          <FadeIn delay={250}>
            <div className="liquid-glass p-8 rounded-2xl border border-white/10 space-y-3">
              <Building2 className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-medium text-white">Vibrant Living</h3>
              <p className="text-sm text-gray-400">Home to top banks, organic markets, Jain temples, sports complexes & top schools.</p>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="liquid-glass p-8 rounded-2xl border border-white/10 space-y-3">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-medium text-white">Appreciation ROI</h3>
              <p className="text-sm text-gray-400">High rental yields and consistent year-on-year capital appreciation for homeowners.</p>
            </div>
          </FadeIn>
        </section>

        <section className="liquid-glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-light text-white">Mahavir Nagar Real Estate Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-2">
              <h3 className="text-white font-medium text-base">1 BHK Flats Mahavir Nagar</h3>
              <p className="text-xs text-gray-400">Carpet Area: 420 – 500 sq.ft | Price Range: ₹1.05 Cr – ₹1.35 Cr</p>
              <p className="text-xs text-gray-400">Ideal for young couples, nuclear families, and smart rental investors.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium text-base">2 BHK Flats Mahavir Nagar</h3>
              <p className="text-xs text-gray-400">Carpet Area: 650 – 850 sq.ft | Price Range: ₹1.65 Cr – ₹2.25 Cr</p>
              <p className="text-xs text-gray-400">Spacious family configurations with master bedrooms and dedicated car parking.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium text-base">3 BHK Luxury Flats Mahavir Nagar</h3>
              <p className="text-xs text-gray-400">Carpet Area: 950 – 1400 sq.ft | Price Range: ₹2.50 Cr – ₹3.90 Cr</p>
              <p className="text-xs text-gray-400">Luxury high-rise apartments featuring podium amenities, gyms, and sky lounges.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium text-base">Commercial Shops Mahavir Nagar</h3>
              <p className="text-xs text-gray-400">Carpet Area: 200 – 1200 sq.ft | Price Range: ₹75 Lakh – ₹4.50 Cr</p>
              <p className="text-xs text-gray-400">High-footfall ground floor commercial retail spaces on main Mahavir Nagar road.</p>
            </div>
          </div>
        </section>

        <section id="contact-np" className="liquid-glass p-8 md:p-12 rounded-3xl border border-white/15 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-light text-white">Book a Site Visit in Mahavir Nagar</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Nidhi Properties office is physically located right inside Mahavir Nagar (Nisarg Bldg, Opp Gymkhana). Visit us today or request verified photos & floor plans.
          </p>
          <a href="tel:+919820000000" className="inline-block bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all">
            Call NP Office (+91 98200 00000)
          </a>
        </section>
      </div>
    </div>
  );
};
