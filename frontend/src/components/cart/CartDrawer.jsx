import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Sparkles, Gift } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer = ({ onOpenPackaging }) => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    totalPrice,
    couponCode,
    applyCoupon,
    setIsCheckoutOpen
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-dark/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl border-l border-secondary/60 flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-secondary/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent" />
              <h2 className="font-serif-luxury text-2xl text-dark font-medium">Acquisition Vault</h2>
              <span className="text-xs bg-secondary/60 px-2.5 py-0.5 rounded-full font-bold text-dark">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-secondary/50 text-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Banner */}
          <div className="bg-primary px-6 py-3 border-b border-secondary/40 text-xs text-dark flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-highlight" /> Complimentary Express Courier Unlocked
            </span>
            <span className="text-[10px] text-accent uppercase tracking-wider font-bold">Free Worldwide</span>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-secondary mx-auto" />
                <p className="font-serif-luxury text-xl text-dark">Your acquisition vault is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-dark text-primary text-xs uppercase tracking-widest rounded-full"
                >
                  Explore Timepieces & Fragrances
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.slug} className="flex gap-4 pb-6 border-b border-secondary/40">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-luxury-sm bg-surface border border-secondary"
                  />
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif-luxury text-base text-dark font-medium line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.slug)}
                          className="text-text-muted hover:text-accent transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <span className="text-xs text-text-muted">{item.product.category}</span>

                      {item.engravingText && (
                        <div className="text-[11px] text-accent flex items-center gap-1 mt-1">
                          <Gift className="w-3 h-3" /> Engraved: "{item.engravingText}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-secondary rounded-full bg-primary px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                          className="p-1 text-dark hover:text-accent"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-dark">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                          className="p-1 text-dark hover:text-accent"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif-luxury text-base font-semibold text-dark">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-secondary/60 bg-primary space-y-4">
              
              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-accent absolute left-3 top-3" />
                  <input
                    type="text"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    placeholder="Promo Code (Try AURELIA10)"
                    className="w-full bg-ivory border border-secondary rounded-full py-2 pl-9 pr-3 text-xs uppercase placeholder:normal-case focus:outline-none focus:border-highlight"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 bg-secondary hover:bg-accent text-dark hover:text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponFeedback && (
                <p className={`text-[11px] font-semibold ${couponFeedback.success ? 'text-success' : 'text-red-600'}`}>
                  {couponFeedback.message}
                </p>
              )}

              {/* Subtotal calculation */}
              <div className="space-y-1.5 text-xs text-text-muted pt-2 border-t border-secondary/40">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif-luxury text-dark font-medium">${subtotal.toLocaleString()}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-success font-semibold">
                    <span>VIP Discount (10%)</span>
                    <span>-${discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Courier & Insurance</span>
                  <span className="text-accent uppercase font-bold">Complimentary</span>
                </div>

                <div className="flex justify-between text-base font-bold text-dark pt-2 border-t border-secondary/40">
                  <span className="font-serif-luxury text-xl">Total Investment</span>
                  <span className="font-serif-luxury text-xl">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedCheckout}
                className="w-full py-4 bg-highlight hover:bg-accent text-dark hover:text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury flex items-center justify-center gap-2"
              >
                Proceed to Luxury Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
