import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SEO_PAGES_META } from '../data/seoData';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { MapPin, Building2, ShieldCheck, PhoneCall, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertiesKandivaliWest: React.FC = () => {
  const meta = SEO_PAGES_META["/properties-in-kandivali-west"];

  const highlights = [
    { title: "Mahavir Nagar Hub", desc: "Premier residential & culinary boulevard with ultra-modern high-rise towers.", icon: Sparkles },
    { title: "Metro & Station Access", desc: "Minutes away from Kandivali Railway Station & Dahanukar Wadi Metro Station.", icon: Building2 },
    { title: "30+ Years Trust", desc: "Nidhi Properties has delivered 1,500+ verified homes in Kandivali West since 1995.", icon: ShieldCheck }
  ];

  const featuredLocalities = [
    { name: "Mahavir Nagar", type: "Premium Residential & Commercial", price: "₹24,000 - ₹32,000 / sq.ft", link: "/flats-for-sale-mahavir-nagar" },
    { name: "Panchsheel Garden", type: "Gated Family Complexes", price: "₹22,000 - ₹28,000 / sq.ft", link: "/2bhk-flats-kandivali-west" },
    { name: "Dahanukar Wadi", type: "Metro-Connected Residences", price: "₹21,000 - ₹26,000 / sq.ft", link: "/1bhk-flats-kandivali-west" },
    { name: "Charkop Sector 8 & 9", type: "Peaceful Residential Pocket", price: "₹18,000 - ₹23,000 / sq.ft", link: "/resale-flats-kandivali-west" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-16 px-4 md:px-12 lg:px-16 selection:bg-white selection:text-black">
      <SEOHead meta={meta} />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-200">Properties in Kandivali West</span>
        </nav>

        {/* Hero Section */}
        <section className="relative liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Location Spotlight • Kandivali West
              </span>
            </div>

            <AnimatedHeading text={meta.h1Heading} className="text-3xl md:text-5xl font-light tracking-tight text-white" />

            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
              {meta.subheading}. Kandivali West is one of Western Mumbai's most sought-after residential and commercial destinations. From verified 1 BHK starter flats to expansive 3 BHK luxury penthouses and prime high-footfall commercial shops, Nidhi Properties brings you complete local real estate expertise.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact-np" className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Contact NP Property Advisor</span>
              </a>
              <Link to="/seo-keywords-directory" className="liquid-glass border border-white/25 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2">
                <span>View Real Estate Index</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Highlight Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="liquid-glass p-8 rounded-2xl border border-white/10 space-y-3 hover:border-white/30 transition-all">
                <h.icon className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-medium text-white">{h.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
              </div>
            </FadeIn>
          ))}
        </section>

        {/* Localities Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-white">Top Localities in Kandivali West</h2>
            <p className="text-sm text-gray-400">Current average price trends and key residential hubs in Kandivali West Mumbai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredLocalities.map((loc, idx) => (
              <div key={idx} className="liquid-glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/30 transition-all">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      {loc.name}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-emerald-300 font-medium">{loc.price}</span>
                  </div>
                  <p className="text-xs text-gray-400">{loc.type}</p>
                </div>
                <Link to={loc.link} className="text-xs text-emerald-400 font-medium hover:underline flex items-center gap-1">
                  <span>Explore {loc.name} Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SEO Content Section with High-Density Target Keywords */}
        <section className="liquid-glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-light text-white">Why Invest in Real Estate in Kandivali West?</h2>
          <p className="text-sm text-gray-300">
            Kandivali West has undergone a remarkable transformation into a high-grade urban township with world-class infrastructure. Excellent connectivity via the Western Express Highway, Link Road, Kandivali Railway Station, and Metro Line 2A ensures rapid travel to BKC, Andheri, Airport, and South Mumbai.
          </p>
          <p className="text-sm text-gray-300">
            Micro-markets like <strong>Mahavir Nagar</strong>, <strong>Panchsheel Garden</strong>, <strong>Dahanukar Wadi</strong>, and <strong>Charkop</strong> offer diverse choices ranging from ready-to-move 1 BHK & 2 BHK resale flats to 3 BHK luxury penthouses and high-footfall commercial retail spaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-gray-300">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Top Educational Institutes: Kapol Vidyanidhi, Oxford Public School</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Healthcare Facilities: Shatabdi Hospital, DNA Multispeciality</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sports & Leisure: Sachin Tendulkar Gymkhana, Poisar Gymkhana</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Shopping & Food: Mahavir Nagar Khau Galli, Inorbit Mall, Infinity Mall</div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact-np" className="liquid-glass p-8 md:p-12 rounded-3xl border border-white/15 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-light text-white">Schedule a Property Inspection with NP</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Looking to buy, sell, or lease property in Kandivali West? Talk directly with our senior property consultant established since 1995.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+919820000000" className="bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-all">
              Call NP Office (+91 98200 00000)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
