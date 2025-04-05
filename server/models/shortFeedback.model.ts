import { Schema, model, Document, Types } from 'mongoose';

// Interface for short feedback
export interface IShortFeedback extends Document {
  event: Types.ObjectId;
  emoji: string;
  description?: string;
  submittedBy?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Short feedback schema
const ShortFeedbackSchema = new Schema<IShortFeedback>(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    emoji: {
      type: String,
      required: [true, 'Emoji is required'],
      trim: true,
    },
    description: {
      type: String,
      maxlength: [200, 'Description cannot exceed 200 characters'],
      trim: true,
    },
    submittedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

// Create indexes for better query performance
ShortFeedbackSchema.index({ event: 1 });
ShortFeedbackSchema.index({ submittedBy: 1 });
ShortFeedbackSchema.index({ createdAt: 1 });

const ShortFeedback = model<IShortFeedback>('ShortFeedback', ShortFeedbackSchema);

export default ShortFeedback; 