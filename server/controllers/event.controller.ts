import { Request, Response } from 'express';
import Event from '../models/event.model';
import { Types } from 'mongoose';

class EventController {
  /**
   * Get all events with basic information
   * @route GET /api/events
   */
  async getAllEvents(req: Request, res: Response) {
    try {
      const events = await Event.find()
        .populate('clientId', 'name email')
        .sort({ createdAt: -1 });

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
   * @route GET /api/events/:eventId
   */
  async getEventDetails(req: Request, res: Response) {
    try {
      const { eventId } = req.params;

      const event = await Event.findById(eventId)
        .populate('clientId', 'name email');

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

      const events = await Event.find({
        startDate: { $gte: new Date(startDate as string) },
        endDate: { $lte: new Date(endDate as string) }
      })
        .populate('clientId', 'name email')
        .sort({ startDate: 1 });

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
   * Search events
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

      const events = await Event.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { venue: { $regex: query, $options: 'i' } },
          { location: { $regex: query, $options: 'i' } }
        ]
      })
        .populate('clientId', 'name email')
        .sort({ startDate: 1 });

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
   * Create a new event
   * @route POST /api/events
   */
  async createEvent(req: Request, res: Response) {
    try {
      const {
        // Step 1: General Information
        name,
        venue,
        location,
        description,
        startDate,
        endDate,
        expectedAttendees,
        clientId,

        // Step 2: Sentiment Tracking
        sentimentTracking,

        // Step 3: Keywords Monitoring
        keywordsMonitoring,

        // Step 4: Alert Severity Levels
        alertSeverity,

        // Step 5: Notification Methods and Recipients
        notificationMethods,
        alertRecipients
      } = req.body;

      // Validate required fields
      if (!name || !venue || !location || !description || !startDate || !endDate || !expectedAttendees || !clientId) {
        return res.status(400).json({
          success: false,
          message: 'Missing required general information fields'
        });
      }

      // Create new event with all configurations
      const newEvent = new Event({
        clientId,
        name,
        venue,
        location,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        expectedAttendees,
        sentimentTracking,
        keywordsMonitoring,
        alertSeverity,
        notificationMethods,
        alertRecipients
      });

      // Validate notification methods
      if (!notificationMethods.pushNotifications.enabled &&
          !notificationMethods.smsNotifications.enabled &&
          !notificationMethods.emailNotifications.enabled) {
        return res.status(400).json({
          success: false,
          message: 'At least one notification method must be enabled'
        });
      }

      // Validate alert recipients
      if (alertRecipients && alertRecipients.length > 0 &&
          !alertRecipients.some((recipient: { isPrimary: boolean }) => recipient.isPrimary)) {
        return res.status(400).json({
          success: false,
          message: 'At least one recipient must be marked as primary'
        });
      }

      const savedEvent = await newEvent.save();

      return res.status(201).json({
        success: true,
        message: 'Event created successfully',
        data: savedEvent
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error creating event',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  /**
   * Update event settings
   * @route PATCH /api/events/:eventId
   */
  async updateEvent(req: Request, res: Response) {
    try {
      const { eventId } = req.params;
      const updateData = req.body;

      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({
          success: false,
          message: 'Event not found'
        });
      }

      // Validate notification methods if being updated
      if (updateData.notificationMethods) {
        const methods = updateData.notificationMethods;
        if (!methods.pushNotifications.enabled &&
            !methods.smsNotifications.enabled &&
            !methods.emailNotifications.enabled) {
          return res.status(400).json({
            success: false,
            message: 'At least one notification method must be enabled'
          });
        }
      }

      // Validate alert recipients if being updated
      if (updateData.alertRecipients && updateData.alertRecipients.length > 0 &&
          !updateData.alertRecipients.some((recipient: { isPrimary: boolean }) => recipient.isPrimary)) {
        return res.status(400).json({
          success: false,
          message: 'At least one recipient must be marked as primary'
        });
      }

      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        { $set: updateData },
        { new: true, runValidators: true }
      );

      return res.status(200).json({
        success: true,
        message: 'Event updated successfully',
        data: updatedEvent
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error updating event',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  async getEventById(req: Request, res: Response) {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).json(event);
  }
}

export default new EventController();
