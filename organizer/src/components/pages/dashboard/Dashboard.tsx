// components/Dashboard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

// Types
interface Feedback {
  id: string;
  username: string;
  avatar: string;
  time: string;
  text: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  source: string;
  sourceIcon: React.ReactNode;
}

interface CardData {
  title: string;
  value: string;
  change: number;
  changeDirection: 'up' | 'down';
}

// Overview Card Component
const OverviewCard: React.FC<CardData & { children?: React.ReactNode }> = ({ title, value, change, changeDirection, children }) => (
  <div className="bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 hover:border-neutral-600/50 transition-colors duration-300">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-neutral-400 text-sm">{title}</h3>
        <p className="text-2xl font-bold mt-1" style={{ color: value.includes('Positive') ? '#4ade80' : value.includes('Issues') ? '#f87171' : '#ffffff' }}>
          {value}
        </p>
      </div>
      <span className={`text-xs py-1 px-2 rounded flex items-center ${changeDirection === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
        <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={changeDirection === 'up' ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
        </svg>
        {change}%
      </span>
    </div>
    {children}
  </div>
);

// Feedback Item Component
const FeedbackItem: React.FC<Feedback> = ({ username, avatar, time, text, sentiment, source, sourceIcon }) => (
  <div className={`border rounded-lg p-3 ${sentiment === 'positive' ? 'border-green-500/20 bg-green-500/10' : sentiment === 'neutral' ? 'border-yellow-500/20 bg-yellow-500/10' : 'border-red-500/20 bg-red-500/10'}`}>
    <div className="flex justify-between items-start">
      <div className="flex items-start">
        <Image
          src={avatar}
          alt={`${username} avatar`}
          width={32}
          height={32}
          className="rounded-full mr-3 border border-neutral-600"
        />
        <div>
          <div className="flex items-center">
            <h4 className="text-sm font-medium">{username}</h4>
            <span className="ml-2 text-xs text-neutral-400">{time}</span>
          </div>
          <p className="text-sm mt-1">{text}</p>
        </div>
      </div>
      <span className={`text-xs py-1 px-2 rounded-full ${sentiment === 'positive' ? 'bg-green-500/20 text-green-400' : sentiment === 'neutral' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
      </span>
    </div>
    <div className="flex items-center text-xs text-neutral-400 mt-2">
      {sourceIcon}
      {source}
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Day');

  const feedbackData: Feedback[] = [
    {
      id: '1',
      username: 'Alex Thompson',
      avatar: '',
      time: '2 mins ago',
      text: 'The keynote speaker was amazing! Learned so much about AI trends.',
      sentiment: 'positive',
      source: 'Twitter',
      sourceIcon: <svg className="h-4 w-4 text-blue-400 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.018 10.018 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63A9.936 9.936 0 0022.46 2.022z" /></svg>
    },
    // Add other feedback items similarly...
  ];

  return (
    <div className="bg-neutral-900 text-white p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Event Sentiment Dashboard</h1>
            <p className="text-neutral-400 mt-1">TechConf 2023 - Live Monitoring</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-sm text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Live Data
            </span>
            <span className="text-sm text-neutral-400">Last update: Just now</span>
            <button className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <OverviewCard title="Overall Sentiment" value="79% Positive" change={12} changeDirection="up">
          <div className="mt-3 h-2 bg-neutral-700 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div className="bg-green-500 h-full" style={{ width: '79%' }}></div>
              <div className="bg-yellow-500 h-full" style={{ width: '15%' }}></div>
              <div className="bg-red-500 h-full" style={{ width: '6%' }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-400">
            <span>79% Positive</span>
            <span>15% Neutral</span>
            <span>6% Negative</span>
          </div>
        </OverviewCard>

        <OverviewCard title="Total Feedback" value="4,287" change={24} changeDirection="up">
          <div className="relative mt-4">
            <div className="flex justify-between text-xs text-neutral-400 mb-1">
              <span>Last hour</span>
              <span>347 feedbacks</span>
            </div>
            <div className="h-10 flex justify-between items-end">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className={`w-1/12 bg-indigo-600 rounded-sm mx-px ${i % 2 === 0 ? 'h-5/6' : 'h-4/6'}`}></div>
              ))}
            </div>
          </div>
        </OverviewCard>

        <OverviewCard title="Active Alerts" value="5 Issues" change={2} changeDirection="down">
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                <span className="text-sm">Audio issues (Critical)</span>
              </div>
              <span className="text-xs text-neutral-400">32 reports</span>
            </div>
            {/* Add other alert items */}
          </div>
        </OverviewCard>

        <OverviewCard title="Top Feedback Source" value="Twitter" change={8} changeDirection="up">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <svg className="h-4 w-4 text-blue-400 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57..." /></svg>
                <span className="text-sm">Twitter</span>
              </div>
              <span className="text-xs text-neutral-400">42%</span>
            </div>
            <div className="h-2 bg-neutral-700 rounded-full mb-2">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }}></div>
            </div>
            {/* Add other sources */}
          </div>
        </OverviewCard>
      </div>

      {/* Sentiment Trend Chart */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 lg:w-2/3 hover:border-neutral-600/50 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Sentiment Trend (Last 24 Hours)</h3>
            <div className="flex space-x-2">
              {['Day', 'Week', 'Month'].map((tab) => (
                <button
                  key={tab}
                  className={`py-1 px-2 text-xs rounded-md ${activeTab === tab ? 'bg-neutral-700 text-white' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-700'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 relative">
            <svg className="absolute left-10 right-0 top-0 h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,80 C50,70 100,60 150,50 C200,40 250,45 300,40 C350,35 400,20 400,20" fill="none" stroke="#4ade80" strokeWidth="2" />
              <path d="M0,120 C50,125 100,130 150,125 C200,120 250,110 300,115 C350,120 400,110 400,110" fill="none" stroke="#facc15" strokeWidth="2" />
              <path d="M0,160 C50,155 100,150 150,160 C200,170 250,160 300,165 C350,170 400,160 400,160" fill="none" stroke="#f87171" strokeWidth="2" />
            </svg>
            {/* Add Y-axis, grid, and X-axis labels */}
          </div>
        </div>

        {/* Sentiment Distribution and Filters */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 hover:border-neutral-600/50 transition-colors duration-300">
            <h3 className="font-medium mb-4">Sentiment Distribution</h3>
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 36 36" className="w-40 h-40">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="100, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f87171" strokeWidth="4" strokeDasharray="6, 100" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#facc15" strokeWidth="4" strokeDasharray="15, 100" strokeDashoffset="-6" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4ade80" strokeWidth="4" strokeDasharray="79, 100" strokeDashoffset="-21" />
                <text x="18" y="20.5" textAnchor="middle" className="text-lg font-medium">79%</text>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="text-center">
                <div className="text-green-400 text-xl font-bold">79%</div>
                <div className="text-xs text-neutral-400">Positive</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-xl font-bold">15%</div>
                <div className="text-xs text-neutral-400">Neutral</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 text-xl font-bold">6%</div>
                <div className="text-xs text-neutral-400">Negative</div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 hover:border-neutral-600/50 transition-colors duration-300">
            <h3 className="font-medium mb-4">Data Filters</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-neutral-400 mb-1">Feedback Source</label>
                <select className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>All Sources</option>
                  <option>Twitter</option>
                  {/* Add other options */}
                </select>
              </div>
              {/* Add other filter inputs */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 text-white py-2 rounded-md text-sm font-medium">Apply Filters</button>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Feedback and Heatmap */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 hover:border-neutral-600/50 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Real-time Feedback Stream</h3>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
          </div>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {feedbackData.map((feedback) => (
              <FeedbackItem key={feedback.id} {...feedback} />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 bg-neutral-800 border border-neutral-700/40 rounded-lg p-4 hover:border-neutral-600/50 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Venue Heatmap - Issue Concentration</h3>
            <select className="bg-neutral-700 border border-neutral-600 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Main Floor</option>
              {/* Add other options */}
            </select>
          </div>
          <div className="relative h-[400px] bg-neutral-900 rounded-lg p-1 overflow-hidden">
            <div className="absolute inset-0 p-4">
              <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
                <div className="col-span-1 row-span-1 bg-yellow-900/40 rounded flex items-center justify-center text-xs text-yellow-400 cursor-pointer hover:bg-yellow-900/60 transition-colors relative">
                  Registration
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                {/* Add other map sections */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-neutral-500 text-right">
        Dashboard analytics inspired by professional event management platforms | Photo by Scott Graham
      </div>
    </div>
  );
};