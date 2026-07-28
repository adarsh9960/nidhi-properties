import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, CreditCard } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Buy Residential Flat',
    locationInterest: 'Mahavir Nagar, Kandivali West',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Office Address */}
          <FadeIn className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3 block">
                Nidhi Properties • Established 1995
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                Contact NP Properties
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Visit NP office in Mahavir Nagar Kandivali West, or connect with our consultants for buying, selling, or renting properties in Mumbai.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              <div className="liquid-glass p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Office Address</div>
                  <p className="text-xs font-medium text-white leading-snug">
                    Nisarg Building, Opp. Sachin Tendulkar Gymkhana & Balaji Party Hall, Beside Pizza Hut, Mahavir Nagar-Kandivali West, Mumbai - 400067
                  </p>
                </div>
              </div>

              <div className="liquid-glass p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Working Hours</div>
                  <p className="text-xs font-medium text-white">
                    Monday – Sunday: 10:00 AM – 08:00 PM
                  </p>
                </div>
              </div>

              <div className="liquid-glass p-4 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Phone & Helpline</div>
                  <a href="tel:+9122043126" className="text-sm font-medium text-white hover:underline">
                    022-PK043126 / Justdial Helpline
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-400" /> Payment Modes Accepted
              </h4>
              <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                {['Visa / MasterCard / Rupay', 'American Express', 'EMI Financing', 'Cheque / DD', 'Cash', 'Diners Club'].map((mode, i) => (
                  <span key={i} className="liquid-glass px-2.5 py-1 rounded-md border border-white/10">
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rated 4.0 / 5 based on 11 Customer Reviews</span>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn delay={200} className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-8 md:p-10 border border-white/15 shadow-2xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-light text-white">Inquiry Received by NP</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Our representative at Nidhi Properties (NP) Mahavir Nagar will contact you shortly regarding <span className="text-white">{formData.inquiryType}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-gray-400 hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h3 className="text-xl font-light text-white">Send Inquiry to NP</h3>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Agent
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Shah"
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Email / Phone *</label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Mobile or email address"
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Buy Residential Flat" className="bg-neutral-900">Buy Residential Flat (1/2/3 BHK)</option>
                        <option value="Rent / Lease Apartment" className="bg-neutral-900">Rent / Lease Apartment</option>
                        <option value="Commercial Shop / Office" className="bg-neutral-900">Buy/Lease Commercial Shop</option>
                        <option value="Sell Property via NP" className="bg-neutral-900">Sell Property via NP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Location Preference</label>
                      <select
                        value={formData.locationInterest}
                        onChange={(e) => setFormData({ ...formData, locationInterest: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Mahavir Nagar, Kandivali West" className="bg-neutral-900">Mahavir Nagar, Kandivali West</option>
                        <option value="Kandivali West (General)" className="bg-neutral-900">Kandivali West (General)</option>
                        <option value="Borivali West" className="bg-neutral-900">Borivali West</option>
                        <option value="Malad West" className="bg-neutral-900">Malad West</option>
                        <option value="Charkop Sector" className="bg-neutral-900">Charkop Sector</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-medium">Property Details / Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify budget, BHK requirement, carpet area, or timeline..."
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
                  >
                    <span>Submit Inquiry to NP Properties</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
