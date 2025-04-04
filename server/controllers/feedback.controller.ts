import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import Feedback, { IFeedback } from '../models/feedback.model';
import { CatchAsyncError } from '../middleware/CatchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';

// Create a new feedback
export const createFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const feedback = await Feedback.create({
    ...req.body,
    submittedBy: req.user?._id,
  });

  res.status(201).json({
    success: true,
    message: 'Feedback created successfully',
    feedback,
  });
});

// Get all feedback with filters
export const getAllFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const { event, session, status, isAnonymous } = req.query;
  const filter: any = {};

  if (event) filter['session.event'] = event;
  if (session) filter['session._id'] = session;
  if (status) filter.status = status;
  if (isAnonymous !== undefined) filter.isAnonymous = isAnonymous === 'true';

  const feedback = await Feedback.find(filter)
    .populate('submittedBy', 'name email')
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback by ID
export const getFeedbackById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const feedback = await Feedback.findById(req.params.id)
    .populate('submittedBy', 'name email')
    .populate('session.event', 'name');

  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Update feedback
export const updateFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  // Check if the user is the one who submitted the feedback
  if (feedback.submittedBy && feedback.submittedBy.toString() !== req.user?._id?.toString()) {
    return next(new ErrorHandler('You are not authorized to update this feedback', 403));
  }

  // Update feedback fields
  const updateData = req.body as Partial<IFeedback>;
  Object.keys(updateData).forEach((key) => {
    if (key in feedback) {
      (feedback as any)[key] = updateData[key as keyof IFeedback];
    }
  });

  await feedback.save();

  res.status(200).json({
    success: true,
    message: 'Feedback updated successfully',
    feedback,
  });
});

// Delete feedback
export const deleteFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  // Check if the user is the one who submitted the feedback
  if (feedback.submittedBy && feedback.submittedBy.toString() !== req.user?._id?.toString()) {
    return next(new ErrorHandler('You are not authorized to delete this feedback', 403));
  }

  await feedback.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Feedback deleted successfully',
  });
});

// Submit feedback (change status from draft to submitted)
export const submitFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  // Check if the user is the one who created the feedback
  if (feedback.submittedBy && feedback.submittedBy.toString() !== req.user?._id?.toString()) {
    return next(new ErrorHandler('You are not authorized to submit this feedback', 403));
  }

  // Check if the feedback is already submitted
  if (feedback.status === 'submitted') {
    return next(new ErrorHandler('Feedback is already submitted', 400));
  }

  feedback.status = 'submitted';
  await feedback.save();

  res.status(200).json({
    success: true,
    message: 'Feedback submitted successfully',
    feedback,
  });
});

// Get user's feedback
export const getUserFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const feedback = await Feedback.find({ submittedBy: req.user?._id })
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback for a specific event
export const getEventFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params;

  if (!Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Invalid event ID', 400));
  }

  const feedback = await Feedback.find({ 'session.event': eventId })
    .populate('submittedBy', 'name email')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback for a specific session
export const getSessionFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { sessionId } = req.params;

  if (!Types.ObjectId.isValid(sessionId)) {
    return next(new ErrorHandler('Invalid session ID', 400));
  }

  const feedback = await Feedback.find({ 'session._id': sessionId })
    .populate('submittedBy', 'name email')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get anonymous feedback
export const getAnonymousFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const feedback = await Feedback.find({ isAnonymous: true })
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get non-anonymous feedback
export const getNonAnonymousFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const feedback = await Feedback.find({ isAnonymous: false })
    .populate('submittedBy', 'name email')
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback by rating
export const getFeedbackByRating = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { rating } = req.params;

  const ratingNum = parseInt(rating);
  if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return next(new ErrorHandler('Invalid rating value', 400));
  }

  const feedback = await Feedback.find({ contentQualityRating: ratingNum })
    .populate('submittedBy', 'name email')
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback by liked most
export const getFeedbackByLikedMost = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { likedMost } = req.params;

  const validOptions = ['Content', 'Speaker', 'Interactivity', 'Visuals', 'Q&A', 'Length'];
  if (!validOptions.includes(likedMost)) {
    return next(new ErrorHandler('Invalid liked most option', 400));
  }

  const feedback = await Feedback.find({ likedMost })
    .populate('submittedBy', 'name email')
    .populate('session.event', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
}); 