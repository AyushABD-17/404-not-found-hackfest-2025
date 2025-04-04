import Dashboard from "@/components/pages/dashboard/Dashboard";
import EventSchedule from "@/components/pages/dashboard/EventSchedul";
import LiveUpdates from "@/components/pages/dashboard/LiveUpdates";
import MyFeedback from "@/components/pages/dashboard/MyFeedback";
import ReportAnIssue from "@/components/pages/dashboard/ReportAnIssue";
import SupportHub from "@/components/pages/dashboard/SupportHub";

import React from "react";

const Page = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #5B46E3, #6565F1)", // Adjusted gradient color
      }}
    >
      <Dashboard />
      <LiveUpdates />
      <MyFeedback />
      <ReportAnIssue />
      <EventSchedule />
      <SupportHub />
    </div>
  );
};

export default Page;