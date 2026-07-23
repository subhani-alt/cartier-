import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, MapPin, Mail, Shield, CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark text-primary pt-20 pb-12 border-t border-highlight/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Brand Statement Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-secondary/20">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-highlight font-display-luxury text-sm tracking-[0.3em] uppercase block">
              The Maison Aurélia Journal
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-primary font-light leading-snug">
              Receive private invitations to confidential timepiece reveals and bespoke olfactory releases.
            </h3>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-highlight/10 rounded-2xl border border-highlight/30 text-highlight">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <p className="font-serif-luxury text-lg text-primary">Your membership has been recorded.</p>
                  <p className="text-xs text-secondary/80">Check your inbox for our private Autumn/Winter lookbook.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-primary/10 border border-secondary/30 rounded-full py-4 pl-6 pr-36 text-sm text-primary placeholder-secondary/60 focus:outline-none focus:border-highlight transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-highlight hover:bg-accent text-dark font-medium text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-2"
                  >
                    Subscribe <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-secondary/60 mt-2 pl-4">
                  By subscribing you agree to Maison Aurélia's privacy policy and VIP guest code.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display-luxury text-2xl tracking-[0.25em] text-primary uppercase block">
                MAISON AURÉLIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-highlight block">
                Geneva • Le Locle • Paris
              </span>
            </Link>
            <p className="text-xs text-secondary/80 leading-relaxed pr-6">
              Maison Aurélia unites master horological complication with artisanal haute parfumerie. Each creation is handcrafted in Geneva and Grasse using rare, ethically sourced materials.
            </p>
            <div className="pt-2 text-xs text-highlight flex items-center gap-4">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-highlight" /> Certified Geneva Seal</span>
              <span className="flex items-center gap-1"><Compass className="w-4 h-4 text-highlight" /> Swiss Made</span>
            </div>
          </div>

          {/* Column 1: Timepieces */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-highlight">
              Haute Horlogerie
            </h4>
            <ul className="space-y-2 text-xs text-secondary/80">
              <li><Link to="/shop?category=Watches&subCategory=Skeleton" className="hover:text-primary transition-colors">Skeleton Tourbillon</Link></li>
              <li><Link to="/shop?category=Watches&subCategory=Chronograph" className="hover:text-primary transition-colors">Classicist Chronographs</Link></li>
              <li><Link to="/shop?category=Watches&subCategory=Dress" className="hover:text-primary transition-colors">Moonphase & Ultra-Thin</Link></li>
              <li><Link to="/shop?category=Watches&subCategory=Sports" className="hover:text-primary transition-colors">Titanium Diver 300M</Link></li>
              <li><Link to="/shop?category=Watches&subCategory=Limited Edition" className="hover:text-primary transition-colors">Perpetual Calendar</Link></li>
            </ul>
          </div>

          {/* Column 2: Fragrances */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-highlight">
              Haute Parfumerie
            </h4>
            <ul className="space-y-2 text-xs text-secondary/80">
              <li><Link to="/shop?category=Fragrances&gender=Unisex" className="hover:text-primary transition-colors">Oud & Amber Extraits</Link></li>
              <li><Link to="/shop?category=Fragrances&gender=Women" className="hover:text-primary transition-colors">Florentine Iris & Rose</Link></li>
              <li><Link to="/shop?category=Fragrances&gender=Men" className="hover:text-primary transition-colors">Cuir Noir & Bourbon</Link></li>
              <li><Link to="/shop?category=Fragrances&subCategory=Eau De Toilette" className="hover:text-primary transition-colors">Riviera Citrus Waters</Link></li>
              <li><Link to="/shop?category=Fragrances&subCategory=Gift Sets" className="hover:text-primary transition-colors">Velvet Gift Vaults</Link></li>
            </ul>
          </div>

          {/* Column 3: Boutiques & Care */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-highlight">
              Boutiques & Care
            </h4>
            <ul className="space-y-2 text-xs text-secondary/80">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-highlight" /> Paris • 15 Place Vendôme</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-highlight" /> NY • 740 Park Avenue</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-highlight" /> Geneva • Rue du Rhône</li>
              <li><Link to="/profile" className="hover:text-primary transition-colors">Client Orders & Invoices</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Craftsmanship & Warranty</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-secondary/20 flex flex-col md:flex-row items-center justify-between text-xs text-secondary/60">
          <p>© 2026 MAISON AURÉLIA — All Rights Reserved. Original Luxury Experience.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-highlight transition-colors">Legal Terms</a>
            <a href="#" className="hover:text-highlight transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-highlight transition-colors">Cookies</a>
            <a href="#" className="hover:text-highlight transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
