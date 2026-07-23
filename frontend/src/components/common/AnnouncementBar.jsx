import React from 'react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-dark text-primary py-2.5 px-4 text-xs font-medium tracking-widest uppercase border-b border-highlight/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-6 text-[11px] text-highlight">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> Geneva • Paris • New York • Tokyo
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> 8-Year International Warranty
          </span>
        </div>

        <div className="w-full md:w-auto text-center font-serif-luxury tracking-wider text-primary text-xs md:text-sm italic">
          Complimentary Worldwide Express Courier & Handcrafted Velvet Packaging on all Orders
        </div>

        <div className="hidden md:flex items-center space-x-4 text-[11px] text-secondary">
          <span className="flex items-center gap-1 hover:text-highlight transition-colors cursor-pointer">
            <Sparkles className="w-3.5 h-3.5 text-highlight" /> Private VIP Salon
          </span>
        </div>
      </div>
    </div>
  );
};
