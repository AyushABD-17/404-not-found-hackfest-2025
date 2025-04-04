import Image from "next/image";

export const FeedbackItem: React.FC<Feedback> = ({ username, avatar, time, text, sentiment, source, sourceIcon }) => (
    <div className={`border rounded-lg p-3 ${sentiment === 'positive' ? 'border-green-500/20 bg-green-500/10' : sentiment === 'gray' ? 'border-yellow-500/20 bg-yellow-500/10' : 'border-red-500/20 bg-red-500/10'}`}>
        <div className="flex justify-between items-start">
            <div className="flex items-start">
                <Image
                    src={avatar}
                    alt={`${username} avatar`}
                    width={32}
                    height={32}
                    className="rounded-full mr-3 border border-gray-600"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100'; }}
                />
                <div>
                    <div className="flex items-center">
                        <h4 className="text-sm font-medium">{username}</h4>
                        <span className="ml-2 text-xs text-gray-400">{time}</span>
                    </div>
                    <p className="text-sm mt-1">{text}</p>
                </div>
            </div>
            <span className={`text-xs py-1 px-2 rounded-full ${sentiment === 'positive' ? 'bg-green-500/20 text-green-400' : sentiment === 'gray' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </span>
        </div>
        <div className="flex items-center text-xs text-gray-400 mt-2">
            {sourceIcon}
            {source}
        </div>
    </div>
);