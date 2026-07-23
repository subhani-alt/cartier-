import React, { useState } from 'react';
import { Sparkles, Droplets, Flame, Wind } from 'lucide-react';

export const FragrancePyramidSection = () => {
  const [activeTier, setActiveTier] = useState('top');

  const tiers = {
    top: {
      title: "Top Notes (The First Impression)",
      duration: "0 - 30 Minutes",
      description: "Sparkling, radiant accords that greet the senses upon initial misting.",
      notes: [
        { name: "Reggio Calabria Bergamot", desc: "Zesty, sun-drenched Italian citrus extract" },
        { name: "Kashmiri Saffron", desc: "Smoky golden spice from high altitude harvest" },
        { name: "Sparkling Pear", desc: "Crisp juicy orchard top accord" }
      ],
      icon: Wind
    },
    heart: {
      title: "Heart / Middle Notes (The Soul)",
      duration: "30 Mins - 4 Hours",
      description: "The core olfactory identity that unfolds gracefully as top notes dissipate.",
      notes: [
        { name: "Florentine Iris Butter", desc: "Aged 6 years in dark cellars in Tuscany" },
        { name: "Damask Rose Absolute", desc: "Hand-picked at dawn in the Valley of Roses" },
        { name: "White Silk Accord", desc: "Smooth velvet floral texture" }
      ],
      icon: Droplets
    },
    base: {
      title: "Base Notes (The Eternal Sillage)",
      duration: "4 - 16+ Hours",
      description: "Deep, enduring resinous foundations that anchor the fragrance on skin.",
      notes: [
        { name: "25-Year Aged Oud", desc: "Rare wild agarwood oil distilled in Cambodia" },
        { name: "Mysore Sandalwood", desc: "Creamy, ancient sacred wood oil" },
        { name: "Madagascar Vanilla Bourbon", desc: "Warm, rich dark pod extract" }
      ],
      icon: Flame
    }
  };

  const currentTier = tiers[activeTier];
  const IconComponent = currentTier.icon;

  return (
    <section className="py-24 bg-surface border-y border-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em] block">
              Haute Architecture Olfactive
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light leading-tight">
              The Art of the <br />
              <span className="italic text-accent">Fragrance Pyramid</span>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Every Maison Aurélia parfum is built as a three-act symphony. Click the tiers of the pyramid to explore how rare essences evolve over time on skin.
            </p>

            {/* Pyramid Navigation Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setActiveTier('top')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTier === 'top'
                    ? 'bg-primary border-highlight shadow-luxury text-dark'
                    : 'bg-ivory/50 border-secondary text-text-muted hover:border-highlight/50'
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold block">Tier I</span>
                  <span className="font-serif-luxury text-lg">Top Notes Accord</span>
                </div>
                <span className="text-xs text-highlight font-medium">0–30 Mins</span>
              </button>

              <button
                onClick={() => setActiveTier('heart')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTier === 'heart'
                    ? 'bg-primary border-highlight shadow-luxury text-dark'
                    : 'bg-ivory/50 border-secondary text-text-muted hover:border-highlight/50'
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold block">Tier II</span>
                  <span className="font-serif-luxury text-lg">Heart / Middle Accord</span>
                </div>
                <span className="text-xs text-highlight font-medium">30m–4h</span>
              </button>

              <button
                onClick={() => setActiveTier('base')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTier === 'base'
                    ? 'bg-primary border-highlight shadow-luxury text-dark'
                    : 'bg-ivory/50 border-secondary text-text-muted hover:border-highlight/50'
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold block">Tier III</span>
                  <span className="font-serif-luxury text-lg">Base & Sillage Foundation</span>
                </div>
                <span className="text-xs text-highlight font-medium">4h–16h+</span>
              </button>
            </div>
          </div>

          {/* Right Visual Pyramid Card */}
          <div className="lg:col-span-7">
            <div className="bg-primary rounded-luxury p-8 sm:p-12 border border-secondary/60 shadow-luxury relative overflow-hidden">
              <div className="flex items-center gap-3 text-accent mb-6">
                <IconComponent className="w-6 h-6 text-highlight" />
                <h3 className="font-serif-luxury text-2xl text-dark">{currentTier.title}</h3>
              </div>

              <p className="text-xs text-text-muted mb-8 italic">
                "{currentTier.description}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentTier.notes.map((n, idx) => (
                  <div key={idx} className="bg-ivory p-5 rounded-luxury-sm border border-secondary/40 shadow-sm space-y-2">
                    <span className="w-7 h-7 rounded-full bg-secondary/50 flex items-center justify-center text-xs font-bold text-accent">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif-luxury text-lg text-dark font-medium">{n.name}</h4>
                    <p className="text-[11px] text-text-muted leading-tight">{n.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-secondary/40 flex items-center justify-between text-xs text-text-muted">
                <span>Concentration: 28% High Extrait</span>
                <span className="text-accent font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Macerated for 90 Days in Grasse
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
