"use client";

import React from "react";

const ReportAnIssue: React.FC = () => {
  const alertBanner = {
    title: "Need Immediate Assistance?",
    description: "For emergencies, security concerns, or urgent issues requiring immediate attention.",
    imageUrl: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8aXNzdWVyZXBvcnRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0MzUyNzA3NHww&ixlib=rb-4.0.3&q=80&w=1080?q=80",
    photoCredit: "Photo by Ben Rosett",
  };

  const issueCategories = [
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Technical",
      isSelected: true,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: "Overcrowding",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      label: "AV Issues",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      label: "Climate",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      label: "Amenities",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Information",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      label: "Security",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
      label: "Other",
    },
  ];

  const locationOptions = [
    "Please select a location",
    "Main Hall",
    "Workshop Room A",
    "Workshop Room B",
    "Exhibition Area",
    "Dining Hall",
    "Lobby",
    "Restrooms",
    "Outdoor Area",
  ];

  const priorityLevels = [
    {
      color: "red",
      label: "Critical (Needs immediate attention)",
      icon: (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      color: "orange",
      label: "High (Should be addressed soon)",
      icon: (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      color: "blue",
      label: "Medium (General issues)",
      icon: (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      color: "gray",
      label: "Low (Feedback for future events)",
      icon: (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const recentReports = [
    {
      icon: (
        <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Wi-Fi Connectivity Issue",
      location: "Main Hall",
      time: "Reported 45 minutes ago",
      status: "In Progress",
      statusColor: "yellow",
      update: "Our tech team is currently working on resolving the Wi-Fi issues in the Main Hall. We expect this to be fixed within the next 30 minutes.",
    },
    {
      icon: (
        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Air Conditioning Too Cold",
      location: "Workshop Room B",
      time: "Reported yesterday",
      status: "Resolved",
      statusColor: "green",
      update: "The temperature has been adjusted in Workshop Room B. Thank you for bringing this to our attention.",
    },
  ];

  const faqs = [
    {
      question: "How quickly will my issue be addressed?",
      answer: "Critical issues are addressed immediately. Regular issues are typically resolved within 1-2 hours depending on complexity.",
      isExpanded: true,
    },
    {
      question: "Can I report issues on behalf of others?",
      answer: "",
      isExpanded: false,
    },
    {
      question: "Will I be notified when my issue is resolved?",
      answer: "",
      isExpanded: false,
    },
  ];

  const resources = [
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Need Help in Person?",
      description: "Visit our information desk in the main lobby for immediate assistance.",
      actionText: "View Map Location",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email the Organizers",
      description: "For non-urgent matters, you can reach us via email. We typically respond within 2 hours.",
      actionText: "Send Email",
    },
  ];

  const emergencyContacts = [
    {
      color: "red",
      icon: (
        <svg className="w-5 h-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "Medical Emergency",
      description: "For medical emergencies, contact:",
      contact: "On-site Medical Team: 555-123-4567",
    },
    {
      color: "amber",
      icon: (
        <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      ),
      title: "Security Issues",
      description: "For security concerns, contact:",
      contact: "Security Team: 555-123-4568",
    },
    {
      color: "blue",
      icon: (
        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "General Assistance",
      description: "For all other urgent matters:",
      contact: "Event Hotline: 555-123-4569",
    },
  ];

  return (
    <div id="issueReporting" className="page-section min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Report an Issue</h1>
        <p className="text-gray-600">Help us address problems quickly to improve everyone's experience</p>
      </div>

      {/* Alert Banner for Quick Response */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="md:flex">
          <div className="p-6 md:w-2/3 text-white z-10 relative">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-3 backdrop-blur-sm">
              URGENT ISSUES
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">{alertBanner.title}</h2>
            <p className="mb-4">{alertBanner.description}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="inline-flex items-center px-4 py-2 bg-white text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                Report Emergency
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm transition duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Help Desk
              </button>
            </div>
          </div>
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <img
              src={alertBanner.imageUrl}
              alt="Business professional looking concerned"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x400";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-600/60 md:bg-none"></div>
            <div className="absolute bottom-2 right-2 text-white/70 text-xs bg-black/30 px-2 py-1 rounded">
              {alertBanner.photoCredit}
            </div>
          </div>
        </div>
      </div>

      {/* Main Issue Reporting Form */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
        <div className="border-b border-gray-100 p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
          <h2 className="text-lg font-bold text-gray-800">Report an Issue</h2>
          <p className="text-sm text-gray-500">We'll address your concerns as quickly as possible</p>
        </div>

        <div className="p-5">
          <form>
            {/* Issue Category Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Category</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {issueCategories.map((category, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`flex flex-col items-center p-4 rounded-lg transition duration-200 ${
                      category.isSelected
                        ? "bg-indigo-50 border-2 border-indigo-200 hover:bg-indigo-100"
                        : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {category.icon}
                    <span className="text-sm font-medium text-gray-800">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location Selection */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              >
                {locationOptions.map((option, index) => (
                  <option key={index} selected={index === 0}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Issue Priority */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
              <div className="flex flex-wrap gap-3">
                {priorityLevels.map((level, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`px-4 py-2 bg-${level.color}-50 text-${level.color}-700 rounded-lg text-sm font-medium hover:bg-${level.color}-100 transition duration-200 border border-${level.color}-200`}
                  >
                    <span className="flex items-center">
                      {level.icon}
                      {level.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Issue Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Describe the Issue
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Please provide details about the issue..."
              />
              <p className="mt-1 text-sm text-gray-500">Be specific to help us resolve the issue faster.</p>
            </div>

            {/* Add Photo Option */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Add a Photo (Optional)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-1 text-sm text-gray-500">Click to upload</p>
                    <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Contact Information</label>
                <div className="flex items-center">
                  <input
                    id="anonymous-report"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous-report" className="ml-2 block text-sm text-gray-700">
                    Submit anonymously
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">We may need to contact you for more details.</p>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition duration-200"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Issue Status Tracker */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
        <div className="border-b border-gray-100 p-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h2 className="text-lg font-bold text-gray-800">Your Recent Reports</h2>
        </div>

        <div className="divide-y divide-gray-100">
          {recentReports.map((report, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition duration-150">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className={`h-8 w-8 rounded-full bg-${report.statusColor}-100 flex items-center justify-center`}>
                    {report.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{report.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{report.location} - {report.time}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${report.statusColor}-100 text-${report.statusColor}-800`}>
                  {report.status}
                </span>
              </div>
              <div className="mt-3 pl-11">
                <p className="text-sm text-gray-600">{report.update}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View All Reported Issues
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl overflow-hidden shadow-lg mb-6 relative">
        <div className="p-6 text-white z-10 relative">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-medium">{faq.question}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={faq.isExpanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
                {faq.isExpanded && (
                  <div className="mt-2 text-sm text-indigo-100">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <button className="inline-block px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition duration-200 backdrop-blur-sm">
              View All FAQs
            </button>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M43.7,-76.5C57.9,-69.5,71.8,-60.5,80.1,-47.3C88.5,-34.1,91.4,-17,89.7,-1.1C88,14.9,81.7,29.9,72.1,41.2C62.4,52.5,49.3,60.1,35.6,67.1C21.9,74.2,7.6,80.5,-6.1,80.1C-19.7,79.6,-39.4,72.2,-50.2,60.4C-61.1,48.6,-63.1,32.3,-70.5,14.6C-77.9,-3.1,-90.7,-22.2,-87.8,-38.5C-84.9,-54.7,-66.4,-68,-48.1,-75.3C-29.8,-82.7,-11.6,-84,-1.8,-80.5C8,-77,29.5,-83.5,43.7,-76.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition duration-200">
            <div className="flex items-start">
              <div className={`bg-${index === 0 ? "indigo" : "purple"}-100 p-3 rounded-lg mr-4`}>
                {resource.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <button className={`text-${index === 0 ? "indigo" : "purple"}-600 hover:text-${index === 0 ? "indigo" : "purple"}-800 text-sm font-medium flex items-center`}>
                  {resource.actionText}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-4 bg-gradient-to-r from-red-50 to-orange-50">
          <h2 className="text-lg font-bold text-gray-800">Emergency Contacts</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className={`p-4 bg-${contact.color}-50 rounded-lg border border-${contact.color}-100`}>
                <div className="flex items-center mb-3">
                  {contact.icon}
                  <h3 className="font-medium text-gray-800">{contact.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                <p className="text-sm font-medium text-gray-800">{contact.contact}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-sm text-gray-500 text-center">
            All emergency contacts are available 24/7 during the event.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAnIssue;