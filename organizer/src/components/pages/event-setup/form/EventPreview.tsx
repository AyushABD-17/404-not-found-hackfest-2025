import React from "react";

const EventPreview: React.FC = () => {
  return (
    <div className="mt-10 bg-gray-800/50 rounded-xl border border-gray-700/30 p-6">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">Event Preview</h3>
        <button className="text-indigo-400 hover:text-indigo-300 flex items-center">
          <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          Preview Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium">Event Details</h4>
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300">
              <span className="text-gray-500">Name:</span>{' '}
              <span className="text-white">{'Untitled Event'}</span>
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Date:</span>{' '}
              <span className="text-white">{'Not set'}</span>
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Venue:</span>{' '}
              <span className="text-white">{'Not set'}</span>
            </p>
            <p className="text-gray-300">
              <span className="text-gray-500">Attendees:</span>{' '}
              <span className="text-white">{'Not set'}</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium">Sentiment Tracking</h4>
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-20 text-gray-400">
            <p className="text-center text-sm">Complete step 2 to configure</p>
          </div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-medium">Alert Settings</h4>
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-20 text-gray-400">
            <p className="text-center text-sm">Complete step 3 to configure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;