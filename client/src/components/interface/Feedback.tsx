// components/Feedback.tsx
import React from 'react';
import Image from 'next/image';

const Feedback: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gray-100">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Give Feedback</h1>
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
              src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZmVlZGJhY2stY29sbGVjdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzODc1NTQ5fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Professional woman ready to collect feedback"
              width={1080}
              height={160}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-4">
                <h2 className="font-bold text-xl">Your Opinion Matters</h2>
                <p className="text-sm">Help us improve the event experience</p>
              </div>
            </div>
          </div>

          {/* Current Session Feedback */}
          <div className="mb-6 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-blue-800">Current Session</h2>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Live now
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">Cloud Security Workshop</p>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Give Quick Feedback
            </button>
          </div>

          {/* Feedback Form */}
          <div className="mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Detailed Feedback</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="feedbackSession"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Session/Topic
                </label>
                <div className="relative">
                  <select
                    id="feedbackSession"
                    className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option>Cloud Security Workshop (Current)</option>
                    <option>Keynote Presentation</option>
                    <option>AI Ethics Panel</option>
                    <option>DevOps Best Practices</option>
                    <option>General Event Feedback</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating
                </label>
                <div className="flex justify-between items-center">
                  <label className="flex flex-col items-center cursor-pointer">
                    <input type="radio" name="rating" value="1" className="sr-only peer" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-gray-400 peer-checked:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-900">Poor</span>
                  </label>
                  <label className="flex flex-col items-center cursor-pointer">
                    <input type="radio" name="rating" value="2" className="sr-only peer" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-gray-400 peer-checked:text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-900">Fair</span>
                  </label>
                  <label className="flex flex-col items-center cursor-pointer">
                    <input type="radio" name="rating" value="3" className="sr-only peer" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-gray-400 peer-checked:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-900">Average</span>
                  </label>
                  <label className="flex flex-col items-center cursor-pointer">
                    <input type="radio" name="rating" value="4" className="sr-only peer" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-gray-400 peer-checked:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-900">Good</span>
                  </label>
                  <label className="flex flex-col items-center cursor-pointer">
                    <input type="radio" name="rating" value="5" className="sr-only peer" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 text-gray-400 peer-checked:text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-900">Excellent</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What did you like?
                </label>
                <div className="flex flex-wrap gap-2">
                  {['content', 'presentation', 'speaker', 'materials', 'interaction'].map(
                    (item) => (
                      <label
                        key={item}
                        className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200"
                      >
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          name="liked"
                          value={item}
                        />
                        <span className="text-sm text-gray-900 peer-checked:font-medium">
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What could be improved?
                </label>
                <div className="flex flex-wrap gap-2">
                  {['length', 'depth', 'clarity', 'examples', 'qa-session'].map((item) => (
                    <label
                      key={item}
                      className="inline-flex items-center px-3 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        name="improve"
                        value={item}
                      />
                      <span className="text-sm text-gray-900 peer-checked:font-medium">
                        {item === 'qa-session'
                          ? 'Q&A'
                          : item.charAt(0).toUpperCase() + item.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="feedbackComments"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Comments
                </label>
                <textarea
                  id="feedbackComments"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Share your thoughts here..."
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Submit anonymously</span>
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          {/* My Recent Feedback */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-800">My Recent Feedback</h2>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-900">Keynote Presentation</h3>
                  <div className="flex">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Great overview of new technologies!
                </p>
                <span className="text-xs text-gray-500">Submitted 2 hours ago</span>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-900">AI Ethics Panel</h3>
                  <div className="flex">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    {Array(2)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Needed more diverse perspectives
                </p>
                <span className="text-xs text-gray-500">Submitted Yesterday</span>
              </div>
            </div>
          </div>

          {/* Feedback Stats */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-3">Event Feedback Overview</h2>
            <div className="space-y-3">
              {[
                { label: 'Excellent', color: 'bg-green-500', width: '62%' },
                { label: 'Good', color: 'bg-blue-500', width: '24%' },
                { label: 'Average', color: 'bg-yellow-500', width: '8%' },
                { label: 'Fair', color: 'bg-orange-500', width: '4%' },
                { label: 'Poor', color: 'bg-red-500', width: '2%' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center">
                  <div className="w-24 text-sm text-gray-600">{stat.label}</div>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${stat.color} rounded-full`}
                      style={{ width: stat.width }}
                    />
                  </div>
                  <div className="w-10 text-right text-sm text-gray-600">
                    {stat.width}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Based on 186 feedback submissions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;