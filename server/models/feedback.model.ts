import { Schema, model, Document, Types } from 'mongoose';

// Interface for feedback
export interface IFeedback extends Document {
  event: Types.ObjectId;
  contentQualityRating: number;
  likedMost?: string;
  suggestions?: string;
  hashtags?: string[];
  isAnonymous: boolean;
  submittedBy?: Types.ObjectId;
  status: 'draft' | 'submitted';
  createdAt: Date;
  updatedAt: Date;
}

// Feedback schema
const FeedbackSchema = new Schema<IFeedback>(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    contentQualityRating: {
      type: Number,
      required: [true, 'Content quality rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    likedMost: {
      type: String,
      enum: ['Content', 'Speaker', 'Interactivity', 'Visuals', 'Q&A', 'Length'],
    },
    suggestions: {
      type: String,
      maxlength: [1000, 'Suggestions cannot exceed 1000 characters'],
    },
    hashtags: [String],
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    submittedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['draft', 'submitted'],
      default: 'draft',
      required: [true, 'Status is required'],
    },
  },
  { timestamps: true }
);

// Create indexes for better query performance
FeedbackSchema.index({ event: 1 });
FeedbackSchema.index({ submittedBy: 1 });
FeedbackSchema.index({ status: 1 });
FeedbackSchema.index({ createdAt: 1 });

const Feedback = model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback; 