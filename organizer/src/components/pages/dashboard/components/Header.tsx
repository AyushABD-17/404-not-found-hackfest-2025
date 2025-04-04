import React from 'react';

export const Header: React.FC = () => {
    return <header className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-400 mt-1">TechConf 2023 - Live Monitoring</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <span className="text-sm text-green-400 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Live Data
                </span>
                <span className="text-sm text-gray-400">Last update: Just now</span>
                <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Export
                </button>
            </div>
        </div>
    </header>;
};

