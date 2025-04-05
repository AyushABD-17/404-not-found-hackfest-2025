import { useState } from 'react';
import { useGetEventsByIdQuery } from '@/redux/features/api/event/eventApi';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const EventSelection = () => {
  const { user } = useSelector((state: any) => state.auth);
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const { data: events, isLoading, error } = useGetEventsByIdQuery(user?._id, {
    skip: !user?._id,
  });

  const handleEventSelect = (eventId: string) => {
    setSelectedEvent(eventId);
    router.push(`/feedback/form-builder?eventId=${eventId}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error loading events. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Select an Event</h1>
        <p className="text-gray-400">Choose an event to create a feedback form for</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events?.map((event:any) => (
          <div
            key={event._id}
            className={`bg-gray-800/80 p-6 rounded-xl border ${
              selectedEvent === event._id ? 'border-purple-500' : 'border-gray-700/30'
            } cursor-pointer hover:border-purple-500/50 transition-colors`}
            onClick={() => handleEventSelect(event._id)}
          >
            <h3 className="text-lg font-semibold text-white mb-2">{event.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{event.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{new Date(event.startDate).toLocaleDateString()}</span>
              <span>{event.venue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSelection; 