import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Countess Victoria von Hapsburg",
      role: "Watch Collector • Vienna",
      comment: "The L'Or Impérial Skeleton Tourbillon is an absolute masterwork. The hand anglage floating under the dual sapphire crystals is superior to anything in my Swiss collection.",
      rating: 5,
      item: "L'Or Impérial Skeleton Tourbillon"
    },
    {
      name: "Jean-Luc Moreau",
      role: "Parfumerie Connoisseur • Paris",
      comment: "Oud Royal & Santal Imperial has an enveloping sillage that lasts through multi-day galas. The aged agarwood quality is unmatched in modern niche perfume.",
      rating: 5,
      item: "Oud Royal & Santal Imperial"
    },
    {
      name: "Sir Harrison Vance",
      role: "Private Equity Partner • London",
      comment: "The white-glove courier delivery to Mayfair with custom gold plaque engraving exceeded all luxury retail expectations. A breathtaking experience.",
      rating: 5,
      item: "Souverain Moonphase Automatic"
    }
  ];

  return (
    <section className="py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em]">
            Collector Voices
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light">
            Connoisseur Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-primary p-8 rounded-luxury border border-secondary/40 shadow-sm relative flex flex-col justify-between space-y-6">
              <Quote className="w-8 h-8 text-highlight/40 absolute top-6 right-6" />

              <div className="space-y-4 z-10">
                <div className="flex items-center gap-1 text-highlight">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-highlight" />
                  ))}
                </div>

                <p className="font-serif-luxury text-lg text-dark italic leading-relaxed">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-secondary/40 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-base text-dark font-semibold">{r.name}</h4>
                  <p className="text-[11px] text-text-muted">{r.role}</p>
                </div>
                <span className="text-[10px] text-accent font-medium bg-secondary/40 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-accent" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
