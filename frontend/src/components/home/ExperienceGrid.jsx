import React from 'react';
import { Package, RotateCw, Calendar, Truck, ShieldCheck, Gift } from 'lucide-react';

export const ExperienceGrid = ({ onOpenAppointment }) => {
  const services = [
    {
      icon: Gift,
      title: "Bespoke Packaging & Engraving",
      desc: "Every creation arrives in our signature Royal Ivory velvet vault with custom silk ribbons and personalised gold plaque engraving."
    },
    {
      icon: RotateCw,
      title: "360° Horological Rotator",
      desc: "Inspect openwork movements, tourbillon bridges, and hand-bevelled edges from every angle before acquisition."
    },
    {
      icon: Calendar,
      title: "Private Salon Appointments",
      desc: "Book a private consultation in Place Vendôme Paris, Fifth Ave New York, or Rue du Rhône Geneva.",
      action: onOpenAppointment
    },
    {
      icon: Truck,
      title: "White-Glove Courier",
      desc: "Complimentary worldwide express shipping with full transit insurance and signature delivery."
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-accent font-display-luxury text-xs uppercase tracking-[0.3em]">
            White-Glove Standard
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl text-dark font-light">
            The Maison Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={item.action}
                className={`bg-primary p-8 rounded-luxury border border-secondary/40 shadow-sm hover:shadow-luxury transition-all duration-300 space-y-4 ${
                  item.action ? 'cursor-pointer hover:border-highlight' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-accent">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl text-dark font-medium">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                {item.action && (
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent block pt-2">
                    Book Visit &rarr;
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
