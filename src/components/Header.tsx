import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/logisticsData';

interface HeaderProps {
  onOpenInquiry?: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#0B0F19]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark (Strict Top Bar Contract) */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap font-display flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block"></span>
            Tifeexpress Logistics
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-amber-400 px-3.5 py-2 rounded-lg border border-white/10 hover:border-amber-400/40 bg-white/5 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="#inquiry"
              onClick={() => onOpenInquiry && onOpenInquiry()}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm shadow-amber-500/20 whitespace-nowrap"
            >
              <span>Make Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 text-amber-400 hover:text-amber-300 bg-white/5 rounded-lg border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Call Tifeexpress Logistics"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F19]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 rounded-lg min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href="#inquiry"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg min-h-[44px]"
            >
              <span>Make an Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
