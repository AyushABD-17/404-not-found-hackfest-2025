// components/LiveQA.tsx
import React from 'react';
import Image from 'next/image';

const LiveQA: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Live Q&A</h1>
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
              src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bGl2ZS1xYSUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzODc1Njg5fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Professional looking ready to answer questions"
              width={1080}
              height={160}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h2 className="font-bold text-xl">Ask Questions in Real-Time</h2>
                <p className="text-sm">Get answers from speakers during the session</p>
              </div>
            </div>
          </div>

          {/* Current Session Info */}
          <div className="mb-6 bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-purple-800">Cloud Security Workshop</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Live now
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Speaker: Sarah Johnson, Security Lead at CloudSafe
            </p>
            <button
              type="button"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Ask a Question
            </button>
          </div>

          {/* Questions Tab Navigation */}
          <div className="mb-4 border-b border-gray-200">
            <div className="flex -mb-px">
              {['Popular', 'Recent', 'My Questions', 'Answered'].map((tab, index) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 text-center border-b-2 font-medium ${
                    index === 0
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-purple-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4 mb-6">
            {[
              {
                user: 'Michael Thompson',
                time: '5 minutes ago',
                question:
                  'What are the most critical security measures for multi-cloud environments?',
                upvotes: 42,
                replies: 3,
                status: 'Answering soon',
                statusColor: 'bg-green-100 text-green-800',
              },
              {
                user: 'Jennifer Rodriguez',
                time: '12 minutes ago',
                question:
                  'How often should security audits be performed for enterprise cloud infrastructure?',
                upvotes: 36,
                replies: 2,
                status: 'Answered',
                statusColor: 'bg-blue-100 text-blue-800',
                answer: {
                  user: 'Sarah Johnson (Speaker)',
                  text: 'At minimum quarterly, but monthly for critical systems...',
                },
              },
              {
                user: 'David Chen',
                time: '18 minutes ago',
                question:
                  "What's your recommendation for implementing zero-trust architecture in an established organization?",
                upvotes: 27,
                replies: 0,
                status: 'In queue',
                statusColor: 'bg-yellow-100 text-yellow-800',
              },
              {
                user: 'Emily Watson',
                time: '25 minutes ago',
                question:
                  'Can you recommend best practices for securing containerized applications?',
                upvotes: 18,
                replies: 1,
                status: 'Answered',
                statusColor: 'bg-blue-100 text-blue-800',
              },
            ].map((q, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src="https://avatar.iran.liara.run/public"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{q.user}</h3>
                    <p className="text-xs text-gray-500">{q.time}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">{q.question}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <button className="flex items-center mr-4 hover:text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
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
                      <span>{q.upvotes}</span>
                    </button>
                    <button className="flex items-center hover:text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
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
                      <span>{q.replies} repl{q.replies === 1 ? 'y' : 'ies'}</span>
                    </button>
                  </div>
                  <span className={`inline-block text-xs px-2 py-1 rounded ${q.statusColor}`}>
                    {q.status}
                  </span>
                </div>
                {q.answer && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full overflow-hidden mr-2 bg-purple-100 flex items-center justify-center">
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
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-purple-700 text-xs font-medium">{q.answer.user}</div>
                        <p className="text-sm text-gray-700">{q.answer.text}</p>
                        <button className="text-xs text-purple-600 mt-1">Read more</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* More Questions Button */}
          <div className="text-center mb-6">
            <button className="text-purple-600 font-medium flex items-center justify-center mx-auto hover:underline">
              <span>Load more questions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
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
            </button>
          </div>

          {/* Upcoming Sessions */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Upcoming Q&A Sessions</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'AI Ethics Panel',
                  time: '2:30 PM',
                  desc: 'Multiple experts discuss ethical implications of AI',
                },
                {
                  title: 'DevOps Best Practices',
                  time: '4:00 PM',
                  desc: 'Live discussion with field experts',
                },
              ].map((session) => (
                <div
                  key={session.title}
                  className="bg-white rounded-lg border border-gray-200 p-3"
                >
                  <div className="flex justify-between mb-1">
                    <h3 className="font-medium text-gray-900">{session.title}</h3>
                    <span className="text-xs text-gray-500">{session.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{session.desc}</p>
                  <button className="text-sm text-purple-600 font-medium hover:underline">
                    Set reminder
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Help Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">Q&A Guidelines</h2>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Keep questions concise and related to the session topic</li>
              <li>Avoid personal or highly specific questions</li>
              <li>Popular questions will be prioritized</li>
              <li>Questions may be moderated before appearing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveQA;