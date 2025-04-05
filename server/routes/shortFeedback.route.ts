import express from 'express';
import { isAuthenticate } from '../middleware/auth';
import {
  createShortFeedback,
  getAllShortFeedback,
  getShortFeedbackById,
  updateShortFeedback,
  deleteShortFeedback,
  getUserShortFeedback,
  getEventShortFeedback,
  getShortFeedbackByEmoji,
} from '../controllers/shortFeedback.controller';

const router = express.Router();

// Protected routes - all routes require authentication
router.use(isAuthenticate);

// User specific routes
router.get('/user/feedback', getUserShortFeedback);

// Event specific routes
router.get('/event/:eventId', getEventShortFeedback);

// Emoji specific routes
router.get('/emoji/:emoji', getShortFeedbackByEmoji);

// General routes
router.route('/all').get(getAllShortFeedback);
router.route('/create').post(createShortFeedback);

// ID specific routes
router
  .route('/:id')
  .get(getShortFeedbackById)
  .put(updateShortFeedback)
  .delete(deleteShortFeedback);

export default router; 