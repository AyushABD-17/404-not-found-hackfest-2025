"use client";

import React from 'react';
import EventCard from '@/components/pages/event/EventCard';
import { useRouter } from 'next/navigation';
import { useGetEventsQuery } from '@/redux/features/api/event/eventApi';

export default function EventPage() {
  const { data, isLoading, error } = useGetEventsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
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
        <div className="text-red-500">Error loading events</div>
      </div>
    );
  }

  const events = data?.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Events</h1>
        <button
          onClick={() => router.push('/event/create')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create New Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event: any) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {events?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No events found. Create your first event!</p>
        </div>
      )}
    </div>
  );
}

