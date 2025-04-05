// components/Dashboard.tsx
import React from 'react';
import Image from 'next/image';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* First Section: Headers */}
      <main className="h-full overflow-auto pb-20">
        {/* Event Info Card */}
        <div className="p-4">
          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-blue-800">TechConf 2023</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Live now
              </span>
            </div>
            <p className="text-sm text-gray-900 mb-2">Hall A, Innovation Center</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-900 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-900">2:30 PM - 4:30 PM</span>
              </div>
              <button className="text-sm text-blue-600 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Sentiment Summary */}
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Current Sentiment</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">78%</div>
              <div className="text-xs text-gray-900">Positive</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-1">15%</div>
              <div className="text-xs text-gray-900">Neutral</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-3 text-center">
              <div className="text-2xl font-bold text-red-500 mb-1">7%</div>
              <div className="text-xs text-gray-900">Negative</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Report Issue</span>
            </button>
            <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Give Feedback</span>
            </button>
            <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Ask Question</span>
            </button>
            <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Request Help</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <Image
                    src="https://avatar.iran.liara.run/public"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    John D. reported an issue
                  </h3>
                  <p className="text-xs text-gray-900">
                    Audio system feedback in Hall A
                  </p>
                </div>
                <span className="text-xs text-gray-900">2m ago</span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <Image
                    src="https://avatar.iran.liara.run/public"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Sarah M. asked a question
                  </h3>
                  <p className="text-xs text-gray-900">
                    Will slides be available after the event?
                  </p>
                </div>
                <span className="text-xs text-gray-900">15m ago</span>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3">
                  <Image
                    src="https://avatar.iran.liara.run/public"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Michael T. gave feedback
                  </h3>
                  <p className="text-xs text-gray-900">
                    Great presentation on cloud security!
                  </p>
                </div>
                <span className="text-xs text-gray-900">32m ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Analytics */}
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Event Analytics</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <Image
              src="https://images.unsplash.com/photo-1555274397-1b4e1986ce03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFzaGJvYXJkJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNTk2MTh8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Dashboard analytics showing event metrics"
              width={1080}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="bg-gray-50 p-2 rounded-md">
                <div className="text-xs text-gray-900">Attendees</div>
                <div className="text-xl font-bold text-gray-900">254</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <div className="text-xs text-gray-900">Questions</div>
                <div className="text-xl font-bold text-gray-900">37</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <div className="text-xs text-gray-900">Issues</div>
                <div className="text-xl font-bold text-gray-900">12</div>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <div className="text-xs text-gray-900">Feedback</div>
                <div className="text-xl font-bold text-gray-900">86</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Second Section: Report Issue */}
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Report an Issue</h1>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        <div className="p-4">
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8aXNzdWUtcmVwb3J0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDM4NzU0NDV8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Professional in business setting ready to address issues"
              width={1080}
              height={160}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h2 className="font-bold text-xl">Quick Issue Reporting</h2>
                <p className="text-sm">Report problems in real-time for immediate assistance</p>
              </div>
            </div>
          </div>

          {/* Issue Categories */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-900 mb-3">Issue Category</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-24 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 active:bg-blue-50 transition">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Technical</span>
              </button>
              <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-24 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 active:bg-blue-50 transition">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Logistics</span>
              </button>
              <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-24 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 active:bg-blue-50 transition">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Content</span>
              </button>
              <button className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center h-24 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 active:bg-blue-50 transition">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Other</span>
              </button>
            </div>
          </div>

          {/* Issue Form */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-900 mb-3">Report Details</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="issueTitle"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Issue Title
                </label>
                <input
                  type="text"
                  id="issueTitle"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of issue"
                />
              </div>

              <div>
                <label
                  htmlFor="issueLocation"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Location
                </label>
                <div className="relative">
                  <select
                    id="issueLocation"
                    defaultValue="" // Added defaultValue to control the initial selection
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="" disabled>
                      Select where the issue occurred
                    </option>
                    <option value="Main Hall">Main Hall</option>
                    <option value="Breakout Room A">Breakout Room A</option>
                    <option value="Breakout Room B">Breakout Room B</option>
                    <option value="Exhibition Area">Exhibition Area</option>
                    <option value="Catering Area">Catering Area</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="issueDescription"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="issueDescription"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Please provide more details about the issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Priority Level
                </label>
                <div className="flex space-x-3">
                  <label className="flex-1 relative">
                    <input type="radio" name="priority" value="low" className="sr-only peer" />
                    <div className="w-full p-2 text-center border border-gray-300 rounded-lg peer-checked:bg-green-50 peer-checked:border-green-500 peer-checked:text-green-700 cursor-pointer text-gray-900">
                      Low
                    </div>
                  </label>
                  <label className="flex-1 relative">
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      className="sr-only peer"
                    />
                    <div className="w-full p-2 text-center border border-gray-300 rounded-lg peer-checked:bg-yellow-50 peer-checked:border-yellow-500 peer-checked:text-yellow-700 cursor-pointer text-gray-900">
                      Medium
                    </div>
                  </label>
                  <label className="flex-1 relative">
                    <input type="radio" name="priority" value="high" className="sr-only peer" />
                    <div className="w-full p-2 text-center border border-gray-300 rounded-lg peer-checked:bg-red-50 peer-checked:border-red-500 peer-checked:text-red-700 cursor-pointer text-gray-900">
                      High
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-900">
                    I need immediate assistance with this issue
                  </span>
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              >
                Submit Issue Report
              </button>
            </form>
          </div>

          {/* Recently Reported Issues */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-900">Recently Reported</h2>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-900">Wi-Fi connectivity issues</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    Medium
                  </span>
                </div>
                <p className="text-sm text-gray-900">
                  Intermittent connection in Main Hall area
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-900">Reported 5 min ago</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    In progress
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-gray-900">Microphone feedback</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    High
                  </span>
                </div>
                <p className="text-sm text-gray-900">
                  Audio system issue in Breakout Room A
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-900">Reported 12 min ago</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    Resolved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-900 mb-2">Need Immediate Help?</h2>
            <p className="text-sm text-gray-900 mb-3">
              For urgent issues that require immediate assistance, please contact:
            </p>
            <div className="flex items-center justify-between">
              <button className="flex items-center text-blue-600 font-medium text-sm hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-900">Call Event Staff</span>
              </button>
              <button className="flex items-center text-blue-600 font-medium text-sm hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-gray-900">Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;