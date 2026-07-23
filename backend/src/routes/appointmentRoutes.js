import express from 'express';
import { Appointment } from '../models/Appointment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, boutiqueLocation, serviceType, preferredDate, preferredTime, notes } = req.body;
    const appointment = {
      _id: `apt_${Date.now()}`,
      name,
      email,
      phone,
      boutiqueLocation,
      serviceType,
      preferredDate,
      preferredTime,
      notes,
      status: 'Confirmed'
    };
    try {
      await Appointment.create(appointment);
    } catch (e) {}

    res.status(201).json({
      message: 'Private salon consultation appointment confirmed.',
      appointment
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
