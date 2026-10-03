import React, { useState } from 'react';
import { X, ZoomIn, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/logisticsData';
import { GalleryItem } from '../types';
import { ImageFallback } from './ImageFallback';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Dispatch', 'Parcels', 'Transport', 'Delivery', 'Operations'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0F1626] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>Visual Showcase</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Logistics & Courier Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
              Logistics in Motion
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              A curated visual presentation showcasing modern parcel dispatch, cargo transport, and delivery operations across the courier industry.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill: Clean Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111827] rounded-xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all min-h-[36px] ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-[#111827] border border-white/10 hover:border-amber-400/40 transition-all duration-300 aspect-[4/3] flex flex-col justify-end shadow-lg"
            >
              <ImageFallback
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fallbackTitle={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4 text-amber-400" />
              </div>

              {/* Caption Overlay */}
              <div className="relative z-10 p-5">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-amber-400 mb-1.5">
                  <span>{item.category}</span>
                </div>
                <h3 className="text-base font-semibold text-white font-display group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-1 opacity-80 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-slate-400 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Imagery is used as professional visual representation of logistics and courier operations within the transport industry.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111827] rounded-2xl border border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 flex items-center justify-between border-b border-white/10 bg-[#0B0F19]/80">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] sm:aspect-[16/10] max-h-[60vh] bg-black">
              <ImageFallback
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                fallbackTitle={activeItem.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#0B0F19]/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-slate-300">
                {activeItem.caption}
              </p>
              <div className="text-xs text-slate-500 font-mono whitespace-nowrap">
                Industry Representation
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
