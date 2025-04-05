export interface Event {
  _id: string;
  id: string;
  name: string;
  venue: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  expectedAttendees: number;
  clientId: {
    _id: string;
    name: string;
    email: string;
  };
  sentimentTracking: {
    positiveThreshold: number;
    negativeThreshold: number;
    alertFrequency: string;
    analysisFrequency: string;
    alertThreshold: number;
    alertMethods: string[];
    alertMessage: string;
  };
  keywordsMonitoring: {
    experienceIssues: string[];
    technicalIssues: string[];
  };
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
  notificationMethods: {
    pushNotifications: {
      enabled: boolean;
      critical: boolean;
      warning: boolean;
      info: boolean;
    };
    smsNotifications: {
      enabled: boolean;
      phoneNumber: string;
      critical: boolean;
      warning: boolean;
      info: boolean;
    };
    emailNotifications: {
      enabled: boolean;
      toEventTeam: boolean;
      critical: boolean;
      warning: boolean;
      info: boolean;
    };
  };
  alertRecipients: {
    _id: string;
    id: string;
    name: string;
    role: string;
    email: string;
    isPrimary: boolean;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
} 