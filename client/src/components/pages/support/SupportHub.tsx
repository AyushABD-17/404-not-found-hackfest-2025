"use client";

import React from "react";
import Header from "./Header";
import QuickHelpBanner from "./QuickHelpBanner";
import QuickSupportOptions from "./QuickSupportOptions";
import FAQAccordion from "./FAQAccordion";
import SupportCategories from "./SupportCategories";
import QuickContactOptions from "./QuickContactOptions";
import ContactForm from "./ContactForm";
import SupportTeam from "./SupportTeam";

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
    {
      question: "How do I provide feedback about a session?",
    },
    {
      question: "Is there Wi-Fi available at the venue?",
    },
    {
      question: "How do I report an issue or emergency?",
    },
    {
      question: "Where are the restrooms located?",
    },
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
    { 
      name: "Sarah Kim", 
      role: "Support Lead", 
      img: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8c3VwcG9ydGh1YiUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzQzNTI3MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" 
    },
    { 
      name: "Marcus Johnson", 
      role: "Technical Support", 
      img: "https://avatar.iran.liara.run/public/42" 
    },
    { 
      name: "Elena Rodriguez", 
      role: "Event Coordinator", 
      img: "https://avatar.iran.liara.run/public/23" 
    },
    { 
      name: "David Chen", 
      role: "Information Desk", 
      img: "https://avatar.iran.liara.run/public/51" 
    },
  ];

  return (
    <div id="supportHub" className="min-h-screen p-4 sm:p-6 lg:p-8">
      <Header />
      <QuickHelpBanner />
      <QuickSupportOptions options={quickSupportOptions} />
      <FAQAccordion items={faqItems} />
      <SupportCategories categories={supportCategories} />
      <QuickContactOptions contactInfo={contactInfo} />
      <ContactForm />
      <SupportTeam members={teamMembers} />
    </div>
  );
};

export default SupportHub;