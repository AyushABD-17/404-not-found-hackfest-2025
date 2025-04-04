import { Request, Response } from 'express';
import Event from '../models/event.model';
import EventDetail from '../models/event.detail.model';
import { Types } from 'mongoose';

class EventController {
  /**
   * Get all events with basic information
   * @route GET /api/events
   */
  async getAllEvents(req: Request, res: Response) {
    try {
      // Check if Client model exists before populating
      let events;
      try {
        events = await Event.find()
          .populate('clientId', 'name email')
          .sort({ createdAt: -1 });
      } catch (populateError) {
        // If Client model doesn't exist, fetch events without populating
        console.warn('Client model not found, fetching events without client details');
        events = await Event.find()
          .sort({ createdAt: -1 });
      }

      return res.status(200).json({
        success: true,
        data: events
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error fetching events',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Get single event with all details
   * @route GET /api/events/:eventId/full
   */
  async getEventWithDetails(req: Request, res: Response) {
    try {
      const { eventId } = req.params;

      let event;
      try {
        event = await Event.findById(eventId)
          .populate('clientId')
          .populate('eventDetailId');
      } catch (populateError) {
        // If models don't exist, fetch event without populating
        console.warn('Models not found, fetching event without details');
        event = await Event.findById(eventId);
      }

      if (!event) {
        return res.status(404).json({
          success: false,
          message: 'Event not found'
        });
      }

      return res.status(200).json({
        success: true,
        data: event
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error fetching event details',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Get all events with their venue details
   * @route GET /api/events/with-venues
   */
  async getAllEventsWithVenues(req: Request, res: Response) {
    try {
      let events;
      try {
        events = await Event.find()
          .populate('clientId', 'name email')
          .populate({
            path: 'eventDetailId',
            select: 'name address floors'
          })
          .sort({ startDate: 1 });
      } catch (populateError) {
        // If models don't exist, fetch events without populating
        console.warn('Models not found, fetching events without details');
        events = await Event.find()
          .sort({ startDate: 1 });
      }

      return res.status(200).json({
        success: true,
        data: events
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error fetching events with venues',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Get events by date range
   * @route GET /api/events/by-date
   */
  async getEventsByDateRange(req: Request, res: Response) {
    try {
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({
          success: false,
          message: 'Start date and end date are required'
        });
      }

      let events;
      try {
        events = await Event.find({
          startDate: { $gte: new Date(startDate as string) },
          endDate: { $lte: new Date(endDate as string) }
        })
          .populate('clientId')
          .populate('eventDetailId')
          .sort({ startDate: 1 });
      } catch (populateError) {
        // If models don't exist, fetch events without populating
        console.warn('Models not found, fetching events without details');
        events = await Event.find({
          startDate: { $gte: new Date(startDate as string) },
          endDate: { $lte: new Date(endDate as string) }
        })
          .sort({ startDate: 1 });
      }

      return res.status(200).json({
        success: true,
        data: events
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error fetching events by date range',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Get venue details with active issues
   * @route GET /api/events/:eventId/active-issues
   */
  async getVenueWithActiveIssues(req: Request, res: Response) {
    try {
      const { eventId } = req.params;

      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({
          success: false,
          message: 'Event not found'
        });
      }

      const venueDetails = await EventDetail.findById(event.eventDetailId);
      if (!venueDetails) {
        return res.status(404).json({
          success: false,
          message: 'Venue details not found'
        });
      }

      // Extract locations with issues
      const locationsWithIssues = venueDetails.floors.flatMap(floor =>
        floor.locations.filter(location => location.issues.length > 0)
      );

      return res.status(200).json({
        success: true,
        data: {
          eventName: event.name,
          venueName: venueDetails.name,
          locationsWithIssues
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error fetching venue issues',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Search events by name or venue
   * @route GET /api/events/search
   */
  async searchEvents(req: Request, res: Response) {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({
          success: false,
          message: 'Search query is required'
        });
      }

      let events;
      try {
        events = await Event.find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
          ]
        })
          .populate('clientId')
          .populate({
            path: 'eventDetailId',
            match: {
              $or: [
                { name: { $regex: query, $options: 'i' } },
                { address: { $regex: query, $options: 'i' } }
              ]
            }
          })
          .sort({ startDate: 1 });
      } catch (populateError) {
        // If models don't exist, fetch events without populating
        console.warn('Models not found, fetching events without details');
        events = await Event.find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } }
          ]
        })
          .sort({ startDate: 1 });
      }

      return res.status(200).json({
        success: true,
        data: events
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error searching events',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Create a new event with venue details
   * @route POST /api/events
   */
  async createEvent(req: Request, res: Response) {
    try {
      const { 
        name, 
        description, 
        startDate, 
        endDate, 
        expectedAttendees, 
        clientId,
        venueDetails 
      } = req.body;

      // Validate required fields
      if (!name || !description || !startDate || !endDate || !expectedAttendees || !clientId || !venueDetails) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Create event first
      const newEvent = new Event({
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        expectedAttendees,
        clientId
      });

      const savedEvent = await newEvent.save();

      // Create venue details with reference to event
      const newVenueDetail = new EventDetail({
        name: venueDetails.name,
        address: venueDetails.address,
        floors: venueDetails.floors,
        createdBy: clientId,
        eventId: savedEvent._id as Types.ObjectId  // Cast to ObjectId
      });

      const savedVenueDetail = await newVenueDetail.save();

      // Update event with reference to venue details
      savedEvent.eventDetailId = savedVenueDetail._id as Types.ObjectId;  // Cast to ObjectId
      await savedEvent.save();

      return res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: {
          event: savedEvent,
          venueDetails: savedVenueDetail
        }
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error creating event',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
}

export default new EventController();
