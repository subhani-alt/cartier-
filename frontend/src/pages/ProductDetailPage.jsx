import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RotateCw, Heart, ShoppingBag, ShieldCheck, Gift, Star, Check, Sparkles, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const ProductDetailPage = ({ products, onSelect360Product, onOpenPackaging }) => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];

  const [activeImg, setActiveImg] = useState(product?.images?.[0] || '');
  const [engraving, setEngraving] = useState('');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const isWish = isInWishlist(product.slug);

  return (
    <div className="bg-ivory py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-text-muted space-x-2 mb-8">
          <Link to="/" className="hover:text-dark">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-dark">{product.category}</Link>
          <span>/</span>
          <span className="text-dark font-medium">{product.name}</span>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] bg-surface rounded-luxury overflow-hidden border border-secondary shadow-luxury flex items-center justify-center">
              <img
                src={activeImg || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.model360Frames && product.model360Frames.length > 0 && (
                <button
                  onClick={() => onSelect360Product(product)}
                  className="absolute bottom-6 right-6 px-5 py-3 bg-dark/90 hover:bg-dark text-highlight text-xs uppercase font-bold tracking-widest rounded-full backdrop-blur-md shadow-luxury flex items-center gap-2"
                >
                  <RotateCw className="w-4 h-4 animate-spin-slow" /> Interactive 360° Rotator
                </button>
              )}
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`w-24 h-24 rounded-luxury-sm overflow-hidden border-2 transition-all shrink-0 ${
                    activeImg === img ? 'border-accent scale-105' : 'border-secondary opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em] block">
                {product.category} • {product.subCategory}
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light leading-tight">
                {product.name}
              </h1>
              <p className="text-xs text-text-muted italic">{product.tagline}</p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-highlight">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-highlight" />
                ))}
                <span className="text-dark font-bold ml-1">{product.rating}</span>
              </div>
              <span className="text-text-muted">({product.numReviews} Connoisseur Reviews)</span>
            </div>

            <div className="py-4 border-y border-secondary/40">
              <span className="font-serif-luxury text-3xl font-semibold text-dark">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-xs text-accent font-medium block pt-1">
                Complimentary Express Courier & Signature Box Included
              </span>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Custom Engraving Input */}
            <div className="space-y-2 bg-primary p-4 rounded-xl border border-secondary">
              <label className="text-xs font-semibold text-dark uppercase tracking-wider block flex items-center justify-between">
                <span>Personal Engraving</span>
                <span className="text-[10px] text-accent">Complimentary</span>
              </label>
              <input
                type="text"
                maxLength={24}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="e.g., Lord Aurelius MXXVI"
                className="w-full bg-ivory border border-secondary rounded-lg p-2.5 text-xs text-dark placeholder:text-text-muted"
              />
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, 1, engraving)}
                className="w-full py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Acquire Timepiece / Fragrance
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`w-full py-3 border rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                  isWish ? 'bg-accent text-white border-accent' : 'bg-ivory text-dark border-secondary hover:border-accent'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWish ? 'fill-white' : ''}`} />
                {isWish ? 'Saved to Wishlist' : 'Add to Personal Wishlist'}
              </button>
            </div>

            {/* Guarantee Cards */}
            <div className="pt-4 grid grid-cols-2 gap-4 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-highlight shrink-0" />
                <span>8-Year International Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-highlight shrink-0" />
                <span>Certified Geneva Hallmark</span>
              </div>
            </div>

          </div>
        </div>

        {/* Specifications Tab Table */}
        <div className="bg-primary rounded-luxury p-8 sm:p-12 border border-secondary/60 shadow-sm mb-20 space-y-6">
          <h3 className="font-serif-luxury text-3xl text-dark">Technical Specifications & Notes</h3>

          {product.category === 'Watches' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Calibre Movement</span>
                <p className="text-dark font-medium">{product.watchSpecs?.movement}</p>
              </div>
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Case Material</span>
                <p className="text-dark font-medium">{product.watchSpecs?.caseMaterial}</p>
              </div>
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Power Reserve</span>
                <p className="text-dark font-medium">{product.watchSpecs?.powerReserve}</p>
              </div>
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Water Resistance</span>
                <p className="text-dark font-medium">{product.watchSpecs?.waterResistance}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Top Notes Accord</span>
                <p className="text-dark font-medium">{product.fragranceNotes?.topNotes?.join(', ')}</p>
              </div>
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Heart Notes Accord</span>
                <p className="text-dark font-medium">{product.fragranceNotes?.middleNotes?.join(', ')}</p>
              </div>
              <div className="space-y-1">
                <span className="text-accent font-bold uppercase tracking-wider block">Base Sillage Foundation</span>
                <p className="text-dark font-medium">{product.fragranceNotes?.baseNotes?.join(', ')}</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
