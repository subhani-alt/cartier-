import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, RotateCw, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCompare } from '../../context/CompareContext';

export const WatchShowcase = ({ products, onSelect360Product, onSelectQuickView }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();

  const watchProducts = products.filter(p => p.category === 'Watches').slice(0, 4);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em] block">
              Geneva Complications
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light">
              Master Horlogerie Timepieces
            </h2>
          </div>

          <Link
            to="/shop?category=Watches"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-accent hover:text-dark transition-colors border-b border-accent pb-1 inline-block"
          >
            View Complete Collection &rarr;
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {watchProducts.map((product) => {
            const isWish = isInWishlist(product.slug);
            const isComp = isInCompare(product.slug);

            return (
              <div
                key={product.slug}
                className="group bg-primary rounded-luxury overflow-hidden border border-secondary/40 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Badges & Hover Actions */}
                <div className="relative aspect-[4/5] bg-surface overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} view`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    />
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    {product.isFeatured && (
                      <span className="bg-dark text-highlight text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        Flagship
                      </span>
                    )}
                    {product.subCategory && (
                      <span className="bg-primary/80 backdrop-blur-md text-dark text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-secondary">
                        {product.subCategory}
                      </span>
                    )}
                  </div>

                  {/* Top Right Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all ${
                      isWish ? 'bg-accent text-white' : 'bg-primary/70 text-dark hover:bg-primary'
                    }`}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWish ? 'fill-white' : ''}`} />
                  </button>

                  {/* Hover Overlay Action Bar */}
                  <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {product.model360Frames && product.model360Frames.length > 0 && (
                      <button
                        onClick={() => onSelect360Product(product)}
                        className="p-3 bg-dark/90 hover:bg-dark text-highlight rounded-full backdrop-blur-md shadow-luxury transition-all"
                        title="360° Rotator"
                      >
                        <RotateCw className="w-4 h-4" />
                      </button>
                    )}

                    <button
                      onClick={() => onSelectQuickView(product)}
                      className="p-3 bg-dark/90 hover:bg-dark text-primary rounded-full backdrop-blur-md shadow-luxury transition-all"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-3 px-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-[11px] uppercase tracking-wider rounded-full backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-luxury"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Acquire
                    </button>
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{product.watchSpecs?.movement ? 'Automatic Complication' : 'Haute Horlogerie'}</span>
                    <div className="flex items-center gap-1 text-highlight">
                      <Star className="w-3.5 h-3.5 fill-highlight" />
                      <span className="font-semibold text-dark">{product.rating}</span>
                    </div>
                  </div>

                  <Link to={`/product/${product.slug}`} className="block">
                    <h3 className="font-serif-luxury text-xl text-dark font-medium group-hover:text-accent transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-text-muted line-clamp-1 italic">
                    {product.tagline || product.watchSpecs?.caseMaterial}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-secondary/40">
                    <div>
                      <span className="text-lg font-serif-luxury text-dark font-semibold">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-text-muted line-through ml-2">
                          ${product.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleCompare(product)}
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                        isComp ? 'bg-accent text-white' : 'text-text-muted hover:text-accent'
                      }`}
                    >
                      {isComp ? 'Comparing' : '+ Compare'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
