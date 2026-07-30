import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META, TOP_100_KEYWORDS } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { Tag, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SeoKeywordsDirectory: React.FC = () => {
  const meta = SEO_PAGES_META["/seo-keywords-directory"];

  // Quick navigation mapping for pages
  const seoLinks = [
    { title: "Properties in Kandivali West", path: "/properties-in-kandivali-west", count: "Spotlight" },
    { title: "Flats for Sale in Mahavir Nagar", path: "/flats-for-sale-mahavir-nagar", count: "Mahavir Nagar" },
    { title: "1 BHK Starter Flats", path: "/1bhk-flats-kandivali-west", count: "1 BHK" },
    { title: "2 BHK Family Homes", path: "/2bhk-flats-kandivali-west", count: "2 BHK" },
    { title: "3 BHK Luxury Penthouses", path: "/3bhk-luxury-flats-kandivali", count: "3 BHK" },
    { title: "Commercial Shop & Office", path: "/commercial-property-kandivali-west", count: "Commercial" },
    { title: "Rental Apartments", path: "/rental-flats-kandivali-west", count: "Rentals" },
    { title: "Title-Verified Resale", path: "/resale-flats-kandivali-west", count: "Resale" },
    { title: "Borivali West Real Estate", path: "/properties-in-borivali-west", count: "Borivali" },
    { title: "Malad West Real Estate", path: "/properties-in-malad-west", count: "Malad" },
    { title: "Nidhi Properties Profile", path: "/real-estate-agent-kandivali-west", count: "About NP" },
    { title: "Property Valuation", path: "/property-valuation-kandivali", count: "Valuation" },
    { title: "NRI Real Estate Services", path: "/nri-real-estate-services-mumbai", count: "NRI Desk" },
    { title: "Home Loan Assistance", path: "/home-loans-property-consultant", count: "Home Loan" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Real Estate Index Directory</span>
        </nav>

        {/* Hero Banner */}
        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                100+ High-Intent Keywords • Complete Search Hub
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">{meta.subheading}</p>
          </div>
        </section>

        {/* Quick Links Matrix */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-light text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            Dedicated SEO Landing Pages Matrix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {seoLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="liquid-glass p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-2 hover:border-white/30 hover:scale-[1.02] transition-all"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">{link.count}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-white">{link.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* 100 Keywords Grouped by Intent */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-light text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-400" />
              Categorized 100+ High-Volume Real Estate Keywords
            </h2>
            <p className="text-xs text-gray-400">Search phrases indexed across Kandivali West, Mahavir Nagar, Borivali & Malad West real estate markets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TOP_100_KEYWORDS.map((group, groupIdx) => (
              <FadeIn key={groupIdx} delay={groupIdx * 100}>
                <div className="liquid-glass p-8 rounded-3xl border border-white/10 space-y-4">
                  <h3 className="text-lg font-medium text-white pb-2 border-b border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {group.category} ({group.keywords.length} Keywords)
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.keywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="text-xs px-3 py-1.5 rounded-xl liquid-glass border border-white/15 text-gray-200 hover:border-white/40 transition-colors"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
