import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('aurelia_cart');
    return saved ? JSON.parse(saved) : [
      {
        product: {
          _id: 'prod_001',
          slug: 'lor-imperial-skeleton-tourbillon',
          name: "L'Or Impérial Skeleton Tourbillon",
          category: 'Watches',
          price: 34500,
          images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"]
        },
        quantity: 1,
        engravingText: "Aurelius - MXXVI",
        packagingType: "Maison Aurélia Royal Ivory Box with Gold Plaque"
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    localStorage.setItem('aurelia_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, engravingText = '', packagingType = 'Maison Aurélia Royal Ivory Box') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.slug === product.slug);
      if (existing) {
        return prev.map(item =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity, engravingText: engravingText || item.engravingText }
            : item
        );
      }
      return [...prev, { product, quantity, engravingText, packagingType }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (slug) => {
    setCartItems(prev => prev.filter(item => item.product.slug !== slug));
  };

  const updateQuantity = (slug, newQty) => {
    if (newQty <= 0) {
      removeFromCart(slug);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.product.slug === slug ? { ...item, quantity: newQty } : item))
    );
  };

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === 'AURELIA10') {
      setCouponCode('AURELIA10');
      setDiscountPercent(10);
      return { success: true, message: 'VIP 10% Discount Applied' };
    }
    return { success: false, message: 'Invalid or expired promotional code' };
  };

  const clearCart = () => {
    setCartItems([]);
    setCouponCode('');
    setDiscountPercent(0);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const totalPrice = subtotal - discountAmount;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        discountAmount,
        totalPrice,
        couponCode,
        discountPercent,
        applyCoupon,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
