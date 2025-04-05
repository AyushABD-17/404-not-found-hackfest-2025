import * as Yup from "yup";

// Step 1: General Information
export const step1Schema = Yup.object().shape({
  EventName: Yup.string().required("Please enter your Event Name"),

  Venue: Yup.string().required("Please enter your Venue"),
  Location: Yup.string().required("Please enter your Location"),
  description: Yup.string().required("Please enter your description"),
  StartDate: Yup.string().required("Please enter your Start Date"),
  EndDate: Yup.string().required("Please enter your End Date"),
  ExpectedAttendees: Yup.string().required("Please enter your Expected Attendees"),
});


// Step 2: Sentiment Tracking Preferences
export const step2Schema = Yup.object().shape({
  PositiveThreshold: Yup.string()
    .required("Please enter your Positive Threshold")
    .test('is-valid-percentage', 'Must be a valid percentage between 0 and 100', (value) => {
      const num = parseInt(value);
      return !isNaN(num) && num >= 0 && num <= 100;
    }),
  NegativeThreshold: Yup.string()
    .required("Please enter your Negative Threshold")
    .test('is-valid-percentage', 'Must be a valid percentage between 0 and 100', (value) => {
      const num = parseInt(value);
      return !isNaN(num) && num >= 0 && num <= 100;
    }),
  AlertFrequency: Yup.string()
    .required("Please select Alert Frequency")
    .oneOf(["realtime", "5min", "15min", "30min", "hourly", "2hours", "4hours", "daily"], "Please select a valid frequency"),
  AnalysisFrequency: Yup.string()
    .required("Please select Analysis Frequency")
    .oneOf(["realtime", "5min", "15min", "30min", "hourly", "2hours", "4hours", "daily"], "Please select a valid frequency"),
  AlertThreshold: Yup.string()
    .required("Please enter your Alert Threshold")
    .test('is-valid-percentage', 'Must be a valid percentage between 0 and 100', (value) => {
      const num = parseInt(value);
      return !isNaN(num) && num >= 0 && num <= 100;
    }),
  AlertMethod: Yup.array()
    .of(Yup.string().oneOf(["email", "inapp", "sms", "push", "webhook"]))
    .min(1, "Please select at least one alert method")
    .required("Please select alert methods"),
  AlertMessage: Yup.string().required("Please enter your Alert Message"),
});

// Keywords Monitoring 
export const step3Schema = Yup.object().shape({
  ExperienceIssues: Yup.array().required("Please select experience issues keywords"),
  TechnicalIssues: Yup.array().required("Please select technical issues keywords"),
});



// Step 4: Alert Severity Levels
export const step4Schema = Yup.object().shape({
  CriticalAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Critical Alerts are enabled"),
    triggerThreshold: Yup.string()
      .required("Please select a trigger threshold")
      .oneOf(
        ["technical_issue", "negative_50", "negative_40", "negative_30", "shift_10"],
        "Please select a valid trigger threshold"
      ),
    cooldownPeriod: Yup.string()
      .required("Please select a cooldown period")
      .oneOf(
        ["15min", "30min", "1hour", "2hours", "4hours"],
        "Please select a valid cooldown period"
      ),
  }).required("Critical Alerts configuration is required"),

  WarningAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Warning Alerts are enabled"),
    triggerThreshold: Yup.string()
      .required("Please select a trigger threshold")
      .oneOf(
        ["technical_issue", "negative_50", "negative_40", "negative_30", "shift_10"],
        "Please select a valid trigger threshold"
      ),
    cooldownPeriod: Yup.string()
      .required("Please select a cooldown period")
      .oneOf(
        ["15min", "30min", "1hour", "2hours", "4hours"],
        "Please select a valid cooldown period"
      ),
  }).required("Warning Alerts configuration is required"),

  InfoAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Info Alerts are enabled"),
    triggerThreshold: Yup.string()
      .required("Please select a trigger threshold")
      .oneOf(
        ["technical_issue", "negative_50", "negative_40", "negative_30", "shift_10"],
        "Please select a valid trigger threshold"
      ),
    cooldownPeriod: Yup.string()
      .required("Please select a cooldown period")
      .oneOf(
        ["15min", "30min", "1hour", "2hours", "4hours"],
        "Please select a valid cooldown period"
      ),
  }).required("Info Alerts configuration is required"),
});



// Step 5: Notification Methods and Alert Recipients
export const step5Schema = Yup.object().shape({
  NotificationMethods: Yup.object().shape({
    PushNotifications: Yup.object().shape({
      enabled: Yup.boolean(),
      Critical: Yup.boolean(),
      Warning: Yup.boolean(),
      Info: Yup.boolean(),
    }),
    SMSNotifications: Yup.object().shape({
      enabled: Yup.boolean(),
      Critical: Yup.boolean(),
      Warning: Yup.boolean(),
      Info: Yup.boolean(),
      phoneNumber: Yup.string().when('enabled', (enabled, schema) => {
        return enabled ? schema.required("Phone number is required when SMS is enabled") : schema;
      })
    }),
    EmailNotifications: Yup.object().shape({
      enabled: Yup.boolean(),
      Critical: Yup.boolean(),
      Warning: Yup.boolean(),
      Info: Yup.boolean(),
      toEventTeam: Yup.boolean(),
    }),
  }).test(
    'at-least-one-enabled',
    'Please enable at least one notification method',
    (value) => {
      return value.PushNotifications.enabled || 
             value.SMSNotifications.enabled || 
             value.EmailNotifications.enabled;
    }
  ),

  AlertRecipients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      role: Yup.string().required("Role is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      isPrimary: Yup.boolean(),
      isEditing: Yup.boolean()
    })
  ).min(1, "At least one recipient is required")
});


