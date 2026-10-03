import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight, Pause, Play, MapPin } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/logisticsData';
import { ImageFallback } from './ImageFallback';

interface HeroSliderProps {
  onOpenInquiry?: (serviceId?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenInquiry }) => {
  // STRICT REQUIREMENT: EXACTLY 3 SLIDES
  const slides = HERO_SLIDES.slice(0, 3);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Autoplay with pause support
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      id="home"
      aria-label="Tifeexpress Logistics Hero Carousel"
      className="relative w-full min-h-[640px] md:min-h-[720px] lg:h-[88vh] max-h-[920px] flex items-center justify-center overflow-hidden pt-20 md:pt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Images Background with Transition */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <ImageFallback
              src={slide.image}
              alt={slide.altText}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              fallbackTitle={slide.headline}
            />
            {/* Scrim Overlay for WCAG AA readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/95 via-[#0B0F19]/80 to-[#0B0F19]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/60" />
          </div>
        );
      })}

      {/* Main Content Viewport Frame */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Header (Anti-Pill Rule) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Challenge Axis, Ibadan</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-300">Logistics & Courier Service</span>
          </div>

          {/* Dynamic Headline (Strictly verified directions for each slide) */}
          <h1
            key={`headline-${currentSlide.id}`}
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1] mb-5 animate-in fade-in slide-in-from-bottom-3 duration-500"
          >
            {currentSlide.headline}
          </h1>

          {/* Dynamic Supporting Copy */}
          <p
            key={`copy-${currentSlide.id}`}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
          >
            {currentSlide.supporting}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <a
              href="#inquiry"
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/25 flex items-center gap-2 whitespace-nowrap min-h-[44px]"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {currentSlide.id === 1 && (
              <a
                href="tel:07047428000"
                className="px-5 py-3.5 text-sm font-semibold text-white hover:text-amber-300 bg-white/10 hover:bg-white/15 rounded-lg border border-white/20 transition-all flex items-center gap-2 whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            )}

            {currentSlide.id === 2 && (
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-white hover:text-emerald-300 bg-emerald-600/30 hover:bg-emerald-600/40 rounded-lg border border-emerald-500/30 transition-all flex items-center gap-2 whitespace-nowrap min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            )}

            {currentSlide.id === 3 && (
              <a
                href="#location"
                className="px-5 py-3.5 text-sm font-semibold text-white hover:text-amber-300 bg-white/10 hover:bg-white/15 rounded-lg border border-white/20 transition-all flex items-center gap-2 whitespace-nowrap min-h-[44px]"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Challenge Axis, Ibadan</span>
              </a>
            )}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
            <span className="text-slate-300 font-medium">Quick Direct Contact:</span>
            <a href="tel:07047428000" className="text-amber-400 hover:underline font-mono">
              07047428000
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Open for delivery inquiries</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Exactly 3 Slide Tabs */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Exactly 3 Slide Progress Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#0B0F19]/80 backdrop-blur-md rounded-xl border border-white/10 self-start sm:self-auto">
            {slides.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[36px] ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Go to Hero Slide ${slide.id}: ${slide.headline}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span className="font-mono text-[11px]">0{slide.id}</span>
                  <span className="hidden md:inline truncate max-w-[130px]">
                    {slide.id === 1 ? 'Move It' : slide.id === 2 ? 'Your Delivery' : 'Logistics'}
                  </span>
                </button>
              );
            })}

            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors ml-1"
              aria-label={isPaused ? 'Resume Hero Slides Autoplay' : 'Pause Hero Slides Autoplay'}
              title={isPaused ? 'Resume Autoplay' : 'Pause Autoplay'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline mr-2">
              <span className="text-white font-semibold">{currentSlideIndex + 1}</span> / {slides.length}
            </span>
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-[#0B0F19]/80 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous Hero Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-[#0B0F19]/80 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next Hero Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
