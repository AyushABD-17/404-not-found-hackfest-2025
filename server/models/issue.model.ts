import { Schema, model, Document, Types } from 'mongoose';

// Interface for issue coordinates
interface ICoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Interface for issue location
interface ILocation {
  _id: Types.ObjectId;
  name: string;
  coordinates: ICoordinates;
}

// Interface for issue floor
interface IFloor {
  _id: Types.ObjectId;
  name: string;
  location: ILocation;
}

// Interface for issue venue
interface IVenue {
  _id: Types.ObjectId;
  name: string;
  floor: IFloor;
}

// Interface for issue event
interface IEvent {
  _id: Types.ObjectId;
  name: string;
  venue: IVenue;
}

// Main issue interface
export interface IIssue extends Document {
  title: string;
  description: string;
  category: 'technical' | 'logistical' | 'safety' | 'comfort' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  reportedBy: Types.ObjectId;
  assignedTo?: Types.ObjectId;
  event: Types.ObjectId;
  venue: Types.ObjectId;
  floor?: Types.ObjectId;
  location?: Types.ObjectId;
  coordinates?: ICoordinates;
  attachments?: string[];
  comments: {
    user: Types.ObjectId;
    text: string;
    createdAt: Date;
  }[];
  resolution?: string;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Issue schema
const IssueSchema = new Schema<IIssue>(
  {
    title: {
      type: String,
      required: [true, 'Issue title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Issue description is required'],
    },
    category: {
      type: String,
      enum: ['technical', 'logistical', 'safety', 'comfort', 'other'],
      required: [true, 'Issue category is required'],
    },
    severity: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      required: [true, 'Issue severity is required'],
    },
    status: {
      type: String,
      enum: ['open', 'in_progress', 'resolved', 'closed'],
      default: 'open',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'urgent'],
      required: [true, 'Issue priority is required'],
    },
    reportedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Reporter is required'],
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event is required'],
    },
    venue: {
      type: Schema.Types.ObjectId,
      ref: 'EventDetail',
      required: [true, 'Venue is required'],
    },
    floor: {
      type: Schema.Types.ObjectId,
    },
    location: {
      type: Schema.Types.ObjectId,
    },
    coordinates: {
      x: Number,
      y: Number,
      width: Number,
      height: Number,
    },
    attachments: [String],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    resolution: String,
    resolvedAt: Date,
  },
  { timestamps: true }
);

// Create indexes for better query performance
IssueSchema.index({ event: 1 });
IssueSchema.index({ venue: 1 });
IssueSchema.index({ reportedBy: 1 });
IssueSchema.index({ status: 1 });
IssueSchema.index({ severity: 1 });
IssueSchema.index({ category: 1 });
IssueSchema.index({ createdAt: 1 });

const Issue = model<IIssue>('Issue', IssueSchema);

export default Issue; 