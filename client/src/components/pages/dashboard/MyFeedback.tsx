"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useGetEventsByUserIdQuery } from '@/redux/features/api/event/eventApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Event {
  _id: string;
  eventId: {
    _id: string;
    name: string;
    venue: string;
    location: string;
    description: string;
    startDate: string;
    endDate: string;
    expectedAttendees: number;
    id: string;
  };
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface FeedbackForm {
  sessionId: string;
  rating: number;
  likedAspects: string[];
  suggestions: string;
  hashtags: string;
  isAnonymous: boolean;
}

interface FormErrors {
  sessionId?: string;
  rating?: string;
  suggestions?: string;
}

const feedbackSchema = Yup.object().shape({
  sessionId: Yup.string().required('Please select a session'),
  rating: Yup.number().min(1, 'Please provide a rating').required('Please provide a rating'),
  suggestions: Yup.string().required('Please provide your suggestions'),
  hashtags: Yup.string(),
  isAnonymous: Yup.boolean(),
  likedAspects: Yup.array().of(Yup.string())
});

const MyFeedback: React.FC = () => {
  const [showQuickFeedback, setShowQuickFeedback] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [quickComment, setQuickComment] = useState('');
  const [selectedLikedAspects, setSelectedLikedAspects] = useState<string[]>([]);

  const { user } = useSelector((state: any) => state.auth);


  const { data: eventsData, isLoading, isError } = useGetEventsByUserIdQuery(
    user?._id || '',
    {
      skip: !user?._id
    }
  );
  const latestEvent = eventsData && eventsData.data[0];

  const feedbackHero = {
    title: latestEvent ? `Feedback for ${latestEvent.eventId.name}` : 'Your Feedback Matters',
    description: latestEvent 
      ? `Share your thoughts about ${latestEvent.eventId.name} at ${latestEvent.eventId.venue}`
      : 'Help us improve by sharing your experience',
    imageUrl: 'https://placehold.co/600x400',
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

  const formik = useFormik({
    initialValues: {
      sessionId: '',
      rating: 0,
      likedAspects: [],
      suggestions: '',
      hashtags: '',
      isAnonymous: false
    },
    validationSchema: feedbackSchema,
    onSubmit: (values) => {
      // TODO: Implement feedback submission
      console.log('Form submitted:', values);
      formik.resetForm();
      setSelectedLikedAspects([]);
    }
  });

  const handleQuickFeedbackSubmit = () => {
    // TODO: Implement quick feedback submission
    setShowQuickFeedback(false);
    setSelectedReaction(null);
    setQuickComment('');
  };

  const handleRatingChange = (rating: number) => {
    formik.setFieldValue('rating', rating);
  };

  const handleLikedAspectToggle = (aspect: string) => {
    setSelectedLikedAspects(prev => {
      const newAspects = prev.includes(aspect)
        ? prev.filter(a => a !== aspect)
        : [...prev, aspect];
      formik.setFieldValue('likedAspects', newAspects);
      return newAspects;
    });
  };

  return (
    <div id="feedbackCenter" className="page-section min-h-screen p-4 md:p-6 lg:p-8 ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">My Feedback</h1>
        <p className="text-gray-400">Share your thoughts and help improve the event experience</p>
      </div>

      {/* Feedback Hero Section */}
      {latestEvent ? (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden shadow-lg mb-8 relative">
          <div className="md:flex">
            <div className="p-6 md:w-2/3 text-white z-10 relative">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-3 backdrop-blur-sm">
                YOUR VOICE MATTERS
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{feedbackHero.title}</h2>
              <p className="mb-4">{feedbackHero.description}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button 
                  onClick={() => setShowQuickFeedback(true)}
                  className="inline-flex items-center px-4 py-2 bg-white text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-50 transition duration-200"
                >
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
      ) : null}

      {/* Quick Feedback Dialog */}
      {showQuickFeedback && 
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Feedback</h3>
            <div className="grid grid-cols-5 gap-2 mb-5">
              {quickReactions.map((reaction, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedReaction(reaction.emoji)}
                  className={`p-3 rounded-lg transition duration-200 flex flex-col items-center ${
                    selectedReaction === reaction.emoji
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  <span className="text-4xl mb-1">{reaction.emoji}</span>
                  <span className="text-xs">{reaction.label}</span>
                </button>
              ))}
            </div>
            <input
              type="text"
              value={quickComment}
              onChange={(e) => setQuickComment(e.target.value)}
              placeholder="Add a quick comment (optional)"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowQuickFeedback(false)}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleQuickFeedbackSubmit}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      }

      {/* Detailed Feedback Form */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-6 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <h2 className="text-lg font-bold text-white">Detailed Feedback</h2>
          <p className="text-sm text-gray-400">Help us improve with your specific thoughts</p>
        </div>
        <div className="p-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="sessionId" className="block text-sm font-medium text-gray-300 mb-1">
                Which session are you reviewing?
              </label>
              <select
                id="sessionId"
                name="sessionId"
                value={formik.values.sessionId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  formik.touched.sessionId && formik.errors.sessionId ? 'border-red-500' : 'border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white`}
              >
                <option value="">Select a session</option>
                {eventsData?.data?.map((session: any) => (
                  <option key={session.eventId._id} value={session.eventId._id}>
                    {session.eventId.name}
                  </option>
                ))}
              </select>
              {formik.touched.sessionId && formik.errors.sessionId && (
                <p className="mt-1 text-sm text-red-500">{formik.errors.sessionId}</p>
              )}
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
                      onClick={() => handleRatingChange(index + 1)}
                      className={`p-1 ${
                        formik.values.rating > index
                          ? 'text-yellow-400'
                          : 'text-gray-600 hover:text-yellow-400'
                      }`}
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
              {formik.touched.rating && formik.errors.rating && (
                <p className="mt-1 text-sm text-red-500">{formik.errors.rating}</p>
              )}
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
                    onClick={() => handleLikedAspectToggle(option)}
                    className={`px-3 py-1.5 border rounded-full text-sm transition duration-200 ${
                      selectedLikedAspects.includes(option)
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'border-gray-600 text-gray-300 hover:bg-purple-900/30 hover:border-purple-500'
                    }`}
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
                name="suggestions"
                value={formik.values.suggestions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={3}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  formik.touched.suggestions && formik.errors.suggestions ? 'border-red-500' : 'border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-400`}
                placeholder="Share your thoughts here..."
              />
              {formik.touched.suggestions && formik.errors.suggestions && (
                <p className="mt-1 text-sm text-red-500">{formik.errors.suggestions}</p>
              )}
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
                  value={formik.values.hashtags}
                  onChange={formik.handleChange}
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="TechConf2023, Inspiring, Future"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="anonymous"
                name="isAnonymous"
                type="checkbox"
                checked={formik.values.isAnonymous}
                onChange={formik.handleChange}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-300">
                Submit anonymously
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  formik.resetForm();
                  setSelectedLikedAspects([]);
                }}
                className="mr-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm font-medium transition duration-200"
              >
                Clear Form
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