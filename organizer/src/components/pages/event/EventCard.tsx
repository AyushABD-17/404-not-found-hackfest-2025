import React from 'react';
import { Event } from '@/types/event';
import { useRouter } from 'next/navigation';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">{event.name}</h3>
          <p className="text-gray-400 mt-1">{event.venue}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/event/${event._id}/details`)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Details
          </button>
          <button
            onClick={() => router.push(`/event/${event._id}/edit`)}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
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
          <p className="text-sm text-gray-400">Attendees</p>
          <p className="text-white">{event.expectedAttendees}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Client</p>
          <p className="text-white">{event.clientId.name}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-400">Description</p>
        <p className="text-white line-clamp-2">{event.description}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-400">Alert Methods</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {event.sentimentTracking.alertMethods.map((method, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 rounded text-white text-sm">
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard; 