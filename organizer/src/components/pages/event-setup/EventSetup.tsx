// components/EventSetup.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProgressSteps } from './components/ProgressSteps';
import FormPage from './form/page';

interface EventFormData {
    name: string;
    startDate: string;
    endDate: string;
    venue: string;
    location: string;
    description: string;
    expectedAttendees: string;
}

const steps = [
    { id: '1', label: 'Basic Info', active: true },
    { id: '2', label: 'Tracking Options', active: false },
    { id: '3', label: 'Alert Settings', active: false },
    { id: '4', label: 'Integrations', active: false },
];

export const EventSetup: React.FC = () => {
    const [formData, setFormData] = useState<EventFormData>({
        name: '',
        startDate: '',
        endDate: '',
        venue: '',
        location: '',
        description: '',
        expectedAttendees: 'Less than 100',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Event Setup</h2>
                    <p className="text-gray-400">
                        Configure your event parameters and customize your monitoring settings
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form section */}
                    <FormPage />

                    {/* Info/Image sidebar */}
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
                                <div className="h-2 bg-gray-700/50 rounded-full">
                                    <div className="h-2 bg-indigo-500 rounded-full w-1/4"></div>
                                </div>
                                <p className="text-gray-300 text-sm mt-2">Step 1 of 4 completed</p>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Complete all steps to activate your event monitoring dashboard.
                            </p>
                            <div className="flex space-x-3">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                >
                                    Save Draft
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200 flex items-center"
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview section */}
                <div className="mt-10 bg-gray-800/50 rounded-xl border border-gray-700/30 p-6">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">Event Preview</h3>
                        <button className="text-indigo-400 hover:text-indigo-300 flex items-center">
                            <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Preview Dashboard
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-700/50/50 p-4 rounded-lg border border-gray-600/30">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-white font-medium">Event Details</h4>
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className="text-gray-300">
                                    <span className="text-gray-500">Name:</span>{' '}
                                    <span className="text-white">{formData.name || 'Untitled Event'}</span>
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-gray-500">Date:</span>{' '}
                                    <span className="text-white">
                                        {formData.startDate ? new Date(formData.startDate).toLocaleString() : 'Not set'}
                                    </span>
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-gray-500">Venue:</span>{' '}
                                    <span className="text-white">{formData.venue || 'Not set'}</span>
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-gray-500">Attendees:</span>{' '}
                                    <span className="text-white">{formData.expectedAttendees || 'Not set'}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-700/50/50 p-4 rounded-lg border border-gray-600/30">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-white font-medium">Sentiment Tracking</h4>
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-center h-20 text-gray-400">
                                <p className="text-center text-sm">Complete step 2 to configure</p>
                            </div>
                        </div>

                        <div className="bg-gray-700/50/50 p-4 rounded-lg border border-gray-600/30">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-white font-medium">Alert Settings</h4>
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-center h-20 text-gray-400">
                                <p className="text-center text-sm">Complete step 3 to configure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};