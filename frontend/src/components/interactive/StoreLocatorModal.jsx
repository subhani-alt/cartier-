import React from 'react';
import { X, MapPin, Phone, Clock, Calendar } from 'lucide-react';

export const StoreLocatorModal = ({ isOpen, onClose, onOpenAppointment }) => {
  if (!isOpen) return null;

  const boutiques = [
    {
      city: "Paris",
      address: "15 Place Vendôme, 75001 Paris, France",
      phone: "+33 1 42 68 50 00",
      hours: "Mon - Sat: 10:00 - 19:30",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600"
    },
    {
      city: "New York",
      address: "740 Park Avenue, New York, NY 10021, USA",
      phone: "+1 212 555 0199",
      hours: "Mon - Sat: 10:00 - 19:00",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600"
    },
    {
      city: "Geneva",
      address: "24 Rue du Rhône, 1204 Genève, Switzerland",
      phone: "+41 22 819 30 00",
      hours: "Mon - Fri: 09:30 - 18:30",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=600"
    },
    {
      city: "Tokyo",
      address: "6-7-19 Ginza, Chuo-ku, Tokyo 104-0061, Japan",
      phone: "+81 3 5555 8800",
      hours: "Mon - Sun: 11:00 - 20:00",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-dark/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-ivory rounded-luxury max-w-4xl w-full p-6 sm:p-10 border border-secondary shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-8">
          <span className="text-accent text-xs font-display-luxury uppercase tracking-[0.3em] flex items-center justify-center gap-1">
            <MapPin className="w-4 h-4 text-highlight" /> International Flagship Salons
          </span>
          <h3 className="font-serif-luxury text-3xl text-dark">Maison Aurélia Boutiques</h3>
          <p className="text-xs text-text-muted">Experience private salon consultations and bespoke scent workshops.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boutiques.map((b) => (
            <div key={b.city} className="bg-primary rounded-luxury overflow-hidden border border-secondary shadow-sm flex flex-col justify-between">
              <div className="h-40 overflow-hidden relative">
                <img src={b.image} alt={b.city} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-dark/90 text-highlight text-xs font-serif-luxury px-3 py-1 rounded-full font-bold">
                  {b.city} Salon
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs text-dark font-medium flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {b.address}
                </p>
                <p className="text-xs text-text-muted flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent" /> {b.phone}
                </p>
                <p className="text-xs text-text-muted flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent" /> {b.hours}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => { onClose(); onOpenAppointment(); }}
                    className="w-full py-2.5 bg-secondary hover:bg-accent text-dark hover:text-white text-xs uppercase tracking-wider font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Schedule VIP Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
