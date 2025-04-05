"use client";

import React from "react";

const MyFeedback: React.FC = () => {
  const feedbackHero = {
    title: "How's Your Experience?",
    description: "Your feedback helps us improve and create better experiences for everyone.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZmVlZGJhY2tjZW50ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNjk1NHww&ixlib=rb-4.0.3&q=80&w=1080?q=80",
   
  };

  const quickReactions = [
    { emoji: "😍", label: "Loved it!" },
    { emoji: "😊", label: "Good" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😕", label: "Not great" },
    { emoji: "😞", label: "Poor" },
  ];

  const sessionOptions = [
    "Keynote: Future of Technology",
    "Workshop: Design Thinking",
    "Panel: Industry Trends",
    "Networking Lunch",
    "Product Demo",
  ];

  const likeOptions = [
    "Content",
    "Speaker",
    "Interactivity",
    "Visuals",
    "Q&A",
    "Length",
  ];

  const previousFeedback = [
    {
      title: "Workshop: Design Thinking",
      rating: 4,
      comment: "Great interactive session. Would have liked more time for practice.",
      hashtags: ["#Interactive", "#Engaging"],
      time: "Today, 9:45 AM",
    },
    {
      title: "Networking Lunch",
      rating: 3,
      comment: "Food was great, but seating was limited. Need more tables next time.",
      hashtags: ["#Food"],
      time: "Yesterday, 1:15 PM",
    },
  ];

  const socialSentiments = [
    {
      user: "Lisa Rodriguez",
      time: "5m ago",
      comment: "Loving the tech demos at #TechConf2023! So inspiring to see what's coming next.",
      likes: 12,
      imageUrl: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZmVlZGJhY2tjZW50ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNjk1NHww&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    },
    {
      user: "James Wilson",
      time: "18m ago",
      comment: "The speakers at #TechConf2023 are absolutely crushing it! So much valuable knowledge.",
      likes: 8,
      imageUrl: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZmVlZGJhY2tjZW50ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNjk1NHww&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    },
  ];

  return (
    <div id="feedbackCenter" className="page-section min-h-screen p-4 md:p-6 lg:p-8 bg-gray-900">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">My Feedback</h1>
        <p className="text-gray-400">Share your thoughts and help improve the event experience</p>
      </div>

      {/* Feedback Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="md:flex">
          <div className="p-6 md:w-2/3 text-white z-10 relative">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-3 backdrop-blur-sm">
              YOUR VOICE MATTERS
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">{feedbackHero.title}</h2>
            <p className="mb-4">{feedbackHero.description}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="inline-flex items-center px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 transition duration-200">
                Give Quick Feedback
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm transition duration-200">
                See My Previous Feedback
              </button>
            </div>
          </div>
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <img
              src={feedbackHero.imageUrl}
              alt="Professional looking person in business attire"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x400";
              }}
            />
            <div className="absolute inset-0 bg-indigo-900/20"></div>
          </div>
        </div>
      </div>

      {/* Quick Reaction Section */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-6 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <h2 className="text-lg font-bold text-white">Quick Reaction</h2>
          <p className="text-sm text-gray-400">How are you feeling about the keynote presentation?</p>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-5 gap-2 mb-5">
            {quickReactions.map((reaction, index) => (
              <button
                key={index}
                className="bg-gray-700 hover:bg-gray-600 rounded-lg p-3 transition duration-200 flex flex-col items-center"
              >
                <span className="text-4xl mb-1">{reaction.emoji}</span>
                <span className="text-xs text-gray-300">{reaction.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a quick comment (optional)"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition duration-200">
              Submit Reaction
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Feedback Form */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-6 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <h2 className="text-lg font-bold text-white">Detailed Feedback</h2>
          <p className="text-sm text-gray-400">Help us improve with your specific thoughts</p>
        </div>
        <div className="p-5">
          <form>
            <div className="mb-4">
              <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-1">
                Which session are you reviewing?
              </label>
              <select
                id="event"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white"
              >
                {sessionOptions.map((option, index) => (
                  <option key={index} selected={index === 0}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rate the content quality
              </label>
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className="p-1 text-gray-600 hover:text-yellow-400"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                  ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What did you like most?
              </label>
              <div className="flex flex-wrap gap-2">
                {likeOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className="px-3 py-1.5 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-purple-900/30 hover:border-purple-500 transition duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="suggestions" className="block text-sm font-medium text-gray-300 mb-1">
                Any suggestions for improvement?
              </label>
              <textarea
                id="suggestions"
                rows={3}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Share your thoughts here..."
              />
            </div>

            <div className="mb-4">
              <label htmlFor="hashtags" className="block text-sm font-medium text-gray-300 mb-1">
                Add hashtags (optional)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-gray-700 text-gray-400 text-sm">
                  #
                </span>
                <input
                  type="text"
                  id="hashtags"
                  name="hashtags"
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="TechConf2023, Inspiring, Future"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="anonymous"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-300">
                Submit anonymously
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="mr-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition duration-200"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition duration-200"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Your Previous Feedback */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-6 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-amber-900/50 to-yellow-900/50">
          <h2 className="text-lg font-bold text-white">Your Previous Feedback</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {previousFeedback.map((feedback, index) => (
            <div key={index} className="p-4 hover:bg-gray-700/50 transition duration-150">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{feedback.title}</h3>
                  <div className="flex mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-4 h-4 ${starIndex < feedback.rating ? "text-yellow-400" : "text-gray-600"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">{feedback.time}</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">{feedback.comment}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {feedback.hashtags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-900/30 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-700/50 border-t border-gray-700 text-center">
          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            View All Feedback
          </button>
        </div>
      </div>

      {/* Social Sentiment Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg relative">
        <div className="p-6 text-white relative z-10">
          <h2 className="text-xl font-bold mb-3">Join The Conversation</h2>
          <p className="mb-4 text-indigo-100">Share your experience using our hashtag and see what others are saying!</p>

          {socialSentiments.map((sentiment, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-3">
                <img
                  src={sentiment.imageUrl}
                  alt={index === 0 ? "Woman with coffee cup" : "Man in business suit"}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/100x100";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{sentiment.user}</h4>
                    <span className="text-xs text-indigo-200">{sentiment.time}</span>
                  </div>
                  <p className="text-sm text-indigo-100 mt-1">{sentiment.comment}</p>
                  <div className="flex items-center mt-2 space-x-4">
                    <button className="flex items-center text-indigo-200 text-xs hover:text-white">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {sentiment.likes}
                    </button>
                    <button className="flex items-center text-indigo-200 text-xs hover:text-white">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-5 text-center">
            <a
              href="#"
              className="inline-block px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition duration-200 backdrop-blur-sm"
            >
              See All Conversations
            </a>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white/70 text-xs bg-black/30 px-2 py-1 rounded-md">
          Photo credits: Brooke Lark & Ben Rosett
        </div>
      </div>
    </div>
  );
};

export default MyFeedback;