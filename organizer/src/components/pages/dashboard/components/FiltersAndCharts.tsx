import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';

export const FiltersAndCharts: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Day');
    return  <div className="flex flex-col lg:flex-row gap-6 mb-6">
    <div className="bg-gray-800 border border-gray-700/40 rounded-lg p-4 lg:w-2/3 hover:border-gray-600/50 transition-colors duration-300">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Sentiment Trend (Last 24 Hours)</h3>
            <div className="flex space-x-2">
                {['Day', 'Week', 'Month'].map((tab) => (
                    <button
                        key={tab}
                        className={`py-1 px-2 text-xs rounded-md ${activeTab === tab ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-700'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
        <div className="h-80 relative">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-2">
                <div>100%</div>
                <div>75%</div>
                <div>50%</div>
                <div>25%</div>
                <div>0%</div>
            </div>
            <div className="absolute left-10 right-0 top-0 h-full">
                <Line
                    data={{
                        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Now'],
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: [80, 70, 60, 50, 45, 40, 20],
                                borderColor: '#4ade80',
                                tension: 0.4,
                            },
                            {
                                label: 'Dataset 2',
                                data: [120, 125, 130, 125, 110, 115, 110],
                                borderColor: '#facc15',
                                tension: 0.4,
                            },
                            {
                                label: 'Dataset 3',
                                data: [160, 155, 150, 160, 160, 165, 160],
                                borderColor: '#f87171',
                                tension: 0.4,
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            },
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                                min: 0,
                                max: 200,
                            },
                        },
                    }}
                />
            </div>
            <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-400 pt-2">
                <div>00:00</div>
                <div>04:00</div>
                <div>08:00</div>
                <div>12:00</div>
                <div>16:00</div>
                <div>20:00</div>
                <div>Now</div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-6">
            <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm">Positive</span>
            </div>
            <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-sm">gray</span>
            </div>
            <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="text-sm">Negative</span>
            </div>
        </div>
    </div>

    <div className="lg:w-1/3 flex flex-col gap-6">
        <div className="bg-gray-800 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-colors duration-300">
            <h3 className="font-medium mb-4">Sentiment Distribution</h3>
            <div className="flex items-center justify-center">
                <div className="w-40 h-40">
                    <Pie
                        data={{
                            labels: ['Positive', 'Neutral', 'Negative'],
                            datasets: [{
                                data: [79, 15, 6],
                                backgroundColor: [
                                    '#4ade80',
                                    '#facc15',
                                    '#f87171'
                                ],
                                borderWidth: 0,
                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    enabled: false
                                }
                            },
                            cutout: '70%'
                        }}
                    />

                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="text-center">
                    <div className="text-green-400 text-xl font-bold">79%</div>
                    <div className="text-xs text-gray-400">Positive</div>
                </div>
                <div className="text-center">
                    <div className="text-yellow-400 text-xl font-bold">15%</div>
                    <div className="text-xs text-gray-400">gray</div>
                </div>
                <div className="text-center">
                    <div className="text-red-400 text-xl font-bold">6%</div>
                    <div className="text-xs text-gray-400">Negative</div>
                </div>
            </div>
        </div>

        <div className="bg-gray-800 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-colors duration-300">
            <h3 className="font-medium mb-4">Data Filters</h3>
            <div className="space-y-3">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Feedback Source</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>All Sources</option>
                        <option>Twitter</option>
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>In-app Chat</option>
                        <option>Surveys</option>
                        <option>Review Platforms</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Time Period</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Last 24 Hours</option>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Custom Range</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Sentiment Type</label>
                    <div className="flex space-x-2">
                        <button className="flex-1 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-md text-sm">Positive</button>
                        <button className="flex-1 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-md text-sm">gray</button>
                        <button className="flex-1 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-md text-sm">Negative</button>
                    </div>
                </div>
                <div className="pt-2">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 text-white py-2 rounded-md text-sm font-medium">Apply Filters</button>
                </div>
            </div>
        </div>
    </div>
</div>;
};


