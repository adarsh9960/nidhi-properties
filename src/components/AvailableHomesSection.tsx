import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedHeading } from './AnimatedHeading';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Filter } from 'lucide-react';
import { HomeModal, type HomeProperty } from './HomeModal';

export const availableHomesData: HomeProperty[] = [
  {
    id: 'nisarg-3bhk',
    title: 'Nisarg Building Premium 3 BHK',
    locationId: 'mahavir-nagar',
    locationName: 'Mahavir Nagar, Kandivali West, Mumbai',
    category: 'residential',
    price: '₹ 2.45 Cr',
    beds: 3,
    baths: 3,
    sqft: '1,250',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'Spacious 3 BHK apartment located in Nisarg Building opposite Sachin Tendulkar Gymkhana & Balaji Party Hall, beside Pizza Hut. Features modern interior finish, podium parking, and 24/7 security.',
    features: ['Opp. Sachin Tendulkar Gymkhana', 'Beside Pizza Hut Mahavir Nagar', 'Covered Car Parking', 'Modular Kitchen & Vastu Compliant'],
    architect: 'NP Verified Exclusive',
    yearBuilt: 2022,
  },
  {
    id: 'mahavir-shop',
    title: 'Mahavir Nagar Commercial Retail Shop',
    locationId: 'mahavir-nagar',
    locationName: 'Main Food Street, Mahavir Nagar, Kandivali W',
    category: 'commercial',
    price: '₹ 1.85 Cr',
    beds: 0,
    baths: 1,
    sqft: '450',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'High footfall ground floor commercial shop situated on Mahavir Nagar Main Road. Ideal for retail, café, boutique, or professional office setup.',
    features: ['High Footfall Street', 'Heavy Glass Frontage', '24x7 Power Backup', 'Lease & Outright Options'],
    architect: 'NP Commercial Desk',
    yearBuilt: 2021,
  },
  {
    id: 'pawan-dham-2bhk',
    title: 'Pawan Dham Tower Modern 2 BHK',
    locationId: 'kandivali-west',
    locationName: 'Near Pancholia School, Kandivali West',
    category: 'residential',
    price: '₹ 1.65 Cr',
    beds: 2,
    baths: 2,
    sqft: '850',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'Well-ventilated 2 BHK corner apartment in high-rise gated society with clubhouse, garden, gym, and 2-minute walk to Metro Station.',
    features: ['Near Metro Station', 'High-Rise City View', 'Clubhouse & Gym Access', 'OC Received & Clear Title'],
    architect: 'NP Verified Property',
    yearBuilt: 2023,
  },
  {
    id: 'shimpoli-penthouse',
    title: 'Shimpoli Road Sky Duplex Penthouse',
    locationId: 'borivali-west',
    locationName: 'Shimpoli Road, Borivali West, Mumbai',
    category: 'penthouse',
    price: '₹ 3.90 Cr',
    beds: 4,
    baths: 5,
    sqft: '2,100',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'Luxury 4 BHK penthouse with private terrace garden, marble flooring, personal elevator key, and unobstructed view of Gorai Creek sunset.',
    features: ['Private Terrace Garden', 'Personal Elevator Access', '3 Reserved Parking Slots', 'Suburban Skyline Views'],
    architect: 'NP Luxury Desk',
    yearBuilt: 2024,
  },
  {
    id: 'charkop-1bhk',
    title: 'Charkop Sector 8 Cozy 1 BHK',
    locationId: 'charkop',
    locationName: 'Sector 8, Charkop, Kandivali West',
    category: 'residential',
    price: '₹ 82 Lakhs',
    beds: 1,
    baths: 2,
    sqft: '520',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'Budget-friendly ready-to-move 1 BHK with master bedroom, dual bath, low maintenance society, close to D-Mart and local market.',
    features: ['Low Maintenance Society', 'Close to D-Mart & Market', 'Ready Possession', 'Clear Title & Loan Approved'],
    architect: 'NP Standard Desk',
    yearBuilt: 2020,
  },
  {
    id: 'mindspace-office',
    title: 'Mindspace Link Road Commercial Office',
    locationId: 'malad-west',
    locationName: 'Link Road, Malad West, Mumbai',
    category: 'commercial',
    price: '₹ 2.10 Cr',
    beds: 0,
    baths: 2,
    sqft: '950',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    ],
    description: 'Fully furnished corporate office space with 18 workstations, 2 cabin rooms, conference room, and pantry in prime Malad West commercial tower.',
    features: ['Fully Furnished Office', '18 Workstations & Cabins', 'Metro Station Proximity', 'Ideal for IT & Consultancy'],
    architect: 'NP Commercial Desk',
    yearBuilt: 2023,
  },
];

interface AvailableHomesSectionProps {
  filterLocationId?: string | null;
}

export const AvailableHomesSection: React.FC<AvailableHomesSectionProps> = ({ filterLocationId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedHomeModal, setSelectedHomeModal] = useState<HomeProperty | null>(null);

  const categories = [
    { id: 'all', label: 'All Listings' },
    { id: 'residential', label: 'Residential Apartments' },
    { id: 'commercial', label: 'Commercial & Shops' },
    { id: 'penthouse', label: 'Penthouses & Duplex' },
  ];

  const filteredHomes = availableHomesData.filter((home) => {
    const matchesCategory = selectedCategory === 'all' || home.category === selectedCategory;
    const matchesLocation = !filterLocationId || home.locationId === filterLocationId;
    return matchesCategory && matchesLocation;
  });

  return (
    <section id="homes" className="py-24 px-6 md:px-12 lg:px-16 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Header with AnimatedHeading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <FadeIn direction="down" distance={15}>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3 block">
                NP Verified Properties
              </span>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text={"Available Properties\nby NP Properties."}
              className="text-3xl md:text-5xl font-light text-white tracking-tight"
              initialDelay={100}
              charDelay={25}
            />
          </div>

          <FadeIn delay={300} direction="up">
            <p className="text-gray-400 text-sm max-w-md">
              Browse ready-to-move flats, luxury penthouses, and commercial retail shops across Kandivali West, Mahavir Nagar, and Mumbai.
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={200} direction="up" className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-400" /> Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-300 border ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black border-white shadow-md scale-105'
                    : 'liquid-glass text-gray-300 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-400">
            Showing <span className="text-white font-medium">{filteredHomes.length}</span> of {availableHomesData.length} NP properties
          </div>
        </FadeIn>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHomes.map((home, idx) => (
            <FadeIn key={home.id} delay={idx * 120} duration={800} direction="up" distance={30}>
              <div
                onClick={() => setSelectedHomeModal(home)}
                className="liquid-glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group cursor-pointer flex flex-col h-full shadow-lg hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="liquid-glass px-3 py-1 rounded-full text-[10px] uppercase font-semibold text-white tracking-wider border border-white/20">
                      {home.category}
                    </span>
                    <span className="liquid-glass px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">
                      {home.price}
                    </span>
                  </div>

                  {/* Quick Action Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-xl">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{home.locationName}</span>
                    </div>

                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {home.title}
                    </h3>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-6">
                      {home.description}
                    </p>
                  </div>

                  {/* Specs footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                    {home.beds > 0 && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-gray-400" />
                        <span>{home.beds} BHK</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-gray-400" />
                      <span>{home.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                      <span>{home.sqft} sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <HomeModal
        home={selectedHomeModal}
        onClose={() => setSelectedHomeModal(null)}
      />
    </section>
  );
};
