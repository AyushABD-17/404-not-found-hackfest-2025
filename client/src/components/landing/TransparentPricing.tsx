// components/TransparentPricing.tsx
"use client";
import React, { useState } from 'react';

const TransparentPricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small events and workshops',
      price: isAnnual ? 199 * 12 * 0.8 : 199, // 20% discount for annual
      features: [
        'Up to 500 attendees',
        '2 social media channels',
        'Basic sentiment analysis',
        'Email alerts',
        '3 months data retention',
      ],
      unavailable: ['Advanced analytics'],
      apiAccess: false,
      customIntegrations: false,
      sla: '-',
    },
    {
      name: 'Professional',
      description: 'Ideal for conferences and mid-size events',
      price: isAnnual ? 499 * 12 * 0.8 : 499,
      features: [
        'Up to 5,000 attendees',
        '5 social media channels',
        'Advanced sentiment analysis',
        'Real-time alerts (email + SMS)',
        '1 year data retention',
        'Advanced analytics dashboard',
        'Priority support',
      ],
      unavailable: [],
      apiAccess: true,
      customIntegrations: 'Limited',
      sla: '99.5%',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'Customized for large-scale events',
      price: isAnnual ? 999 * 12 * 0.8 : 999,
      features: [
        'Unlimited attendees',
        'Unlimited social channels',
        'Custom AI models & training',
        'Multi-channel alerts & webhooks',
        '3+ years data retention',
        'Custom reporting & integrations',
        'Dedicated account manager',
      ],
      unavailable: [],
      apiAccess: true,
      customIntegrations: 'Full',
      sla: '99.9%',
      isContact: true,
    },
  ];

  const faqs = [
    {
      question: 'How does the pricing scale with attendees?',
      answer: 'Our pricing tiers are designed to accommodate different event sizes. If you expect to exceed the attendee limit for your chosen plan, we recommend upgrading to the next tier or contacting our sales team for a custom solution.',
    },
    {
      question: 'Can I switch plans mid-contract?',
      answer: 'Yes, you can upgrade your plan at any time. Downgrades can be processed at the end of your current billing cycle.',
    },
    {
      question: 'Do you offer nonprofit discounts?',
      answer: 'Yes, we offer special pricing for nonprofit organizations. Please contact our sales team with proof of your nonprofit status to learn more.',
    },
  ];

  return (
    <section id="pricing" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your event management needs.</p>
        </div>

        {/* Pricing toggle */}
        <div className="flex items-center justify-center mb-12">
          <span className="text-gray-300 mr-3">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
          <span className="text-gray-300 ml-3">Annual <span className="text-xs text-indigo-400">(Save 20%)</span></span>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-neutral-900 rounded-xl overflow-hidden border transition-transform duration-300 hover:-translate-y-2 ${
                plan.isPopular ? 'border-2 border-indigo-500 transform scale-105 md:scale-110 z-10 shadow-xl shadow-indigo-900/20' : 'border border-neutral-700'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-indigo-600 py-2 text-center">
                  <span className="text-white font-medium text-sm">MOST POPULAR</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.unavailable.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full py-3 px-4 text-center font-medium rounded-lg transition-colors duration-300 ${
                    plan.isContact
                      ? 'bg-transparent hover:bg-indigo-600/10 text-indigo-400 border border-indigo-500'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {plan.isContact ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features comparison */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Compare Plans</h3>

          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-left">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Features</th>
                  <th scope="col" className="px-6 py-4 text-center">Starter</th>
                  <th scope="col" className="px-6 py-4 text-center">Professional</th>
                  <th scope="col" className="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-800 border-b border-neutral-700">
                  <td className="px-6 py-4 font-medium text-white">Attendees</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-300">
                      {plan.features[0]}
                    </td>
                  ))}
                </tr>
                <tr className="bg-neutral-900 border-b border-neutral-700">
                  <td className="px-6 py-4 font-medium text-white">Social Channels</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-300">
                      {plan.features[1].split(' ')[0]}
                    </td>
                  ))}
                </tr>
                <tr className="bg-neutral-800 border-b border-neutral-700">
                  <td className="px-6 py-4 font-medium text-white">API Access</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-300">
                      {plan.apiAccess ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-neutral-900 border-b border-neutral-700">
                  <td className="px-6 py-4 font-medium text-white">Custom Integrations</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-300">
                      {plan.customIntegrations === false ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-500 mx-auto"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        plan.customIntegrations
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="bg-neutral-800 border-b border-neutral-700">
                  <td className="px-6 py-4 font-medium text-white">SLA</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="px-6 py-4 text-center text-gray-300">
                      {plan.sla}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-900 rounded-lg p-6">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="text-lg font-medium text-white">{faq.question}</span>
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
                <div className="mt-3">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to elevate your event experience?</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">Start transforming attendee feedback into actionable insights today.</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#contact"
                  className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Talk to Sales
                </a>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3JlYXRlZCUyMHVzaW5nJTIwY3JlYXRlLXJlYWN0LWFwcCUyMHByaWNpbmclMjBwbGFucyUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzfGVufDB8MHx8fDE3NDM1MTU3MzN8MA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
              alt="Laptop displaying analytics dashboard"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/2426x1728';
              }}
              className="absolute -right-20 -bottom-10 w-1/3 opacity-20 blur-sm"
              width={2426}
              height={1728}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentPricing;