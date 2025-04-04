import React from 'react';
import { FeedbackItem } from './FeedbackItem';
export const RealTimeFeedbackHeatMap: React.FC = () => {
    const feedbackData: Feedback[] = [
        {
            id: '1',
            username: 'Alex Thompson',
            avatar: '',
            time: '2 mins ago',
            text: 'The keynote speaker was amazing! Learned so much about AI trends.',
            sentiment: 'positive',
            source: 'Twitter',
            sourceIcon: <svg className="h-4 w-4 text-blue-400 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.018 10.018 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>,
        },
        {
            id: '2',
            username: 'Emily Rodriguez',
            avatar: '',
            time: '5 mins ago',
            text: 'Food is okay but lunch lines are a bit long. Maybe add more stations?',
            sentiment: 'gray',
            source: 'Instagram',
            sourceIcon: <svg className="h-4 w-4 text-purple-400 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
        },
        {
            id: '3',
            username: 'Michael Chen',
            avatar: '',
            time: '8 mins ago',
            text: "Can't hear the speaker in room 3B. Audio system isn't working properly!",
            sentiment: 'negative',
            source: 'Twitter',
            sourceIcon: <svg className="h-4 w-4 text-blue-400 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.018 10.018 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>,
        },
        {
            id: '4',
            username: 'Sarah Johnson',
            avatar: '',
            time: '12 mins ago',
            text: 'Excellent event organization! Loved the networking opportunities.',
            sentiment: 'positive',
            source: 'LinkedIn',
            sourceIcon: <svg className="h-4 w-4 text-cyan-400 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" /></svg>,
        },
        {
            id: '5',
            username: 'David Wilson',
            avatar: '',
            time: '15 mins ago',
            text: 'Wi-Fi keeps dropping in the main hall. Very frustrating!',
            sentiment: 'negative',
            source: 'In-app Survey',
            sourceIcon: <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>,
        },
    ];

    const mapSections: MapSection[] = [
        { name: 'Registration', color: 'yellow-900/40', colSpan: 1, rowSpan: 1, hasPulse: true },
        { name: 'Main Stage', color: 'red-900/60', colSpan: 2, rowSpan: 2, hasPulse: true },
        { name: 'Exhibition', color: 'green-900/20', colSpan: 1, rowSpan: 2 },
        { name: 'Break Area', color: 'gray-800', colSpan: 1, rowSpan: 1 },
        { name: 'Workshop 1', color: 'orange-900/40', colSpan: 1, rowSpan: 2, hasPulse: true },
        { name: 'Workshop 2', color: 'red-900/40', colSpan: 1, rowSpan: 2, hasPulse: true },
        { name: 'Catering', color: 'yellow-900/30', colSpan: 2, rowSpan: 1, hasPulse: true },
        { name: 'Networking', color: 'green-900/20', colSpan: 2, rowSpan: 1 },
        { name: 'Workshop 3', color: 'green-900/20', colSpan: 2, rowSpan: 1 },
    ];
    const issues: Issue[] = [
        { location: 'Main Stage', severity: 'red', description: 'Audio Issues' },
        { location: 'Workshop 2', severity: 'red', description: 'AV System' },
        { location: 'Registration', severity: 'yellow', description: 'Long Wait' },
        { location: 'Catering', severity: 'yellow', description: 'Food Variety' },
    ];
    return <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 bg-gray-800 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Real-time Feedback Stream</h3>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
            </div>
            <div className="space-y-3 overflow-y-auto pr-2">
                {feedbackData.map((feedback) => (
                    <FeedbackItem key={feedback.id} {...feedback} />
                ))}
            </div>
        </div>

        <div className="lg:w-1/2 bg-gray-800 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Venue Heatmap - Issue Concentration</h3>
                <select className="bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Main Floor</option>
                    <option>Second Floor</option>
                    <option>Exhibition Hall</option>
                </select>
            </div>
            <div className="relative h-[400px] bg-gray-900 rounded-lg p-1 overflow-hidden">
                <div className="absolute inset-0 p-4">
                    <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
                        {mapSections.map((section, index) => (
                            <div
                                key={index}
                                className={`col-span-${section.colSpan} row-span-${section.rowSpan} ${section.color} rounded flex items-center justify-center text-xs text-${section.color.split('/')[0]} cursor-pointer hover:bg-${section.color.split('/')[0]}/60 transition-colors relative`}
                            >
                                {section.name}
                                {section.hasPulse && (
                                    <div className={`absolute top-1 right-1 w-2 h-2 bg-${section.color.split('-')[0]}-500 rounded-full animate-pulse`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Active Issues by Location</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {issues.map((issue, index) => (
                        <div key={index} className={`flex items-center justify-between p-2 bg-${issue.severity}-900/20 border border-${issue.severity}-500/30 rounded`}>
                            <div className="flex items-center">
                                <span className={`w-2 h-2 bg-${issue.severity}-500 rounded-full mr-2`}></span>
                                <span className="text-sm">{issue.location}</span>
                            </div>
                            <span className={`text-xs text-${issue.severity}-400`}>{issue.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>;
};


