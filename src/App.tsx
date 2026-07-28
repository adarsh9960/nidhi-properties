import { useState } from 'react';
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

export function App() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const handleSelectLocation = (locId: string) => {
    setSelectedLocationId(locId);
    const homesElement = document.getElementById('homes');
    if (homesElement) {
      homesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Sticky/Fixed Navbar */}
      <Navbar />

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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-6"
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
