import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import { seedDB } from './seeders/seedData.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parser Middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: '*' }));
app.use(express.json());

// API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/appointments', appointmentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    brand: 'MAISON AURÉLIA — Haute Horlogerie & Parfumerie',
    status: 'Operational',
    version: '1.0.0',
    timestamp: new Date()
  });
});

// Serve static assets from frontend build
const frontendDist = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDist));

// SPA Catch-all fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err.stack);
  res.status(500).json({ message: err.message || 'Maison Aurélia Internal Server Error' });
});

// Boot Unified Server
app.listen(PORT, async () => {
  console.log(`\n=================================================`);
  console.log(`⚜️ MAISON AURÉLIA UNIFIED FULL-STACK SERVER LIVE ON PORT ${PORT}`);
  console.log(`🔗 COMBINED LOCALHOST LINK: http://localhost:${PORT}`);
  console.log(`=================================================\n`);
  
  await connectDB();
  try {
    await seedDB();
  } catch (e) {
    console.log('[Seed] Default seed loaded in memory.');
  }
});
