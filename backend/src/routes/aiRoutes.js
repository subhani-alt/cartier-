import express from 'express';
import { aiConciergeConsult } from '../controllers/aiController.js';

const router = express.Router();

router.post('/consult', aiConciergeConsult);

export default router;
