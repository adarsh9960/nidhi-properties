import React from 'react';
import { FadeIn } from './FadeIn';
import { ShieldCheck, Building2, Star, Calendar, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Established In', value: '1995' },
    { label: 'Experience', value: '30+ Years' },
    { label: 'Justdial Rating', value: '4.0 / 5' },
    { label: 'Customer Reviews', value: '11+ Ratings' },
  ];

  const pillars = [
    {
      icon: <Building2 className="w-6 h-6 text-white/90" />,
      title: 'Residential & Commercial',
      description: 'Specialized in 1 BHK, 2 BHK, 3 BHK apartments, luxury penthouses, and commercial retail shops in Kandivali West.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white/90" />,
      title: 'Verified Property Deals',
      description: 'Complete legal transparency, clear title verifications, and verified property documentation.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-white/90" />,
      title: 'Buying, Selling & Renting',
      description: 'End-to-end assistance for home buyers, tenants, corporate leasing, and property resale in Mumbai.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-white/90" />,
      title: 'Prime Location Expertise',
      description: 'Located in Mahavir Nagar, Kandivali West, covering Borivali, Malad, and Western Suburban Mumbai.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-16 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3 inline-block">
            Established 1995 • Kandivali West, Mumbai
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
            About NP (Nidhi Properties)
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            NP (Nidhi Properties) has been one of Kandivali West's most trusted real estate agencies since 1995. 
            Located in Mahavir Nagar opposite Sachin Tendulkar Gymkhana, NP provides comprehensive property solutions for residential and commercial real estate across Mumbai.
          </p>
        </FadeIn>

        {/* Feature Image & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <FadeIn duration={1000} className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="https://content3.jdmagicbox.com/v2/comp/mumbai/26/022pk043126/catalogue/nidhi-properties-mahavir-nagar-kandivali-west-mumbai-estate-agents-3nwuyme.jpg"
                alt="Nidhi Properties Office - Mahavir Nagar Kandivali West"
                className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 liquid-glass p-6 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-medium text-white tracking-wide">4.0 / 5 Rated Real Estate Agency</span>
                </div>
                <p className="text-xs text-gray-300">
                  "Nisarg Building, Opposite Sachin Tendulkar Gymkhana & Balaji Party Hall, Beside Pizza Hut, Mahavir Nagar-Kandivali West, Mumbai - 400067."
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn duration={1000} delay={200} className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-white leading-snug">
              30+ Years of Trusted Property Consulting in Kandivali & Suburban Mumbai
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              At NP (Nidhi Properties), we assist buyers, sellers, landlords, and tenants in securing verified properties across Mahavir Nagar, Kandivali West, Borivali, Malad, and Link Road. Whether you are looking for ready-to-move-in flats, rental apartments, or prime retail spaces, NP delivers personalized guidance.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="liquid-glass p-4 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-normal text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 150} duration={800}>
              <div className="liquid-glass p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">{pillar.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-gray-400 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
