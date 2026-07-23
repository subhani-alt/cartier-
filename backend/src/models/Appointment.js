import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    boutiqueLocation: { type: String, required: true }, // e.g., 'Paris Place Vendôme', 'New York Fifth Ave', 'London Bond St', 'Tokyo Ginza'
    serviceType: { type: String, required: true }, // 'Watch Consultation', 'Fragrance Bespoke Workshop', 'Private VIP Salon'
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    notes: { type: String },
    status: { type: String, enum: ['Confirmed', 'Pending', 'Completed'], default: 'Confirmed' }
  },
  { timestamps: true }
);

export const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
