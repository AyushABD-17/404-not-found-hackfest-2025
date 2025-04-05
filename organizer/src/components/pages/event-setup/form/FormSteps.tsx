import React from "react";
import { FormikProps } from "formik";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";
import CustomMultiSelector from "./CustomMultiSelector";
import CustomRangeInput from "./CustomRangeInput";
import CustomTimeIntervalSelector from "./CustomTimeIntervalSelector";
import CustomAlertMethodSelector from "./CustomAlertMethodSelector";
import CustomAlertSeveritySelector from "./CustomAlertSeveritySelector";
import CustomNotificationMethodSelector from "./CustomNotificationMethodSelector";
import { FormValues } from "./page";

interface FormStepsProps {
  step: number;
  formik: FormikProps<FormValues>;
  handleNext: () => void;
  handlePrevious: () => void;
}

const FormSteps: React.FC<FormStepsProps> = ({ step, formik, handleNext, handlePrevious }) => {
  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl mb-3 font-bold text-white">Basic Event Information</h2>
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
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl mb-3 font-bold text-white">
            Sentiment Tracking Preferences
          </h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
            <CustomRangeInput
              label="Positive Threshold"
              id="PositiveThreshold"
              handleChange={handleChange}
              value={values.PositiveThreshold}
              error={errors.PositiveThreshold}
              touched={touched.PositiveThreshold}
            />
            <CustomRangeInput
              label="Negative Threshold"
              id="NegativeThreshold"
              handleChange={handleChange}
              value={values.NegativeThreshold}
              error={errors.NegativeThreshold}
              touched={touched.NegativeThreshold}
            />
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
            <CustomTimeIntervalSelector
              label="Alert Frequency"
              id="AlertFrequency"
              setFieldValue={setFieldValue}
              value={values.AlertFrequency}
              error={errors.AlertFrequency}
              touched={touched.AlertFrequency}
            />
            <CustomTimeIntervalSelector
              label="Analysis Frequency"
              id="AnalysisFrequency"
              setFieldValue={setFieldValue}
              value={values.AnalysisFrequency}
              error={errors.AnalysisFrequency}
              touched={touched.AnalysisFrequency}
            />
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-0 gap-5">
            <CustomRangeInput
              label="Alert Threshold"
              id="AlertThreshold"
              handleChange={handleChange}
              value={values.AlertThreshold}
              error={errors.AlertThreshold}
              touched={touched.AlertThreshold}
            />
            <CustomAlertMethodSelector
              label="Alert Method"
              id="AlertMethod"
              value={values.AlertMethod}
              error={errors.AlertMethod}
              touched={touched.AlertMethod}
              setFieldValue={setFieldValue}
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
        </div>
      )}

      {step === 3 && (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl mb-3 font-bold text-white">
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
        </div>
      )}

      {step === 4 && (
        <>
          <h2 className="text-xl mb-3 font-bold text-white">
            Alert Severity Levels
          </h2>
          <div className="space-y-4">
            <CustomAlertSeveritySelector
              id="CriticalAlerts"
              label="Critical Alerts"
              color="bg-red-500"
              enabled={values.CriticalAlerts.enabled}
              triggerThreshold={values.CriticalAlerts.triggerThreshold}
              cooldownPeriod={values.CriticalAlerts.cooldownPeriod}
              error={errors.CriticalAlerts}
              touched={touched.CriticalAlerts}
              setFieldValue={setFieldValue}
            />
            <CustomAlertSeveritySelector
              id="WarningAlerts"
              label="Warning Alerts"
              color="bg-yellow-500"
              enabled={values.WarningAlerts.enabled}
              triggerThreshold={values.WarningAlerts.triggerThreshold}
              cooldownPeriod={values.WarningAlerts.cooldownPeriod}
              error={errors.WarningAlerts}
              touched={touched.WarningAlerts}
              setFieldValue={setFieldValue}
            />
            <CustomAlertSeveritySelector
              id="InfoAlerts"
              label="Info Alerts"
              color="bg-blue-500"
              enabled={values.InfoAlerts.enabled}
              triggerThreshold={values.InfoAlerts.triggerThreshold}
              cooldownPeriod={values.InfoAlerts.cooldownPeriod}
              error={errors.InfoAlerts}
              touched={touched.InfoAlerts}
              setFieldValue={setFieldValue}
            />
          </div>
        </>
      )}

      {step === 5 && (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl mb-3 font-bold text-white">
            Notification Methods and Alert Recipients
          </h2>
          <div className="space-y-1">
            <div className="space-y-1">
              <CustomNotificationMethodSelector
                id="NotificationMethods.PushNotifications"
                label="Push Notifications"
                description="Send to mobile app"
                enabled={values.NotificationMethods.PushNotifications.enabled}
                critical={values.NotificationMethods.PushNotifications.Critical}
                warning={values.NotificationMethods.PushNotifications.Warning}
                info={values.NotificationMethods.PushNotifications.Info}
                error={errors.NotificationMethods?.PushNotifications}
                touched={touched.NotificationMethods?.PushNotifications}
                setFieldValue={setFieldValue}
              />
              <CustomNotificationMethodSelector
                id="NotificationMethods.SMSNotifications"
                label="SMS Notifications"
                enabled={values.NotificationMethods.SMSNotifications.enabled}
                critical={values.NotificationMethods.SMSNotifications.Critical}
                warning={values.NotificationMethods.SMSNotifications.Warning}
                info={values.NotificationMethods.SMSNotifications.Info}
                phoneNumber={values.NotificationMethods.SMSNotifications.phoneNumber}
                error={errors.NotificationMethods?.SMSNotifications}
                touched={touched.NotificationMethods?.SMSNotifications}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
              <CustomNotificationMethodSelector
                id="NotificationMethods.EmailNotifications"
                label="Email Notifications"
                description="To the event team"
                enabled={values.NotificationMethods.EmailNotifications.enabled}
                critical={values.NotificationMethods.EmailNotifications.Critical}
                warning={values.NotificationMethods.EmailNotifications.Warning}
                info={values.NotificationMethods.EmailNotifications.Info}
                error={errors.NotificationMethods?.EmailNotifications}
                touched={touched.NotificationMethods?.EmailNotifications}
                setFieldValue={setFieldValue}
              />
              {typeof errors.NotificationMethods === 'string' && (
                <p className="text-red-500 text-sm mt-2 px-4">
                  {errors.NotificationMethods}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Alert Recipients</h3>
              <button
                type="button"
                onClick={() =>
                  setFieldValue("AlertRecipients", [
                    ...values.AlertRecipients,
                    { name: "", role: "", email: "", isPrimary: false, isEditing: true },
                  ])
                }
                className="text-sm font-medium text-blue-500 hover:text-blue-400"
              >
                + Add Recipient
              </button>
            </div>
            <div className="space-y-4">
              {values.AlertRecipients.map((recipient, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-700 bg-gray-800/50"
                >
                  {recipient.isEditing ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <CustomInput
                            label="Name"
                            id={`AlertRecipients[${index}].name`}
                            type="text"
                            placeholder="Enter name"
                            handleChange={handleChange}
                            value={recipient.name}
                            error={(errors.AlertRecipients as any)?.[index]?.name}
                            touched={(touched.AlertRecipients as any)?.[index]?.name}
                          />
                        </div>
                        <div>
                          <CustomInput
                            label="Role"
                            id={`AlertRecipients[${index}].role`}
                            type="text"
                            placeholder="Enter role"
                            handleChange={handleChange}
                            value={recipient.role}
                            error={(errors.AlertRecipients as any)?.[index]?.role}
                            touched={(touched.AlertRecipients as any)?.[index]?.role}
                          />
                        </div>
                        <div className="col-span-2">
                          <CustomInput
                            label="Email"
                            id={`AlertRecipients[${index}].email`}
                            type="email"
                            placeholder="Enter email"
                            handleChange={handleChange}
                            value={recipient.email}
                            error={(errors.AlertRecipients as any)?.[index]?.email}
                            touched={(touched.AlertRecipients as any)?.[index]?.email}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          type="button"
                          onClick={() => {
                            const updatedRecipients = [...values.AlertRecipients];
                            updatedRecipients.splice(index, 1);
                            setFieldValue("AlertRecipients", updatedRecipients);
                          }}
                          className="px-3 py-1 text-sm text-red-400 hover:text-red-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (!recipient.name || !recipient.role || !recipient.email) {
                              return;
                            }
                            const updatedRecipients = [...values.AlertRecipients];
                            updatedRecipients[index] = {
                              ...recipient,
                              isEditing: false,
                            };
                            setFieldValue("AlertRecipients", updatedRecipients);
                          }}
                          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-8">
                        <div>
                          <div className="text-sm text-gray-400">Name</div>
                          <div className="text-white">{recipient.name}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Role</div>
                          <div className="text-white">{recipient.role}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Email</div>
                          <div className="text-white">{recipient.email}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const updatedRecipients = [...values.AlertRecipients];
                            updatedRecipients[index] = {
                              ...recipient,
                              isEditing: true,
                            };
                            setFieldValue("AlertRecipients", updatedRecipients);
                          }}
                          className="p-1 text-blue-400 hover:text-blue-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedRecipients = [...values.AlertRecipients];
                            updatedRecipients.splice(index, 1);
                            setFieldValue("AlertRecipients", updatedRecipients);
                          }}
                          className="p-1 text-red-400 hover:text-red-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between w-full end">
        
      </div>
    </form>
  );
};

export default FormSteps;