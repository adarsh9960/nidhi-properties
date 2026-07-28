import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Locations', href: '#locations' },
    { name: 'Available Homes', href: '#homes' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-12 lg:px-16 pt-4 transition-all duration-300">
      <nav className={`rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl'
          : 'liquid-glass border border-white/10'
      }`}>
        {/* Left: Logo text "Nidhi Properties" */}
        <a href="#" className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-2">
          <span className="bg-white text-black px-2.5 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">NP</span>
          <span className="text-lg md:text-xl font-normal text-white">Nidhi Properties</span>
        </a>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-normal text-xs uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: "Contact NP" button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-white text-black px-5 py-2 rounded-xl text-xs font-medium hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-1 shadow-md"
          >
            <span>Contact NP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg liquid-glass border border-white/15 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 liquid-glass border border-white/20 rounded-2xl p-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-sm font-medium py-2 border-b border-white/10 hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
