import React from "react";

const ContactForm: React.FC = () => (
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
);

export default ContactForm;