import React from "react";
import Image from "next/image";
import LiveChat from "./LiveChat";
type ContactInfo = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

const QuickContactOptions: React.FC<{ contactInfo: ContactInfo[] }> = ({ contactInfo }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <LiveChat />

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
);

export default QuickContactOptions;