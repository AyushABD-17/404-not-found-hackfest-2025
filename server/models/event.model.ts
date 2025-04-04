import { Schema, model, Document, Types } from 'mongoose';

interface IEvent extends Document {
  clientId: Types.ObjectId;
  eventDetailId: Types.ObjectId;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  expectedAttendees: number;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    expectedAttendees: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true, // This will automatically manage createdAt and updatedAt
  }
);

// Create indexes for better query performance
EventSchema.index({ clientId: 1 });
EventSchema.index({ startDate: 1 });
EventSchema.index({ endDate: 1 });

const Event = model<IEvent>('Event', EventSchema);

export default Event; 