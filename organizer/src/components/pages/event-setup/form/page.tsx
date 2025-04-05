"use client";
import React, { useEffect, useState } from "react";
import { useFormik, FormikErrors } from "formik";
import CustomInput from "./CustomInput";
import CustomSelector from "./CustomSelector";
import CustomMultiSelector from "./CustomMultiSelector";
import { step1Schema, step2Schema, step3Schema, step4Schema, step5Schema } from "./schema";
import CustomTextArea from "./CustomTextArea";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Bounce, toast } from "react-toastify";
import { useTheme } from "next-themes";
import { ProgressSteps } from "../components/ProgressSteps";

// Define types for form values
interface FormValues {
  // Step 1: General Information
  EventName: string;
  Venue: string;
  Location: string;
  description: string;
  StartDate: string;
  EndDate: string;
  ExpectedAttendees: string;

  // Step 2: Sentiment Tracking Preferences
  PositiveThreshold: string;
  NegativeThreshold: string;
  AlertFrequency: string;
  AnalysisFrequency: string;
  AlertThreshold: string;
  AlertMethod: string;
  AlertMessage: string;

  // Step 3: Keywords Monitoring
  ExperienceIssues: any[];
  TechnicalIssues: any[];
  PriorityIssueCategories: {
    category: string;
    rank: number;
  }[];

  // Step 4: Alert Severity Levels
  CriticalAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };
  WarningAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };
  InfoAlerts: { enabled: boolean; triggerThreshold: string; cooldownPeriod: string };

  // Step 5: Notification Methods and Alert Recipients
  NotificationMethods: {
    PushNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean };
    SMSNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean; phoneNumber: string };
    EmailNotifications: { enabled: boolean; Critical: boolean; Warning: boolean; Info: boolean; toEventTeam: boolean };
  };
  AlertRecipients: { name: string; role: string; email: string; isPrimary: boolean }[];
}

