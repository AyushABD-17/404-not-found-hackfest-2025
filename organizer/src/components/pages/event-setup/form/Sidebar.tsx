
import React from "react";
import Image from "next/image";

interface SidebarProps {
  step: number;
  totalSteps?: number;
  handleNext: () => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  handlePrevious: () => void;
  isSubmitting: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ step, totalSteps = 5, handleNext, handleSubmit, handlePrevious, isSubmitting }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-800/50 rounded-xl border border-gray-700/30 overflow-hidden mb-6">
        <div className="h-48 overflow-hidden">
          <Image
            src=""
            alt="people partying with confetti"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Why Set Up Event Monitoring?</h3>
          <ul className="text-gray-300 space-y-2">
            {[
              'Real-time insights into attendee sentiment',
              'Identify and address issues before they escalate',
              'Improve attendee experience in real-time',
              'Collect valuable feedback for future events',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-indigo-900/50 rounded-xl border border-indigo-700/30 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Setup Completion</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-700/50 rounded-full w-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Complete all steps to activate your event monitoring dashboard.
        </p>
        <div className="flex space-x-3">
        {step > 1 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="px-4 py-2 my-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200 flex items-center"
          >
            Previous
          </button>
        )}
          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 ms-auto my-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200 flex items-center"
            >
              Continue
              <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="px-4 py-2 ms-auto my-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200 flex items-center"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;