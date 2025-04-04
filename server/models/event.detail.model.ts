import { Schema, model, Document, Types } from 'mongoose';

// Interfaces
interface ICoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface IIssue {
  issueName: string;
  severity: 'High' | 'Medium' | 'Low';
  reportedAt: Date;
}

interface ILocation {
  name: string;
  coordinates: ICoordinates;
  issues: IIssue[];
}

interface IFloor {
  name: string;
  locations: ILocation[];
}

interface IEventDetail extends Document {
  eventId: Types.ObjectId;
  name: string;
  address: string;
  floors: IFloor[];
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
}

// Schemas
const CoordinatesSchema = new Schema<ICoordinates>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true }
});

const IssueSchema = new Schema<IIssue>({
  issueName: { type: String, required: true },
  severity: { 
    type: String, 
    required: true,
    enum: ['High', 'Medium', 'Low']
  },
  reportedAt: { type: Date, required: true }
});

const LocationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  coordinates: { type: CoordinatesSchema, required: true },
  issues: [{ type: IssueSchema, default: [] }]
});

const FloorSchema = new Schema<IFloor>({
  name: { type: String, required: true },
  locations: [{ type: LocationSchema, default: [] }]
});

const EventDetailSchema = new Schema<IEventDetail>({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  name: { type: String, required: true },
  address: { type: String, required: true },
  floors: [{ type: FloorSchema, default: [] }],
  createdBy: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Add index for eventId
EventDetailSchema.index({ eventId: 1 });
// Keep existing indexes
EventDetailSchema.index({ name: 1 });
EventDetailSchema.index({ createdBy: 1 });
EventDetailSchema.index({ createdAt: 1 });

// Export the model
const EventDetail = model<IEventDetail>('EventDetail', EventDetailSchema);
export default EventDetail;
