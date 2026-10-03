import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/logisticsData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>Operational Base</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Ibadan Logistics Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight mb-4">
              Centrally Located in Challenge Axis, Ibadan
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              Our base in Challenge Axis positions Tifeexpress Logistics at one of Ibadan&apos;s most vital arterial junctions, enabling coordinated parcel pickups, transfers, and city-wide dispatches.
            </p>

            {/* Verified Location Card */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wide font-mono block">Primary Location</span>
                  <span className="text-lg font-bold text-white font-display block">Challenge Axis, Ibadan</span>
                  <span className="text-xs text-slate-400 mt-0.5 block">Oyo State, Nigeria</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wide font-mono block">Direct Inquiries</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-lg font-bold text-amber-400 hover:text-amber-300 font-mono tracking-wide transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400 mt-0.5 block">Direct phone & WhatsApp available</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Map Representation (Clean, Styled, Accurate) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111827] p-6 sm:p-8 flex flex-col justify-between min-h-[380px] shadow-2xl">
              {/* Graphic Grid background simulating route map */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="locationGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-slate-600" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#locationGrid)" />
                </svg>
              </div>

              {/* Decorative Route Visual Lines */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-amber-400/40 animate-ping duration-10000" />
                <div className="absolute w-48 h-48 rounded-full border border-amber-400/30" />
              </div>

              {/* Top Bar of the Hub Display */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono font-semibold uppercase text-slate-300">Transit Zone</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Hub
                </span>
              </div>

              {/* Center Landmark Pin */}
              <div className="relative z-10 py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-xl shadow-amber-500/20 mb-4 animate-bounce duration-1000">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Challenge Axis, Ibadan</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  Primary operations center for Tifeexpress Logistics courier and parcel inquiries.
                </p>
              </div>

              {/* Bottom Quick Action */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Inquiries & Dispatch</span>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>View Map Coordinates</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
