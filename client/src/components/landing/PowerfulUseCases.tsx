// components/PowerfulUseCases.tsx
"use client"; // Added for client-side interactivity (tabs)
import Image from "next/image";
import { FC, useState } from "react";

const PowerfulUseCases: FC = () => {
  const [activeTab, setActiveTab] = useState("Conferences");

  const tabs = ["Conferences", "Festivals", "Corporate Events", "Exhibitions"];

  const useCases = [
    {
      title: "Tech Conference Satisfaction",
      description:
        "Monitor session feedback in real-time to address issues and highlight popular speakers.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dXNlLWNhc2VzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNzQ2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Professional event manager analyzing sentiment data",
      width: 5066,
      height: 3377,
      tag: "Real-time Monitoring",
      benefits: [
        "Actionable insights within 3 minutes",
        "32% increase in attendee satisfaction",
      ],
    },
    {
      title: "Proactive Issue Resolution",
      description:
        "Identify and resolve logistical problems before they impact the attendee experience.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dXNlLWNhc2VzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNzQ2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Event manager reviewing sentiment data on laptop",
      width: 7360,
      height: 4912,
      tag: "Issue Detection",
      benefits: [
        "64% faster problem resolution",
        "87% of issues resolved before escalation",
      ],
    },
    {
      title: "Data-Driven Event Planning",
      description:
        "Use comprehensive sentiment analysis to improve future events based on attendee feedback.",
      image:
        "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dXNlLWNhc2VzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNzQ2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Event professional analyzing data on tablet",
      width: 5760,
      height: 3840,
      tag: "Post-Event Analysis",
      benefits: [
        "28% improvement in subsequent events",
        "42% increase in repeat attendees",
      ],
    },
  ];

  const featuredCaseStudy = {
    title: "TechSummit 2023: Real-time Sentiment Monitoring",
    description:
      "How a major tech conference used SentiScan to improve attendee satisfaction scores by 47% and quickly address emerging issues.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dXNlLWNhc2VzJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3NDMxNzQ2ODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "Professional event manager analyzing data",
    imageCredit: "Photo by Hunters Race",
    width: 5066,
    height: 3377,
    details: [
      {
        title: "Challenge",
        text: "Monitoring sentiment across 12,000+ attendees and 150+ sessions in real-time.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "Solution",
        text: "Deployed SentiScan across all feedback channels with custom alert thresholds.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
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
      },
      {
        title: "Results",
        text: "47% higher satisfaction scores, 92% of issues resolved within 15 minutes.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
      },
    ],
  };

  const industryStats = [
    { value: "87%", text: "Faster issue detection and resolution" },
    { value: "42%", text: "Higher attendee satisfaction ratings" },
    { value: "53%", text: "Increase in attendee engagement" },
    { value: "29%", text: "Growth in repeat attendance year-over-year" },
  ];

  return (
    <section id="use-cases" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Use Cases
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how event organizers are leveraging SentiScan to transform
            audience experiences and drive better outcomes.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-lg mx-2 mb-2 transition-colors ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-neutral-700 text-gray-300 hover:bg-neutral-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-700 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.imageAlt}
                  width={useCase.width}
                  height={useCase.height}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/${useCase.width}x${useCase.height}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-indigo-600 text-xs font-medium text-white px-2.5 py-1 rounded">
                    {useCase.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="mb-4">
                  {useCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center mb-1 last:mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View case study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-700">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden md:h-full">
              <Image
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.imageAlt}
                width={featuredCaseStudy.width}
                height={featuredCaseStudy.height}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/${featuredCaseStudy.width}x${featuredCaseStudy.height}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent md:via-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="text-xs text-gray-400">
                  {featuredCaseStudy.imageCredit}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="bg-indigo-600/20 text-indigo-400 text-xs font-medium px-2.5 py-1 rounded">
                  Featured Case Study
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {featuredCaseStudy.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {featuredCaseStudy.description}
              </p>
              <div className="space-y-4 mb-8">
                {featuredCaseStudy.details.map((detail, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-indigo-600/20 p-2 rounded-lg mr-4">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {detail.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{detail.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Read Full Case Study
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Industry Stats */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Drive Event Success with Data
            </h3>
            <p className="text-gray-400 mt-2">
              Industry benchmarks show the power of sentiment analysis for
              events
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryStats.map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 text-center"
              >
                <div className="text-indigo-500 text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-900/30"
          >
            Explore All Use Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default PowerfulUseCases;