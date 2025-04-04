import React from 'react';
import { OverviewCard } from './OverviewCards';
import { Bar } from 'react-chartjs-2';

const alerts: Alert[] = [
    { severity: 'red', text: 'Audio issues (Critical)', reports: 32 },
    { severity: 'orange', text: 'Registration delays', reports: 19 },
    { severity: 'yellow', text: 'Wi-Fi connectivity', reports: 14 },
];

const sources: Source[] = [
    {
        name: 'Twitter',
        percentage: 42,
        color: '#60a5fa',
        icon: <svg className="h-4 w-4 text-blue-400 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.018 10.018 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>,
    },
    {
        name: 'Instagram',
        percentage: 27,
        color: '#a78bfa',
        icon: <svg className="h-4 w-4 text-purple-400 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
    },
    {
        name: 'In-app Survey',
        percentage: 23,
        color: '#22d3ee',
        icon: <svg className="h-4 w-4 text-cyan-400 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>,
    },
];

export const OverviewCardsList: React.FC = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <OverviewCard title="Overall Sentiment" value="79% Positive" change={12} changeDirection="up">
        <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="flex h-full">
                <div className="bg-green-500 h-full" style={{ width: '79%' }}></div>
                <div className="bg-yellow-500 h-full" style={{ width: '15%' }}></div>
                <div className="bg-red-500 h-full" style={{ width: '6%' }}></div>
            </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>79% Positive</span>
            <span>15% gray</span>
            <span>6% Negative</span>
        </div>
    </OverviewCard>

    <OverviewCard title="Total Feedback" value="4,287" change={24} changeDirection="up">
        <div className="relative mt-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Last hour</span>
                <span>347 feedbacks</span>
            </div>
            <div className="h-10">
                <Bar
                    data={{
                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        datasets: [{
                            data: [4, 3, 5, 4, 6, 5, 3, 4, 6, 5, 7, 8],
                            backgroundColor: '#6366f1',
                            borderRadius: 2,
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
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                }
                            },
                            y: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    display: false
                                },
                                min: 0,
                                max: 8
                            }
                        }
                    }}
                />
            </div>
        </div>
    </OverviewCard>

    <OverviewCard title="Active Alerts" value="5 Issues" change={2} changeDirection="down">
        <div className="mt-4">
            {alerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <span className={`w-2 h-2 bg-${alert.severity}-500 rounded-full mr-2`}></span>
                        <span className="text-sm">{alert.text}</span>
                    </div>
                    <span className="text-xs text-gray-400">{alert.reports} reports</span>
                </div>
            ))}
        </div>
    </OverviewCard>

    <OverviewCard title="Top Feedback Source" value="Twitter" change={8} changeDirection="up">
        <div className="mt-4">
            {sources.map((source, index) => (
                <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            {source.icon}
                            <span className="text-sm">{source.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">{source.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full mb-2">
                        <div className="h-full rounded-full" style={{ width: `${source.percentage}%`, backgroundColor: source.color }}></div>
                    </div>
                </div>
            ))}
        </div>
    </OverviewCard>
</div>;
};


