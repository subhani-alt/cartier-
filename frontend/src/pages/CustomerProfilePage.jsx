import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { User, Package, Heart, MapPin, ShieldCheck, Clock } from 'lucide-react';

export const CustomerProfilePage = () => {
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'wishlist' | 'address'

  const mockOrders = [
    {
      orderNumber: 'MA-2026-8801',
      date: '2026-07-20',
      total: 34500,
      status: 'In Assembly',
      tracking: 'MA-FEDEX-99201',
      items: [
        { name: "L'Or Impérial Skeleton Tourbillon", qty: 1, price: 34500, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=300" }
      ]
    },
    {
      orderNumber: 'MA-2026-8802',
      date: '2026-06-14',
      total: 840,
      status: 'Delivered',
      tracking: 'MA-DHL-77102',
      items: [
        { name: "Oud Royal & Santal Imperial", qty: 2, price: 420, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300" }
      ]
    }
  ];

  return (
    <div className="bg-ivory py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Collector Header */}
        <div className="bg-dark text-primary p-8 sm:p-12 rounded-luxury shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-6 z-10">
            <img src={user?.avatar} alt={user?.name} className="w-20 h-20 rounded-full border-2 border-highlight object-cover" />
            <div>
              <span className="text-highlight text-[10px] uppercase tracking-[0.3em] font-bold block">VIP Collector Status</span>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl text-primary">{user?.name}</h1>
              <p className="text-xs text-secondary/80">{user?.email}</p>
            </div>
          </div>

          <div className="z-10 flex gap-4 text-xs">
            <div className="bg-primary/10 px-4 py-2 rounded-xl border border-secondary/30 text-center">
              <span className="text-highlight font-bold text-lg block font-serif-luxury">$35,340</span>
              <span className="text-[10px] text-secondary">Lifetime Investment</span>
            </div>
            <div className="bg-primary/10 px-4 py-2 rounded-xl border border-secondary/30 text-center">
              <span className="text-highlight font-bold text-lg block font-serif-luxury">02</span>
              <span className="text-[10px] text-secondary">Acquisitions</span>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="flex border-b border-secondary/40 space-x-8 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 flex items-center gap-2 ${activeTab === 'orders' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted hover:text-dark'}`}
          >
            <Package className="w-4 h-4" /> Acquisition History
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`pb-3 flex items-center gap-2 ${activeTab === 'wishlist' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted hover:text-dark'}`}
          >
            <Heart className="w-4 h-4" /> Saved Wishlist ({wishlist.length})
          </button>
          <button
            onClick={() => setActiveTab('address')}
            className={`pb-3 flex items-center gap-2 ${activeTab === 'address' ? 'border-b-2 border-accent text-accent font-bold' : 'text-text-muted hover:text-dark'}`}
          >
            <MapPin className="w-4 h-4" /> Address Vault
          </button>
        </div>

        {/* Tab 1: Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {mockOrders.map((ord) => (
              <div key={ord.orderNumber} className="bg-primary p-6 rounded-luxury border border-secondary space-y-4">
                <div className="flex flex-col sm:flex-row justify-between border-b border-secondary/40 pb-4 text-xs gap-2">
                  <div>
                    <span className="font-bold text-dark text-sm block font-serif-luxury">{ord.orderNumber}</span>
                    <span className="text-text-muted">Acquired on {ord.date}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="bg-secondary/60 text-accent font-bold px-3 py-1 rounded-full text-[10px] uppercase">
                      Status: {ord.status}
                    </span>
                    <span className="font-serif-luxury text-base font-bold text-dark">${ord.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {ord.items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <img src={it.img} alt={it.name} className="w-12 h-14 object-cover rounded-lg bg-surface" />
                        <div>
                          <h4 className="font-serif-luxury text-sm font-semibold text-dark">{it.name}</h4>
                          <span className="text-text-muted">Quantity: {it.qty}</span>
                        </div>
                      </div>
                      <span className="font-serif-luxury font-bold text-dark">${(it.price * it.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-accent font-medium flex justify-between border-t border-secondary/40">
                  <span>Tracking: {ord.tracking}</span>
                  <span>Complimentary Courier Insurance Attached</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Wishlist */}
        {activeTab === 'wishlist' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {wishlist.length === 0 ? (
              <p className="text-xs text-text-muted col-span-3 py-8 text-center">No saved timepieces or fragrances in your wishlist.</p>
            ) : (
              wishlist.map((item) => (
                <div key={item.slug} className="bg-primary p-4 rounded-luxury border border-secondary space-y-3">
                  <img src={item.images[0]} alt={item.name} className="w-full aspect-[4/3] object-cover rounded-xl" />
                  <h4 className="font-serif-luxury text-lg text-dark">{item.name}</h4>
                  <span className="font-serif-luxury text-base font-bold text-dark block">${item.price.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Address */}
        {activeTab === 'address' && (
          <div className="bg-primary p-6 rounded-luxury border border-secondary max-w-md space-y-3">
            <span className="text-[10px] font-bold uppercase text-accent bg-secondary/60 px-2.5 py-1 rounded-full">
              Primary Vault Address
            </span>
            <h4 className="font-serif-luxury text-xl text-dark font-medium">Lord Aurelius</h4>
            <p className="text-xs text-text-muted">740 Park Avenue, Apt 14B</p>
            <p className="text-xs text-text-muted">New York, NY 10021, United States</p>
          </div>
        )}

      </div>
    </div>
  );
};
