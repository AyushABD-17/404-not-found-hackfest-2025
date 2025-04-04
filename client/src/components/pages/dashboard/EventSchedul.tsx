"use client";

import React from "react";

const EventSchedule: React.FC = () => {
  const scheduleHero = {
    title: "Keynote: The Future of Technology",
    description: "Join our CEO Sarah Johnson for an inspiring look at emerging tech trends.",
    time: "10:00 AM - 11:30 AM",
    location: "Main Hall",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZXZlbnRzY2hlZHVsZSUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MTk0fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    photoCredit: "Photo by Hunters Race",
  };

  const dateOptions = [
    { label: "Today (June 15)", isActive: true },
    { label: "Tomorrow (June 16)", isActive: false },
    { label: "Day 3 (June 17)", isActive: false },
  ];

  const trackOptions = [
    "All Tracks",
    "Business",
    "Technology",
    "Design",
    "Marketing",
  ];

  const roomOptions = [
    "All Rooms",
    "Main Hall",
    "Workshop Room A",
    "Workshop Room B",
    "Exhibition Space",
  ];

  const morningSessions = [
    {
      isLive: true,
      time: "10:00 AM - 11:30 AM",
      title: "Keynote: The Future of Technology",
      location: "Main Hall",
      speaker: "Sarah Johnson, CEO",
      description: "Discover the cutting-edge technologies that will shape our future and transform industries in the coming decade.",
      tags: [
        { label: "Technology", color: "blue" },
        { label: "Innovation", color: "indigo" },
        { label: "Featured", color: "green" },
      ],
    },
    {
      isLive: false,
      time: "11:45 AM - 12:30 PM",
      title: "Panel Discussion: AI Ethics in Business",
      location: "Workshop Room A",
      speaker: "Michael Chen, Alex Kim, Lisa Wong",
      description: "A thought-provoking discussion on the ethical implications of AI implementation in today's business landscape.",
      tags: [
        { label: "Technology", color: "blue" },
        { label: "Ethics", color: "pink" },
      ],
    },
  ];

  const lunchBreak = {
    time: "12:30 PM - 1:30 PM",
    title: "Lunch Break",
    location: "Dining Hall",
  };

  const afternoonSessions = [
    {
      time: "1:30 PM - 2:30 PM",
      title: "Workshop: Design Thinking for Developers",
      location: "Workshop Room B",
      speaker: "Jessica Lee, UX Director",
      description: "Learn how design thinking methodologies can enhance your development process and create better user experiences.",
      tags: [
        { label: "Design", color: "pink" },
        { label: "Development", color: "blue" },
        { label: "Workshop", color: "purple" },
      ],
    },
    {
      time: "2:45 PM - 3:45 PM",
      title: "Presentation: Data-Driven Marketing Strategies",
      location: "Main Hall",
      speaker: "Marcus Williams, CMO",
      description: "Explore how data analytics is transforming marketing and learn practical strategies to implement in your organization.",
      tags: [
        { label: "Marketing", color: "green" },
        { label: "Analytics", color: "yellow" },
      ],
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Interactive Session: Networking for Success",
      location: "Exhibition Area",
      speaker: "Robert Garcia, Business Development",
      description: "A hands-on networking session to help you make meaningful connections and develop your professional network.",
      tags: [
        { label: "Interactive", color: "purple" },
        { label: "Networking", color: "orange" },
      ],
    },
  ];

  const eveningEvent = {
    time: "6:00 PM - 8:00 PM",
    title: "Evening Networking Reception",
    location: "Rooftop Lounge",
    description: "Join us for drinks, appetizers, and networking to conclude the first day of the conference.",
    imageUrl: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZXZlbnRzY2hlZHVsZSUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MTk0fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    photoCredit: "Photo by Ben Rosett",
  };

  const recommendations = [
    {
      time: "Tomorrow, 9:30 AM",
      title: "Cloud Computing Best Practices",
      location: "Workshop Room A",
      tag: { label: "Based on Your Interests", color: "blue" },
    },
    {
      time: "Tomorrow, 2:00 PM",
      title: "Sustainable Tech: Building for the Future",
      location: "Main Hall",
      tag: { label: "Popular Session", color: "green" },
    },
    {
      time: "Day 3, 11:00 AM",
      title: "Hands-on UX Research Workshop",
      location: "Workshop Room B",
      tag: { label: "Limited Seats", color: "pink" },
    },
  ];

  const downloads = {
    title: "Download Event Resources",
    description: "Get the complete schedule, venue map, and speaker information on your device.",
    imageUrl: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZXZlbnRzY2hlZHVsZSUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MTk0fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    photoCredit: "Photo by Brooke Lark",
  };

  return (
    <div id="eventSchedule" className="page-section min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Event Schedule</h1>
        <p className="text-gray-600">Plan your day and never miss an important session</p>
      </div>

      {/* Schedule Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="md:flex">
          <div className="p-6 md:w-2/3 text-white z-10 relative">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-3 backdrop-blur-sm">
              HAPPENING NOW
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">{scheduleHero.title}</h2>
            <p className="mb-4">{scheduleHero.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{scheduleHero.time}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{scheduleHero.location}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 transition duration-200">
                Add to My Schedule
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm transition duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ask a Question
              </button>
            </div>
          </div>
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <img
              src={scheduleHero.imageUrl}
              alt="Professional speaker at conference"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x400";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-indigo-600/60 md:bg-none"></div>
            <div className="absolute bottom-2 right-2 text-white/70 text-xs bg-black/30 px-2 py-1 rounded">
              {scheduleHero.photoCredit}
            </div>
          </div>
        </div>
      </div>

      {/* Date Selector and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Date Selector */}
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            {dateOptions.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium mr-2 whitespace-nowrap rounded-full ${
                  option.isActive ? "bg-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Filter:</span>
            <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              {trackOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              {roomOptions.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <button className="p-1.5 text-gray-500 hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Schedule Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
        {/* Morning Sessions */}
        <div className="border-b border-gray-100">
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
            <h2 className="text-lg font-bold text-gray-800">Morning Sessions</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {morningSessions.map((session, index) => (
              <div key={index} className={`p-4 ${session.isLive ? "bg-purple-50 border-l-4 border-purple-500" : ""}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-3 lg:mb-0">
                    <div className="flex items-center">
                      {session.isLive && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">LIVE NOW</span>
                      )}
                      <span className={`text-sm text-gray-500 ${session.isLive ? "ml-2" : ""}`}>{session.time}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mt-1">{session.title}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {session.location}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {session.speaker}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm hover:bg-${session.isLive ? "purple" : "gray"}-200 transition duration-200 ${session.isLive ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}>
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Add to My Schedule
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{session.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {session.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${tag.color}-100 text-${tag.color}-800`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lunch Break */}
        <div className="p-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base font-medium text-gray-700">{lunchBreak.time}</h3>
            <span className="mx-2">|</span>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700 font-medium">{lunchBreak.title}</span>
            </div>
            <span className="ml-2 text-gray-500 text-sm">({lunchBreak.location})</span>
          </div>
        </div>

        {/* Afternoon Sessions */}
        <div>
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50">
            <h2 className="text-lg font-bold text-gray-800">Afternoon Sessions</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {afternoonSessions.map((session, index) => (
              <div key={index} className="p-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-3 lg:mb-0">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">{session.time}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mt-1">{session.title}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {session.location}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {session.speaker}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Add to My Schedule
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{session.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {session.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${tag.color}-100 text-${tag.color}-800`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evening Event */}
        <div className="p-5 bg-gradient-to-r from-purple-50 to-indigo-50 border-t border-gray-100 relative">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <img
                src={eveningEvent.imageUrl}
                alt="Professional in business attire for networking event"
                className="w-16 h-16 rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/100x100";
                }}
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-medium text-gray-800">{eveningEvent.title}</h3>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {eveningEvent.time}
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {eveningEvent.location}
              </div>
              <p className="mt-2 text-sm text-gray-600">{eveningEvent.description}</p>
              <div className="mt-3">
                <button className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to My Schedule
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-gray-400 text-xs">
            {eveningEvent.photoCredit}
          </div>
        </div>
      </div>

      {/* My Schedule Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
        <div className="border-b border-gray-100 p-4 bg-gradient-to-r from-fuchsia-50 to-pink-50">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">My Schedule</h2>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              Export to Calendar
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 flex items-center justify-center text-center flex-col py-8">
            <svg className="w-12 h-12 text-purple-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Your personal schedule is empty</h3>
            <p className="text-gray-600 mb-4">Add sessions to your schedule to keep track of the events you're interested in.</p>
            <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition duration-200">
              Browse Sessions
            </button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition duration-200">
              <div className={`border-b border-gray-100 p-3 bg-gradient-to-r from-${rec.tag.color}-50 to-${rec.tag.color === "blue" ? "indigo" : rec.tag.color === "green" ? "teal" : "rose"}-50`}>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{rec.time}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${rec.tag.color}-100 text-${rec.tag.color}-800`}>
                    {rec.tag.label}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{rec.title}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {rec.location}
                </div>
                <div className="mt-3">
                  <button className="w-full inline-flex items-center justify-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition duration-200">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Add to My Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downloads Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl overflow-hidden shadow-lg mb-6">
        <div className="md:flex items-center">
          <div className="p-6 md:w-2/3 text-white">
            <h2 className="text-xl font-bold mb-2">{downloads.title}</h2>
            <p className="text-indigo-100 mb-4">{downloads.description}</p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 transition duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm transition duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View Venue Map
              </button>
            </div>
          </div>
          <div className="md:w-1/3 relative">
            <img
              src={downloads.imageUrl}
              alt="Woman with coffee planning her day"
              className="w-full h-48 md:h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/400x300";
              }}
            />
            <div className="absolute bottom-2 right-2 text-white/70 text-xs bg-black/30 px-2 py-1 rounded">
              {downloads.photoCredit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;