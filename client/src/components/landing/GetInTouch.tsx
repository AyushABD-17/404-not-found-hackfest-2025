// components/GetInTouch.tsx
"use client";
import React, { useState } from "react";

const GetInTouch: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can we implement your system?",
      answer:
        "Our platform can be set up in as little as 24 hours for standard implementations. More complex integrations typically take 3-5 business days.",
    },
    {
      question: "Do you offer training for our team?",
      answer:
        "Yes, all plans include onboarding and basic training. Our Professional and Enterprise plans include comprehensive training sessions and dedicated support.",
    },
    {
      question: "What languages do you support?",
      answer:
        "Our platform supports over 30 languages including English, Spanish, French, German, Japanese, Chinese, and more. Enterprise plans include custom language support.",
    },
  ];

  const handleToggle = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section id="contact" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform how you monitor and respond to event feedback?
            Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Book a Consultation
            </h3>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  placeholder="your@company.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  placeholder="Your Company"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="event_size"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Event Size
                </label>
                <select
                  id="event_size"
                  className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  defaultValue="" // Ensures the default option is selected
                >
                  <option value="" disabled>
                    Select event size
                  </option>
                  <option value="small">Small (Up to 500 attendees)</option>
                  <option value="medium">Medium (500-5,000 attendees)</option>
                  <option value="large">Large (5,000+ attendees)</option>
                  <option value="enterprise">
                    Enterprise (Multiple large events)
                  </option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  placeholder="Please share details about your upcoming events and specific needs..."
                ></textarea>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 bg-neutral-700 border border-neutral-600 rounded focus:ring-indigo-500"
                    required
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-indigo-400 hover:underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-400 hover:underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <span>Request Demo</span>
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
              </button>
            </form>
          </div>

          {/* Contact details and image */}
          <div className="flex flex-col">
            <div className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                How We Can Help
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
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
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Demo of Our Platform
                    </h4>
                    <p className="text-gray-400 text-sm">
                      See how our AI sentiment analysis works with your specific
                      event setup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
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
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Custom Pricing
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Get a tailored quote based on your specific requirements
                      and event scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-900/30 p-3 rounded-lg mr-4">
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
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Implementation Support
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Our experts will help you integrate our platform with your
                      existing tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg relative flex-grow">
              <img
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y29udGFjdCUyMGxvY2F0aW9uJTIwcHJvZmVzc2lvbmFsJTIwd2VsY29taW5nfGVufDB8MHx8fDE3NDMxNTk4NTB8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
                alt="Professional ready to assist with your needs"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/5048x3370";
                }}
                className="w-full h-full object-cover"
                width={5048}
                height={3370}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold text-white mb-2">
                  Talk to Our Team
                </h4>
                <div className="flex items-center text-gray-300 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>contact@sentiscan.ai</span>
                </div>
                <div className="mt-4 text-xs text-gray-400">
                  Photo by Ben Rosett
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Common Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-800 rounded-lg p-6">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className={`${isOpen === index ? "mt-3" : "hidden mt-3"}`}>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest product updates and
              industry insights.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                className="bg-neutral-700 border border-neutral-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 flex-grow p-3"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
