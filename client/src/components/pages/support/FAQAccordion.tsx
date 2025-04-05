import React from "react";

type FAQItem = {
  question: string;
  answer?: string;
  expanded?: boolean;
};

const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm mb-8 overflow-hidden">
    <div className="border-b border-gray-700 p-4 bg-gradient-to-r from-gray-800 to-gray-700">
      <h2 className="text-lg font-bold text-gray-100">Frequently Asked Questions</h2>
    </div>
    <div className="divide-y divide-gray-700">
      {items.map((faq, index) => (
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
);

export default FAQAccordion;