import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Sparkles, Menu, X, User, Sliders, MapPin, Calendar } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

export const Navbar = ({ onOpenAiConcierge, onOpenAppointment, onOpenStoreLocator, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const { user, isAdmin, toggleAdminRole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md shadow-luxury py-3 border-b border-secondary/60'
          : 'bg-ivory py-5 border-b border-secondary/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile menu trigger & left section */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-dark hover:text-accent transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-dark hover:text-accent transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium text-dark">
            <Link
              to="/shop?category=Watches"
              className={`hover:text-accent transition-colors relative py-1 ${
                location.search.includes('Watches') ? 'text-accent font-semibold border-b-2 border-accent' : ''
              }`}
            >
              Haute Horlogerie
            </Link>
            <Link
              to="/shop?category=Fragrances"
              className={`hover:text-accent transition-colors relative py-1 ${
                location.search.includes('Fragrances') ? 'text-accent font-semibold border-b-2 border-accent' : ''
              }`}
            >
              Parfumerie
            </Link>
            <Link
              to="/about"
              className={`hover:text-accent transition-colors relative py-1 ${
                location.pathname === '/about' ? 'text-accent font-semibold border-b-2 border-accent' : ''
              }`}
            >
              Atelier & Heritage
            </Link>
            <button
              onClick={onOpenAiConcierge}
              className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" /> AI Stylist
            </button>
          </nav>

          {/* Brand Logo - Center */}
          <div className="text-center">
            <Link to="/" className="group inline-block">
              <span className="font-display-luxury text-xl sm:text-2xl lg:text-3xl tracking-[0.25em] text-dark font-bold block uppercase group-hover:text-accent transition-colors">
                MAISON AURÉLIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-highlight block -mt-1 font-sans">
                Haute Horlogerie & Parfumerie
              </span>
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            
            {/* Search Trigger (Desktop) */}
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted hover:text-dark transition-colors bg-primary px-3 py-1.5 rounded-full border border-secondary"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span>Search Collection</span>
            </button>

            {/* Store Locator Icon */}
            <button
              onClick={onOpenStoreLocator}
              className="hidden sm:flex p-2 text-dark hover:text-accent transition-colors relative group"
              title="Boutique Locator"
            >
              <MapPin className="w-5 h-5" />
            </button>

            {/* Appointment Booking Icon */}
            <button
              onClick={onOpenAppointment}
              className="hidden md:flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider bg-secondary/60 hover:bg-secondary text-dark px-3.5 py-1.5 rounded-full border border-accent/20 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-accent" /> Salon Visit
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/profile?tab=wishlist"
              className="p-2 text-dark hover:text-accent transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-dark hover:text-accent transition-colors relative group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-bold animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* User Account / Admin Switcher */}
            <div className="flex items-center gap-2 border-l border-secondary pl-4">
              <Link
                to={isAdmin ? "/admin" : "/profile"}
                className="p-2 text-dark hover:text-accent transition-colors rounded-full bg-primary border border-secondary"
                title={user?.name || "Customer Account"}
              >
                <User className="w-4 h-4 text-accent" />
              </Link>
              
              {/* Demo Admin Switch Toggle Pill */}
              <button
                onClick={toggleAdminRole}
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all ${
                  isAdmin
                    ? 'bg-dark text-highlight border-highlight'
                    : 'bg-primary text-text-muted border-secondary hover:border-accent'
                }`}
                title="Click to toggle between Customer & Admin Portal views"
              >
                {isAdmin ? 'Admin Portal' : 'Collector'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] z-50 bg-ivory/95 backdrop-blur-xl p-6 flex flex-col justify-between border-t border-secondary">
          <div className="space-y-6 text-center pt-8">
            <Link
              to="/shop?category=Watches"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif-luxury text-2xl text-dark hover:text-accent"
            >
              Haute Horlogerie (Watches)
            </Link>
            <Link
              to="/shop?category=Fragrances"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif-luxury text-2xl text-dark hover:text-accent"
            >
              Haute Parfumerie (Fragrances)
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif-luxury text-2xl text-dark hover:text-accent"
            >
              Complete Collection
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-serif-luxury text-2xl text-dark hover:text-accent"
            >
              Atelier & Heritage
            </Link>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAiConcierge(); }}
              className="w-full py-3 bg-secondary/50 rounded-xl flex items-center justify-center gap-2 text-accent font-semibold"
            >
              <Sparkles className="w-4 h-4" /> AI Luxury Concierge
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAppointment(); }}
              className="w-full py-3 bg-accent text-white rounded-xl font-medium uppercase tracking-wider"
            >
              Book Salon Appointment
            </button>
          </div>

          <div className="text-center text-xs text-text-muted border-t border-secondary pt-4">
            Maison Aurélia Geneva • Le Locle • Paris Place Vendôme
          </div>
        </div>
      )}
    </header>
  );
};
