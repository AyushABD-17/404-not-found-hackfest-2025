// controllers/feedback.controller.ts
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import Feedback, { UserFeedback, IFeedback } from '../models/feedback.model';
import { CatchAsyncError } from '../middleware/CatchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';

// Get feedback form by eventId (public access)
export const getFeedbackForm = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params; // Changed from 'id' to 'eventId'
  if (!Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Invalid event ID', 400));
  }

  const feedback = await Feedback.findOne({ eventId: new Types.ObjectId(eventId) }) // Find by eventId
    .select('eventId isAnonymous formFields title description status')
    .populate('eventId', 'name');

  if (!feedback) {
    return next(new ErrorHandler('Feedback form not found for this event', 404));
  }

  if (feedback.status !== 'submitted') {
    return next(new ErrorHandler('This feedback form is not yet published', 400));
  }

  res.status(200).json({
    success: true,
    feedback: {
      _id: feedback._id,
      eventId: feedback.eventId,
      isAnonymous: feedback.isAnonymous,
      formFields: feedback.formFields,
    },
  });
});

// Submit feedback form responses by eventId
export const submitFeedbackResponse = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { eventId } = req.params; // Changed from 'id' to 'eventId'
  const userId = req.user?._id;
  if (!userId) {
    return next(new ErrorHandler('User authentication required', 401));
  }

  if (!Types.ObjectId.isValid(eventId)) {
    return next(new ErrorHandler('Invalid event ID', 400));
  }

  const originalFeedback = await Feedback.findOne({ eventId: new Types.ObjectId(eventId) });
  if (!originalFeedback || originalFeedback.status !== 'submitted') {
    return next(new ErrorHandler('Feedback form not found or not published', 404));
  }

  const { formFields } = req.body as { formFields: { [key: string]: { value: any } } }; // Explicit typing

  if (!formFields || Object.keys(formFields).length === 0) {
    return next(new ErrorHandler('Form responses are required', 400));
  }

  // Validate submitted fields against original form
  const originalFields = originalFeedback.formFields; // Map<string, { value: any; field: IFormField }>
  for (const [fieldId, response] of Object.entries(formFields)) {
    if (!originalFields.has(fieldId)) {
      return next(new ErrorHandler(`Invalid field ID: ${fieldId}`, 400));
    }
    const field = originalFields.get(fieldId)?.field;
    if (field?.required && (response.value === null || response.value === undefined || response.value === '')) {
      return next(new ErrorHandler(`Field "${field.label}" is required`, 400));
    }
  }

  // Create new feedback with responses
  const feedbackData: Partial<IFeedback> = {
    eventId: originalFeedback.eventId,
    submittedBy: new Types.ObjectId(userId as any),
    isAnonymous: originalFeedback.isAnonymous,
    formFields: new Map(
      Array.from(originalFields.entries()).map(([key, fieldData]) => [
        key,
        {
          value: formFields[key]?.value ?? null,
          field: fieldData.field,
        },
      ])
    ),
    status: 'submitted',
  };

  const newFeedback = await UserFeedback.create(feedbackData);

  res.status(201).json({
    success: true,
    message: 'Feedback submitted successfully',
    feedback: newFeedback,
  });
});