import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnimatedHeading } from './components/AnimatedHeading';
import { FadeIn } from './components/FadeIn';
import { AboutSection } from './components/AboutSection';
import { LocationsSection } from './components/LocationsSection';
import { AvailableHomesSection } from './components/AvailableHomesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { SEO_PAGES_META } from './data/seoData';

// Import SEO Pages
import { PropertiesKandivaliWest } from './pages/PropertiesKandivaliWest';
import { FlatsMahavirNagar } from './pages/FlatsMahavirNagar';
import { OneBhkKandivali } from './pages/OneBhkKandivali';
import { TwoBhkKandivali } from './pages/TwoBhkKandivali';
import { ThreeBhkLuxury } from './pages/ThreeBhkLuxury';
import { CommercialProperty } from './pages/CommercialProperty';
import { RentalFlats } from './pages/RentalFlats';
import { ResaleFlats } from './pages/ResaleFlats';
import { PropertiesBorivaliWest } from './pages/PropertiesBorivaliWest';
import { PropertiesMaladWest } from './pages/PropertiesMaladWest';
import { RealEstateAgentKandivali } from './pages/RealEstateAgentKandivali';
import { PropertyValuation } from './pages/PropertyValuation';
import { NriRealEstateServices } from './pages/NriRealEstateServices';
import { HomeLoansConsultant } from './pages/HomeLoansConsultant';
import { SeoKeywordsDirectory } from './pages/SeoKeywordsDirectory';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const homeMeta = SEO_PAGES_META["/"];

  const handleSelectLocation = (locId: string) => {
    setSelectedLocationId(locId);
    const homesElement = document.getElementById('homes');
    if (homesElement) {
      homesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead meta={homeMeta} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background video playing raw */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:items-end">
          {/* Left Column - Main content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">
                Established 1995 • Mahavir Nagar, Kandivali W
              </span>
            </div>

            <AnimatedHeading
              text={"NP (Nidhi Properties)\nYour Trusted Real Estate Partner."}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-6 text-white"
              initialDelay={200}
              charDelay={30}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed">
                30+ years of excellence in buying, selling, and renting residential & commercial properties in Kandivali West and Mumbai.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-white text-black px-8 py-3.5 rounded-xl font-medium cursor-pointer hover:bg-gray-100 transition-all duration-300 shadow-xl text-sm"
                >
                  Contact NP Office
                </a>
                <a
                  href="#homes"
                  className="liquid-glass border border-white/30 text-white px-8 py-3.5 rounded-xl font-medium cursor-pointer hover:bg-white hover:text-black transition-all duration-300 text-sm"
                >
                  Browse NP Listings
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Tag */}
          <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <div className="liquid-glass border border-white/20 px-6 py-4 rounded-2xl backdrop-blur-md text-left lg:text-right">
              <div className="text-sm font-semibold text-white tracking-wide mb-1">NP (Nidhi Properties)</div>
              <span className="text-xs text-gray-300">
                Opp. Sachin Tendulkar Gymkhana, Kandivali West
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="relative z-10 bg-black">
        <AboutSection />
        <LocationsSection onSelectLocation={handleSelectLocation} />
        <AvailableHomesSection filterLocationId={selectedLocationId} />
        <ReviewsSection />
        <CTASection />
        <ContactSection />
      </main>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
        {/* Sticky/Fixed Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties-in-kandivali-west" element={<PropertiesKandivaliWest />} />
            <Route path="/flats-for-sale-mahavir-nagar" element={<FlatsMahavirNagar />} />
            <Route path="/1bhk-flats-kandivali-west" element={<OneBhkKandivali />} />
            <Route path="/2bhk-flats-kandivali-west" element={<TwoBhkKandivali />} />
            <Route path="/3bhk-luxury-flats-kandivali" element={<ThreeBhkLuxury />} />
            <Route path="/commercial-property-kandivali-west" element={<CommercialProperty />} />
            <Route path="/rental-flats-kandivali-west" element={<RentalFlats />} />
            <Route path="/resale-flats-kandivali-west" element={<ResaleFlats />} />
            <Route path="/properties-in-borivali-west" element={<PropertiesBorivaliWest />} />
            <Route path="/properties-in-malad-west" element={<PropertiesMaladWest />} />
            <Route path="/real-estate-agent-kandivali-west" element={<RealEstateAgentKandivali />} />
            <Route path="/property-valuation-kandivali" element={<PropertyValuation />} />
            <Route path="/nri-real-estate-services-mumbai" element={<NriRealEstateServices />} />
            <Route path="/home-loans-property-consultant" element={<HomeLoansConsultant />} />
            <Route path="/seo-keywords-directory" element={<SeoKeywordsDirectory />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Shared Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