const FormPage = () => {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);

  // Define steps for ProgressSteps component
  const steps = [
    { id: "1", label: "General Information", active: step === 1 },
    { id: "2", label: "Sentiment Tracking", active: step === 2 },
    { id: "3", label: "Keywords Monitoring", active: step === 3 },
    { id: "4", label: "Alert Severity", active: step === 4 },
    { id: "5", label: "Notifications", active: step === 5 },
  ];

  const formik = useFormik({
    initialValues: {
      // Step 1: General Information
      EventName: "",
      Venue: "",
      Location: "",
      description: "",
      StartDate: "",
      EndDate: "",
      ExpectedAttendees: "",

      // Step 2: Sentiment Tracking Preferences
      PositiveThreshold: "",
      NegativeThreshold: "",
      AlertFrequency: "",
      AnalysisFrequency: "",
      AlertThreshold: "",
      AlertMethod: "",
      AlertMessage: "",

      // Step 3: Keywords Monitoring
      ExperienceIssues: [],
      TechnicalIssues: [],
      PriorityIssueCategories: [
        { category: "Technical Issues", rank: 0 },
        { category: "Overcrowding Issues", rank: 0 },
        { category: "Service Complaints", rank: 0 },
      ],

      // Step 4: Alert Severity Levels
      CriticalAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },
      WarningAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },
      InfoAlerts: { enabled: false, triggerThreshold: "", cooldownPeriod: "" },

      // Step 5: Notification Methods and Alert Recipients
      NotificationMethods: {
        PushNotifications: { enabled: false, Critical: false, Warning: false, Info: false },
        SMSNotifications: { enabled: false, Critical: false, Warning: false, Info: false, phoneNumber: "" },
        EmailNotifications: { enabled: false, Critical: false, Warning: false, Info: false, toEventTeam: false },
      },
      AlertRecipients: [{ name: "", role: "", email: "", isPrimary: false }],
    },
    validationSchema:
      step === 1
        ? step1Schema
        : step === 2
          ? step2Schema
          : step === 3
            ? step3Schema
            : step === 4
              ? step4Schema
              : step5Schema,
    onSubmit: async (values) => {
      console.log("Submitted Data:", values);
      const data = {
        generalInfo: {
          EventName: values.EventName,
          Venue: values.Venue,
          Location: values.Location,
          description: values.description,
          StartDate: values.StartDate,
          EndDate: values.EndDate,
          ExpectedAttendees: values.ExpectedAttendees,
        },
        sentimentTracking: {
          PositiveThreshold: values.PositiveThreshold,
          NegativeThreshold: values.NegativeThreshold,
          AlertFrequency: values.AlertFrequency,
          AnalysisFrequency: values.AnalysisFrequency,
          AlertThreshold: values.AlertThreshold,
          AlertMethod: values.AlertMethod,
          AlertMessage: values.AlertMessage,
        },
        keywordsMonitoring: {
          ExperienceIssues: values.ExperienceIssues,
          TechnicalIssues: values.TechnicalIssues,
          PriorityIssueCategories: values.PriorityIssueCategories,
        },
        alertSeverity: {
          CriticalAlerts: values.CriticalAlerts,
          WarningAlerts: values.WarningAlerts,
          InfoAlerts: values.InfoAlerts,
        },
        notificationSettings: {
          NotificationMethods: values.NotificationMethods,
          AlertRecipients: values.AlertRecipients,
        },
      };
      // await submissionLogic(data); // Replace with actual submission logic
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

  const handleNext = async () => {
    const isValid = await formik.validateForm();
    if (Object.keys(isValid).length === 0) {
      if (step < 5) {
        setStep(step + 1);
      }
    } else {
      formik.setTouched({
        ...formik.touched,
        ...Object.keys(isValid).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
      });
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="min-h-screen w-full relative lg:col-span-2">
      <div className="">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg gradient-card">
          <div className="">
            <div className="flex justify-between items-center ">
              <div className="space-y-1 mt-4">
                <ProgressSteps steps={steps} />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-300 text-nowrap ms-4">
                Step {step} of 5
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h2 className="text-xl mb-3 font-bold  text-white">
                    Basic Event Information
                  </h2>
                  <div className="grid grid-cols-1 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Event Name"
                      id="EventName"
                      type="text"
                      placeholder="Enter your Event Name"
                      handleChange={handleChange}
                      value={values.EventName}
                      error={errors.EventName}
                      touched={touched.EventName}
                    />
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">

                    <CustomInput
                      label="Start Date"
                      id="StartDate"
                      type="date"
                      placeholder="Enter your Start Date"
                      handleChange={handleChange}
                      value={values.StartDate}
                      error={errors.StartDate}
                      touched={touched.StartDate}
                    />
                    <CustomInput
                      label="End Date"
                      id="EndDate"
                      type="date"
                      placeholder="Enter your End Date"
                      handleChange={handleChange}
                      value={values.EndDate}
                      error={errors.EndDate}
                      touched={touched.EndDate}
                    />
                  </div>
                  <div className="grid grid-cols-1 max-md:grid-cols-1 max-md:gap-0 gap-5">

                    <CustomInput
                      label="Venue"
                      id="Venue"
                      type="text"
                      placeholder="Enter your Venue"
                      handleChange={handleChange}
                      value={values.Venue}
                      error={errors.Venue}
                      touched={touched.Venue}
                    />
                  </div>

                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Location"
                      id="Location"
                      type="text"
                      placeholder="Enter your Location"
                      handleChange={handleChange}
                      value={values.Location}
                      error={errors.Location}
                      touched={touched.Location}
                    />
                    <CustomInput
                      label="Expected Attendees"
                      id="ExpectedAttendees"
                      type="number"
                      placeholder="Enter expected number of attendees"
                      handleChange={handleChange}
                      value={values.ExpectedAttendees}
                      error={errors.ExpectedAttendees}
                      touched={touched.ExpectedAttendees}
                    />
                  </div>
                  <CustomTextArea
                    label="Description"
                    id="description"
                    placeholder="Enter event description"
                    handleChange={handleChange}
                    value={values.description}
                    error={errors.description}
                    touched={touched.description}
                    rows={4}
                  />
                </div>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-xl mb-3 font-bold from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
                    Sentiment Tracking Preferences
                  </h2>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Positive Threshold"
                      id="PositiveThreshold"
                      type="text"
                      placeholder="Enter Positive Threshold"
                      handleChange={handleChange}
                      value={values.PositiveThreshold}
                      error={errors.PositiveThreshold}
                      touched={touched.PositiveThreshold}
                    />
                    <CustomInput
                      label="Negative Threshold"
                      id="NegativeThreshold"
                      type="text"
                      placeholder="Enter Negative Threshold"
                      handleChange={handleChange}
                      value={values.NegativeThreshold}
                      error={errors.NegativeThreshold}
                      touched={touched.NegativeThreshold}
                    />
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Alert Frequency"
                      id="AlertFrequency"
                      type="text"
                      placeholder="Enter Alert Frequency"
                      handleChange={handleChange}
                      value={values.AlertFrequency}
                      error={errors.AlertFrequency}
                      touched={touched.AlertFrequency}
                    />
                    <CustomInput
                      label="Analysis Frequency"
                      id="AnalysisFrequency"
                      type="text"
                      placeholder="Enter Analysis Frequency"
                      handleChange={handleChange}
                      value={values.AnalysisFrequency}
                      error={errors.AnalysisFrequency}
                      touched={touched.AnalysisFrequency}
                    />
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Alert Threshold"
                      id="AlertThreshold"
                      type="text"
                      placeholder="Enter Alert Threshold"
                      handleChange={handleChange}
                      value={values.AlertThreshold}
                      error={errors.AlertThreshold}
                      touched={touched.AlertThreshold}
                    />
                    <CustomInput
                      label="Alert Method"
                      id="AlertMethod"
                      type="text"
                      placeholder="Enter Alert Method"
                      handleChange={handleChange}
                      value={values.AlertMethod}
                      error={errors.AlertMethod}
                      touched={touched.AlertMethod}
                    />
                  </div>
                  <CustomTextArea
                    label="Alert Message"
                    id="AlertMessage"
                    placeholder="Enter Alert Message"
                    handleChange={handleChange}
                    value={values.AlertMessage}
                    error={errors.AlertMessage}
                    touched={touched.AlertMessage}
                    rows={4}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-xl mb-3 font-bold from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
                    Keywords Monitoring
                  </h2>
                  <CustomMultiSelector
                    id="ExperienceIssues"
                    label="Experience Issues Keywords"
                    value={values.ExperienceIssues}
                    error={errors.ExperienceIssues}
                    touched={touched.ExperienceIssues}
                    setFieldValue={setFieldValue}
                    list={[
                      { label: "overcrowded", value: "overcrowded" },
                      { label: "waiting", value: "waiting" },
                      { label: "long lines", value: "long lines" },
                      { label: "can't see", value: "can't see" }
                    ]}
                  />
                  <CustomMultiSelector
                    id="TechnicalIssues"
                    label="Technical Issues Keywords"
                    value={values.TechnicalIssues}
                    error={errors.TechnicalIssues}
                    touched={touched.TechnicalIssues}
                    setFieldValue={setFieldValue}
                    list={[
                      { label: "not working", value: "not working" },
                      { label: "broken", value: "broken" },
                      { label: "glitch", value: "glitch" },
                      { label: "error", value: "error" }
                    ]}
                  />
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    {values.PriorityIssueCategories.map((item, index) => (
                      <div key={index}>
                        <CustomInput
                          label={`Rank ${item.category}`}
                          id={`PriorityIssueCategories[${index}].rank`}
                          type="number"
                          placeholder={`Rank for ${item.category}`}
                          handleChange={handleChange}
                          value={item.rank.toString()}
                          error={(errors.PriorityIssueCategories as any)?.[index]?.rank}
                          touched={(touched.PriorityIssueCategories as any)?.[index]?.rank}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h2 className="text-xl mb-3 font-bold from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
                    Alert Severity Levels
                  </h2>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Critical Alerts Trigger Threshold"
                      id="CriticalAlerts.triggerThreshold"
                      type="text"
                      placeholder="e.g., Negative sentiment > 50%"
                      handleChange={handleChange}
                      value={values.CriticalAlerts.triggerThreshold}
                      error={errors.CriticalAlerts?.triggerThreshold}
                      touched={touched.CriticalAlerts?.triggerThreshold}
                    />
                    <CustomInput
                      label="Critical Alerts Cooldown Period"
                      id="CriticalAlerts.cooldownPeriod"
                      type="text"
                      placeholder="e.g., 15 minutes"
                      handleChange={handleChange}
                      value={values.CriticalAlerts.cooldownPeriod}
                      error={errors.CriticalAlerts?.cooldownPeriod}
                      touched={touched.CriticalAlerts?.cooldownPeriod}
                    />
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Warning Alerts Trigger Threshold"
                      id="WarningAlerts.triggerThreshold"
                      type="text"
                      placeholder="e.g., Negative sentiment > 30%"
                      handleChange={handleChange}
                      value={values.WarningAlerts.triggerThreshold}
                      error={errors.WarningAlerts?.triggerThreshold}
                      touched={touched.WarningAlerts?.triggerThreshold}
                    />
                    <CustomInput
                      label="Warning Alerts Cooldown Period"
                      id="WarningAlerts.cooldownPeriod"
                      type="text"
                      placeholder="e.g., 30 minutes"
                      handleChange={handleChange}
                      value={values.WarningAlerts.cooldownPeriod}
                      error={errors.WarningAlerts?.cooldownPeriod}
                      touched={touched.WarningAlerts?.cooldownPeriod}
                    />
                  </div>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="Info Alerts Trigger Threshold"
                      id="InfoAlerts.triggerThreshold"
                      type="text"
                      placeholder="e.g., Sentiment shift of 10%+"
                      handleChange={handleChange}
                      value={values.InfoAlerts.triggerThreshold}
                      error={errors.InfoAlerts?.triggerThreshold}
                      touched={touched.InfoAlerts?.triggerThreshold}
                    />
                    <CustomInput
                      label="Info Alerts Cooldown Period"
                      id="InfoAlerts.cooldownPeriod"
                      type="text"
                      placeholder="e.g., 1 hour"
                      handleChange={handleChange}
                      value={values.InfoAlerts.cooldownPeriod}
                      error={errors.InfoAlerts?.cooldownPeriod}
                      touched={touched.InfoAlerts?.cooldownPeriod}
                    />
                  </div>
                  {/* Note: Enabled fields are not included as they require custom checkboxes; consider adding custom components for boolean fields */}
                </>
              )}

              {step === 5 && (
                <>
                  <h2 className="text-xl mb-3 font-bold from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
                    Notification Methods and Alert Recipients
                  </h2>
                  <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                    <CustomInput
                      label="SMS Phone Number"
                      id="NotificationMethods.SMSNotifications.phoneNumber"
                      type="text"
                      placeholder="e.g., +1 555-123-4567"
                      handleChange={handleChange}
                      value={values.NotificationMethods.SMSNotifications.phoneNumber}
                      error={errors.NotificationMethods?.SMSNotifications?.phoneNumber}
                      touched={touched.NotificationMethods?.SMSNotifications?.phoneNumber}
                    />
                  </div>
                  {values.AlertRecipients.map((recipient, index) => (
                    <div key={index} className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
                      <CustomInput
                        label="Name"
                        id={`AlertRecipients[${index}].name`}
                        type="text"
                        placeholder="Enter name"
                        handleChange={handleChange}
                        value={recipient.name}
                        error={(errors.AlertRecipients as FormikErrors<typeof values.AlertRecipients>)?.[index]?.name}
                        touched={(touched.AlertRecipients as any)?.[index]?.name}
                      />
                      <CustomInput
                        label="Role"
                        id={`AlertRecipients[${index}].role`}
                        type="text"
                        placeholder="Enter role"
                        handleChange={handleChange}
                        value={recipient.role}
                        error={(errors.AlertRecipients as FormikErrors<typeof values.AlertRecipients>)?.[index]?.role}
                        touched={(touched.AlertRecipients as any)?.[index]?.role}
                      />
                      <CustomInput
                        label="Email"
                        id={`AlertRecipients[${index}].email`}
                        type="email"
                        placeholder="Enter email"
                        handleChange={handleChange}
                        value={recipient.email}
                        error={(errors.AlertRecipients as FormikErrors<typeof values.AlertRecipients>)?.[index]?.email}
                        touched={(touched.AlertRecipients as any)?.[index]?.email}
                      />
                      {/* Custom checkbox for isPrimary would be needed here */}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("AlertRecipients", [
                        ...values.AlertRecipients,
                        { name: "", role: "", email: "", isPrimary: false },
                      ])
                    }
                    className="font-semibold text-base bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 ease-in-out mt-2"
                  >
                    Add Recipient
                  </button>
                </>
              )}

              <div className="flex justify-between w-full end">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="font-semibold text-base bg-gray-500 hover:bg-gray-600 text-slate-100 transition-colors duration-300 ease-in-out mt-2"
                  >
                    Previous
                  </button>
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 ms-auto my-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200 flex items-center"
                  >
                    Continue
                    <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                ) : (
                  <button
                    type="submit"
                    className="font-semibold text-base text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 ease-in-out mt-2"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;