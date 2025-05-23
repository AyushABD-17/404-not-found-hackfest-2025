import { authorizeRoles } from "./../middleware/auth";
import { Router } from "express";
import EventController from "../controllers/event.controller";

const router = Router();

// Create a new event with venue details
router.post("/", 
    // authorizeRoles("client"), 
    EventController.createEvent);


router.get("/:id", 
      // authorizeRoles("client"), 
      EventController.getEventById);
  
// Get all events (basic info)
router.get("/", 
    // authorizeRoles("client"), 
    EventController.getAllEvents);

// Get single event with full details
router.get(
  "/:eventId/full",
//   authorizeRoles("client"),
  EventController.getEventDetails
);

// Get all events with venue details
router.get(
  "/with-venues",
//   authorizeRoles("client"),
  EventController.getAllEventsWithVenues
);

// Get events by date range
router.get(
  "/by-date",
//   authorizeRoles("client"),
  EventController.getEventsByDateRange
);

// Get venue with active issues
// router.get(
//   "/:eventId/active-issues",
// //   authorizeRoles("client"),
//   EventController.getVenueWithActiveIssues
// );

// Search events
router.get("/search", 
    // authorizeRoles("client"), 
    EventController.searchEvents);


router.post("/connect-to-user", 
    // authorizeRoles("client"), 
    EventController.connectEventToUser);

router.get("/user/:userId", 
    // authorizeRoles("client"), 
    EventController.getEventsByUserId);

export default router;
