"use client";

import React from "react";
import Image from "next/image";

const LiveUpdates: React.FC = () => {
  const featuredUpdate = {
    title: "Keynote Venue Change Alert!",
    description: "Due to overwhelming demand, the Tech Futures keynote has been moved to the Grand Hall. Doors open in 30 minutes.",
    time: "Posted 5 minutes ago",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bGl2ZXVwZGF0ZXMlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNjg0NXww&ixlib=rb-4.0.3&q=80&w=1080",
   
  };

  const filterTabs = [
    "All Updates",
    "Announcements",
    "Schedule Changes",
    "Q&A Sessions",
    "Networking Events",
  ];

  const timelineUpdates = [
    {
      color: "green",
      title: "AI Panel Discussion - Live Now!",
      status: "LIVE",
      description: "Join our experts discussing 'AI Ethics in 2023' in Room 204. Streaming also available.",
      time: "10 minutes ago",
      buttons: [
        {
          text: "Watch Stream",
          color: "indigo",
          icon: (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          text: "Ask Question",
          color: "purple",
          icon: (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ],
      icon: (
        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      color: "blue",
      title: "Network Optimization Complete",
      status: "INFO",
      description: "Wi-Fi issues have been resolved. Please reconnect if you were experiencing problems.",
      time: "24 minutes ago",
      buttons: [
        {
          text: "View Network Details",
          color: "gray",
          icon: (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ],
      icon: (
        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      color: "amber",
      title: "Schedule Update: Extended Lunch",
      status: "SCHEDULE",
      description: "Lunch break extended by 30 minutes. Afternoon sessions will start at 1:30 PM.",
      time: "42 minutes ago",
      buttons: [],
      icon: (
        <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      color: "purple",
      title: "Networking Mixer Tonight",
      status: "EVENT",
      description: "Join us for drinks and appetizers at the Rooftop Lounge from 6-8 PM. Great networking opportunity!",
      time: "1 hour ago",
      buttons: [
        {
          text: "Add to Calendar",
          color: "purple",
          icon: (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          text: "View Location",
          color: "gray",
          icon: (
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ],
      icon: (
        <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const topQuestions = [
    { count: "32", question: "When will the presentation slides be available?", asker: "Lisa K.", status: "Answered" },
    { count: "28", question: "Will there be a recording of the keynote?", asker: "Marcus T.", status: "Answered" },
    { count: "19", question: "Is there a vegetarian option for dinner?", asker: "Jamie R.", status: "Pending" },
  ];

  const quickPollOptions = [
    { id: "opt1", label: "Interactive workshops", percentage: "42%" },
    { id: "opt2", label: "Panel discussions", percentage: "28%" },
    { id: "opt3", label: "Traditional presentations", percentage: "18%" },
    { id: "opt4", label: "Networking events", percentage: "12%" },
  ];

  const socialMediaButtons = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204.012 3.584.07 4.85.062 1.366.326 2.633 1.301 3.608 1.301.975 1.24 2.242 1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204zm0-2.163C8.735 0 8.332.013 7.052.072 5.775.13 4.904.332 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.332 4.904.13 5.775.072 7.052.013 8.332 0 8.735 0 12s.013 3.668.072 4.948c.058 1.277.26 2.148.558 2.913.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.765.298 1.636.5 2.913.558 1.28.059 1.683.072 4.948.072s3.668-.013 4.948-.072c1.277-.058 2.148-.26 2.913-.558.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.384-2.126c.298-.765.5-1.636.558-2.913.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.26-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S19.86.936 19.095.63c-.765-.298-1.636-.5-2.913-.558C15.668.013 15.265 0 12 0z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.846-10.405c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44 1.44.645 1.44 1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.067 0-1.14.92-2.066 2.063-2.066 1.14 0 2.066.926 2.066 2.067 0 1.14-.926 2.067-2.066 2.067zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const ctaImageUrl =
    "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bGl2ZXVwZGF0ZXMlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNjg0NXww&ixlib=rb-4.0.3&q=80&w=1080";

  return (
    <div id="liveUpdates" className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Live Updates</h1>
        <p className="text-gray-600 text-sm sm:text-base">Stay informed with real-time event announcements and updates</p>
      </div>

      {/* Featured Update */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:w-2/3 text-white relative">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-3 backdrop-blur-sm">
              FEATURED ANNOUNCEMENT
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{featuredUpdate.title}</h2>
            <p className="mb-4 text-sm sm:text-base">{featuredUpdate.description}</p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition duration-200">
                View Map
              </button>
              <button className="bg-purple-700/30 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700/40 transition duration-200 backdrop-blur-sm">
                Set Reminder
              </button>
            </div>
            <span className="mt-4 block text-xs text-white/70 sm:absolute sm:bottom-2 sm:right-2">{featuredUpdate.time}</span>
          </div>
          <div className="relative h-48 md:h-auto md:w-1/3">
            <Image
              src={featuredUpdate.imageUrl}
              alt="Person in professional attire"
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x400";
              }}
            />
            <div className="absolute inset-0 bg-purple-900/20" />
            
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide gap-2">
        {filterTabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              tab === "All Updates"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline Updates */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
        {timelineUpdates.map((update, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 ${index < timelineUpdates.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className={`flex-shrink-0 h-10 w-10 bg-${update.color}-100 rounded-full flex items-center justify-center`}>
                {update.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">{update.title}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${update.color}-100 text-${update.color}-800`}>
                    {update.status}
                  </span>
                </div>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">{update.description}</p>
                {update.buttons.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {update.buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        className={`inline-flex items-center px-3 py-1.5 bg-${button.color}-50 text-${button.color}-700 rounded-lg text-sm hover:bg-${button.color}-100 transition-colors`}
                      >
                        {button.icon}
                        {button.text}
                      </button>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {update.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Trending Questions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 px-4 py-3 bg-gradient-to-r from-indigo-50 to-indigo-100">
            <h2 className="text-lg font-bold text-gray-800">Top Questions</h2>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {topQuestions.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2.5 py-0.5 rounded-full h-6 flex items-center flex-shrink-0">
                    {question.count}
                  </span>
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">{question.question}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      From {question.asker} •{" "}
                      <span className="text-purple-600">{question.status}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 transition-colors">
              View All Questions
            </button>
          </div>
        </div>

        {/* Quick Poll */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 px-4 py-3 bg-gradient-to-r from-amber-50 to-amber-100">
            <h2 className="text-lg font-bold text-gray-800">Quick Poll</h2>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Which session format do you prefer?</h3>
            <div className="space-y-4">
              {quickPollOptions.map((option) => (
                <div key={option.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id={option.id}
                        name="poll"
                        type="radio"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                      />
                      <label htmlFor={option.id} className="ml-2 block text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                    <span className="text-sm text-gray-500">{option.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all"
                      style={{ width: option.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                Submit Vote
              </button>
              <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 transition-colors">
                See Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl overflow-hidden shadow-lg mb-6">
        <div className="md:flex items-center">
          <div className="p-6 md:w-3/4">
            <h2 className="text-xl font-bold text-white mb-2">Share Your Experience</h2>
            <p className="text-indigo-100 mb-4 text-sm sm:text-base">Let others know about the event with hashtag #TechConf2023 on your social networks.</p>
            <div className="flex flex-wrap gap-3">
              {socialMediaButtons.map((button, index) => (
                <button
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors text-sm"
                >
                  {button.icon}
                  {button.name}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:block md:w-1/4 relative h-48 md:h-auto">
            <Image
              src={ctaImageUrl}
              alt="Woman with coffee at event"
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x400";
              }}
            />
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
          Load More Updates
        </button>
      </div>
    </div>
  );
};

export default LiveUpdates;