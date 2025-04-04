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
  PositiveThreshold: Yup.string().required("Please enter your Positive Threshold"),
  NegativeThreshold: Yup.string().required("Please enter your Negative Threshold"),
  AlertFrequency: Yup.string().required("Please enter your Alert Frequency"),
  AnalysisFrequency: Yup.string().required("Please enter your Analysis Frequency"),
  AlertThreshold: Yup.string().required("Please enter your Alert Threshold"),
  AlertMethod: Yup.string().required("Please enter your Alert Method"),
  AlertMessage: Yup.string().required("Please enter your Alert Message"),
});

// Keywords Monitoring 
export const step3Schema = Yup.object().shape({
  ExperienceIssues: Yup.array()
    .of(Yup.string())
    .min(1, "At least one keyword is required for Experience Issues")
    .required("Please specify keywords for Experience Issues"),
  TechnicalIssues: Yup.array()
    .of(Yup.string())
    .min(1, "At least one keyword is required for Technical Issues")
    .required("Please specify keywords for Technical Issues"),
  PriorityIssueCategories: Yup.array()
    .of(
      Yup.object().shape({
        category: Yup.string().required("Category is required"),
        rank: Yup.number()
          .min(1, "Rank must be at least 1")
          .max(3, "Rank cannot exceed 3")
          .required("Rank is required"),
      })
    )
    .length(3, "Please rank all three categories: Technical Issues, Overcrowding Issues, and Service Complaints")
    .required("Please prioritize the issue categories"),
});



// Step 4: Alert Severity Levels
export const step4Schema = Yup.object().shape({
  CriticalAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Critical Alerts are enabled"),
    triggerThreshold: Yup.string()
      .matches(/^\s*Negative sentiment\s*>\s*\d+%\s*$/, "Trigger Threshold must be in the format 'Negative sentiment > X%'")
      .required("Please enter the Trigger Threshold for Critical Alerts"),
    cooldownPeriod: Yup.string()
      .matches(/^\d+\s*(minutes|hours)$/, "Cooldown Period must be in the format 'X minutes' or 'X hours'")
      .required("Please enter the Cooldown Period for Critical Alerts"),
  }).required("Critical Alerts configuration is required"),

  WarningAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Warning Alerts are enabled"),
    triggerThreshold: Yup.string()
      .matches(/^\s*Negative sentiment\s*>\s*\d+%\s*$/, "Trigger Threshold must be in the format 'Negative sentiment > X%'")
      .required("Please enter the Trigger Threshold for Warning Alerts"),
    cooldownPeriod: Yup.string()
      .matches(/^\s*\d+\s*(minutes|hours)\s*$/, "Cooldown Period must be in the format 'X minutes' or 'X hours'")
      .required("Please enter the Cooldown Period for Warning Alerts"),
  }).required("Warning Alerts configuration is required"),

  InfoAlerts: Yup.object().shape({
    enabled: Yup.boolean().required("Please specify if Info Alerts are enabled"),
    triggerThreshold: Yup.string()
      .matches(/^\s*Sentiment shift of\s*\d+%\+\s*$/, "Trigger Threshold must be in the format 'Sentiment shift of X%+'")
      .required("Please enter the Trigger Threshold for Info Alerts"),
    cooldownPeriod: Yup.string()
      .matches(/^\s*\d+\s*(minutes|hours)\s*$/, "Cooldown Period must be in the format 'X minutes' or 'X hours'")
      .required("Please enter the Cooldown Period for Info Alerts"),
  }).required("Info Alerts configuration is required"),
});



// Step 5: Notification Methods and Alert Recipients
export const step5Schema = Yup.object().shape({
  NotificationMethods: Yup.object().shape({
    PushNotifications: Yup.object().shape({
      enabled: Yup.boolean().required("Please specify if Push Notifications are enabled"),
      Critical: Yup.boolean().required("Please specify if Critical alerts are enabled for Push Notifications"),
      Warning: Yup.boolean().required("Please specify if Warning alerts are enabled for Push Notifications"),
      Info: Yup.boolean().required("Please specify if Info alerts are enabled for Push Notifications"),
    }).required("Push Notifications configuration is required"),
    SMSNotifications: Yup.object().shape({
      enabled: Yup.boolean().required("Please specify if SMS Notifications are enabled"),
      Critical: Yup.boolean().required("Please specify if Critical alerts are enabled for SMS Notifications"),
      Warning: Yup.boolean().required("Please specify if Warning alerts are enabled for SMS Notifications"),
      Info: Yup.boolean().required("Please specify if Info alerts are enabled for SMS Notifications"),
      phoneNumber: Yup.string().when('enabled', (enabled, schema) => {
        return enabled ? schema.required("Phone number is required when SMS is enabled") : schema;
      })
    }).required("SMS Notifications configuration is required"),
    EmailNotifications: Yup.object().shape({
      enabled: Yup.boolean().required("Please specify if Email Notifications are enabled"),
      Critical: Yup.boolean().required("Please specify if Critical alerts are enabled for Email Notifications"),
      Warning: Yup.boolean().required("Please specify if Warning alerts are enabled for Email Notifications"),
      Info: Yup.boolean().required("Please specify if Info alerts are enabled for Email Notifications"),
      toEventTeam: Yup.boolean().required("Please specify if notifications are sent to the event team"),
    }).required("Email Notifications configuration is required"),
  }).required("Notification Methods configuration is required"),

  AlertRecipients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      role: Yup.string().required("Role is required"),
      email: Yup.string().email("Invalid email").required("Email is required")
    })
  )
});


