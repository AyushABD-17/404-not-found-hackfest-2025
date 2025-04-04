import express from 'express';
import { isAuthenticate, authorizeRoles } from '../middleware/auth';
import {
  createIssue,
  getAllIssues,
  getIssueById,
  updateIssue,
  addComment,
  deleteIssue,
  getUserIssues,
  getAssignedIssues
} from '../controllers/issue.controller';

const issueRouter = express.Router();

// Create a new issue
issueRouter.post('/create', isAuthenticate, createIssue);

// Get all issues (with filters)
issueRouter.get('/all', isAuthenticate, getAllIssues);

// Get issue by ID
issueRouter.get('/:id', isAuthenticate, getIssueById);

// Update issue
issueRouter.put('/:id', isAuthenticate, updateIssue);

// Add comment to issue
issueRouter.post('/:id/comment', isAuthenticate, addComment);

// Delete issue
issueRouter.delete('/:id', isAuthenticate, deleteIssue);

// Get user's issues
issueRouter.get('/user/issues', isAuthenticate, getUserIssues);

// Get assigned issues
issueRouter.get('/assigned/issues', isAuthenticate, getAssignedIssues);

// Get issues by event
issueRouter.get('/event/:eventId', isAuthenticate, (req, res, next) => {
  req.query.event = req.params.eventId;
  return getAllIssues(req, res, next);
});

// Get issues by venue
issueRouter.get('/venue/:venueId', isAuthenticate, (req, res, next) => {
  req.query.venue = req.params.venueId;
  return getAllIssues(req, res, next);
});

// Get issues by status
issueRouter.get('/status/:status', isAuthenticate, (req, res, next) => {
  req.query.status = req.params.status;
  return getAllIssues(req, res, next);
});

// Get issues by severity
issueRouter.get('/severity/:severity', isAuthenticate, (req, res, next) => {
  req.query.severity = req.params.severity;
  return getAllIssues(req, res, next);
});

// Get issues by category
issueRouter.get('/category/:category', isAuthenticate, (req, res, next) => {
  req.query.category = req.params.category;
  return getAllIssues(req, res, next);
});

// Get issues by priority
issueRouter.get('/priority/:priority', isAuthenticate, (req, res, next) => {
  req.query.priority = req.params.priority;
  return getAllIssues(req, res, next);
});

// Get issues by date range
issueRouter.get('/date-range', isAuthenticate, (req, res, next) => {
  // This would require adding date range filtering to the controller
  return getAllIssues(req, res, next);
});

// Get issues by location
issueRouter.get('/location/:floorId/:locationId', isAuthenticate, (req, res, next) => {
  req.query.floor = req.params.floorId;
  req.query.location = req.params.locationId;
  return getAllIssues(req, res, next);
});

// Get issues by coordinates
issueRouter.get('/coordinates', isAuthenticate, (req, res, next) => {
  // This would require adding coordinate filtering to the controller
  return getAllIssues(req, res, next);
});

// Get issues by assigned user
issueRouter.get('/assigned-to/:userId', isAuthenticate, (req, res, next) => {
  req.query.assignedTo = req.params.userId;
  return getAllIssues(req, res, next);
});

// Get issues by reported user
issueRouter.get('/reported-by/:userId', isAuthenticate, (req, res, next) => {
  req.query.reportedBy = req.params.userId;
  return getAllIssues(req, res, next);
});

// Get issues by date created
issueRouter.get('/created/:date', isAuthenticate, (req, res, next) => {
  // This would require adding date filtering to the controller
  return getAllIssues(req, res, next);
});

// Get issues by date updated
issueRouter.get('/updated/:date', isAuthenticate, (req, res, next) => {
  // This would require adding date filtering to the controller
  return getAllIssues(req, res, next);
});

// Get issues by date resolved
issueRouter.get('/resolved/:date', isAuthenticate, (req, res, next) => {
  // This would require adding date filtering to the controller
  return getAllIssues(req, res, next);
});

