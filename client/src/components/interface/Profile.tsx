// components/Profile.tsx
import React from 'react';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
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
        </div>

        <div className="p-4">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-blue-500">
              <Image
                src="https://images.unsplash.com/photo-1554260570-9140fd3b7614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dXNlci1wcm9maWxlJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjA3MzV8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Professional profile photo of Alex Johnson"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Alex Johnson</h2>
            <p className="text-gray-600">Senior Developer @ TechCorp</p>
            <div className="flex items-center mt-1">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Attending
              </span>
            </div>
            <button className="mt-3 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
              Edit Profile
            </button>
          </div>

          {/* Event Information */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">TechConf 2023</h3>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-500"
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
              <span>June 15-18, 2023</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-500"
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
              <span>Tech Innovation Center, San Francisco</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { value: '3', label: 'Days Left' },
                { value: '7', label: 'Sessions' },
                { value: '12', label: 'Connections' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-2 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Tab Navigation */}
          <div className="mb-4 border-b border-gray-200">
            <div className="flex -mb-px">
              {['My Activity', 'Bookmarks', 'Connections'].map((tab, index) => (
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

          {/* My Activity Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">RECENT ACTIVITY</h3>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
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
                  ),
                  iconBg: 'bg-purple-100',
                  title: 'You asked a question',
                  time: '25 minutes ago • Cloud Security Workshop',
                  text: 'What are the most important security considerations when implementing a multi-cloud strategy?',
                  status: 'Answered',
                  statusBg: 'bg-green-100 text-green-800',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
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
                  iconBg: 'bg-blue-100',
                  title: 'You provided feedback',
                  time: '2 hours ago • Keynote Presentation',
                  rating: 4,
                  text: 'Great overview of new technologies! The speaker was engaging and knowledgeable.',
                  action: 'Edit Feedback',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-600"
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
                  ),
                  iconBg: 'bg-red-100',
                  title: 'You reported an issue',
                  time: 'Yesterday • Main Hall',
                  text: 'Wi-Fi connectivity issues in the main presentation hall',
                  status: 'Resolved',
                  statusBg: 'bg-blue-100 text-blue-800',
                },
              ].map((activity, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-full ${activity.iconBg} flex items-center justify-center mr-3`}>
                      {activity.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  {activity.rating && (
                    <div className="flex mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < activity.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                  )}
                  <p className="text-sm text-gray-700 mb-2">{activity.text}</p>
                  <div className="flex justify-between items-center">
                    {activity.status && (
                      <span className={`text-xs ${activity.statusBg} px-2 py-1 rounded`}>
                        {activity.status}
                      </span>
                    )}
                    <button className="text-xs text-blue-600 font-medium hover:underline">
                      {activity.action || 'View Answer'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Schedule Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">MY SCHEDULE</h3>
              <button className="text-xs text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: 'AI Ethics Panel',
                  date: 'Today',
                  time: '2:30 PM - 4:00 PM',
                  location: 'Main Hall',
                  statusBg: 'bg-green-100 text-green-800',
                },
                {
                  title: 'DevOps Best Practices',
                  date: 'Tomorrow',
                  time: '10:00 AM - 11:30 AM',
                  location: 'Breakout Room A',
                  statusBg: 'bg-gray-100 text-gray-800',
                },
              ].map((schedule, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{schedule.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${schedule.statusBg}`}>
                      {schedule.date}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-gray-400"
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
                    <span>{schedule.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-gray-400"
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
                    <span>{schedule.location}</span>
                  </div>
                  <button className="text-xs text-red-600 font-medium hover:underline">
                    Remove from Schedule
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* My Stats */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">MY PARTICIPATION</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '3', label: 'Questions Asked', color: 'text-blue-600' },
                  { value: '5', label: 'Feedback Given', color: 'text-blue-600' },
                  { value: '2', label: 'Issues Reported', color: 'text-red-600' },
                  { value: '4', label: 'Sessions Attended', color: 'text-green-600' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="space-y-3 mb-6">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                label: 'Notification Settings',
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                label: 'My Events',
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                ),
                label: 'Account Settings',
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                ),
                label: 'Sign Out',
                bg: 'bg-white border-red-200 text-red-600',
              },
            ].map((action) => (
              <button
                key={action.label}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg border border-gray-200 ${action.bg || 'bg-white'}`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {action.icon}
                  </div>
                  <span className="font-medium">{action.label}</span>
                </div>
                {action.label !== 'Sign Out' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* App Info */}
          <div className="text-center text-xs text-gray-500 mb-4">
            <p>Event Sentiment App v1.2.3</p>
            <p className="mt-1">© 2023 TechEvents Inc. All rights reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;