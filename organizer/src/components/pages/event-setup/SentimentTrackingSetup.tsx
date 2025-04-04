// components/SentimentTrackingSetup.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SentimentTrackingData {
  sentimentTypes: {
    positive: boolean;
    negative: boolean;
    neutral: boolean;
    questions: boolean;
  };
  positiveThreshold: number;
  negativeThreshold: number;
  analysisFrequency: string;
  keywordSets: { name: string; keywords: string[] }[];
  priorityCategories: { rank: number; name: string; color: string }[];
  sentimentModel: string;
  languages: string[];
}

const initialData: SentimentTrackingData = {
  sentimentTypes: {
    positive: true,
    negative: true,
    neutral: true,
    questions: true,
  },
  positiveThreshold: 70,
  negativeThreshold: 30,
  analysisFrequency: 'Real-time (continuous)',
  keywordSets: [
    { name: 'Experience Issues', keywords: ['overcrowded', 'waiting', 'long lines', "can't see"] },
    { name: 'Technical Issues', keywords: ['not working', 'broken', 'glitch', 'error'] },
  ],
  priorityCategories: [
    { rank: 1, name: 'Technical Issues', color: 'red-500' },
    { rank: 2, name: 'Overcrowding Issues', color: 'orange-500' },
    { rank: 3, name: 'Service Complaints', color: 'yellow-500' },
  ],
  sentimentModel: 'standard',
  languages: ['en'],
};

const steps = [
  { id: 1, label: 'Basic Info', completed: true },
  { id: 2, label: 'Tracking Options', active: true },
  { id: 3, label: 'Alert Settings', active: false },
  { id: 4, label: 'Integrations', active: false },
];

export const SentimentTrackingSetup: React.FC = () => {
  const [data, setData] = useState<SentimentTrackingData>(initialData);
  const [newKeyword, setNewKeyword] = useState<{ [key: string]: string }>({});

  const handleSentimentChange = (type: keyof SentimentTrackingData['sentimentTypes']) => {
    setData((prev) => ({
      ...prev,
      sentimentTypes: {
        ...prev.sentimentTypes,
        [type]: !prev.sentimentTypes[type],
      },
    }));
  };

  const handleThresholdChange = (type: 'positive' | 'negative', value: number) => {
    setData((prev) => ({
      ...prev,
      [type === 'positive' ? 'positiveThreshold' : 'negativeThreshold']: value,
    }));
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData((prev) => ({
      ...prev,
      analysisFrequency: e.target.value,
    }));
  };

  const handleKeywordAdd = (setName: string) => {
    if (newKeyword[setName]?.trim()) {
      setData((prev) => ({
        ...prev,
        keywordSets: prev.keywordSets.map((set) =>
          set.name === setName ? { ...set, keywords: [...set.keywords, newKeyword[setName].trim()] } : set
        ),
      }));
      setNewKeyword((prev) => ({ ...prev, [setName]: '' }));
    }
  };

  const handleKeywordRemove = (setName: string, keyword: string) => {
    setData((prev) => ({
      ...prev,
      keywordSets: prev.keywordSets.map((set) =>
        set.name === setName ? { ...set, keywords: set.keywords.filter((k) => k !== keyword) } : set
      ),
    }));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      sentimentModel: e.target.id.replace('model-', ''),
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.type === 'checkbox') {
      setData((prev) => ({
        ...prev,
        languages: prev.languages.includes('en') ? prev.languages.filter((l) => l !== 'en') : [...prev.languages, 'en'],
      }));
    } else {
      const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions, (option) => option.value);
      setData((prev) => ({
        ...prev,
        languages: ['en', ...selectedOptions.filter((lang) => lang !== 'en')],
      }));
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Sentiment Tracking Setup</h2>
          <p className="text-neutral-400">Configure what sentiments and keywords to monitor during your event</p>
        </div>

        {/* Progress steps */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-between md:justify-start md:space-x-4 pb-5 border-b border-neutral-700/30">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center mb-4 md:mb-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white font-medium ${
                    step.completed ? 'bg-green-600' : step.active ? 'bg-indigo-600' : 'bg-neutral-700'
                  }`}
                >
                  {step.completed ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span className={step.active || step.completed ? 'text-white' : 'text-neutral-400'}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sentiment Tracking Preferences */}
            <div className="bg-neutral-800 rounded-xl border border-neutral-700/30 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Sentiment Tracking Preferences</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-3">
                    Sentiment Types to Monitor
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(data.sentimentTypes).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <input
                          id={key}
                          type="checkbox"
                          checked={value}
                          onChange={() => handleSentimentChange(key as keyof typeof data.sentimentTypes)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-600 rounded bg-neutral-700"
                        />
                        <label htmlFor={key} className="ml-2 text-sm text-neutral-300">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace('questions', 'Questions/Inquiries')}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-3">
                    Sentiment Intensity Thresholds
                  </label>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="positive-threshold" className="text-sm text-neutral-400">
                        Positive Threshold
                      </label>
                      <span className="text-sm text-neutral-400">{data.positiveThreshold}%</span>
                    </div>
                    <input
                      type="range"
                      id="positive-threshold"
                      min="0"
                      max="100"
                      value={data.positiveThreshold}
                      onChange={(e) => handleThresholdChange('positive', parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Only track feedback above this positivity score
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="negative-threshold" className="text-sm text-neutral-400">
                        Negative Threshold
                      </label>
                      <span className="text-sm text-neutral-400">{data.negativeThreshold}%</span>
                    </div>
                    <input
                      type="range"
                      id="negative-threshold"
                      min="0"
                      max="100"
                      value={data.negativeThreshold}
                      onChange={(e) => handleThresholdChange('negative', parseInt(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Track feedback below this positivity score as negative
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="analysis-frequency" className="block text-sm font-medium text-neutral-300 mb-2">
                    Analysis Frequency
                  </label>
                  <select
                    id="analysis-frequency"
                    value={data.analysisFrequency}
                    onChange={handleFrequencyChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {['Real-time (continuous)', 'Every 5 minutes', 'Every 15 minutes', 'Every 30 minutes', 'Hourly'].map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                  <p className="text-xs text-neutral-500 mt-1">
                    How often should the system analyze incoming feedback
                  </p>
                </div>
              </div>
            </div>

            
          </div>

         
          
        </div>

        
      </div>
    </div>
  );
};