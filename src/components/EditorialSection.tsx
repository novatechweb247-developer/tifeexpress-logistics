import React from 'react';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { EDITORIAL_CONTENT, BUSINESS_INFO } from '../data/logisticsData';
import { ImageFallback } from './ImageFallback';

interface EditorialSectionProps {
  onOpenInquiry?: () => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <ImageFallback
                src={EDITORIAL_CONTENT.image}
                alt={EDITORIAL_CONTENT.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                fallbackTitle="Moving What Matters"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent pointer-events-none" />

              {/* Context Tag (Clean Unboxed) */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0F19]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-white block">Tifeexpress Logistics</span>
                  <span className="text-slate-400">Challenge Axis, Ibadan</span>
                </div>
                <span className="font-mono text-amber-400 text-xs font-semibold">07047428000</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>{EDITORIAL_CONTENT.kicker}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Reliable Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight mb-6">
              {EDITORIAL_CONTENT.headline}
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>{EDITORIAL_CONTENT.bodyParagraph1}</p>
              <p>{EDITORIAL_CONTENT.bodyParagraph2}</p>
            </div>

            {/* Core Values / Commitments (Factual & Honest) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Direct Accessibility</span>
                  <span className="text-xs text-slate-400">Speak with our local coordinator</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Central Ibadan Hub</span>
                  <span className="text-xs text-slate-400">Strategically located at Challenge Axis</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Careful Parcel Handling</span>
                  <span className="text-xs text-slate-400">Packages managed with attention</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block">Transparent Terms</span>
                  <span className="text-xs text-slate-400">Mutually agreed arrangements</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <span>Make Delivery Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-3.5 text-xs font-semibold text-white hover:text-amber-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
