import express from "express";
import { isAuthenticate } from "../middleware/auth";
import {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
  submitFeedback,
  getUserFeedback,
  getEventFeedback,
  getAnonymousFeedback,
  getNonAnonymousFeedback,
  getFeedbackByRating,
  getFeedbackByLikedMost,
} from "../controllers/feedback.controller";

const router = express.Router();

// Protected routes
router.use(isAuthenticate);

// Create a new feedback
router.post("/create", createFeedback);

// Get all feedback (with filters)
router.get("/all", getAllFeedback);

// Get feedback by ID
router.get("/:id", getFeedbackById);

// Update feedback
router.put("/:id", updateFeedback);

// Delete feedback
router.delete("/:id", deleteFeedback);

// Submit feedback (change status from draft to submitted)
router.post("/:id/submit", submitFeedback);

// Get user's feedback
router.get("/user/feedback", getUserFeedback);

// Get feedback for a specific event
router.get("/event/:eventId", getEventFeedback);

// Get anonymous feedback
router.get("/anonymous", getAnonymousFeedback);

// Get non-anonymous feedback
router.get("/non-anonymous", getNonAnonymousFeedback);

// Get feedback by rating
router.get("/rating/:rating", getFeedbackByRating);

// Get feedback by liked most
router.get("/liked-most/:likedMost", getFeedbackByLikedMost);

export default router;
