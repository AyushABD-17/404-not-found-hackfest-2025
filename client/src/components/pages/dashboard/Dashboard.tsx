"use client";

import React from "react";
import { useSelector } from "react-redux";
const Dashboard: React.FC = () => {

  const { user } = useSelector((state: any) => state.auth);
  console.log(user);
  const stats = [
    {
      title: "Current Sessions",
      value: "3",
      color: "green",
      status: "Live Now",
      icon: (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Your Questions",
      value: "2",
      color: "blue",
      status: "1 Answered",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Feedback Submitted",
      value: "5",
      color: "purple",
      status: "Thank you!",
      icon: (
        <svg
          className="w-6 h-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Coming Up",
      value: "2",
      color: "yellow",
      status: "In 30min",
      icon: (
        <svg
          className="w-6 h-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const liveUpdates = [
    {
      color: "pink",
      title: "Keynote Starting Soon",
      time: "2 min ago",
      description: "The keynote with Sarah Johnson will begin in 15 minutes in Main Hall.",
      buttonText: "Set Reminder",
    },
    {
      color: "blue",
      title: "Q&A Session Active",
      time: "18 min ago",
      description: "The Innovation Panel is now taking questions. Join in Room B to participate!",
      buttonText: "Ask Question",
    },
    {
      color: "green",
      title: "Lunch Available",
      time: "42 min ago",
      description: "Lunch is now being served in the Dining Hall. Vegetarian options available.",
      buttonText: "",
    },
    {
      color: "gray",
      title: "Wi-Fi Information",
      time: "1h ago",
      description: "Network: TechConf2023 | Password: innovate2023",
      buttonText: "",
    },
  ];

  const upcomingSessions = [
    {
      time: "11:30 AM - 12:30 PM",
      title: "Future of AI in Business",
      speaker: "Room A - Dr. Michael Chen",
      color: "blue",
    },
    {
      time: "2:00 PM - 3:15 PM",
      title: "Networking Workshop",
      speaker: "Room C - Lisa Rodriguez",
      color: "purple",
    },
  ];

  const quickActions = [
    {
      color: "pink",
      icon: (
        <svg
          className="w-5 h-5 text-pink-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      title: "Send Feedback",
    },
    {
      color: "violet",
      icon: (
        <svg
          className="w-5 h-5 text-violet-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Ask Question",
    },
    {
      color: "amber",
      icon: (
        <svg
          className="w-5 h-5 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "View Schedule",
    },
    {
      color: "red",
      icon: (
        <svg
          className="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "Report Issue",
    },
  ];

  return (
    <div id="dashboard" className="min-h-screen p-4 md:p-6 lg:p-4 ">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 md:p-6 text-white mb-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome, Alex! 👋</h1>
            <p className="text-indigo-100">TechConf 2023 is happening now. Stay connected!</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-white text-purple-600 font-medium px-4 py-2 rounded-full shadow-md hover:bg-opacity-90 transition duration-200 text-sm">
              Check in now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
              <div className={`bg-${stat.color}-900/50 p-2 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className={`text-xs px-2 py-1 rounded-full bg-${stat.color}-900/30 text-${stat.color}-300`}>
                {stat.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Updates Column */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
              <h2 className="text-xl font-bold text-white">Live Updates</h2>
            </div>
            <div className="p-4">
              <div className="relative">
                <div className="absolute left-5 h-full w-0.5 bg-gray-700"></div>

                {liveUpdates.map((update, index) => (
                  <div key={index} className="relative pl-8 pb-6">
                    <div className={`absolute left-3 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-${update.color}-500 border-2 border-gray-800`}></div>
                    <div className={`bg-${update.color}-900/30 p-3 rounded-lg`}>
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-white">{update.title}</p>
                        <span className="text-xs text-gray-400">{update.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{update.description}</p>
                      {update.buttonText && (
                        <div className="mt-3">
                          <button className={`bg-${update.color}-800 text-${update.color}-200 px-3 py-1 rounded-full text-sm hover:bg-${update.color}-700 transition duration-200`}>
                            {update.buttonText}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Column */}
        <div>
          {/* Your Upcoming Sessions */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
              <h2 className="text-xl font-bold text-white">Your Next Sessions</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className={`p-3 bg-${session.color}-900/30 rounded-lg`}>
                    <p className="text-sm text-gray-400">{session.time}</p>
                    <h4 className="font-semibold text-white">{session.title}</h4>
                    <p className="text-sm text-gray-300">{session.speaker}</p>
                    <div className="mt-2 flex space-x-2">
                      <button className={`bg-${session.color}-800 text-${session.color}-200 px-3 py-1 rounded-full text-xs hover:bg-${session.color}-700 transition duration-200`}>
                        Add to Calendar
                      </button>
                      <button className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition duration-200">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
            <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-orange-900/50 to-amber-900/50">
              <h2 className="text-xl font-bold text-white">Quick Actions</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`p-3 bg-${action.color}-900/30 rounded-lg hover:bg-${action.color}-800/50 transition duration-200 flex flex-col items-center justify-center`}
                >
                  <div className={`bg-${action.color}-800 p-2 rounded-full mb-2`}>
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{action.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resource Banner */}
      <div className="mt-6 relative rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFzaGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNTk2MTh8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
          alt="Person working on laptop at conference"
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/${target.width}x${target.height}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 flex items-center">
          <div className="px-6 py-4 text-white max-w-lg">
            <h3 className="text-xl font-bold mb-2">Download Event Resources</h3>
            <p className="text-indigo-100 text-sm mb-3">Access presentations, schedules, and networking information for TechConf 2023</p>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition duration-200 shadow-md">
              Access Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;