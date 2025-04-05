import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import Feedback, { IFeedback } from '../models/feedback.model';
import { CatchAsyncError } from '../middleware/CatchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';

// Define request type with user

// Create a new feedback
export const createFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?._id;
  if (!userId) {
    return next(new ErrorHandler('User authentication required', 401));
  }
  console.log("req.body", userId);

  const { eventId, isAnonymous, formFields, status, title, description } = req.body;

  // Basic validation
  if (!eventId || !Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Valid eventId is required', 400));
  }
  if (!formFields || Object.keys(formFields).length === 0) {
    return next(new ErrorHandler('At least one form field is required', 400));
  }

  const feedbackData: Partial<IFeedback> = {
    eventId: new Types.ObjectId(eventId),
    submittedBy: new Types.ObjectId(userId as any),
    isAnonymous: isAnonymous ?? false,
    formFields,
    status: status ?? 'draft',
    ...(title && { title }),
    ...(description && { description }),
  };

  const feedback = await Feedback.create(feedbackData);

  res.status(201).json({
    success: true,
    message: 'Feedback created successfully',
    feedback,
  });
});

// Get all feedback with filters
export const getAllFeedback = CatchAsyncError(async (req: Request, res: Response) => {
  const { event, status, isAnonymous } = req.query;

  const filter: Partial<Record<keyof IFeedback, any>> = {};
  if (event) filter.eventId = new Types.ObjectId(event as string);
  if (status) filter.status = status as 'draft' | 'submitted';
  if (isAnonymous !== undefined) filter.isAnonymous = isAnonymous === 'true';

  const feedback = await Feedback.find(filter)
    .populate('submittedBy', 'name email')
    .populate('eventId', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});

// Get feedback by ID
export const getFeedbackById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler('Invalid feedback ID', 400));
  }

  const feedback = await Feedback.findById(id)
    .populate('submittedBy', 'name email')
    .populate('eventId', 'name');

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
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler('Invalid feedback ID', 400));
  }

  const feedback = await Feedback.findById(id);
  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  const userId = req.user?._id;
  if (!userId || feedback.submittedBy.toString() !== userId) {
    return next(new ErrorHandler('You are not authorized to update this feedback', 403));
  }

  const { eventId, isAnonymous, formFields, status, title, description } = req.body;

  // Validation for updates
  if (eventId && !Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Invalid eventId', 400));
  }
  if (formFields && Object.keys(formFields).length === 0) {
    return next(new ErrorHandler('Form fields cannot be empty', 400));
  }

  // Update fields
  feedback.eventId = eventId ? new Types.ObjectId(eventId) : feedback.eventId;
  feedback.isAnonymous = isAnonymous !== undefined ? isAnonymous : feedback.isAnonymous;
  feedback.formFields = formFields || feedback.formFields;
  feedback.status = status || feedback.status;

  await feedback.save();

  res.status(200).json({
    success: true,
    message: 'Feedback updated successfully',
    feedback,
  });
});

// Delete feedback
export const deleteFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler('Invalid feedback ID', 400));
  }

  const feedback = await Feedback.findById(id);
  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  const userId = req.user?._id;
  if (!userId || feedback.submittedBy.toString() !== userId) {
    return next(new ErrorHandler('You are not authorized to delete this feedback', 403));
  }

  await feedback.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Feedback deleted successfully',
  });
});

// Submit feedback (change status to submitted)
export const submitFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler('Invalid feedback ID', 400));
  }

  const feedback = await Feedback.findById(id);
  if (!feedback) {
    return next(new ErrorHandler('Feedback not found', 404));
  }

  const userId = req.user?._id;
  if (!userId || feedback.submittedBy.toString() !== userId) {
    return next(new ErrorHandler('You are not authorized to submit this feedback', 403));
  }

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
export const getUserFeedback = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?._id;
  if (!userId) {
    return next(new ErrorHandler('User authentication required', 401));
  }

  const feedback = await Feedback.find({ submittedBy: new Types.ObjectId(userId as any) })
    .populate('eventId', 'name')
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

  const feedback = await Feedback.find({ eventId: new Types.ObjectId(eventId) })
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
    .populate('eventId', 'name')
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
    .populate('eventId', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    feedback,
  });
});