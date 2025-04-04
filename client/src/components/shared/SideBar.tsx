"use client";

import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    // Simulate the onclick behavior from your original code
    window.location.hash = `#${section}`;
  };

  const navigationItems = [
    {
      id: "dashboard",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
        </svg>
      ),
      title: "Live Updates",
      isActive: true, // Highlighted by default
    },
    {
      id: "feedback",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
      ),
      title: "My Feedback",
    },
    {
      id: "report",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Report an Issue",
    },
    {
      id: "schedule",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Schedule",
    },
    {
      id: "support",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Support",
    },
  ];

  return (
    <nav
      id="layout"
      className="hidden lg:flex lg:flex-col w-64 bg-neutral-800 text-white border-r border-white/10 h-screen fixed top-0 left-0 z-10"
    >
      {/* Logo & Brand */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
            E
          </div>
          <span className="text-xl font-bold tracking-tight">EventFeedback</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleNavigation(item.id)}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                  item.isActive
                    ? "text-white bg-purple-700/50"
                    : "text-gray-300 hover:bg-purple-700/30"
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="User avatar"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/40x40";
            }}
          />
          <div>
            <h4 className="text-sm font-medium">Alex Johnson</h4>
            <p className="text-xs text-gray-400">Attendee</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;