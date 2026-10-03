import React from 'react';
import { Package, MapPin, Building2, Truck, Clock, Headphones, ArrowRight } from 'lucide-react';
import { LOGISTICS_SERVICES, BUSINESS_INFO } from '../data/logisticsData';
import { LogisticsService } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: LogisticsService['iconName']) => {
    switch (iconName) {
      case 'Package':
        return <Package className="w-5 h-5 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-amber-400" />;
      default:
        return <Package className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>Logistics & Courier Categories</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Challenge Axis, Ibadan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
              Logistics Services Built for Everyday Delivery
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Explore our core delivery and courier service categories. Contact Tifeexpress Logistics to confirm specific requirements, pickup locations, and schedule arrangements.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs text-slate-400 block mb-1">Direct inquiries by phone:</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-lg font-bold text-amber-400 hover:text-amber-300 font-mono tracking-wide"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        {/* Services Grid (Single Elevation Depth, Hairline Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOGISTICS_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#111827]/70 hover:bg-[#161F30] border border-white/10 hover:border-amber-400/40 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon & Editorial Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400/80 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-white font-display mb-3 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features (Unboxed List) */}
                <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-amber-400 hover:text-slate-950 border border-white/10 hover:border-amber-400 transition-all duration-200 min-h-[44px]"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-slate-300 font-semibold">Service Notice:</span> These categories represent general courier and package transport capabilities. Specific arrangements, timing, and feasibility are confirmed directly upon inquiry with Tifeexpress Logistics.
          </p>
        </div>
      </div>
    </section>
  );
};
