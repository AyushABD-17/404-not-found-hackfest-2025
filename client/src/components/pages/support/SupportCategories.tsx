import React from "react";

type SupportCategory = {
  title: string;
  gradient: string;
  items: string[];
};

const SupportCategories: React.FC<{ categories: SupportCategory[] }> = ({ categories }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-gray-100 mb-4">Support Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition duration-200">
          <div className={`p-4 border-b border-gray-700 bg-gradient-to-r ${category.gradient}`}>
            <h3 className="font-medium text-gray-100 text-sm sm:text-base">{category.title}</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center text-gray-300 hover:text-indigo-400 transition duration-200 text-sm sm:text-base">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SupportCategories;