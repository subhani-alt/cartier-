import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { bookAppointmentAPI } from '../../services/api';

export const AppointmentModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: 'Lord Aurelius',
    email: 'collector@aurelia.luxury',
    phone: '+1 212 555 0199',
    boutiqueLocation: 'Paris Place Vendôme',
    serviceType: 'Private Horlogerie Consultation',
    preferredDate: '2026-10-15',
    preferredTime: '14:30',
    notes: 'Desire to view the L\'Or Impérial Skeleton Tourbillon.'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookAppointmentAPI(form);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-ivory rounded-luxury max-w-xl w-full p-6 sm:p-10 border border-secondary shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-dark hover:bg-accent hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center space-y-4 py-8">
            <CheckCircle2 className="w-12 h-12 text-success mx-auto" />
            <h3 className="font-serif-luxury text-3xl text-dark">VIP Consultation Confirmed</h3>
            <p className="text-xs text-text-muted">
              Our Maison Host in <span className="font-bold text-dark">{form.boutiqueLocation}</span> looks forward to welcoming you on {form.preferredDate} at {form.preferredTime}.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-3 bg-highlight text-dark text-xs font-semibold uppercase tracking-wider rounded-full"
            >
              Return to Gallery
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-2 mb-6">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Private Salon Appointment
              </span>
              <h3 className="font-serif-luxury text-3xl text-dark">Book a Personal Consultation</h3>
              <p className="text-xs text-text-muted">Enjoy a private viewing with champagne refreshment in our VIP salons.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-dark block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-surface border border-secondary rounded-xl py-2.5 px-3 text-xs text-dark"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-dark block mb-1">Phone Number</label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-surface border border-secondary rounded-xl py-2.5 px-3 text-xs text-dark"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase text-dark block mb-1">Select Boutique Salon</label>
              <select
                value={form.boutiqueLocation}
                onChange={(e) => setForm({ ...form, boutiqueLocation: e.target.value })}
                className="w-full bg-surface border border-secondary rounded-xl py-2.5 px-3 text-xs text-dark"
              >
                <option>Paris Place Vendôme</option>
                <option>New York Fifth Avenue</option>
                <option>Geneva Rue du Rhône</option>
                <option>Tokyo Ginza</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-dark block mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={form.preferredDate}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className="w-full bg-surface border border-secondary rounded-xl py-2.5 px-3 text-xs text-dark"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-dark block mb-1">Preferred Time</label>
                <input
                  type="time"
                  required
                  value={form.preferredTime}
                  onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                  className="w-full bg-surface border border-secondary rounded-xl py-2.5 px-3 text-xs text-dark"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-highlight hover:bg-accent text-dark hover:text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full transition-all shadow-luxury"
            >
              Confirm VIP Salon Booking
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
