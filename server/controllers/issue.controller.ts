import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import Issue, { IIssue } from '../models/issue.model';
import { CatchAsyncError } from '../middleware/CatchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';

// Create a new issue
export const createIssue = CatchAsyncError(async (req: Request, res: Response) => {
  const issue = await Issue.create({
    ...req.body,
    reportedBy: req.user?._id,
  });

  res.status(201).json({
    success: true,
    message: 'Issue created successfully',
    issue,
  });
});

// Get all issues with filters
export const getAllIssues = CatchAsyncError(async (req: Request, res: Response) => {
  const { event, venue, status, severity, category } = req.query;
  const filter: any = {};

  if (event) filter.event = event;
  if (venue) filter.venue = venue;
  if (status) filter.status = status;
  if (severity) filter.severity = severity;
  if (category) filter.category = category;

  const issues = await Issue.find(filter)
    .populate('reportedBy', 'name email')
    .populate('assignedTo', 'name email')
    .populate('event', 'name')
    .populate('venue', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    issues,
  });
});

// Get issue by ID
export const getIssueById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const issue = await Issue.findById(req.params.id)
    .populate('reportedBy', 'name email')
    .populate('assignedTo', 'name email')
    .populate('event', 'name')
    .populate('venue', 'name');

  if (!issue) {
    return next(new ErrorHandler('Issue not found', 404));
  }

  res.status(200).json({
    success: true,
    issue,
  });
});

// Update issue
export const updateIssue = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(new ErrorHandler('Issue not found', 404));
  }

  // Update issue fields
  const updateData = req.body as Partial<IIssue>;
  Object.keys(updateData).forEach((key) => {
    if (key in issue) {
      (issue as any)[key] = updateData[key as keyof IIssue];
    }
  });

  // If status is being updated to resolved, set resolvedAt
  if (updateData.status === 'resolved' && !issue.resolvedAt) {
    issue.resolvedAt = new Date();
  }

  await issue.save();

  res.status(200).json({
    success: true,
    message: 'Issue updated successfully',
    issue,
  });
});

// Add comment to issue
export const addComment = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const { text } = req.body;
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(new ErrorHandler('Issue not found', 404));
  }

  if (!req.user?._id) {
    return next(new ErrorHandler('User not authenticated', 401));
  }

  issue.comments.push({
    user: req.user._id as Types.ObjectId,
    text,
    createdAt: new Date()
  });

  await issue.save();

  res.status(200).json({
    success: true,
    message: 'Comment added successfully',
    issue,
  });
});

// Delete issue
export const deleteIssue = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    return next(new ErrorHandler('Issue not found', 404));
  }

  await issue.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Issue deleted successfully',
  });
});

// Get user's issues
export const getUserIssues = CatchAsyncError(async (req: Request, res: Response) => {
  const issues = await Issue.find({ reportedBy: req.user?._id })
    .populate('event', 'name')
    .populate('venue', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    issues,
  });
});

// Get assigned issues
export const getAssignedIssues = CatchAsyncError(async (req: Request, res: Response) => {
  const issues = await Issue.find({ assignedTo: req.user?._id })
    .populate('reportedBy', 'name email')
    .populate('event', 'name')
    .populate('venue', 'name')
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    issues,
  });
}); 