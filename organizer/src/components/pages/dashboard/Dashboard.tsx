// components/Dashboard.tsx
'use client';

import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
} from 'chart.js';
import { Header } from './components/Header';
import { OverviewCardsList } from './components/OverviewCardsList';
import { FiltersAndCharts } from './components/FiltersAndCharts';
import { RealTimeFeedbackHeatMap } from './components/RealTimeFeedbackHeatMap';
    // Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
);




// Feedback Item Component


export const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Day');

    return (
        <div className=" text-white p-4 md:p-6">
            {/* Header */}
            <Header />      

            {/* Overview Cards */}
            <OverviewCardsList />

            {/* Filters and Charts Section */}
            <FiltersAndCharts />

            {/* Real-time Feedback and Heatmap */}
           <RealTimeFeedbackHeatMap />


        </div>
    );
};