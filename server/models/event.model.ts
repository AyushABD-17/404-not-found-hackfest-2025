import { Schema, model, Document, Types } from 'mongoose';

interface IEvent extends Document {
  clientId: Types.ObjectId;
  // Step 1: General Information
  name: string;
  venue: string;
  location: string;
  description: string;
  startDate: Date;
  endDate: Date;
  expectedAttendees: number;

  // Step 2: Sentiment Tracking
  sentimentTracking: {
    positiveThreshold: number;
    negativeThreshold: number;
    alertFrequency: string;
    analysisFrequency: string;
    alertThreshold: number;
    alertMethods: string[];
    alertMessage: string;
  };

  // Step 3: Keywords Monitoring
  keywordsMonitoring: {
    experienceIssues: string[];
    technicalIssues: string[];
  };

  // Step 4: Alert Severity Levels
  alertSeverity: {
    critical: {
      enabled: boolean;
      triggerThreshold: string;
      cooldownPeriod: string;
    };
    warning: {
      enabled: boolean;
      triggerThreshold: string;
      cooldownPeriod: string;
    };
    info: {
      enabled: boolean;
      triggerThreshold: string;
      cooldownPeriod: string;
    };
  };

  // Step 5: Notification Methods
  notificationMethods: {
    pushNotifications: {
      enabled: boolean;
      critical: boolean;
      warning: boolean;
      info: boolean;
    };
    smsNotifications: {
      enabled: boolean;
      critical: boolean;
      warning: boolean;
      info: boolean;
      phoneNumber: string;
    };
    emailNotifications: {
      enabled: boolean;
      critical: boolean;
      warning: boolean;
      info: boolean;
      toEventTeam: boolean;
    };
  };

  // Alert Recipients
  alertRecipients: Array<{
    name: string;
    role: string;
    email: string;
    isPrimary: boolean;
  }>;

  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    // Step 1: General Information
    name: {
      type: String,
      required: true,
      trim: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
      index: true,
    },
    endDate: {
      type: Date,
      required: true,
      index: true,
    },
    expectedAttendees: {
      type: Number,
      required: true,
      min: 0,
    },

    // Step 2: Sentiment Tracking
    sentimentTracking: {
      positiveThreshold: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
      },
      negativeThreshold: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
      },
      alertFrequency: {
        type: String,
        required: true,
        enum: ['realtime', '5min', '15min', '30min', 'hourly', '2hours', '4hours', 'daily'],
      },
      analysisFrequency: {
        type: String,
        required: true,
        enum: ['realtime', '5min', '15min', '30min', 'hourly', '2hours', '4hours', 'daily'],
      },
      alertThreshold: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
      },
      alertMethods: [{
        type: String,
        enum: ['email', 'inapp', 'sms', 'push', 'webhook'],
      }],
      alertMessage: {
        type: String,
        required: true,
      },
    },

    // Step 3: Keywords Monitoring
    keywordsMonitoring: {
      experienceIssues: [{
        type: String,
        trim: true,
      }],
      technicalIssues: [{
        type: String,
        trim: true,
      }],
    },

    // Step 4: Alert Severity Levels
    alertSeverity: {
      critical: {
        enabled: {
          type: Boolean,
          default: false,
        },
        triggerThreshold: {
          type: String,
          enum: ['technical_issue', 'negative_50', 'negative_40', 'negative_30', 'shift_10'],
        },
        cooldownPeriod: {
          type: String,
          enum: ['15min', '30min', '1hour', '2hours', '4hours'],
        },
      },
      warning: {
        enabled: {
          type: Boolean,
          default: false,
        },
        triggerThreshold: {
          type: String,
          enum: ['technical_issue', 'negative_50', 'negative_40', 'negative_30', 'shift_10'],
        },
        cooldownPeriod: {
          type: String,
          enum: ['15min', '30min', '1hour', '2hours', '4hours'],
        },
      },
      info: {
        enabled: {
          type: Boolean,
          default: false,
        },
        triggerThreshold: {
          type: String,
          enum: ['technical_issue', 'negative_50', 'negative_40', 'negative_30', 'shift_10'],
        },
        cooldownPeriod: {
          type: String,
          enum: ['15min', '30min', '1hour', '2hours', '4hours'],
        },
      },
    },

    // Step 5: Notification Methods
    notificationMethods: {
      pushNotifications: {
        enabled: {
          type: Boolean,
          default: false,
        },
        critical: {
          type: Boolean,
          default: false,
        },
        warning: {
          type: Boolean,
          default: false,
        },
        info: {
          type: Boolean,
          default: false,
        },
      },
      smsNotifications: {
        enabled: {
          type: Boolean,
          default: false,
        },
        critical: {
          type: Boolean,
          default: false,
        },
        warning: {
          type: Boolean,
          default: false,
        },
        info: {
          type: Boolean,
          default: false,
        },
        phoneNumber: {
          type: String,
          validate: {
            validator: function(v: string) {
              return /^\+?[\d\s-]+$/.test(v);
            },
            message: 'Please enter a valid phone number',
          },
        },
      },
      emailNotifications: {
        enabled: {
          type: Boolean,
          default: false,
        },
        critical: {
          type: Boolean,
          default: false,
        },
        warning: {
          type: Boolean,
          default: false,
        },
        info: {
          type: Boolean,
          default: false,
        },
        toEventTeam: {
          type: Boolean,
          default: false,
        },
      },
    },

    // Alert Recipients
    alertRecipients: [{
      name: {
        type: String,
        required: true,
        trim: true,
      },
      role: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
          validator: function(v: string) {
            return /^\S+@\S+\.\S+$/.test(v);
          },
          message: 'Please enter a valid email address',
        },
      },
      isPrimary: {
        type: Boolean,
        default: false,
      },
    }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
EventSchema.index({ clientId: 1, startDate: -1 });
EventSchema.index({ 'alertRecipients.email': 1 });
EventSchema.index({ 'keywordsMonitoring.experienceIssues': 1 });
EventSchema.index({ 'keywordsMonitoring.technicalIssues': 1 });

// Ensure at least one notification method is enabled
EventSchema.pre('save', function(next) {
  const methods = this.notificationMethods;
  if (!methods.pushNotifications.enabled && 
      !methods.smsNotifications.enabled && 
      !methods.emailNotifications.enabled) {
    next(new Error('At least one notification method must be enabled'));
  }
  next();
});

// Ensure at least one recipient is marked as primary
EventSchema.pre('save', function(next) {
  if (this.alertRecipients.length > 0 && 
      !this.alertRecipients.some(recipient => recipient.isPrimary)) {
    next(new Error('At least one recipient must be marked as primary'));
  }
  next();
});

const Event = model<IEvent>('Event', EventSchema);

export default Event; 