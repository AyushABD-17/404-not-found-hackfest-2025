"use client";

import React from "react";
import Image from "next/image";

const SupportHub: React.FC = () => {
  const quickSupportOptions = [
    {
      icon: (
        <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "purple",
      title: "Live Chat Support",
      description: "Chat with our support team in real-time for immediate assistance.",
      buttonText: "Start Chat",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "blue",
      title: "FAQ",
      description: "Find answers to common questions about the event and services.",
      buttonText: "Browse FAQs",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "pink",
      title: "Email Support",
      description: "Send us a message and we'll respond as soon as possible.",
      buttonText: "Contact Us",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "amber",
      title: "Information Desk",
      description: "Visit our in-person help desk in the main hall for assistance.",
      buttonText: "View Location",
    },
  ];

  const faqItems = [
    {
      question: "Where can I find the event schedule?",
      answer: "You can find the complete event schedule in the \"Schedule\" section of this app. It's also available as a downloadable PDF in the same section.",
      expanded: true,
    },
    { question: "How do I provide feedback about a session?" },
    { question: "Is there Wi-Fi available at the venue?" },
    { question: "How do I report an issue or emergency?" },
    { question: "Where are the restrooms located?" },
  ];

  const supportCategories = [
    {
      title: "Event Information",
      gradient: "from-gray-800 to-gray-700",
      items: ["Event Schedule", "Venue Map", "Speaker Information", "Amenities & Services"],
    },
    {
      title: "Technical Assistance",
      gradient: "from-gray-800 to-gray-700",
      items: ["Wi-Fi Connection Help", "App Troubleshooting", "AV Equipment Support", "Charging Stations"],
    },
    {
      title: "Emergency Services",
      gradient: "from-gray-800 to-gray-700",
      items: ["Medical Assistance", "Security Concerns", "Lost & Found", "Emergency Exits"],
    },
  ];

  const contactInfo = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />,
      title: "Email",
      content: "support@techconf2023.com",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
      title: "Phone",
      content: "Event Hotline: (555) 123-4567",
    },
    {
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
      title: "Information Desk",
      content: "Main Lobby, Near Registration\nOpen 8:00 AM - 6:00 PM",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: "Emergency",
      content: "Event Security: (555) 123-4570\nMedical: (555) 123-4571",
    },
  ];

  const teamMembers = [
    { name: "Sarah Kim", role: "Support Lead", img: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3VwcG9ydGh1YiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Marcus Johnson", role: "Technical Support", img: "https://avatar.iran.liara.run/public/42" },
    { name: "Elena Rodriguez", role: "Event Coordinator", img: "https://avatar.iran.liara.run/public/23" },
    { name: "David Chen", role: "Information Desk", img: "https://avatar.iran.liara.run/public/51" },
  ];

  return (
    <div id="supportHub" className="min-h-screen p-4 sm:p-6 lg:p-8 ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">Support Hub</h1>
        <p className="text-gray-400 text-sm sm:text-base">Get assistance and find answers to your questions</p>
      </div>

      {/* Quick Help Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:w-2/3 text-white relative z-10">
            <span className="inline-block px-3 py-1 bg-gray-600/50 rounded-full text-xs mb-3 backdrop-blur-sm">
              NEED HELP?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-100">How Can We Assist You Today?</h2>
            <p className="mb-4 text-sm sm:text-base text-gray-300">Our support team is here to help you have the best possible event experience.</p>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full py-3 px-4 pr-10 rounded-lg border-0 focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-200 placeholder-gray-500 text-sm sm:text-base"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative h-48 md:h-auto md:w-1/3">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c3VwcG9ydGh1YiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Professional looking person ready to help"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-800/60 md:bg-none" />
          </div>
        </div>
      </div>

      {/* Quick Support Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickSupportOptions.map((option, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition duration-200 p-5">
            <div className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-full bg-${option.color}-900/20 flex items-center justify-center mb-4`}>
                {option.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-100 mb-2">{option.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{option.description}</p>
              <button className={`inline-flex items-center px-4 py-2 bg-${option.color}-500 text-white rounded-lg text-sm font-medium hover:bg-${option.color}-600 transition duration-200 mt-auto`}>
                {option.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-8 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-gray-800 to-gray-700">
          <h2 className="text-lg font-bold text-gray-100">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {faqItems.map((faq, index) => (
            <div key={index} className="p-4 hover:bg-gray-750">
              <button className="flex w-full justify-between items-center text-left">
                <h3 className="font-medium text-gray-100 text-sm sm:text-base">{faq.question}</h3>
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={faq.expanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>
              {faq.answer && (
                <div className="mt-2 text-gray-400 text-sm sm:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-750 border-t border-gray-700 text-center">
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
            View All FAQs
          </button>
        </div>
      </div>

      {/* Support Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Support Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition duration-200">
              <div className={`p-4 border-b border-gray-700 bg-gradient-to-r ${category.gradient}`}>
                <h3 className="font-medium text-gray-100 text-sm sm:text-base">{category.title}</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-200 text-sm sm:text-base">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Live Chat */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700">
            <div className="w-10 h-10 rounded-full bg-indigo-900/20 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-100 text-sm sm:text-base">Live Chat with Support</h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-750 rounded-lg p-4 mb-4">
              <div className="flex items-start mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8c3VwcG9ydGh1YiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Support agent"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100"; }}
                />
                <div className="bg-gray-700 p-3 rounded-lg rounded-tl-none shadow-sm max-w-xs">
                  <p className="text-sm text-gray-200">Hello! How can I help you today with the event?</p>
                  <span className="text-xs text-gray-400 mt-1 block">2 min ago</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-800 text-gray-200 pr-12 text-sm sm:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1.5 rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden">
          <div className="flex items-center p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-700">
            <div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-100 text-sm sm:text-base">Contact Information</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gray-700 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {info.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-100">{info.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-8 overflow-hidden">
        <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-gray-800 to-gray-700">
          <h2 className="text-lg font-bold text-gray-100">Send Us a Message</h2>
        </div>
        <div className="p-5">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-900 text-gray-200 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-900 text-gray-200 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <select
                id="subject"
                defaultValue="Please select a topic"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-900 text-gray-200 text-sm sm:text-base"
              >
                <option value="Please select a topic" className="bg-gray-900">Please select a topic</option>
                <option value="General Inquiry" className="bg-gray-900">General Inquiry</option>
                <option value="Technical Support" className="bg-gray-900">Technical Support</option>
                <option value="Event Information" className="bg-gray-900">Event Information</option>
                <option value="Feedback" className="bg-gray-900">Feedback</option>
                <option value="Other" className="bg-gray-900">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-900 text-gray-200 text-sm sm:text-base"
                placeholder="How can we help you?"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="urgent"
                type="checkbox"
                className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-700 rounded bg-gray-900"
              />
              <label htmlFor="urgent" className="ml-2 block text-sm text-gray-300">
                Mark as urgent
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Support Team */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl overflow-hidden shadow-lg mb-6 text-white relative">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-100">Meet Our Support Team</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">Our team of experienced professionals is here to make your event experience seamless and enjoyable.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100"; }}
                  />
                </div>
                <h3 className="font-medium text-sm sm:text-base text-gray-100">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="inline-block px-5 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-200 text-sm font-medium transition duration-200 backdrop-blur-sm">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHub;