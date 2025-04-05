// components/FeedbackStreams.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SentimentData {
  positive: { percentage: number; mentions: number };
  gray: { percentage: number; mentions: number };
  negative: { percentage: number; mentions: number };
}

interface Feedback {
  user: string;
  source: string;
  time: string;
  sentiment: 'Positive' | 'gray' | 'Negative';
  content: string;
  avatar: string;
  eventId: string;
}

interface KeywordTrend {
  keyword: string;
  count: number;
  sentiment: 'Positive' | 'gray' | 'Negative';
}

interface TeamActivity {
  member: string;
  action: string;
  time: string;
  avatar: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
}

interface CreateFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: Omit<Feedback, 'time' | 'avatar'>) => void;
  selectedEventId: string;
}

const initialSentimentData: SentimentData = {
  positive: { percentage: 68, mentions: 1275 },
  gray: { percentage: 24, mentions: 451 },
  negative: { percentage: 8, mentions: 150 },
};

const initialFeedbacks: Feedback[] = [
  {
    user: 'Sarah Johnson',
    source: 'Twitter',
    time: '2 min ago',
    sentiment: 'Positive',
    content: 'The keynote speaker was absolutely incredible! So much valuable information and inspiration. #BestEventEver',
    avatar: '',
    eventId: '1',
  },
  {
    user: 'Michael Chen',
    source: 'In-app Chat',
    time: '5 min ago',
    sentiment: 'gray',
    content: "When does the next workshop start? I can't find it on the schedule.",
    avatar: '',
    eventId: '1',
  },
  {
    user: 'Amanda Torres',
    source: 'Survey Response',
    time: '10 min ago',
    sentiment: 'Negative',
    content: 'The line for the food trucks is way too long. People are missing sessions because of the wait times.',
    avatar: '',
    eventId: '2',
  },
  {
    user: 'David Wilson',
    source: 'Instagram',
    time: '12 min ago',
    sentiment: 'Positive',
    content: 'Loving the networking opportunities at this event! Made some incredible connections today. #NetworkingWin',
    avatar: '',
    eventId: '2',
  },
  {
    user: 'Jessica Lee',
    source: 'LinkedIn',
    time: '15 min ago',
    sentiment: 'Positive',
    content: 'Just attended an amazing panel on emerging AI technologies. The experts shared invaluable insights! #TechConference',
    avatar: '',
    eventId: '3',
  },
];

const initialKeywordTrends: KeywordTrend[] = [
  { keyword: 'Great speakers', count: 78, sentiment: 'Positive' },
  { keyword: 'Networking', count: 65, sentiment: 'Positive' },
  { keyword: 'Long lines', count: 42, sentiment: 'Negative' },
  { keyword: 'Informative', count: 38, sentiment: 'Positive' },
  { keyword: 'Schedule', count: 31, sentiment: 'gray' },
  { keyword: 'WiFi issues', count: 28, sentiment: 'Negative' },
  { keyword: 'Amazing venue', count: 24, sentiment: 'Positive' },
  { keyword: 'Parking', count: 19, sentiment: 'Negative' },
  { keyword: 'Registration', count: 15, sentiment: 'gray' },
];

const initialTeamActivity: TeamActivity[] = [
  {
    member: 'Alex Thompson',
    action: 'responded to a negative comment about audio issues in Hall B',
    time: '5 minutes ago',
    avatar: '',
  },
  {
    member: 'Michelle Parker',
    action: 'created a new alert for trending WiFi complaints',
    time: '12 minutes ago',
    avatar: '',
  },
  {
    member: 'James Robinson',
    action: 'resolved 8 feedback items related to seating arrangements',
    time: '28 minutes ago',
    avatar: '',
  },
];

const mockEvents: Event[] = [
  { id: '1', name: 'Tech Conference 2025', date: 'Mar 15-17, 2025' },
  { id: '2', name: 'Developer Summit', date: 'Apr 20-22, 2025' },
  { id: '3', name: 'AI Symposium', date: 'May 10-12, 2025' },
];

const CreateFeedbackModal: React.FC<CreateFeedbackModalProps> = ({ isOpen, onClose, onSubmit, selectedEventId }) => {
  const [formData, setFormData] = useState({
    user: '',
    source: 'In-app Chat',
    content: '',
    sentiment: 'Positive' as 'Positive' | 'gray' | 'Negative',
    eventId: selectedEventId,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData({
      user: '',
      source: 'In-app Chat',
      content: '',
      sentiment: 'Positive',
      eventId: selectedEventId,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md border border-gray-700/30">
        <h3 className="text-xl font-semibold mb-4">Create New Feedback</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              value={formData.user}
              onChange={(e) => setFormData({ ...formData, user: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Source</label>
            <select
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="In-app Chat">In-app Chat</option>
              <option value="Survey Response">Survey Response</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sentiment</label>
            <select
              value={formData.sentiment}
              onChange={(e) => setFormData({ ...formData, sentiment: e.target.value as 'Positive' | 'gray' | 'Negative' })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="Positive">Positive</option>
              <option value="gray">Neutral</option>
              <option value="Negative">Negative</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Feedback Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 h-32"
              required
            />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm transition-colors"
            >
              Create Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const FeedbackStreams: React.FC = () => {
  const router = useRouter();
  const [sentimentData] = useState<SentimentData>(initialSentimentData);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);
  const [keywordTrends] = useState<KeywordTrend[]>(initialKeywordTrends);
  const [teamActivity] = useState<TeamActivity[]>(initialTeamActivity);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(mockEvents[0]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const sentimentColors = {
    Positive: 'green-500',
    gray: 'blue-500',
    Negative: 'red-500',
  };

  const handleCreateFeedback = (newFeedback: Omit<Feedback, 'time' | 'avatar' | 'eventId'>) => {
    const feedback: Feedback = {
      ...newFeedback,
      time: '1 min ago',
      avatar: '',
      eventId: selectedEvent.id,
    };
    setFeedbacks([feedback, ...feedbacks]);
  };

  const filteredFeedbacks = feedbacks.filter(
    (feedback) =>
      feedback.eventId === selectedEvent.id &&
      (searchQuery
        ? feedback.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          feedback.user.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
  );

  return (
    <section className="min-h-screen text-white p-4 md:p-6 lg:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 border-b border-gray-700/30 pb-3">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Feedback Streams</h2>
            <div className="relative">
              <select
                value={selectedEvent.id}
                onChange={(e) => setSelectedEvent(mockEvents.find(event => event.id === e.target.value) || mockEvents[0])}
                className="bg-gray-800 text-white border border-gray-700/30 rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                {mockEvents.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push('/feedback/form-builder')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm transition-colors flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Feedback Form
          </button>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold">Real-time Sentiment Analysis</h3>
              <p className="text-gray-400">Monitor feedback across multiple platforms in real-time</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors border border-gray-700/30 hover:border-gray-600/40">
                <span className="mr-2">⏱️</span>Last 24 hours
              </button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm transition-colors">
                <span className="mr-2">⬇️</span>Export Report
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(sentimentData).map(([type, data]) => (
              <div
                key={type}
                className="bg-gray-800/80 p-4 rounded-xl border border-gray-700/30 hover:border-gray-600/40 transition-all"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Feedback</h4>
                  <span className={`text-${sentimentColors[type as keyof typeof sentimentColors]}-400 font-bold`}>
                    {data.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700/50 h-3 rounded-full overflow-hidden">
                  <div
                    className={`bg-${sentimentColors[type as keyof typeof sentimentColors]}-500 h-full rounded-full`}
                    style={{ width: `${data.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{data.mentions} mentions in the last 24 hours</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Filter by Source</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 bg-gray-800 rounded-lg text-sm border border-gray-700/30 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {[
              { icon: '🐦', label: 'Twitter', active: true },
              { icon: '📸', label: 'Instagram', active: false },
              { icon: '💼', label: 'LinkedIn', active: false },
              { icon: '💬', label: 'In-app Chat', active: false },
              { icon: '📊', label: 'Surveys', active: false },
              { icon: '⭐', label: 'Reviews', active: false },
            ].map((source) => (
              <button
                key={source.label}
                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors border ${
                  source.active
                    ? 'bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/30 hover:border-indigo-500/50'
                    : 'bg-gray-800 hover:bg-gray-700 border-gray-700/30 hover:border-gray-600/40'
                }`}
              >
                <span className="text-xl mb-1">{source.icon}</span>
                <span className="text-xs">{source.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Live Feedback Stream</h3>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm text-green-400">Live updating</span>
              </div>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredFeedbacks.length > 0 ? (
                filteredFeedbacks.map((feedback, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800/80 p-4 rounded-xl border-l-4 border-${
                      sentimentColors[feedback.sentiment]
                    } border border-gray-700/30`}
                  >
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <Image
                          src={feedback.avatar}
                          alt="User avatar"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <h4 className="font-medium">{feedback.user}</h4>
                          <div className="flex items-center">
                            <span className="text-blue-400 text-xs">{feedback.source}</span>
                            <span className="mx-1 text-gray-500">•</span>
                            <span className="text-gray-500 text-xs">{feedback.time}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 bg-${sentimentColors[feedback.sentiment]}/20 text-${
                          sentimentColors[feedback.sentiment]
                        } text-xs rounded-full`}
                      >
                        {feedback.sentiment}
                      </div>
                    </div>
                    <p className="text-sm mt-2">{feedback.content}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No feedback found for this event.
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-4">Keyword Trends</h3>
              <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700/30">
                <div className="flex flex-wrap gap-2">
                  {keywordTrends.map((trend) => (
                    <span
                      key={trend.keyword}
                      className={`px-3 py-1.5 bg-${sentimentColors[trend.sentiment]}/20 text-${
                        sentimentColors[trend.sentiment]
                      } rounded-full text-sm`}
                    >
                      {trend.keyword} ({trend.count})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-4">Team Response Stats</h3>
              <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700/30">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Response Rate</span>
                      <span className="text-sm font-medium text-green-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Avg. Response Time</span>
                      <span className="text-sm font-medium text-yellow-400">14 min</span>
                    </div>
                    <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Resolution Rate</span>
                      <span className="text-sm font-medium text-green-400">87%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '87%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Team Activity</h3>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
              </div>
              <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700/30">
                <div className="space-y-4">
                  {teamActivity.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <Image
                        src={activity.avatar}
                        alt="Team member avatar"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full mr-3 mt-1"
                      />
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">{activity.member}</span> {activity.action}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Featured Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  '',
                title: 'Real-time Monitoring',
                description:
                  'Track sentiment shifts as they happen with our powerful real-time analysis tools to address issues before they escalate.',
              },
              {
                image:
                  '',
                title: 'Multi-channel Analysis',
                description:
                  'Unify feedback from social media, surveys, and in-person interactions for a comprehensive view of attendee sentiment.',
              },
              {
                image:
                  '',
                title: 'AI-Powered Insights',
                description:
                  'Leverage advanced machine learning to identify patterns and trends that would be impossible to detect manually.',
              },
            ].map((insight) => (
              <div
                key={insight.title}
                className="bg-gray-800/80 p-5 rounded-xl border border-gray-700/30 hover:border-gray-600/40 transition-all"
              >
                <div className="flex mb-4">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    width={1080}
                    height={720}
                    className="w-full h-48 object-cover rounded-lg"
                    
                  />
                </div>
                <h4 className="font-medium text-lg mb-2">{insight.title}</h4>
                <p className="text-gray-400 text-sm">{insight.description}</p>
                <button className="mt-4 text-indigo-400 text-sm hover:text-indigo-300 flex items-center">
                  Learn more <span className="ml-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateFeedbackModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateFeedback}
        selectedEventId={selectedEvent.id}
      />
    </section>
  );
};