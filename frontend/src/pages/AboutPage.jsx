import React from 'react';
import { Compass, ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-ivory py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.35em] block">
            Geneva • Le Locle • Grasse
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-6xl text-dark font-light">
            Atelier & Heritage
          </h1>
          <p className="text-sm text-text-muted leading-relaxed">
            Maison Aurélia unites master horological complication with artisanal haute parfumerie. We create objects of permanent beauty for collectors across continents.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif-luxury text-4xl text-dark font-light">
              Dual Ateliers of Emotion & Precision
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              In Le Locle, Switzerland, our horologists hand-bevel openwork tourbillon bridges to mirror polish under high magnification. Meanwhile, in Grasse, France, our nose perfumers steep rare 25-year aged agarwood and Florentine iris butter in dark oak casks for 90 days.
            </p>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              We produce no mass collections. Every piece is individually numbered and certified with the Geneva Seal of Horological Excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
              alt="Geneva Watchmaking Bench"
              className="rounded-luxury shadow-luxury object-cover h-72 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
              alt="Grasse Distilleries"
              className="rounded-luxury shadow-luxury object-cover h-72 w-full mt-8"
            />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary p-8 rounded-luxury border border-secondary space-y-3">
            <Compass className="w-8 h-8 text-accent" />
            <h3 className="font-serif-luxury text-2xl text-dark">Swiss Precision</h3>
            <p className="text-xs text-text-muted">High-frequency mechanical complications built with hand-wound flying tourbillons and perpetual moonphases.</p>
          </div>

          <div className="bg-primary p-8 rounded-luxury border border-secondary space-y-3">
            <Sparkles className="w-8 h-8 text-accent" />
            <h3 className="font-serif-luxury text-2xl text-dark">90-Day Maceration</h3>
            <p className="text-xs text-text-muted">Pure natural extraits de parfum concentrated at 28% and aged in dark casks for maximum sillage longevity.</p>
          </div>

          <div className="bg-primary p-8 rounded-luxury border border-secondary space-y-3">
            <ShieldCheck className="w-8 h-8 text-accent" />
            <h3 className="font-serif-luxury text-2xl text-dark">Geneva Seal Standard</h3>
            <p className="text-xs text-text-muted">8-year international warranty backed by private concierges in Paris, New York, Geneva, and Tokyo.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
