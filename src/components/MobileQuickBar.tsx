import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/logisticsData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-t border-white/10 px-3 py-2">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors min-h-[40px]"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call 07047428000</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors min-h-[40px]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
};