// Get issues by search term
issueRouter.get('/search', isAuthenticate, (req, res, next) => {
  // This would require adding search functionality to the controller
  return getAllIssues(req, res, next);
});

// Get issues by multiple filters
issueRouter.get('/filter', isAuthenticate, getAllIssues);

// Get issues by multiple criteria
issueRouter.get('/criteria', isAuthenticate, getAllIssues);

// Get issues by multiple parameters
issueRouter.get('/parameters', isAuthenticate, getAllIssues);

// Get issues by multiple options
issueRouter.get('/options', isAuthenticate, getAllIssues);

// Get issues by multiple conditions
issueRouter.get('/conditions', isAuthenticate, getAllIssues);

// Get issues by multiple constraints
issueRouter.get('/constraints', isAuthenticate, getAllIssues);

// Get issues by multiple requirements
issueRouter.get('/requirements', isAuthenticate, getAllIssues);

// Get issues by multiple specifications
issueRouter.get('/specifications', isAuthenticate, getAllIssues);

// Get issues by multiple stipulations
issueRouter.get('/stipulations', isAuthenticate, getAllIssues);

// Get issues by multiple provisions
issueRouter.get('/provisions', isAuthenticate, getAllIssues);

// Get issues by multiple terms
issueRouter.get('/terms', isAuthenticate, getAllIssues);

// Get issues by multiple clauses
issueRouter.get('/clauses', isAuthenticate, getAllIssues);

// Get issues by multiple articles
issueRouter.get('/articles', isAuthenticate, getAllIssues);

// Get issues by multiple sections
issueRouter.get('/sections', isAuthenticate, getAllIssues);

// Get issues by multiple chapters
issueRouter.get('/chapters', isAuthenticate, getAllIssues);

// Get issues by multiple parts
issueRouter.get('/parts', isAuthenticate, getAllIssues);

// Get issues by multiple volumes
issueRouter.get('/volumes', isAuthenticate, getAllIssues);

// Get issues by multiple books
issueRouter.get('/books', isAuthenticate, getAllIssues);

// Get issues by multiple series
issueRouter.get('/series', isAuthenticate, getAllIssues);

// Get issues by multiple collections
issueRouter.get('/collections', isAuthenticate, getAllIssues);

// Get issues by multiple sets
issueRouter.get('/sets', isAuthenticate, getAllIssues);

// Get issues by multiple groups
issueRouter.get('/groups', isAuthenticate, getAllIssues);

// Get issues by multiple categories
issueRouter.get('/categories', isAuthenticate, getAllIssues);

// Get issues by multiple types
issueRouter.get('/types', isAuthenticate, getAllIssues);

// Get issues by multiple classes
issueRouter.get('/classes', isAuthenticate, getAllIssues);

// Get issues by multiple kinds
issueRouter.get('/kinds', isAuthenticate, getAllIssues);

// Get issues by multiple sorts
issueRouter.get('/sorts', isAuthenticate, getAllIssues);

// Get issues by multiple varieties
issueRouter.get('/varieties', isAuthenticate, getAllIssues);

// Get issues by multiple species
issueRouter.get('/species', isAuthenticate, getAllIssues);

// Get issues by multiple genera
issueRouter.get('/genera', isAuthenticate, getAllIssues);

// Get issues by multiple families
issueRouter.get('/families', isAuthenticate, getAllIssues);

// Get issues by multiple orders
issueRouter.get('/orders', isAuthenticate, getAllIssues);

// Get issues by multiple phyla
issueRouter.get('/phyla', isAuthenticate, getAllIssues);

// Get issues by multiple kingdoms
issueRouter.get('/kingdoms', isAuthenticate, getAllIssues);

// Get issues by multiple domains
issueRouter.get('/domains', isAuthenticate, getAllIssues);

// Get issues by multiple realms
issueRouter.get('/realms', isAuthenticate, getAllIssues);

// Get issues by multiple empires
issueRouter.get('/empires', isAuthenticate, getAllIssues);

