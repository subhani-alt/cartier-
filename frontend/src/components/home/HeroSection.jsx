import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Volume2, VolumeX, Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = ({ onOpenAiConcierge }) => {
  const [isMuted, setIsMuted] = useState(true);

  const heroSlides = [
    {
      title: "Hand-Sculpted Horlogerie",
      subtitle: "The L'Or Impérial Skeleton Tourbillon",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000",
      cta: "Explore Timepieces",
      link: "/shop?category=Watches"
    }
  ];

  const slide = heroSlides[0];

  return (
    <section className="relative h-[92vh] min-h-[650px] w-full overflow-hidden bg-dark flex items-center">
      {/* Background Image / Media Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt="Maison Aurélia Luxury Hero"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-primary">
        <div className="max-w-2xl space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-highlight font-display-luxury text-xs uppercase tracking-[0.35em]"
          >
            <Sparkles className="w-4 h-4 text-highlight" />
            Maison Aurélia • Geneva Atelier
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.02] text-primary"
          >
            Where Time <br />
            <span className="italic text-gradient-light font-normal">Becomes Art.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary/90 text-sm sm:text-base font-light leading-relaxed max-w-lg"
          >
            Discover our autumn haute horlogerie tourbillons and artisanal extraits de parfum, handcrafted in Geneva and Grasse for true connoisseurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/shop?category=Watches"
              className="px-8 py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-luxury hover:scale-105 flex items-center gap-3"
            >
              Explore Timepieces <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/shop?category=Fragrances"
              className="px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-secondary/40 font-medium text-xs uppercase tracking-[0.2em] rounded-full backdrop-blur-md transition-all duration-300"
            >
              Discover Fragrances
            </Link>

            <button
              onClick={onOpenAiConcierge}
              className="p-4 bg-secondary/20 hover:bg-secondary/40 text-highlight rounded-full border border-highlight/30 backdrop-blur-md transition-all"
              title="Consult AI Luxury Stylist"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-secondary/70 hover:text-primary transition-colors cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
