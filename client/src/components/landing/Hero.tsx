// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Real-time Monitoring',
      description: 'Analyze feedback as it happens',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      title: 'Multi-channel Analysis',
      description: 'Social, surveys, direct messages',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-400"
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
      title: 'Instant Alerts',
      description: 'Get notified of critical issues',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 lg:py-32 relative z-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Real-time Sentiment Analysis for Events
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Detect issues before they escalate. Monitor audience feedback across channels and respond proactively with AI-powered insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
            >
              Request Demo
            </a>
            <a
              href="#how-it-works"
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="pt-6">
            <p className="text-gray-400 text-sm mb-2">Trusted by event organizers worldwide:</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-gray-400 font-semibold">TechConf</div>
              <div className="text-gray-400 font-semibold">EventPro</div>
              <div className="text-gray-400 font-semibold">Summit Series</div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800/70 backdrop-blur-sm p-8 rounded-xl border border-neutral-700/50 shadow-xl">
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-neutral-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Live Satisfaction Score:</span>
                <div className="flex items-center">
                  <span className="text-green-400 font-medium text-lg">94%</span>
                  <span className="text-green-500 ml-1">↑</span>
                </div>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white/70 hover:text-white">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;