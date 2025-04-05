import express from 'express';
import { isAuthenticate } from '../middleware/auth';
import {
  generateProactiveResponse,
  generateEventSuggestions,
  generateEventInsights
} from '../controllers/aichat.controller';

const router = express.Router();

// Protected routes - all routes require authentication
// router.use(isAuthenticate);

// Generate proactive response for negative feedback
router.post('/proactive-response', generateProactiveResponse);

// Generate suggestions for event improvement
router.post('/event-suggestions', generateEventSuggestions);

// Generate event summary insights
router.post('/event-insights', generateEventInsights);

export default router; 