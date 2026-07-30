import React, { useState } from 'react';
import { ArrowUp, Mail, CheckCircle2, Shield, MapPin, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Newsletter & Alert Box */}
        <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-2 block">
              NP Property Alerts & Listings
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
              Subscribe to New Property Launches in Kandivali W
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              Get notified immediately when new 1/2/3 BHK flats or commercial shops become available in Mahavir Nagar & Borivali.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="liquid-glass p-4 rounded-2xl border border-emerald-500/30 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">Subscribed to NP Property Alerts</div>
                  <div className="text-xs text-gray-400">You will receive verified listings in your inbox.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-black/60 border border-white/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white inline-flex items-center gap-2">
              <span className="bg-white text-black px-3 py-1 rounded-xl text-2xl font-black">NP</span>
              <span className="text-lg font-light text-gray-200">Nidhi Properties</span>
            </Link>
            <p className="text-xs md:text-sm text-gray-400 max-w-sm leading-relaxed">
              NP (Nidhi Properties) is a premier real estate agency in Mahavir Nagar, Kandivali West, Mumbai. Established in 1995, NP provides transparent buying, selling, and rental property services.
            </p>
            <div className="text-xs text-gray-300 space-y-1 pt-2">
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Nisarg Bldg, Opp. Sachin Tendulkar Gymkhana, Beside Pizza Hut, Mahavir Nagar-Kandivali West, Mumbai 400067</p>
              <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" /> Monday – Sunday: 10:00 AM – 08:00 PM</p>
            </div>
          </div>

          {/* Column 1: Locations & Micro-markets */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-300 font-semibold mb-4">Location Guides</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/properties-in-kandivali-west" className="hover:text-white transition-colors">Properties Kandivali West</Link></li>
              <li><Link to="/flats-for-sale-mahavir-nagar" className="hover:text-white transition-colors">Flats in Mahavir Nagar</Link></li>
              <li><Link to="/properties-in-borivali-west" className="hover:text-white transition-colors">Borivali West Real Estate</Link></li>
              <li><Link to="/properties-in-malad-west" className="hover:text-white transition-colors">Malad West Real Estate</Link></li>
              <li><Link to="/real-estate-agent-kandivali-west" className="hover:text-white transition-colors">About Nidhi Properties</Link></li>
            </ul>
          </div>

          {/* Column 2: Property Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-300 font-semibold mb-4">Property Categories</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/1bhk-flats-kandivali-west" className="hover:text-white transition-colors">1 BHK Starter Apartments</Link></li>
              <li><Link to="/2bhk-flats-kandivali-west" className="hover:text-white transition-colors">2 BHK Family Homes</Link></li>
              <li><Link to="/3bhk-luxury-flats-kandivali" className="hover:text-white transition-colors">3 BHK Luxury Penthouses</Link></li>
              <li><Link to="/commercial-property-kandivali-west" className="hover:text-white transition-colors">Commercial Shop & Office</Link></li>
              <li><Link to="/rental-flats-kandivali-west" className="hover:text-white transition-colors">Rental Flats & Agreements</Link></li>
              <li><Link to="/resale-flats-kandivali-west" className="hover:text-white transition-colors">Title Verified Resale Flats</Link></li>
            </ul>
          </div>

          {/* Column 3: Advisory & Keyword Directory */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gray-300 font-semibold mb-4">Advisory & Search Index</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/property-valuation-kandivali" className="hover:text-white transition-colors">Property Valuation Service</Link></li>
              <li><Link to="/nri-real-estate-services-mumbai" className="hover:text-white transition-colors">NRI Property Management</Link></li>
              <li><Link to="/home-loans-property-consultant" className="hover:text-white transition-colors">Home Loan Assistance</Link></li>
              <li>
                <Link to="/seo-keywords-directory" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> 100 Search Keywords Index
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} NP (Nidhi Properties). Listed on Justdial • Mahavir Nagar-Kandivali West, Mumbai.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Justdial Agent</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
