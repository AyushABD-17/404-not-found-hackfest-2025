import express from 'express';
import { isAuthenticate, authorizeRoles } from '../middleware/auth';
import {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
  submitFeedback,
  getUserFeedback,
  getEventFeedback,
  getSessionFeedback,
  getAnonymousFeedback,
  getNonAnonymousFeedback,
  getFeedbackByRating,
  getFeedbackByLikedMost
} from '../controllers/feedback.controller';

const feedbackRouter = express.Router();

// Create a new feedback
feedbackRouter.post('/create', isAuthenticate, createFeedback);

// Get all feedback (with filters)
feedbackRouter.get('/all', isAuthenticate, getAllFeedback);

// Get feedback by ID
feedbackRouter.get('/:id', isAuthenticate, getFeedbackById);

// Update feedback
feedbackRouter.put('/:id', isAuthenticate, updateFeedback);

// Delete feedback
feedbackRouter.delete('/:id', isAuthenticate, deleteFeedback);

// Submit feedback (change status from draft to submitted)
feedbackRouter.post('/:id/submit', isAuthenticate, submitFeedback);

// Get user's feedback
feedbackRouter.get('/user/feedback', isAuthenticate, getUserFeedback);

// Get feedback for a specific event
feedbackRouter.get('/event/:eventId', isAuthenticate, getEventFeedback);

// Get feedback for a specific session
feedbackRouter.get('/session/:sessionId', isAuthenticate, getSessionFeedback);

// Get anonymous feedback
feedbackRouter.get('/anonymous', isAuthenticate, getAnonymousFeedback);

// Get non-anonymous feedback
feedbackRouter.get('/non-anonymous', isAuthenticate, getNonAnonymousFeedback);

// Get feedback by rating
feedbackRouter.get('/rating/:rating', isAuthenticate, getFeedbackByRating);

// Get feedback by liked most
feedbackRouter.get('/liked-most/:likedMost', isAuthenticate, getFeedbackByLikedMost);

export default feedbackRouter; 