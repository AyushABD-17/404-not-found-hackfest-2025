
// Types
interface Feedback {
    id: string;
    username: string;
    avatar: string;
    time: string;
    text: string;
    sentiment: 'positive' | 'gray' | 'negative';
    source: string;
    sourceIcon: React.ReactNode;
}

interface CardData {
    title: string;
    value: string;
    change: number;
    changeDirection: 'up' | 'down';
}

interface Alert {
    severity: 'red' | 'orange' | 'yellow';
    text: string;
    reports: number;
}

interface Source {
    name: string;
    percentage: number;
    color: string;
    icon: React.ReactNode;
}

interface MapSection {
    name: string;
    color: string;
    colSpan: number;
    rowSpan: number;
    hasPulse?: boolean;
}

interface Issue {
    location: string;
    severity: string;
    description: string;
}