"use client";
import React from 'react';

const PowerfulUseCases: React.FC = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Multichannel Feedback Aggregation',
      description: 'Collect and analyze feedback from social media, surveys, and direct messages in one unified dashboard.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: 'NLP-Based Sentiment Classification',
      description: 'Advanced algorithms analyze text for positive, negative, and neutral sentiments with industry-leading accuracy.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Real-time Issue Alerts',
      description: 'Get instant notifications when negative sentiment spikes or critical issues arise, enabling immediate response.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Data Visualization & Insights',
      description: 'Transform complex data into actionable insights with intuitive dashboards and trend analysis.',
    },
  ];

  const stats = [
    { value: '97%', label: 'Sentiment Analysis Accuracy' },
    { value: '12+', label: 'Feedback Channels' },
    { value: '64%', label: 'Faster Issue Resolution' },
    { value: '24/7', label: 'Automated Monitoring' },
  ];

  return (
    <section id="features" className="bg-neutral-900 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">Unlock actionable insights with our advanced sentiment analysis tools, designed specifically for event organizers.</p>
        </div>

        {/* Feature tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Features side */}
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-neutral-750 border border-neutral-700 group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-indigo-900/30 rounded-lg text-indigo-500 group-hover:bg-indigo-900/50 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image showcase side */}
            <div className="relative h-full">
              <div className="bg-neutral-800 p-3 rounded-xl overflow-hidden shadow-xl relative aspect-video h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/90 via-neutral-900/50 to-indigo-900/30 rounded-lg z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1719399184280-89cfdecba587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZmVhdHVyZXMlMjBzaG93Y2FzZSUyMGRldGFpbGVkJTIwZGVtb25zdHJhdGl2ZXxlbnwwfDB8fHwxNzQzMTYwMTI3fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                  alt="AI sentiment analysis visualization in dark environment"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/800x600/1f2937/718096?text=AI+Analytics';
                  }}
                  className="w-full h-full object-cover rounded-lg"
                  width={11648}
                  height={8736}
                />

                {/* Feature highlights that overlay the image */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-20">
                  <div className="flex flex-col space-y-1 sm:space-y-2">
                    <div className="bg-neutral-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-neutral-700 flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 mr-2 sm:mr-3"></div>
                      <span className="text-white text-xs sm:text-sm">97% sentiment classification accuracy</span>
                    </div>
                    <div className="bg-neutral-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-neutral-700 flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 mr-2 sm:mr-3"></div>
                      <span className="text-white text-xs sm:text-sm">Real-time monitoring across 12+ channels</span>
                    </div>
                    <div className="bg-neutral-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-neutral-700 flex items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 mr-2 sm:mr-3"></div>
                      <span className="text-white text-xs sm:text-sm">Average response time reduced by 64%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo credit */}
              <div className="mt-1 sm:mt-2 text-right text-xs text-gray-500">
                Photo by Neon Wang
              </div>
            </div>
          </div>
        </div>

        {/* Feature stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg p-4 sm:p-6 text-center border border-neutral-700">
              <div className="text-indigo-500 text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm sm:text-base"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default PowerfulUseCases;