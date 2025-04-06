// components/Analytics.tsx
import React from 'react';
import Image from 'next/image';

const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Analytics</h1>
          <div className="flex space-x-2">
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Event Summary Card */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-blue-800">TechConf 2023</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Day 2 of 3
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[
                { value: '324', label: 'Attendees' },
                { value: '78%', label: 'Participation' },
                { value: '4.3', label: 'Avg. Rating' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Current mood:</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                <span className="text-green-800 font-medium">Positive</span>
              </div>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-800">Sentiment Trends</h2>
              <div className="flex space-x-2 text-xs">
                {['Day', 'Week', 'All'].map((period, index) => (
                  <button
                    key={period}
                    className={`px-2 py-1 rounded ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8YW5hbHl0aWNzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjAwODd8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Analytics data showing sentiment trends over time"
                width={1080}
                height={160}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <div className="flex justify-between mb-2">
                <div className="text-xs text-gray-500">9:00 AM</div>
                <div className="text-xs text-gray-500">12:00 PM</div>
                <div className="text-xs text-gray-500">3:00 PM</div>
                <div className="text-xs text-gray-500">Now</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Positive', color: 'bg-green-500', width: '68%', value: '68%' },
                  { label: 'Neutral', color: 'bg-yellow-500', width: '22%', value: '22%' },
                  { label: 'Negative', color: 'bg-red-500', width: '10%', value: '10%' },
                ].map((sentiment) => (
                  <div key={sentiment.label} className="flex items-center">
                    <div className="w-24 text-sm text-gray-600">{sentiment.label}</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sentiment.color} rounded-full`}
                        style={{ width: sentiment.width }}
                      />
                    </div>
                    <div className="w-10 text-right text-sm text-gray-600">{sentiment.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Top Issues</h3>
                  <span className="text-xs text-blue-600 hover:underline">View All</span>
                </div>
                <div className="space-y-2">
                  {[
                    { issue: 'Wi-Fi Connectivity', value: '28%', bg: 'bg-red-100 text-red-800' },
                    { issue: 'Seating Availability', value: '16%', bg: 'bg-red-100 text-red-800' },
                    { issue: 'Audio Quality', value: '12%', bg: 'bg-yellow-100 text-yellow-800' },
                  ].map((item) => (
                    <div key={item.issue} className="flex items-center justify-between">
                      <span className="text-xs">{item.issue}</span>
                      <span className={`text-xs ${item.bg} px-2 py-1 rounded`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Highlights</h3>
                  <span className="text-xs text-blue-600 hover:underline">View All</span>
                </div>
                <div className="space-y-2">
                  {[
                    { highlight: 'Keynote Presentation', value: '4.8' },
                    { highlight: 'Networking Event', value: '4.6' },
                    { highlight: 'AI Workshop', value: '4.5' },
                  ].map((item) => (
                    <div key={item.highlight} className="flex items-center justify-between">
                      <span className="text-xs">{item.highlight}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Session Feedback */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-800">Session Feedback</h2>
              <button className="text-sm text-blue-600 hover:underline">Filter</button>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: 'Cloud Security Workshop',
                  rating: '4.2',
                  reviews: '26',
                  tags: ['Informative', 'Well Prepared', 'Too Technical'],
                  time: '10:00 AM - 11:30 AM • Main Hall',
                },
                {
                  title: 'Keynote: Future of Tech',
                  rating: '4.8',
                  reviews: '52',
                  tags: ['Inspiring', 'Engaging', 'Thought-provoking'],
                  time: '9:00 AM - 10:00 AM • Main Hall',
                },
                {
                  title: 'DevOps Best Practices',
                  rating: '3.9',
                  reviews: '18',
                  tags: ['Practical', 'Fast-paced', 'Advanced'],
                  time: '1:00 PM - 2:30 PM • Breakout Room A',
                },
              ].map((session) => (
                <div key={session.title} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{session.title}</h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">{session.rating}</span>
                      <span className="ml-1 text-xs text-gray-500">({session.reviews})</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {session.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full ${
                          tag.includes('Too') || tag.includes('Fast') || tag.includes('Advanced')
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">{session.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Q&A Analytics */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Q&A Engagement</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { value: '86', label: 'Questions Asked' },
                { value: '72%', label: 'Answer Rate' },
                { value: '3.2', label: 'Avg. Response Time (min)' },
                { value: '156', label: 'Total Votes' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-3 text-center">
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-medium mb-3">Top Questions by Votes</h3>
              <div className="space-y-3">
                {[
                  {
                    question: 'What are the most critical security measures for multi-cloud environments?',
                    session: 'Cloud Security Workshop',
                    votes: '42',
                  },
                  {
                    question: 'How will AI impact software development jobs in the next 5 years?',
                    session: 'Keynote: Future of Tech',
                    votes: '36',
                  },
                  {
                    question: "What's your recommendation for implementing zero-trust architecture?",
                    session: 'Cloud Security Workshop',
                    votes: '29',
                  },
                ].map((q) => (
                  <div key={q.question} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-800">"{q.question}"</p>
                      <p className="text-xs text-gray-500">{q.session}</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <span className="text-sm font-medium">{q.votes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Issue Resolution */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Issue Resolution</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800">Issues by Status</div>
                  <div className="text-xs text-gray-500">Updated 5 minutes ago</div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1553484771-898ed465e931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8YW5hbHl0aWNzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjAwODd8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                  alt="Person analyzing data on mobile and laptop"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Open', color: 'bg-red-500', width: '18%', value: '8' },
                  { label: 'In Progress', color: 'bg-yellow-500', width: '28%', value: '12' },
                  { label: 'Resolved', color: 'bg-green-500', width: '54%', value: '23' },
                ].map((status) => (
                  <div key={status.label} className="flex items-center">
                    <div className="w-24 text-sm text-gray-600">{status.label}</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${status.color} rounded-full`}
                        style={{ width: status.width }}
                      />
                    </div>
                    <div className="w-10 text-right text-sm text-gray-600">{status.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-medium mb-3">Average Resolution Time</h3>
              {[
                { label: 'High Priority', time: '14 min', color: 'bg-red-500', width: '30%' },
                { label: 'Medium Priority', time: '28 min', color: 'bg-yellow-500', width: '60%' },
                { label: 'Low Priority', time: '46 min', color: 'bg-green-500', width: '90%' },
              ].map((resolution) => (
                <div key={resolution.label}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm text-gray-600">{resolution.label}</div>
                    <div className="text-sm font-medium">{resolution.time}</div>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
                    <div
                      className={`h-full ${resolution.color} rounded-full`}
                      style={{ width: resolution.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights & Recommendations */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Insights & Recommendations</h2>
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  bg: 'bg-blue-50 border-blue-200',
                  iconBg: 'bg-blue-100',
                  title: 'Wi-Fi Connectivity Issues',
                  text: 'Multiple attendees are reporting Wi-Fi issues in the Main Hall, affecting overall experience ratings.',
                  rec: 'Recommendation: Contact IT support to increase bandwidth or add access points.',
                  color: 'text-blue',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                  bg: 'bg-green-50 border-green-200',
                  iconBg: 'bg-green-100',
                  title: 'Keynote Highly Rated',
                  text: 'The keynote presentation is receiving exceptional feedback (4.8/5) with "inspiring" as top descriptor.',
                  rec: 'Recommendation: Highlight speaker for future events and share recording.',
                  color: 'text-green',
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
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
                  bg: 'bg-yellow-50 border-yellow-200',
                  iconBg: 'bg-yellow-100',
                  title: 'Technical Content Concerns',
                  text: 'Some workshops are being rated as "too technical" by beginner-level attendees.',
                  rec: 'Recommendation: Add difficulty level indicators to session descriptions.',
                  color: 'text-yellow',
                },
              ].map((insight) => (
                <div key={insight.title} className={`rounded-lg border p-4 ${insight.bg}`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full ${insight.iconBg} flex items-center justify-center mr-3`}>
                      {insight.icon}
                    </div>
                    <div>
                      <h3 className={`text-sm font-medium ${insight.color}-800 mb-1`}>{insight.title}</h3>
                      <p className={`text-sm ${insight.color}-700 mb-2`}>{insight.text}</p>
                      <p className={`text-xs ${insight.color}-600`}>{insight.rec}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;