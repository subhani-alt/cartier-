import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';

import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CursorEffect } from './components/common/CursorEffect';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CustomerProfilePage } from './pages/CustomerProfilePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { Interactive360Viewer } from './components/product/Interactive360Viewer';
import { PackagingPreviewer } from './components/product/PackagingPreviewer';
import { AiConciergeModal } from './components/interactive/AiConciergeModal';
import { StoreLocatorModal } from './components/interactive/StoreLocatorModal';
import { AppointmentModal } from './components/interactive/AppointmentModal';
import { SearchModal } from './components/interactive/SearchModal';
import { LiveChatWidget } from './components/interactive/LiveChatWidget';

import { fetchProductsAPI } from './services/api';

export function App() {
  const [products, setProducts] = useState([]);
  const [selected360Product, setSelected360Product] = useState(null);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPackagingOpen, setIsPackagingOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsAPI();
      setProducts(data.products || []);
    };
    loadProducts();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <CompareProvider>
            <Router>
              <div className="min-h-screen bg-ivory text-text-main flex flex-col justify-between selection:bg-highlight selection:text-white">
                
                <CursorEffect />
                <AnnouncementBar />
                
                <Navbar
                  onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
                  onOpenAppointment={() => setIsAppointmentOpen(true)}
                  onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
                  onOpenSearch={() => setIsSearchOpen(true)}
                />

                <main className="flex-1">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <HomePage
                          products={products}
                          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
                          onOpenAppointment={() => setIsAppointmentOpen(true)}
                          onSelect360Product={(p) => setSelected360Product(p)}
                          onSelectQuickView={(p) => setSelected360Product(p)}
                        />
                      }
                    />

                    <Route
                      path="/shop"
                      element={
                        <ShopPage
                          products={products}
                          onSelect360Product={(p) => setSelected360Product(p)}
                          onSelectQuickView={(p) => setSelected360Product(p)}
                        />
                      }
                    />

                    <Route
                      path="/product/:slug"
                      element={
                        <ProductDetailPage
                          products={products}
                          onSelect360Product={(p) => setSelected360Product(p)}
                          onOpenPackaging={() => setIsPackagingOpen(true)}
                        />
                      }
                    />

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/profile" element={<CustomerProfilePage />} />
                    <Route
                      path="/admin"
                      element={<AdminDashboardPage products={products} />}
                    />
                  </Routes>
                </main>

                <Footer />

                {/* Drawers & Interactive Overlays */}
                <CartDrawer onOpenPackaging={() => setIsPackagingOpen(true)} />
                <CheckoutModal />

                {selected360Product && (
                  <Interactive360Viewer
                    product={selected360Product}
                    onClose={() => setSelected360Product(null)}
                  />
                )}

                <PackagingPreviewer
                  isOpen={isPackagingOpen}
                  onClose={() => setIsPackagingOpen(false)}
                  onSavePackaging={(cfg) => console.log('Packaging configured:', cfg)}
                />

                <AiConciergeModal
                  isOpen={isAiConciergeOpen}
                  onClose={() => setIsAiConciergeOpen(false)}
                  onSelectProduct={(p) => setSelected360Product(p)}
                />

                <StoreLocatorModal
                  isOpen={isStoreLocatorOpen}
                  onClose={() => setIsStoreLocatorOpen(false)}
                  onOpenAppointment={() => setIsAppointmentOpen(true)}
                />

                <AppointmentModal
                  isOpen={isAppointmentOpen}
                  onClose={() => setIsAppointmentOpen(false)}
                />

                <SearchModal
                  isOpen={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                  products={products}
                />

                <LiveChatWidget />

              </div>
            </Router>
          </CompareProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
