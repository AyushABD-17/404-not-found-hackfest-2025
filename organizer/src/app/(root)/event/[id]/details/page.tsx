"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useGetEventsByIdQuery } from '@/redux/features/api/event/eventApi';

export default function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const { data:event, isLoading, error } = useGetEventsByIdQuery(resolvedParams.id);
  const router = useRouter();


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error loading event details</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Event not found</div>
      </div>
    );
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Event Details</h1>
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/event/${resolvedParams.id}/edit`)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Event
          </button>
          <button
            onClick={() => router.push('/event')}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Back to Events
          </button>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">General Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Event Name</p>
                <p className="text-white">{event.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Venue</p>
                <p className="text-white">{event.venue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">{event.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Dates</p>
                <p className="text-white">
                  {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Expected Attendees</p>
                <p className="text-white">{event.expectedAttendees}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Client</p>
                <p className="text-white">{event.clientId.name}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
            <p className="text-white">{event.description}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Sentiment Tracking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-400">Positive Threshold</p>
              <p className="text-white">{event.sentimentTracking.positiveThreshold}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Negative Threshold</p>
              <p className="text-white">{event.sentimentTracking.negativeThreshold}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Alert Threshold</p>
              <p className="text-white">{event.sentimentTracking.alertThreshold}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Alert Frequency</p>
              <p className="text-white">{event.sentimentTracking.alertFrequency}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Analysis Frequency</p>
              <p className="text-white">{event.sentimentTracking.analysisFrequency}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Alert Methods</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {event.sentimentTracking.alertMethods.map((method:any, index:any) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 rounded text-white text-sm">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Keywords Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Experience Issues</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {event.keywordsMonitoring.experienceIssues.map((keyword: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 rounded text-white text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Technical Issues</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {event.keywordsMonitoring.technicalIssues.map((keyword: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 rounded text-white text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Alert Severity Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(event.alertSeverity).map(([severity, settings]: [string, any]) => (
              <div key={severity} className="bg-gray-700/50 rounded p-4">
                <h3 className="text-white font-medium capitalize">{severity}</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-400">Enabled: {settings.enabled ? 'Yes' : 'No'}</p>
                  <p className="text-sm text-gray-400">Trigger Threshold: {settings.triggerThreshold}</p>
                  <p className="text-sm text-gray-400">Cooldown Period: {settings.cooldownPeriod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Notification Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(event.notificationMethods).map(([method, settings]: [string, any]) => (
              <div key={method} className="bg-gray-700/50 rounded p-4">
                <h3 className="text-white font-medium capitalize">{method.replace('Notifications', '')}</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-400">Enabled: {settings.enabled ? 'Yes' : 'No'}</p>
                  {method === 'smsNotifications' && (
                    <p className="text-sm text-gray-400">Phone: {settings.phoneNumber}</p>
                  )}
                  {method === 'emailNotifications' && (
                    <p className="text-sm text-gray-400">To Event Team: {settings.toEventTeam ? 'Yes' : 'No'}</p>
                  )}
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">Severity Levels:</p>
                    <div className="flex gap-2 mt-1">
                      {settings.critical && <span className="px-2 py-1 bg-red-500 rounded text-white text-xs">Critical</span>}
                      {settings.warning && <span className="px-2 py-1 bg-yellow-500 rounded text-white text-xs">Warning</span>}
                      {settings.info && <span className="px-2 py-1 bg-blue-500 rounded text-white text-xs">Info</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Alert Recipients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.alertRecipients.map((recipient: any) => (
              <div key={recipient._id} className="bg-gray-700/50 rounded p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{recipient.name}</p>
                    <p className="text-gray-400 text-sm">{recipient.role}</p>
                    <p className="text-gray-400 text-sm">{recipient.email}</p>
                  </div>
                  {recipient.isPrimary && (
                    <span className="px-2 py-1 bg-blue-500 rounded text-white text-xs">
                      Primary
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 