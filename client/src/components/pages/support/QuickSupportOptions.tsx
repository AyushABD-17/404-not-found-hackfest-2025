import React from "react";

type QuickSupportOption = {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  buttonText: string;
};

const QuickSupportOptions: React.FC<{ options: QuickSupportOption[] }> = ({ options }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {options.map((option, index) => (
      <div key={index} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 hover:shadow-md transition duration-200 p-5">
        <div className="flex flex-col items-center text-center">
          <div className={`w-14 h-14 rounded-full bg-${option.color}-900/20 flex items-center justify-center mb-4`}>
            {option.icon}
          </div>
          <h3 className="text-lg font-medium text-gray-100 mb-2">{option.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{option.description}</p>
          <button className={`inline-flex items-center px-4 py-2 bg-${option.color}-500 text-white rounded-lg text-sm font-medium hover:bg-${option.color}-600 transition duration-200 mt-auto`}>
            {option.buttonText}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default QuickSupportOptions;