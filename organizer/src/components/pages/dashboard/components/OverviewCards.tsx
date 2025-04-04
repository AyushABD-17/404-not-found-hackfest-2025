// Overview Card Component
export const OverviewCard: React.FC<CardData & { children?: React.ReactNode }> = ({ title, value, change, changeDirection, children }) => (
    <div className="bg-gray-800 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-colors duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-gray-400 text-sm">{title}</h3>
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