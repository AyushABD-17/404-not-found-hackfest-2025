import express from 'express';
import { isAuthenticate } from '../middleware/auth';
import { predictEventIssues } from '../controllers/api.gemini.controller';

const router = express.Router();

// Protected route - requires authentication
// router.use(isAuthenticate);

// Route for predicting event issues
router.post('/predict-issues', predictEventIssues);

export default router; 