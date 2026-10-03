import React from 'react';
import { Phone, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/logisticsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="bg-[#070A11] border-t border-white/10 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Summary (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors font-display flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" />
              Tifeexpress Logistics
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional logistics, parcel dispatch, and courier solutions operating from Challenge Axis, Ibadan. Delivering convenience for personal and business everyday packages.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>Challenge Axis, Ibadan</span>
              <span>·</span>
              <span>Oyo State, Nigeria</span>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Verification (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Challenge Axis, Ibadan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-amber-400 hover:underline font-mono"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-emerald-400"
                >
                  WhatsApp: {BUSINESS_INFO.displayPhone}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Tifeexpress Logistics. All rights reserved.
          </div>

          <div className="text-slate-500 text-center sm:text-right">
            Visual representations reflect modern logistics industry operations.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
