import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const seoPagesList = [
    { name: 'Kandivali West Properties', path: '/properties-in-kandivali-west' },
    { name: 'Mahavir Nagar Flats', path: '/flats-for-sale-mahavir-nagar' },
    { name: '1 BHK Starter Flats', path: '/1bhk-flats-kandivali-west' },
    { name: '2 BHK Family Homes', path: '/2bhk-flats-kandivali-west' },
    { name: '3 BHK Luxury Residences', path: '/3bhk-luxury-flats-kandivali' },
    { name: 'Commercial Shops & Office', path: '/commercial-property-kandivali-west' },
    { name: 'Rental Flats & Leases', path: '/rental-flats-kandivali-west' },
    { name: 'Title-Verified Resale', path: '/resale-flats-kandivali-west' },
    { name: 'Borivali West Properties', path: '/properties-in-borivali-west' },
    { name: 'Malad West Properties', path: '/properties-in-malad-west' },
    { name: 'Property Valuation', path: '/property-valuation-kandivali' },
    { name: 'NRI Property Desk', path: '/nri-real-estate-services-mumbai' },
    { name: 'Home Loan Assistance', path: '/home-loans-property-consultant' },
    { name: '100+ Search Keywords Index', path: '/seo-keywords-directory' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-12 lg:px-16 pt-4 transition-all duration-300">
      <nav className={`rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl'
          : 'liquid-glass border border-white/10'
      }`}>
        {/* Left: Logo text "Nidhi Properties" */}
        <Link to="/" className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-2">
          <span className="bg-white text-black px-2.5 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">NP</span>
          <span className="text-lg md:text-xl font-normal text-white">Nidhi Properties</span>
        </Link>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors font-normal text-xs uppercase tracking-wider">
            Home
          </Link>
          <Link to="/properties-in-kandivali-west" className="text-gray-300 hover:text-white transition-colors font-normal text-xs uppercase tracking-wider">
            Kandivali West
          </Link>
          <Link to="/flats-for-sale-mahavir-nagar" className="text-gray-300 hover:text-white transition-colors font-normal text-xs uppercase tracking-wider">
            Mahavir Nagar
          </Link>

          {/* Properties & Services Dropdown */}
          <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="text-gray-300 hover:text-white transition-colors font-normal text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Pages</span>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 liquid-glass bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-3 shadow-2xl space-y-1 animate-fadeIn max-h-96 overflow-y-auto">
                {seoPagesList.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-3.5 py-2 rounded-xl text-xs transition-colors ${
                      location.pathname === p.path ? 'bg-white text-black font-semibold' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/seo-keywords-directory" className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-xs uppercase tracking-wider">
            100 Keywords Index
          </Link>
        </div>

        {/* Right: "Contact NP" button */}
        <div className="flex items-center gap-3">
          <Link
            to="/real-estate-agent-kandivali-west"
            className="bg-white text-black px-5 py-2 rounded-xl text-xs font-medium hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-1 shadow-md"
          >
            <span>Contact NP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg liquid-glass border border-white/15 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 liquid-glass border border-white/20 rounded-2xl p-6 flex flex-col gap-3 animate-fadeIn max-h-[75vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-2 border-b border-white/10">Home</Link>
          <Link to="/seo-keywords-directory" onClick={() => setMobileMenuOpen(false)} className="text-emerald-400 text-sm font-semibold py-2 border-b border-white/10">100 Search Keywords Directory</Link>
          
          <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 pt-2">All SEO Pages:</div>
          {seoPagesList.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 text-xs py-1.5 hover:text-white"
            >
              • {p.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
