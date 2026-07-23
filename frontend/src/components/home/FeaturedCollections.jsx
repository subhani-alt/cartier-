import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Watch, Sparkles } from 'lucide-react';

export const FeaturedCollections = () => {
  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em]">
            Dual Pillar of Excellence
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light">
            Featured Collections
          </h2>
          <div className="w-12 h-0.5 bg-highlight mx-auto" />
        </div>

        {/* Dual Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Card 1: Haute Horlogerie */}
          <div className="group relative h-[520px] rounded-luxury overflow-hidden shadow-luxury border border-secondary/40">
            <img
              src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1200"
              alt="Haute Horlogerie"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between text-primary">
              <div className="flex justify-between items-start">
                <span className="bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium border border-primary/30">
                  Precision Complications
                </span>
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center group-hover:bg-highlight group-hover:text-dark transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-highlight text-xs font-display-luxury tracking-widest uppercase block">
                  Geneva Workshops
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-primary font-light">
                  Haute Horlogerie Timepieces
                </h3>
                <p className="text-secondary/80 text-xs sm:text-sm max-w-md line-clamp-2">
                  Hand-engraved skeleton tourbillons, column-wheel chronographs, and perpetual moonphases crafted in solid platinum and rose gold.
                </p>
                <Link
                  to="/shop?category=Watches"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-highlight hover:text-primary transition-colors pt-2"
                >
                  Explore Horlogerie &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Haute Parfumerie */}
          <div className="group relative h-[520px] rounded-luxury overflow-hidden shadow-luxury border border-secondary/40">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200"
              alt="Haute Parfumerie"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between text-primary">
              <div className="flex justify-between items-start">
                <span className="bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium border border-primary/30">
                  Artisanal Extraits
                </span>
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center group-hover:bg-highlight group-hover:text-dark transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-highlight text-xs font-display-luxury tracking-widest uppercase block">
                  Grasse Distilleries
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-primary font-light">
                  Haute Parfumerie Elixirs
                </h3>
                <p className="text-secondary/80 text-xs sm:text-sm max-w-md line-clamp-2">
                  Rare aged Cambodian oud, Florentine iris butter, and wild Damask rose distilled in limited small batches.
                </p>
                <Link
                  to="/shop?category=Fragrances"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-highlight hover:text-primary transition-colors pt-2"
                >
                  Discover Parfumerie &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
