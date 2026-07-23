import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Award } from 'lucide-react';

export const HeritageStory = () => {
  return (
    <section className="py-24 bg-dark text-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Imagery Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                alt="Geneva Watchmaking Atelier"
                className="rounded-luxury shadow-luxury object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800"
                alt="Grasse Perfume Distilleries"
                className="rounded-luxury shadow-luxury object-cover h-48 w-full"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
                alt="Hand Engraving Complications"
                className="rounded-luxury shadow-luxury object-cover h-48 w-full"
              />
              <div className="bg-highlight/10 p-6 rounded-luxury border border-highlight/30 flex flex-col justify-center space-y-2">
                <span className="font-display-luxury text-2xl text-highlight font-bold">1,400+ Hours</span>
                <p className="text-xs text-secondary/80">Average hand bench work dedicated to every tourbillon complication.</p>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-highlight font-display-luxury text-xs uppercase tracking-[0.35em] block">
              Atelier & Heritage
            </span>
            
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-primary font-light leading-snug">
              The Uncompromising Pursuit of <span className="italic text-gradient-light">Timeless Perfection</span>
            </h2>

            <p className="text-secondary/90 text-sm leading-relaxed">
              Founded on the belief that horlogerie and parfumerie are sister arts of emotion, Maison Aurélia operates dual master ateliers in Geneva and Grasse. Every watch movement is hand-finished with mirror anglage; every fragrance is macerated for 90 days in dark oak casks.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-secondary/20">
              <div className="space-y-1">
                <span className="text-highlight font-serif-luxury text-2xl">Geneva Seal</span>
                <p className="text-[11px] text-secondary/70">Certified Swiss horological standard of extreme precision.</p>
              </div>

              <div className="space-y-1">
                <span className="text-highlight font-serif-luxury text-2xl">90-Day Maceration</span>
                <p className="text-[11px] text-secondary/70">Natural aging process preserving pure olfactory sillage.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="px-8 py-4 bg-highlight hover:bg-accent text-dark hover:text-white text-xs font-medium uppercase tracking-[0.2em] rounded-full transition-all inline-block shadow-luxury"
              >
                Discover Our Heritage &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
