"use client";
import Image from "next/image";
import { FC } from "react";

const HowSentiScanWorks: FC = () => {
  const steps = [
    {
      number: 1,
      title: "Data Collection & Aggregation",
      description:
        "Our system collects feedback from multiple sources including social media, surveys, and direct messages.",
      features: [
        {
          text: "Real-time social media monitoring",
          iconColor: "text-indigo-500",
        },
        { text: "Automated survey distribution", iconColor: "text-indigo-500" },
        { text: "Feedback form integration", iconColor: "text-indigo-500" },
      ],
      image:
        "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aG93LWl0LXdvcmtzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNjYzNjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Professional checking data on digital dashboard",
      imageCredit: "Photo by Ben Rosett",
      reverse: false,
    },
    {
      number: 2,
      title: "AI-Powered Analysis",
      description:
        "Our advanced NLP models analyze text to determine sentiment, identify issues, and extract actionable insights.",
      features: [
        {
          text: "Sentiment Analysis",
          value: "97% Accuracy",
          color: "text-green-400",
        },
        {
          text: "Topic Extraction",
          value: "92% Precision",
          color: "text-green-400",
        },
        {
          text: "Issue Detection",
          value: "89% Recall",
          color: "text-green-400",
        },
      ],
      reverse: true,
    },
    {
      number: 3,
      title: "Insights & Actions",
      description:
        "Receive actionable insights and alerts that help you respond to issues before they escalate.",
      features: [
        {
          text: "Real-time alerts for negative sentiment",
          iconColor: "text-red-500",
        },
        {
          text: "Trend analysis and pattern detection",
          iconColor: "text-blue-500",
        },
        {
          text: "Automated response recommendations",
          iconColor: "text-green-500",
        },
      ],
      reverse: false,
    },
  ];

  return (
    <section id="how-it-works" className="bg-neutral-900 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How SentiScan Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced AI platform transforms event feedback into actionable
            insights in three simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-900/50 -translate-x-1/2 z-0" />

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 mb-16">
              <div className="grid md:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <div
                  className={`md:${
                    step.reverse ? "order-1" : "text-right order-2 md:order-1"
                  }`}
                >
                  <div
                    className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white absolute ${
                      step.reverse
                        ? "left-0 md:-left-6 -translate-x-1/2"
                        : "right-0 md:-right-6 translate-x-1/2"
                    } top-0`}
                  >
                    {step.number}
                  </div>
                  <span className="md:hidden bg-indigo-600 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>

                  {/* Features List */}
                  {step.number === 1 && (
                    <ul className="space-y-2 text-gray-400">
                      {step.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`flex ${
                            step.reverse ? "" : "md:justify-end"
                          } items-center`}
                        >
                          <span>{feature.text}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              "iconColor" in feature ? feature.iconColor : "text-gray-500"
                            } ml-2`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Step 2 Specific */}
                  {step.number === 2 && (
                    <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
                      {step.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between mb-3 last:mb-0"
                        >
                          <span className="text-gray-300">{feature.text}</span>
                          {"color" in feature && (
                            <span className={feature.color}>{feature.value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 3 Specific */}
                  {step.number === 3 && (
                    <div className="flex flex-col space-y-3">
                      {step.features.map((feature, i) => (
                        <div
                          key={i}
                          className={`flex ${
                            step.reverse ? "" : "md:justify-end"
                          } items-center space-x-2`}
                        >
                          <span className="text-gray-300">{feature.text}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${
                              "iconColor" in feature ? feature.iconColor : "text-gray-500"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            {i === 0 && (
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            )}
                            {i === 1 && (
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            )}
                            {i === 2 && (
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            )}
                          </svg>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Visual Content */}
                <div
                  className={`order-1 ${
                    step.reverse ? "md:order-2" : "md:order-2"
                  }`}
                >
                  {/* Step 1 Image */}
                  {step.number === 1 && (
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src={step.image || "https://placehold.co/5048x3370"}
                        alt={step.imageAlt || "Default alt text"}
                        width={5048}
                        height={3370}
                        className="w-full h-full object-cover"
                        placeholder="blur"
                        blurDataURL="Powerful AI Features.jpeg"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/${5048}x${3370}`;
                        }}
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {step.imageCredit}
                      </div>
                    </div>
                  )}

                  {/* Step 2 Analysis */}
                  {step.number === 2 && (
                    <div className="bg-neutral-800 rounded-xl shadow-xl p-6 border border-neutral-700">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-indigo-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            Natural Language Processing
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Advanced AI algorithms analyze text semantics
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-neutral-900 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-400">
                              Input Text:
                            </span>
                          </div>
                          <p className="text-white text-sm">
                            "The app keeps crashing during registration. Very
                            frustrating!"
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-neutral-900 p-3 rounded-lg text-center">
                            <div className="w-full h-2 bg-neutral-700 rounded-full mb-2">
                              <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{ width: "85%" }}
                              />
                            </div>
                            <span className="text-red-500 text-sm">
                              Negative
                            </span>
                            <span className="block text-red-500 text-xs">
                              85%
                            </span>
                          </div>
                          <div className="bg-neutral-900 p-3 rounded-lg text-center">
                            <div className="w-full h-2 bg-neutral-700 rounded-full mb-2">
                              <div
                                className="bg-yellow-500 h-2 rounded-full"
                                style={{ width: "12%" }}
                              />
                            </div>
                            <span className="text-yellow-500 text-sm">
                              Neutral
                            </span>
                            <span className="block text-yellow-500 text-xs">
                              12%
                            </span>
                          </div>
                          <div className="bg-neutral-900 p-3 rounded-lg text-center">
                            <div className="w-full h-2 bg-neutral-700 rounded-full mb-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: "3%" }}
                              />
                            </div>
                            <span className="text-green-500 text-sm">
                              Positive
                            </span>
                            <span className="block text-green-500 text-xs">
                              3%
                            </span>
                          </div>
                        </div>
                        <div className="bg-neutral-900 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-400">
                              Issue Identified:
                            </span>
                            <span className="text-sm text-red-500">
                              High Priority
                            </span>
                          </div>
                          <p className="text-white text-sm">
                            Technical problem with registration process
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 Dashboard */}
                  {step.number === 3 && (
                    <div className="bg-neutral-800 rounded-xl shadow-xl border border-neutral-700">
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-4">
                          Event Dashboard
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">
                              Overall Sentiment
                            </span>
                            <div className="flex items-center">
                              <span className="text-green-400 font-medium mr-1">
                                +12%
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-green-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="w-full bg-neutral-700 rounded-full h-2">
                            <div className="flex h-2 rounded-full">
                              <div
                                className="bg-green-500 h-2 rounded-l-full"
                                style={{ width: "68%" }}
                              />
                              <div
                                className="bg-yellow-500 h-2"
                                style={{ width: "24%" }}
                              />
                              <div
                                className="bg-red-500 h-2 rounded-r-full"
                                style={{ width: "8%" }}
                              />
                            </div>
                          </div>
                          <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4 mt-6">
                            <div className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <div>
                                <h5 className="text-white font-medium mb-1">
                                  Action Required
                                </h5>
                                <p className="text-red-300 text-sm mb-2">
                                  Several attendees reporting Wi-Fi connectivity
                                  issues in Hall B.
                                </p>
                                <div className="flex space-x-2">
                                  <button className="text-xs bg-red-700 hover:bg-red-800 text-white px-3 py-1 rounded">
                                    Resolve Now
                                  </button>
                                  <button className="text-xs bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1 rounded">
                                    Assign
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 mt-3">
                            <div className="bg-neutral-900 p-3 rounded-lg">
                              <div className="text-sm text-gray-400 mb-1">
                                Top Positive Topic
                              </div>
                              <div className="text-green-400 font-medium">
                                Speaker Sessions
                              </div>
                            </div>
                            <div className="bg-neutral-900 p-3 rounded-lg">
                              <div className="text-sm text-gray-400 mb-1">
                                Top Negative Topic
                              </div>
                              <div className="text-red-400 font-medium">
                                Wi-Fi Connectivity
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to transform your event experience?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#demo"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              See Demo
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 border border-indigo-500 text-indigo-400 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSentiScanWorks;
