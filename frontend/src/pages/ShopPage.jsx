import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List, Sparkles, X, Heart, Eye, RotateCw, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';

export const ShopPage = ({ products, onSelect360Product, onSelectQuickView }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const subCategoryParam = searchParams.get('subCategory') || '';
  const genderParam = searchParams.get('gender') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [activeGender, setActiveGender] = useState(genderParam || 'All');
  const [priceRange, setPriceRange] = useState(50000);
  const [sortOption, setSortOption] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [searchQuery, setSearchQuery] = useState('');

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { compareList, toggleCompare, isInCompare, clearCompare } = useCompare();

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== 'All' && p.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      if (subCategoryParam && p.subCategory && p.subCategory.toLowerCase() !== subCategoryParam.toLowerCase()) {
        return false;
      }
      if (activeGender !== 'All' && p.gender !== activeGender && p.gender !== 'Unisex') {
        return false;
      }
      if (p.price > priceRange) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [products, activeCategory, subCategoryParam, activeGender, priceRange, searchQuery, sortOption]);

  return (
    <div className="bg-ivory py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.35em] block">
            Maison Aurélia Catalog
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-dark font-light">
            Haute Horlogerie & Parfumerie
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            Explore handcrafted Swiss timepieces and artisanal French extraits de parfum.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-primary p-4 sm:p-6 rounded-luxury border border-secondary/60 shadow-sm mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Watches', 'Fragrances'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat === 'All') setSearchParams({});
                  else setSearchParams({ category: cat });
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-dark text-highlight shadow-md'
                    : 'bg-ivory text-text-muted hover:bg-secondary border border-secondary'
                }`}
              >
                {cat === 'Watches' ? 'Haute Horlogerie' : cat === 'Fragrances' ? 'Haute Parfumerie' : 'All Collections'}
              </button>
            ))}
          </div>

          {/* Gender Filter & Price Slider */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-dark uppercase tracking-wider">Gender:</span>
              <select
                value={activeGender}
                onChange={(e) => setActiveGender(e.target.value)}
                className="bg-ivory border border-secondary rounded-full py-1.5 px-3 text-dark focus:outline-none"
              >
                <option value="All">All Genders</option>
                <option value="Unisex">Unisex</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-dark uppercase tracking-wider">Max Price:</span>
              <input
                type="range"
                min={200}
                max={50000}
                step={500}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="accent-accent cursor-pointer"
              />
              <span className="font-bold text-dark">${priceRange.toLocaleString()}</span>
            </div>
          </div>

          {/* Sort & Layout Toggle */}
          <div className="flex items-center gap-3">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-ivory border border-secondary rounded-full py-1.5 px-3 text-xs text-dark font-medium"
            >
              <option value="featured">Sort by Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Connoisseur Rating</option>
            </select>

            <div className="flex border border-secondary rounded-full bg-ivory p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-accent text-white' : 'text-text-muted'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-colors ${viewMode === 'list' ? 'bg-accent text-white' : 'text-text-muted'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Product Listing */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-primary rounded-luxury border border-secondary">
            <p className="font-serif-luxury text-2xl text-dark">No creations match your specific filters.</p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveGender('All'); setPriceRange(50000); setSearchParams({}); }}
              className="mt-4 px-6 py-2.5 bg-dark text-highlight text-xs font-semibold uppercase tracking-wider rounded-full"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredProducts.map((product) => {
              const isWish = isInWishlist(product.slug);
              const isComp = isInCompare(product.slug);

              if (viewMode === 'list') {
                return (
                  <div key={product.slug} className="bg-primary rounded-luxury p-6 border border-secondary/60 flex flex-col md:flex-row gap-6 items-center">
                    <img src={product.images[0]} alt={product.name} className="w-40 h-48 object-cover rounded-luxury-sm bg-surface" />
                    <div className="flex-1 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-accent tracking-widest">{product.category} • {product.subCategory}</span>
                      <h3 className="font-serif-luxury text-2xl text-dark">{product.name}</h3>
                      <p className="text-xs text-text-muted line-clamp-2">{product.description}</p>
                      <span className="font-serif-luxury text-xl text-dark font-bold block pt-2">${product.price.toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      <button onClick={() => addToCart(product)} className="px-6 py-3 bg-highlight text-dark text-xs uppercase tracking-widest rounded-full font-medium">
                        Acquire Now
                      </button>
                      <button onClick={() => onSelectQuickView(product)} className="px-6 py-2 bg-ivory border border-secondary text-xs uppercase tracking-widest rounded-full">
                        Quick Inspection
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div key={product.slug} className="group bg-primary rounded-luxury overflow-hidden border border-secondary/40 shadow-sm hover:shadow-luxury transition-all duration-500 flex flex-col justify-between">
                  <div className="relative aspect-[4/5] bg-surface overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {product.images[1] && (
                      <img src={product.images[1]} alt={product.name} className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    )}

                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all ${isWish ? 'bg-accent text-white' : 'bg-primary/70 text-dark'}`}
                    >
                      <Heart className={`w-4 h-4 ${isWish ? 'fill-white' : ''}`} />
                    </button>

                    <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {product.model360Frames && (
                        <button onClick={() => onSelect360Product(product)} className="p-3 bg-dark/90 text-highlight rounded-full">
                          <RotateCw className="w-4 h-4" />
                        </button>
                      )}
                      <button onClick={() => onSelectQuickView(product)} className="p-3 bg-dark/90 text-primary rounded-full">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button onClick={() => addToCart(product)} className="flex-1 py-3 bg-highlight text-dark font-medium text-[11px] uppercase tracking-wider rounded-full">
                        Acquire
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] text-text-muted uppercase tracking-wider">{product.category} • {product.subCategory}</span>
                    <Link to={`/product/${product.slug}`} className="block">
                      <h3 className="font-serif-luxury text-xl text-dark font-medium group-hover:text-accent line-clamp-1">{product.name}</h3>
                    </Link>
                    <div className="pt-2 flex items-center justify-between border-t border-secondary/40">
                      <span className="text-lg font-serif-luxury text-dark font-semibold">${product.price.toLocaleString()}</span>
                      <button
                        onClick={() => toggleCompare(product)}
                        className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${isComp ? 'bg-accent text-white' : 'text-text-muted'}`}
                      >
                        {isComp ? 'Comparing' : '+ Compare'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Spec Comparison Drawer */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-dark text-primary px-6 py-4 rounded-luxury shadow-2xl border border-highlight/40 flex items-center gap-6">
            <span className="text-xs font-bold text-highlight uppercase tracking-wider">
              Comparing ({compareList.length}/3 items)
            </span>

            <div className="flex gap-3">
              {compareList.map((item) => (
                <div key={item.slug} className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full text-xs text-primary">
                  <span>{item.name.substring(0, 15)}...</span>
                  <button onClick={() => toggleCompare(item)} className="text-highlight hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <button onClick={clearCompare} className="text-xs text-secondary hover:text-white underline">
              Clear All
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
