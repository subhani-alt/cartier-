import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, products = [] }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/85 backdrop-blur-md flex items-start justify-center pt-20 p-4">
      <div className="bg-ivory rounded-luxury max-w-2xl w-full p-6 sm:p-8 border border-secondary shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-accent absolute left-4 top-4" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search watches, tourbillons, oud fragrances, rose extraits..."
            className="w-full bg-surface border border-secondary rounded-full py-3.5 pl-12 pr-4 text-sm text-dark placeholder:text-text-muted focus:outline-none focus:border-highlight"
          />
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="font-semibold text-dark">Suggested:</span>
          <button onClick={() => setQuery('Skeleton')} className="bg-secondary/40 px-3 py-1 rounded-full hover:bg-secondary">
            Skeleton Tourbillon
          </button>
          <button onClick={() => setQuery('Oud')} className="bg-secondary/40 px-3 py-1 rounded-full hover:bg-secondary">
            Oud & Santal
          </button>
          <button onClick={() => setQuery('Moonphase')} className="bg-secondary/40 px-3 py-1 rounded-full hover:bg-secondary">
            Moonphase
          </button>
          <button onClick={() => setQuery('Iris')} className="bg-secondary/40 px-3 py-1 rounded-full hover:bg-secondary">
            Iris Blanc
          </button>
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div className="space-y-3 max-h-80 overflow-y-auto pt-2 border-t border-secondary/40">
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent block">
              Found {results.length} Matches
            </span>

            {results.length === 0 ? (
              <p className="text-xs text-text-muted py-4 text-center">No luxury items match your query.</p>
            ) : (
              results.map((item) => (
                <div
                  key={item.slug}
                  onClick={() => handleSelect(item.slug)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-primary border border-transparent hover:border-secondary transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-serif-luxury text-sm font-semibold text-dark">{item.name}</h4>
                      <span className="text-xs text-text-muted">{item.category} • ${item.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
