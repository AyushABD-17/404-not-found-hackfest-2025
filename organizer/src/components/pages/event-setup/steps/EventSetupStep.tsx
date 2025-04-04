interface EventSetupProps {
  formData: {
    name: string;
    startDate: string;
    endDate: string;
    venue: string;
    location: string;
    description: string;
    expectedAttendees: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const EventSetupStep: React.FC<EventSetupProps> = ({ formData, handleInputChange }) => {
    return <div className="lg:col-span-2">
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/30 p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Basic Event Information</h3>
      <div className="space-y-5">
        <div>
          <label htmlFor="event-name" className="block text-sm font-medium text-gray-300 mb-1">
            Event Name
          </label>
          <input
            type="text"
            id="event-name"
            placeholder="Enter event name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-300 mb-1">
              Start Date & Time
            </label>
            <input
              type="datetime-local"
              id="start-date"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-300 mb-1">
              End Date & Time
            </label>
            <input
              type="datetime-local"
              id="end-date"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-gray-300 mb-1">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            placeholder="Enter venue name"
            value={formData.venue}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location address"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Brief description of your event"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="expected-attendees" className="block text-sm font-medium text-gray-300 mb-1">
            Expected Attendees
          </label>
          <select
            id="expected-attendees"
            value={formData.expectedAttendees}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option>Less than 100</option>
            <option>100 - 500</option>
            <option>500 - 1,000</option>
            <option>1,000 - 5,000</option>
            <option>More than 5,000</option>
          </select>
        </div>
      </div>
    </div>
  </div>;
};

