// components/WhatOurClientsSay.tsx
"use client";
import Image from "next/image";
import { FC } from "react";

const WhatOurClientsSay: FC = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Event Director, TechSummit",
      image:
        "https://images.unsplash.com/photo-1659482633518-f2c99276b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Client testimonial photo",
      quote:
        "SentiScan transformed how we manage our conference. We identified and resolved issues before they became problems, leading to our highest satisfaction scores ever.",
      attendees: "12,000+ attendees",
      stat: "+42% satisfaction",
      imageWidth: 60,
      imageHeight: 60,
    },
    {
      name: "Michael Thompson",
      role: "Operations Manager, Festival Pro",
      image:
        "https://images.unsplash.com/photo-1659482634001-7e2571dec3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Client testimonial photo",
      quote:
        "The real-time alerts were a game-changer. We detected and fixed issues with food service and restroom facilities before they became widespread complaints.",
      attendees: "35,000+ festival attendees",
      stat: "92% issue resolution",
      imageWidth: 60,
      imageHeight: 60,
    },
    {
      name: "Sarah Peterson",
      role: "CEO, Global Events Inc",
      image:
        "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080",
      imageAlt: "Client testimonial photo",
      quote:
        "The data we collected helped us improve our corporate events year over year. Our client retention has increased dramatically thanks to SentiScan's insights.",
      attendees: "50+ corporate events/year",
      stat: "38% higher retention",
      imageWidth: 60,
      imageHeight: 60,
    },
  ];

  const featuredTestimonial = {
    name: "David Kim",
    role: "Chief Experience Officer, InnovateNow Conference",
    image:
      "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    imageAlt: "Client testimonial photo",
    quote:
      "SentiScan completely transformed how we manage our annual innovation conference. The real-time alerts allowed us to address facility issues immediately, and the sentiment analysis helped us identify our most engaging speakers within hours instead of days.",
    imageWidth: 80,
    imageHeight: 80,
    stats: [
      { value: "56%", label: "Higher NPS" },
      { value: "3.5x", label: "Faster Response" },
      { value: "98%", label: "Resolution Rate" },
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1659482633518-f2c99276b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    featuredImageAlt: "Conference attendees engaged with event",
    featuredImageCredit: "Photo by Boxed Water Is Better",
    featuredImageWidth: 4160,
    featuredImageHeight: 5884,
  };

  const trustLogos = [
    "TechConf",
    "InnovateX",
    "EventPro",
    "SummitSeries",
    "GlobalMeet",
    "FestivalHQ",
  ];

  return (
    <section id="testimonials" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Event organizers are transforming their events with real-time
            sentiment analysis.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700 relative"
            >
              <div className="absolute -top-4 -right-4 bg-indigo-600 w-8 h-8 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    width={testimonial.imageWidth}
                    height={testimonial.imageHeight}
                    className="w-14 h-14 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/60x60/374151/FFFFFF?text=${
                        testimonial.name[0] + (testimonial.name.split(" ")[1]?.[0] || "")
                      }`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-white italic">{testimonial.quote}</p>
              </div>
              <div className="border-t border-neutral-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{testimonial.attendees}</span>
                  <span className="bg-green-900/30 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    {testimonial.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl border border-neutral-700 mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <div className="mb-6">
                <span className="bg-indigo-600/20 text-indigo-400 text-xs font-medium px-2.5 py-1 rounded">
                  Featured Success Story
                </span>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <p className="text-white text-xl italic mb-6">
                  {featuredTestimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.imageAlt}
                      width={featuredTestimonial.imageWidth}
                      height={featuredTestimonial.imageHeight}
                      className="w-16 h-16 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/80x80/374151/FFFFFF?text=DK`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {featuredTestimonial.name}
                    </h4>
                    <p className="text-gray-400">{featuredTestimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {featuredTestimonial.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-neutral-900 p-3 rounded-lg text-center"
                  >
                    <span className="text-indigo-400 text-xl font-bold">
                      {stat.value}
                    </span>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative md:h-full order-1 md:order-2">
              <Image
                src={featuredTestimonial.featuredImage}
                alt={featuredTestimonial.featuredImageAlt}
                width={featuredTestimonial.featuredImageWidth}
                height={featuredTestimonial.featuredImageHeight}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/${featuredTestimonial.featuredImageWidth}x${featuredTestimonial.featuredImageHeight}`;
                }}
              />
              <div className="absolute bottom-4 right-4">
                <span className="text-xs text-gray-400 bg-black/50 px-2 py-1 rounded">
                  {featuredTestimonial.featuredImageCredit}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mb-12">
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {trustLogos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="text-gray-500 font-bold text-xl">{logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 shadow-lg shadow-indigo-900/30"
          >
            Start Your Free Trial
          </a>
          <p className="text-gray-500 mt-3 text-sm">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;