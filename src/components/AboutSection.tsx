import React from 'react';
import { MapPin, Phone, ShieldCheck, Truck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/logisticsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0F1626] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>About Us</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Tifeexpress Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            Courier & Logistics in Challenge Axis, Ibadan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tifeexpress Logistics is a dedicated courier, parcel, and delivery service based in Challenge Axis, Ibadan. We focus on bridging everyday delivery needs for individuals, merchants, and businesses through attentive coordination.
          </p>
        </div>

        {/* 3 Pillars of Operations (Honest & Grounded) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="bg-[#111827]/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white font-display mb-2">
                Strategic Location
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating directly from Challenge Axis, Ibadan, providing a central transit junction to coordinate pickups, drop-offs, and transfers across the city.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-amber-400/90 font-mono">
              Challenge Axis, Ibadan
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#111827]/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white font-display mb-2">
                Careful Package Handling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every consignment is treated with responsibility. From boxed goods to personal parcels, we ensure details are verified before and during transit.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-amber-400/90 font-mono">
              Verified Handling
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#111827]/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white font-display mb-2">
                Accessible Direct Contact
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You can reach us directly at 07047428000. No robotic switchboards or hidden channels—just direct, dependable delivery communication.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-amber-400/90 font-mono">
              Call: {BUSINESS_INFO.phone}
            </div>
          </div>
        </div>

        {/* Verified Business Profile Badge */}
        <div className="mt-12 max-w-xl mx-auto rounded-xl bg-white/[0.03] border border-white/10 p-5 text-center">
          <div className="text-xs text-slate-400 mb-1">Official Business Name</div>
          <div className="text-base font-bold text-white tracking-tight">{BUSINESS_INFO.name}</div>
          <div className="text-xs text-amber-400 mt-1">Challenge Axis, Ibadan · 07047428000</div>
        </div>
      </div>
    </section>
  );
};
