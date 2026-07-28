import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedHeading } from './AnimatedHeading';
import { MapPin, Sun, Compass, ChevronRight, Clock } from 'lucide-react';

export interface LocationData {
  id: string;
  name: string;
  region: string;
  tagline: string;
  image: string;
  homesCount: number;
  climate: string;
  vibe: string;
  coordinates: string;
  featuredResidence: string;
}

export const locationsData: LocationData[] = [
  {
    id: 'mahavir-nagar',
    name: 'Mahavir Nagar',
    region: 'Kandivali West, Mumbai - 400067',
    tagline: 'Primary hub opp. Sachin Tendulkar Gymkhana & Balaji Party Hall',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=85',
    homesCount: 24,
    climate: 'Open Mon-Sun (10:00 AM - 8:00 PM)',
    vibe: 'Vibrant Residential & Commercial Hub',
    coordinates: '19.21445° N, 72.84123° E',
    featuredResidence: 'Nisarg Building Luxury 3 BHK',
  },
  {
    id: 'kandivali-west',
    name: 'Kandivali West',
    region: 'Western Suburbs, Mumbai',
    tagline: 'Prime residential towers and retail shops beside Link Road',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    homesCount: 18,
    climate: 'Suburban Connectivity & Metro Access',
    vibe: 'Family Neighborhood & Food Streets',
    coordinates: '19.2075° N, 72.8361° E',
    featuredResidence: 'Pawan Dham Tower 2 BHK',
  },
  {
    id: 'borivali-west',
    name: 'Borivali West',
    region: 'Mumbai Suburban District',
    tagline: 'Established residential enclaves near Gorai & Shimpoli',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    homesCount: 15,
    climate: 'Proximity to National Park & Metro',
    vibe: 'Green Suburb & Peaceful Living',
    coordinates: '19.2307° N, 72.8567° E',
    featuredResidence: 'Shimpoli Road Penthouse',
  },
  {
    id: 'malad-west',
    name: 'Malad West',
    region: 'Link Road & Mindspace Hub',
    tagline: 'Modern IT hub, shopping malls, and premium gated societies',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    homesCount: 16,
    climate: 'Commercial & High-Rise Towers',
    vibe: 'IT Hub & Nightlife Malls',
    coordinates: '19.1860° N, 72.8485° E',
    featuredResidence: 'Mindspace Heights 2 BHK',
  },
  {
    id: 'charkop',
    name: 'Charkop Sector 8',
    region: 'Kandivali West, Mumbai',
    tagline: 'Peaceful residential pockets with affordable 1 & 2 BHK options',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
    homesCount: 12,
    climate: 'Coastal Breeze & Green Parks',
    vibe: 'Quiet Residential Sector',
    coordinates: '19.2150° N, 72.8250° E',
    featuredResidence: 'Charkop Garden View Flat',
  },
];

interface LocationsSectionProps {
  onSelectLocation?: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocation }) => {
  const [selectedLoc, setSelectedLoc] = useState<LocationData>(locationsData[0]);

  return (
    <section id="locations" className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with AnimatedHeading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeIn direction="down" distance={15}>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3 block">
                NP Coverage Areas
              </span>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text={"Prime Mumbai Locations\nServed by NP Properties."}
              className="text-3xl md:text-5xl font-light tracking-tight"
              initialDelay={100}
              charDelay={25}
            />
          </div>

          <FadeIn delay={300} direction="up" className="max-w-md text-gray-400 text-sm">
            Headquartered in Mahavir Nagar, NP (Nidhi Properties) offers expert real estate deals across Kandivali West, Borivali, and Malad.
          </FadeIn>
        </div>

        {/* Location Selector Tabs */}
        <FadeIn delay={200} direction="up">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {locationsData.map((loc) => {
              const isActive = selectedLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white text-black border-white shadow-lg scale-105'
                      : 'liquid-glass text-gray-300 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Selected Location Feature Display */}
        <FadeIn key={selectedLoc.id} duration={600} direction="up" distance={30} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Photo Card */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/15 min-h-[400px] lg:min-h-[500px] group shadow-2xl">
            <img
              src={selectedLoc.image}
              alt={selectedLoc.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

            <div className="absolute top-6 left-6 liquid-glass px-4 py-2 rounded-full text-xs font-mono tracking-wider border border-white/15 backdrop-blur-md flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
              <span>{selectedLoc.coordinates}</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold mb-2 block">
                {selectedLoc.region}
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-3">
                {selectedLoc.name}
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xl">
                {selectedLoc.tagline}
              </p>
            </div>
          </div>

          {/* Details Sidebar Card */}
          <div className="lg:col-span-4 liquid-glass rounded-3xl p-8 border border-white/15 flex flex-col justify-between hover:border-white/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Listed Properties</div>
                  <div className="text-3xl font-light text-white">{selectedLoc.homesCount} Listings</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-emerald-400" /> Operating Hours
                  </div>
                  <div className="text-sm font-medium text-white">{selectedLoc.climate}</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider mb-1">
                    <Sun className="w-4 h-4 text-amber-400" /> Neighborhood Vibe
                  </div>
                  <div className="text-sm font-medium text-white">{selectedLoc.vibe}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Signature Property</div>
                  <div className="text-sm font-medium text-white">{selectedLoc.featuredResidence}</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <a
                href="#homes"
                onClick={() => onSelectLocation?.(selectedLoc.id)}
                className="w-full bg-white text-black py-3.5 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <span>Browse {selectedLoc.name} Properties</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
