import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import ShortFeedback from '../models/shortFeedback.model';
import { CatchAsyncError } from '../middleware/CatchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';

// Create a new short feedback
export const createShortFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const shortFeedback = await ShortFeedback.create({
    ...req.body,
    submittedBy: req.user?._id,
  });

  res.status(201).json({
    success: true,
    message: 'Short feedback created successfully',
    shortFeedback,
  });
});

// Get all short feedback with filters
export const getAllShortFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const { event } = req.query;
  const filter: any = {};

  if (event) filter.event = event;

  const shortFeedback = await ShortFeedback.find(filter)
    .populate('submittedBy', 'name')
    .populate('event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    shortFeedback,
  });
});

// Get short feedback by ID
export const getShortFeedbackById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const shortFeedback = await ShortFeedback.findById(req.params.id)
    .populate('submittedBy', 'name')
    .populate('event', 'name');

  if (!shortFeedback) {
    return next(new ErrorHandler('Short feedback not found', 404));
  }

  res.status(200).json({
    success: true,
    shortFeedback,
  });
});

// Update short feedback
export const updateShortFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const shortFeedback = await ShortFeedback.findById(req.params.id);

  if (!shortFeedback) {
    return next(new ErrorHandler('Short feedback not found', 404));
  }

  // Check if the user is the one who submitted the feedback
  if (shortFeedback.submittedBy && shortFeedback.submittedBy.toString() !== req.user?._id?.toString()) {
    return next(new ErrorHandler('You are not authorized to update this feedback', 403));
  }

  // Update feedback fields
  const updateData = req.body;
  Object.keys(updateData).forEach((key) => {
    if (key in shortFeedback) {
      (shortFeedback as any)[key] = updateData[key];
    }
  });

  await shortFeedback.save();

  res.status(200).json({
    success: true,
    message: 'Short feedback updated successfully',
    shortFeedback,
  });
});

// Delete short feedback
export const deleteShortFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const shortFeedback = await ShortFeedback.findById(req.params.id);

  if (!shortFeedback) {
    return next(new ErrorHandler('Short feedback not found', 404));
  }

  // Check if the user is the one who submitted the feedback
  if (shortFeedback.submittedBy && shortFeedback.submittedBy.toString() !== req.user?._id?.toString()) {
    return next(new ErrorHandler('You are not authorized to delete this feedback', 403));
  }

  await shortFeedback.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Short feedback deleted successfully',
  });
});

// Get user's short feedback
export const getUserShortFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const shortFeedback = await ShortFeedback.find({ submittedBy: req.user?._id })
    .populate('event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    shortFeedback,
  });
});

// Get short feedback for a specific event
export const getEventShortFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;

  if (!Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Invalid event ID', 400));
  }

  const shortFeedback = await ShortFeedback.find({ event: eventId })
    .populate('submittedBy', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    shortFeedback,
  });
});

// Get short feedback by emoji
export const getShortFeedbackByEmoji = CatchAsyncError(async (req: Request, res: Response) => {
  const { emoji } = req.params;

  const shortFeedback = await ShortFeedback.find({ emoji })
    .populate('submittedBy', 'name')
    .populate('event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    shortFeedback,
  });
}); 