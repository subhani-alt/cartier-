import React from 'react';
import { Instagram, Heart, Sparkles } from 'lucide-react';

export const InstagramFeed = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600", likes: "1.4k" },
    { url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600", likes: "2.8k" },
    { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600", likes: "3.1k" },
    { url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600", likes: "1.9k" },
    { url: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=600", likes: "2.2k" },
    { url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600", likes: "4.5k" }
  ];

  return (
    <section className="py-20 bg-dark text-primary border-t border-highlight/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
        <span className="text-highlight font-display-luxury text-xs uppercase tracking-[0.35em] block">
          Editorial Gallery
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl font-light">
          Follow @MaisonAurelia
        </h2>
        <p className="text-secondary/70 text-xs max-w-md mx-auto">
          Behind-the-scenes glimpses into our Geneva watchmaking benches and Grasse flower harvests.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        {images.map((img, idx) => (
          <div key={idx} className="group relative aspect-square overflow-hidden bg-primary/10">
            <img
              src={img.url}
              alt={`Instagram editorial ${idx}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2 text-primary">
              <Instagram className="w-6 h-6 text-highlight" />
              <span className="text-xs font-semibold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-highlight text-highlight" /> {img.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
