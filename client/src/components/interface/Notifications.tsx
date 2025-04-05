// components/Notifications.tsx
import React from 'react';
import Image from 'next/image';

const Notifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Notifications</h1>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
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
        </div>

        <div className="p-4">
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-6 relative">
            <Image
              src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bm90aWZpY2F0aW9ucyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMTcwNDQ0fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Person's hand on MacBook with notifications on devices"
              width={1080}
              height={160}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h2 className="font-bold text-xl">Stay Updated</h2>
                <p className="text-sm">Get real-time alerts about event changes and responses</p>
              </div>
            </div>
          </div>

          {/* Notifications Filter Tabs */}
          <div className="mb-4 border-b border-gray-200">
            <div className="flex -mb-px">
              {['All', 'Unread', 'Mentions'].map((tab, index) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 text-center border-b-2 font-medium ${
                    index === 0
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Today Notifications */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-500">TODAY</h3>
              <button className="text-xs text-blue-600 hover:underline">Mark all as read</button>
            </div>
            <div className="space-y-3">
              {[
                {
                  icon: (
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
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  ),
                  bg: 'bg-blue-50',
                  border: 'border-blue-500',
                  iconBg: 'bg-blue-100',
                  title: 'Room Change Alert',
                  text: 'Cloud Security Workshop moved to Hall B due to capacity',
                  time: '10 minutes ago',
                  action: 'View Details',
                  actionColor: 'text-blue-800',
                  isNew: true,
                },
                {
                  icon: (
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
                  ),
                  bg: 'bg-green-50',
                  border: 'border-green-500',
                  iconBg: 'bg-green-100',
                  title: 'Question Answered',
                  text: 'Sarah Johnson answered your question about cloud security',
                  time: '25 minutes ago',
                  action: 'View Answer',
                  actionColor: 'text-green-800',
                  isNew: true,
                },
                {
                  icon: (
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  ),
                  bg: 'bg-white',
                  border: 'border-purple-500',
                  iconBg: 'bg-purple-100',
                  title: 'Session Starting Soon',
                  text: 'AI Ethics Panel begins in 15 minutes in Main Hall',
                  time: '1 hour ago',
                  action: 'Add to Schedule',
                  actionColor: 'text-purple-600',
                  isNew: false,
                },
              ].map((n, index) => (
                <div
                  key={index}
                  className={`${n.bg} rounded-lg p-3 border-l-4 ${n.border}`}
                >
                  <div className="flex">
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full ${n.iconBg} flex items-center justify-center`}
                    >
                      {n.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-baseline">
                        <h4
                          className={`text-sm font-medium ${
                            n.bg === 'bg-white' ? 'text-gray-800' : n.actionColor
                          }`}
                        >
                          {n.title}
                        </h4>
                        {n.isNew && (
                          <span
                            className={`ml-2 text-xs font-semibold ${
                              n.bg === 'bg-blue-50' ? 'text-blue-600' : 'text-green-600'
                            }`}
                          >
                            New
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          n.bg === 'bg-white' ? 'text-gray-600' : n.actionColor.replace('800', '700')
                        }`}
                      >
                        {n.text}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span
                          className={`text-xs ${
                            n.bg === 'bg-white' ? 'text-gray-500' : n.actionColor.replace('800', '600')
                          }`}
                        >
                          {n.time}
                        </span>
                        <button className={`text-xs font-medium ${n.actionColor} hover:underline`}>
                          {n.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yesterday Notifications */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">YESTERDAY</h3>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
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
                  ),
                  title: 'Feedback Acknowledged',
                  text: 'Event organizers thanked you for your feedback on Keynote Presentation',
                  time: 'Yesterday, 4:30 PM',
                  action: 'View',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  ),
                  title: 'Issue Resolved',
                  text: 'The Wi-Fi connectivity issue you reported has been fixed',
                  time: 'Yesterday, 2:15 PM',
                  action: 'Details',
                },
              ].map((n, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border-l-4 border-gray-300"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {n.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium text-gray-800">{n.title}</h4>
                      <p className="text-sm text-gray-600">{n.text}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{n.time}</span>
                        <button className="text-xs text-gray-600 font-medium hover:underline">
                          {n.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earlier Notifications */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">EARLIER</h3>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: 'Schedule Updated',
                  text: 'Event schedule has been updated with new sessions',
                  time: '2 days ago',
                  action: 'View Schedule',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  ),
                  title: 'Welcome to TechConf 2023',
                  text: 'Thanks for registering! Check out event info in the app',
                  time: '3 days ago',
                  action: 'View',
                },
              ].map((n, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border-l-4 border-gray-300"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {n.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium text-gray-800">{n.title}</h4>
                      <p className="text-sm text-gray-600">{n.text}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{n.time}</span>
                        <button className="text-xs text-gray-600 font-medium hover:underline">
                          {n.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No More Notifications */}
          <div className="text-center py-8 px-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-1">
              You're all caught up!
            </h3>
            <p className="text-sm text-gray-500">
              We'll notify you when there's something new
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;