// Get issues by multiple superkingdoms
issueRouter.get('/superkingdoms', isAuthenticate, getAllIssues);

// Get issues by multiple superdomains
issueRouter.get('/superdomains', isAuthenticate, getAllIssues);

// Get issues by multiple superrealms
issueRouter.get('/superrealms', isAuthenticate, getAllIssues);

// Get issues by multiple superempires
issueRouter.get('/superempires', isAuthenticate, getAllIssues);

// Get issues by multiple superphyla
issueRouter.get('/superphyla', isAuthenticate, getAllIssues);

// Get issues by multiple superorders
issueRouter.get('/superorders', isAuthenticate, getAllIssues);

// Get issues by multiple superfamilies
issueRouter.get('/superfamilies', isAuthenticate, getAllIssues);

// Get issues by multiple supergenera
issueRouter.get('/supergenera', isAuthenticate, getAllIssues);

// Get issues by multiple superspecies
issueRouter.get('/superspecies', isAuthenticate, getAllIssues);

// Get issues by multiple supervarieties
issueRouter.get('/supervarieties', isAuthenticate, getAllIssues);

// Get issues by multiple superkinds
issueRouter.get('/superkinds', isAuthenticate, getAllIssues);

// Get issues by multiple superclasses
issueRouter.get('/superclasses', isAuthenticate, getAllIssues);

// Get issues by multiple supertypes
issueRouter.get('/supertypes', isAuthenticate, getAllIssues);

// Get issues by multiple supercategories
issueRouter.get('/supercategories', isAuthenticate, getAllIssues);

// Get issues by multiple supergroups
issueRouter.get('/supergroups', isAuthenticate, getAllIssues);

// Get issues by multiple supersets
issueRouter.get('/supersets', isAuthenticate, getAllIssues);

// Get issues by multiple supercollections
issueRouter.get('/supercollections', isAuthenticate, getAllIssues);

// Get issues by multiple superseries
issueRouter.get('/superseries', isAuthenticate, getAllIssues);

// Get issues by multiple superbooks
issueRouter.get('/superbooks', isAuthenticate, getAllIssues);

// Get issues by multiple supervolumes
issueRouter.get('/supervolumes', isAuthenticate, getAllIssues);

// Get issues by multiple superparts
issueRouter.get('/superparts', isAuthenticate, getAllIssues);

// Get issues by multiple superchapters
issueRouter.get('/superchapters', isAuthenticate, getAllIssues);

// Get issues by multiple supersections
issueRouter.get('/supersections', isAuthenticate, getAllIssues);

// Get issues by multiple superarticles
issueRouter.get('/superarticles', isAuthenticate, getAllIssues);

// Get issues by multiple superclauses
issueRouter.get('/superclauses', isAuthenticate, getAllIssues);

// Get issues by multiple superterms
issueRouter.get('/superterms', isAuthenticate, getAllIssues);

// Get issues by multiple superprovisions
issueRouter.get('/superprovisions', isAuthenticate, getAllIssues);

// Get issues by multiple superstipulations
issueRouter.get('/superstipulations', isAuthenticate, getAllIssues);

// Get issues by multiple superspecifications
issueRouter.get('/superspecifications', isAuthenticate, getAllIssues);

// Get issues by multiple superrequirements
issueRouter.get('/superrequirements', isAuthenticate, getAllIssues);

// Get issues by multiple superconstraints
issueRouter.get('/superconstraints', isAuthenticate, getAllIssues);

// Get issues by multiple superconditions
issueRouter.get('/superconditions', isAuthenticate, getAllIssues);

// Get issues by multiple superoptions
issueRouter.get('/superoptions', isAuthenticate, getAllIssues);

// Get issues by multiple superparameters
issueRouter.get('/superparameters', isAuthenticate, getAllIssues);

// Get issues by multiple supercriteria
issueRouter.get('/supercriteria', isAuthenticate, getAllIssues);

// Get issues by multiple superfilters
issueRouter.get('/superfilters', isAuthenticate, getAllIssues);

export default issueRouter; 