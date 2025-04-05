import express from "express";
import { isAuthenticate, authorizeRoles } from "../middleware/auth";
import { 
  getAllFeedback,
  getFeedbackById,
  getAnonymousFeedback,
  updateFeedback,
  getNonAnonymousFeedback,
  createFeedback,
  getEventFeedback,
  getUserFeedback,
  submitFeedback,
  deleteFeedback
} from "../controllers/feedback.controller";

const router = express.Router();

// Protected routes
router.use(isAuthenticate);

// Create a new feedback
router.post("/create",
     isAuthenticate,
      createFeedback);

// Get all feedback (with filters)
router.get("/all", getAllFeedback);

// Get feedback by ID
router.get("/:id", getFeedbackById);

// Update feedback
router.put("/:id", updateFeedback);

// Delete feedback
router.delete("/:id", deleteFeedback);

// Submit feedback (change status from draft to submitted)
router.post("/:id/submit", isAuthenticate, submitFeedback );

// Get user's feedback
router.get("/user/feedback", getUserFeedback);

// Get feedback for a specific event
router.get("/event/:eventId", isAuthenticate, getEventFeedback);



// Get anonymous feedback
router.get("/anonymous", getAnonymousFeedback);

// Get non-anonymous feedback
router.get("/non-anonymous", getNonAnonymousFeedback);





export default router;
