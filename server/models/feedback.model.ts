import { Schema, model, Document, Types } from 'mongoose';

interface IFormField {
  id: string;
  type: 'text' | 'rating' | 'multiSelect' | 'hashtags' | 'anonymous';
  label: string;
  required: boolean;
  options?: string[];
  placeholder?: string;
  tags?: string[];
}

// Interface for feedback
export interface IFeedback extends Document {
  eventId: Types.ObjectId;
  submittedBy: Types.ObjectId;
  isAnonymous: boolean;
  formFields: {
    [key: string]: {
      value: any;
      field: IFormField;
    };
  };
  status: 'draft' | 'submitted';
  createdAt: Date;
  updatedAt: Date;
}

const FormFieldSchema = new Schema({
  id: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['text', 'rating', 'multiSelect', 'hashtags', 'anonymous']
  },
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
  options: [{ type: String }],
  placeholder: String,
  tags: [{ type: String }]
});

// Feedback schema
const FeedbackSchema = new Schema<IFeedback>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    submittedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    formFields: {
      type: Map,
      of: new Schema({
        value: Schema.Types.Mixed,
        field: FormFieldSchema
      }),
      required: true
    },
    status: {
      type: String,
      enum: ['draft', 'submitted'],
      default: 'draft',
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
FeedbackSchema.index({ eventId: 1, sessionId: 1 });
FeedbackSchema.index({ submittedBy: 1 });
FeedbackSchema.index({ status: 1 });

const Feedback = model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback; 