import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle, Calendar, Shield, ArrowRight } from 'lucide-react';

export interface HomeProperty {
  id: string;
  title: string;
  locationId: string;
  locationName: string;
  category: 'residential' | 'commercial' | 'penthouse' | 'architectural' | 'waterfront' | 'mountain';
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  architect: string;
  yearBuilt: number;
}

interface HomeModalProps {
  home: HomeProperty | null;
  onClose: () => void;
  onBookViewing?: (home: HomeProperty) => void;
}

export const HomeModal: React.FC<HomeModalProps> = ({ home, onClose, onBookViewing }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBooked, setIsBooked] = useState(false);

  if (!home) return null;

  const images = home.gallery && home.gallery.length > 0 ? home.gallery : [home.image];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    if (onBookViewing && home) {
      onBookViewing(home);
    }
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Gallery Column */}
          <div className="lg:col-span-7 bg-black flex flex-col">
            <div className="relative h-[320px] md:h-[420px] overflow-hidden">
              <img
                src={images[activeImageIndex]}
                alt={home.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 liquid-glass px-3 py-1.5 rounded-full text-xs text-white border border-white/20">
                {home.locationName}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="p-4 flex gap-3 overflow-x-auto bg-neutral-950 border-t border-white/10">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all ${
                      activeImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Specifications Strip */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-neutral-900 border-t border-white/10 text-center">
              <div className="liquid-glass p-3 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-1">
                  <Bed className="w-4 h-4 text-white" /> Bedrooms
                </div>
                <div className="text-lg font-medium text-white">{home.beds} Beds</div>
              </div>
              <div className="liquid-glass p-3 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-1">
                  <Bath className="w-4 h-4 text-white" /> Bathrooms
                </div>
                <div className="text-lg font-medium text-white">{home.baths} Baths</div>
              </div>
              <div className="liquid-glass p-3 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-1">
                  <Maximize2 className="w-4 h-4 text-white" /> Living Area
                </div>
                <div className="text-lg font-medium text-white">{home.sqft} sq ft</div>
              </div>
            </div>
          </div>

          {/* Details & Booking Column */}
          <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-neutral-900">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Available Residence</span>
                <span className="text-xs text-gray-400">Architect: {home.architect}</span>
              </div>

              <h3 className="text-2xl font-light text-white mb-2">{home.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{home.locationName}</span>
              </div>

              <div className="text-3xl font-normal text-white mb-6 tracking-tight">
                {home.price}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {home.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Residence Highlights</h4>
                <div className="grid grid-cols-1 gap-2">
                  {home.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Viewing Request Form */}
            <div className="pt-6 border-t border-white/10">
              {isBooked ? (
                <div className="liquid-glass p-4 rounded-2xl border border-emerald-500/30 text-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-white">Private Viewing Requested</h4>
                  <p className="text-xs text-gray-300 mt-1">Our advisory team will contact you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-white" /> Request Private Concierge Viewing
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-black/50 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span>Confirm Viewing Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-gray-500">
                    <Shield className="w-3 h-3" /> Confidentiality guaranteed & NDA standard
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
