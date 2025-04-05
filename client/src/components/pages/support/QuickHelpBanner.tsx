import React from "react";
import Image from "next/image";

const QuickHelpBanner: React.FC = () => (
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
);

export default QuickHelpBanner;