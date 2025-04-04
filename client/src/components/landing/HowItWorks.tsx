// components/HowItWorks.tsx
"use client";
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Data Collection',
      description: 'Our AI collects feedback from multiple sources including social media, surveys, reviews, and direct messages.',
      tags: ['Twitter', 'Instagram', 'Surveys', 'Email', 'Review'],
    },
    {
      stepNumber: 2,
      title: 'Sentiment Analysis',
      description: 'Advanced NLP algorithms analyze text to identify positive, negative, and neutral sentiments with contextual understanding.',
      stats: [
        { value: '37%', label: 'Positive', color: 'green' },
        { value: '52%', label: 'Neutral', color: 'blue' },
        { value: '11%', label: 'Negative', color: 'red' },
      ],
    },
    {
      stepNumber: 3,
      title: 'Real-time Alerts & Insights',
      description: 'Get instant notifications for negative trends and actionable recommendations to address concerns.',
      alert: 'Negative sentiment spike detected in VIP section',
    },
  ];

  const highlights = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-indigo-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'One-click Setup',
      description: 'Integrate with your event app in minutes, not days.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-indigo-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      title: 'Unlimited Users',
      description: 'Collaborate with your entire team at no extra cost.',
    },
  ];

  return (
    <section id="demo" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience our powerful sentiment analysis in action with an interactive demonstration.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-700">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">{step.stepNumber}</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  {step.tags && (
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-neutral-800 text-gray-300 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  )}
                  {step.stats && (
                    <div className="grid grid-cols-3 gap-2">
                      {step.stats.map((stat, idx) => (
                        <div key={idx} className={`p-3 bg-${stat.color}-900/20 border border-${stat.color}-800/30 rounded-lg text-center`}>
                          <span className={`text-${stat.color}-400 block text-xl font-bold`}>{stat.value}</span>
                          <span className={`text-${stat.color}-500 text-xs`}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {step.alert && (
                    <div className="flex items-center p-3 bg-red-900/20 border border-red-800/30 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-red-400 text-sm">{step.alert}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-700">
              <div className="relative aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGVtbyUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzMTYzMTI2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                  alt="Person using sentiment analysis dashboard on laptop"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/5616x3744';
                  }}
                  className="w-full h-full object-cover"
                  width={5616}
                  height={3744}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>

                {/* Play button for demo video */}
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Interactive Dashboard Demo</h3>
                <p className="text-gray-400 mb-4">Watch how our platform monitors sentiment in real-time during a tech conference.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 text-sm">Live Demo</span>
                  </div>
                  <span className="text-gray-500 text-sm">4:32</span>
                </div>
              </div>
            </div>

            {/* Photo credit */}
            <div className="mt-2 text-right text-xs text-gray-500">
              Photo by Christin Hume
            </div>

            {/* Feature highlights under the video */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-neutral-900 p-4 rounded-lg border border-neutral-700">
                  <div className="flex items-center mb-2">
                    {highlight.icon}
                    <span className="text-white font-medium">{highlight.title}</span>
                  </div>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-900/30"
          >
            Schedule a Live Demo
          </a>
          <p className="text-gray-500 mt-3 text-sm">No credit card required. 14-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;