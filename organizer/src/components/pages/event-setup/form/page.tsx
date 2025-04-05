"use client";
import React, { useState } from "react";
import { FormikProps, useFormik } from "formik";
import { useTheme } from "next-themes";
import { step1Schema, step2Schema, step3Schema, step4Schema, step5Schema } from "./schema";
import { ProgressSteps } from "../components/ProgressSteps";
import FormSteps from "./FormSteps";
import Sidebar from "./Sidebar";
import EventPreview from "./EventPreview";
import { useCreateEventMutation } from "@/redux/features/api/event/eventApi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
export interface FormValues {
  EventName: string;
  Venue: string;
  Location: string;
  description: string;
  StartDate: string;
  EndDate: string;
  ExpectedAttendees: string;
  PositiveThreshold: string;
  NegativeThreshold: string;
  AlertFrequency: string;
  AnalysisFrequency: string;
  AlertThreshold: string;
  AlertMethod: string[];
  AlertMessage: string;
  ExperienceIssues: any[];
  TechnicalIssues: any[];
  CriticalAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };
  WarningAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };
  InfoAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };
  NotificationMethods: {
    PushNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean };
    SMSNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean; phoneNumber: string };
    EmailNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean; toEventTeam: boolean };
  };
  AlertRecipients: { name: string; role: string; email: string; isPrimary: boolean; isEditing: boolean }[];
}

const FormPage = () => {
  
  const { user } = useSelector((state: any) => state.auth);
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const steps = [
    { id: "1", label: "General Information", active: step === 1 },
    { id: "2", label: "Sentiment Tracking", active: step === 2 },
    { id: "3", label: "Keywords Monitoring", active: step === 3 },
    { id: "4", label: "Alert Severity", active: step === 4 },
    { id: "5", label: "Notifications", active: step === 5 },
  ];

  const formik = useFormik({
    initialValues: {
      EventName: "",
      Venue: "",
      Location: "",
      description: "",
      StartDate: "",
      EndDate: "",
      ExpectedAttendees: "",
      PositiveThreshold: "50",
      NegativeThreshold: "50",
      AlertFrequency: "",
      AnalysisFrequency: "",
      AlertThreshold: "50",
      AlertMethod: [],
      AlertMessage: "",
      ExperienceIssues: [],
      TechnicalIssues: [],
      CriticalAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },
      WarningAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },
      InfoAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },
      NotificationMethods: {
        PushNotifications: { enabled: false, Critical: false, Warning: false, Info: false },
        SMSNotifications: { enabled: false, Critical: false, Warning: false, Info: false, phoneNumber: "" },
        EmailNotifications: { enabled: false, Critical: false, Warning: false, Info: false, toEventTeam: false },
      },
      AlertRecipients: [{ name: "", role: "", email: "", isPrimary: false, isEditing: false }],
    },
    validationSchema:
      step === 1 ? step1Schema :
      step === 2 ? step2Schema :
      step === 3 ? step3Schema :
      step === 4 ? step4Schema : step5Schema,
    onSubmit: async (values) => {
      try {
        const eventData = {
          name: values.EventName,
          venue: values.Venue,
          location: values.Location,
          description: values.description,
          startDate: values.StartDate,
          endDate: values.EndDate,
          expectedAttendees: parseInt(values.ExpectedAttendees),
          clientId: user?._id,
          sentimentTracking: {
            positiveThreshold: parseInt(values.PositiveThreshold),
            negativeThreshold: parseInt(values.NegativeThreshold),
            alertFrequency: values.AlertFrequency,
            analysisFrequency: values.AnalysisFrequency,
            alertThreshold: parseInt(values.AlertThreshold),
            alertMethods: values.AlertMethod,
            alertMessage: values.AlertMessage,
          },
          keywordsMonitoring: {
            experienceIssues: values.ExperienceIssues,
            technicalIssues: values.TechnicalIssues,
          },
          alertSeverity: {
            critical: values.CriticalAlerts,
            warning: values.WarningAlerts,
            info: values.InfoAlerts,
          },
          notificationMethods: {
            pushNotifications: {
              enabled: values.NotificationMethods.PushNotifications.enabled,
              Critical: values.NotificationMethods.PushNotifications.Critical,
              Warning: values.NotificationMethods.PushNotifications.Warning,
              Info: values.NotificationMethods.PushNotifications.Info,
            },
            smsNotifications: {
              enabled: values.NotificationMethods.SMSNotifications.enabled,
              Critical: values.NotificationMethods.SMSNotifications.Critical,
              Warning: values.NotificationMethods.SMSNotifications.Warning,
              Info: values.NotificationMethods.SMSNotifications.Info,
              phoneNumber: values.NotificationMethods.SMSNotifications.phoneNumber,
            },
            emailNotifications: {
              enabled: values.NotificationMethods.EmailNotifications.enabled,
              Critical: values.NotificationMethods.EmailNotifications.Critical,
              Warning: values.NotificationMethods.EmailNotifications.Warning,
              Info: values.NotificationMethods.EmailNotifications.Info,
              toEventTeam: values.NotificationMethods.EmailNotifications.toEventTeam,
            },
          },
          alertRecipients: values.AlertRecipients.map(recipient => ({
            name: recipient.name,
            role: recipient.role,
            email: recipient.email,
            isPrimary: recipient.isPrimary
          })),
        };

        console.log("Submitting data:", eventData);
        const response = await createEvent(eventData).unwrap();
        
        if (response.success) {
          toast.success("Event created successfully!");
          // router.push("/events");
        } else {
          toast.error(response.message || "Failed to create event");
        }
      } catch (error: any) {
        console.error("Error creating event:", error);
        toast.error(error.data?.message || "An error occurred while creating the event");
      }
    },
  });

  const handleNext = async () => {
    const isValid = await formik.validateForm();
    if (Object.keys(isValid).length === 0 && step < 5) {
      setStep(step + 1);
    } else {
      formik.setTouched({
        ...formik.touched,
        ...Object.keys(isValid).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
      });
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen p-4 md:p-4 lg:p-6">
      <div className="">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Event Setup</h2>
          <p className="text-gray-400">
            Configure your event parameters and customize your monitoring settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="min-h-screen w-full relative lg:col-span-2">
            <div className="max-w-4xl mx-auto shadow-lg rounded-lg gradient-card">
              <div className="flex justify-between items-center">
                <div className="space-y-1 mt-4">
                  <ProgressSteps steps={steps} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300 text-nowrap ms-4">
                  Step {step} of 5
                </span>
              </div>
              <FormSteps 
                step={step}
                formik={formik as unknown as FormikProps<FormValues>}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                isSubmitting={isLoading}
              />
            </div>
          </div>
          <Sidebar 
            step={step} 
            handleNext={handleNext} 
            handleSubmit={formik.handleSubmit} 
            handlePrevious={handlePrevious}
            isSubmitting={isLoading}
          />
        </div>
        <EventPreview />
      </div>
    </div>
  );
};

export default FormPage;