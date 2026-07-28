import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedHeading } from './AnimatedHeading';
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  propertyAcquired: string;
  avatar: string;
  category: 'buyer' | 'tenant' | 'investor';
}

export const reviewsData: Review[] = [
  {
    id: 'r1',
    author: 'Ashish',
    role: 'Homeowner & Local Resident',
    location: 'Mahavir Nagar, Kandivali West',
    rating: 5,
    quote: 'Get all solution for properties. NP (Nidhi Properties) managed everything smoothly from title verification to final handover.',
    propertyAcquired: '2 BHK Apartment in Mahavir Nagar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
    category: 'buyer',
  },
  {
    id: 'r2',
    author: 'Vinit Patel',
    role: 'Property Investor',
    location: 'Kandivali West, Mumbai',
    rating: 4,
    quote: 'Good service and reliable guidance for residential properties in Mahavir Nagar. Very knowledgeable team about market rates.',
    propertyAcquired: 'Commercial Retail Unit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
    category: 'investor',
  },
  {
    id: 'r3',
    author: 'Vritti Designs',
    role: 'Commercial Client',
    location: 'Link Road, Malad West',
    rating: 5,
    quote: 'Excellent estate agency in Mahavir Nagar Kandivali West! Helped us locate and finalize our office space quickly.',
    propertyAcquired: 'Commercial Office Space',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
    category: 'buyer',
  },
  {
    id: 'r4',
    author: 'Hetal',
    role: 'Residential Tenant',
    location: 'Borivali West, Mumbai',
    rating: 4,
    quote: 'Prompt service and clear communication. NP has been serving Kandivali for 30+ years with dependable property deals.',
    propertyAcquired: '1 BHK Rental Residence',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
    category: 'tenant',
  },
  {
    id: 'r5',
    author: 'Ankit',
    role: 'First-time Home Buyer',
    location: 'Charkop, Kandivali West',
    rating: 4,
    quote: 'Very helpful team for residential flats. Provided clear pricing and full documentation support.',
    propertyAcquired: '3 BHK Flat in Nisarg Bldg',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=85',
    category: 'buyer',
  },
];

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'buyer' | 'tenant' | 'investor'>('all');

  const filteredReviews = reviewsData.filter(
    (r) => activeTab === 'all' || r.category === activeTab
  );

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const current = filteredReviews[currentIndex] || filteredReviews[0];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with AnimatedHeading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn direction="down" distance={15}>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3 block">
                Justdial Verified Feedback
              </span>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text={"Customer Reviews & Ratings\n(4.0 / 5 Stars)"}
              className="text-3xl md:text-5xl font-light tracking-tight"
              initialDelay={100}
              charDelay={25}
            />
          </div>

          {/* Filter Tabs */}
          <FadeIn delay={200} direction="up" className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Feedback' },
              { id: 'buyer', label: 'Home Buyers' },
              { id: 'tenant', label: 'Tenants' },
              { id: 'investor', label: 'Investors' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-white text-black border-white shadow-md scale-105'
                    : 'liquid-glass text-gray-300 border-white/10 hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </FadeIn>
        </div>

        {/* Featured Testimonial Card Slider */}
        {current && (
          <FadeIn key={current.id} duration={600} direction="up" distance={25} className="relative">
            <div className="liquid-glass rounded-3xl p-8 md:p-14 border border-white/15 relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/25">
              <Quote className="absolute top-6 right-6 md:top-10 md:right-10 w-24 h-24 text-white/5 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Author Info */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-10">
                  <div className="relative mb-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-black" title="Verified Customer">
                      <ShieldCheck className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-1">{current.author}</h3>
                  <p className="text-xs text-gray-400 mb-3">{current.role}</p>
                  <span className="text-xs text-gray-300 liquid-glass px-3 py-1 rounded-full border border-white/10 mb-4">
                    {current.location}
                  </span>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Body */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 block">
                      Deal Assisted: <span className="text-white font-normal">{current.propertyAcquired}</span>
                    </span>
                    <p className="text-lg md:text-2xl font-light text-gray-100 leading-relaxed italic mb-8">
                      "{current.quote}"
                    </p>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-xs text-gray-400">
                      {currentIndex + 1} of {filteredReviews.length} Verified Reviews
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevReview}
                        className="w-10 h-10 rounded-full liquid-glass border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextReview}
                        className="w-10 h-10 rounded-full liquid-glass border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Mini Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {[
            { title: '4.0 / 5.0', subtitle: 'Justdial Customer Rating' },
            { title: 'Est. 1995', subtitle: '30+ Years Trust in Kandivali' },
            { title: '11+ Ratings', subtitle: 'Verified User Feedback' },
            { title: '20+ Photos', subtitle: 'Verified Office Gallery' },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100} direction="up" distance={15}>
              <div className="liquid-glass p-4 rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1">
                <div className="text-xl font-medium text-white mb-1">{item.title}</div>
                <div className="text-[11px] text-gray-400">{item.subtitle}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
