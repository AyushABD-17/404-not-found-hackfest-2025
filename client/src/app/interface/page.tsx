"use client";
import Analytics from "@/components/interface/Analytics";
import Dashboard from "@/components/interface/Dashboard";
import Feedback from "@/components/interface/Feedback";
import LiveQA from "@/components/interface/LiveQA";
import Notifications from "@/components/interface/Notifications";
import Profile from "@/components/interface/Profile";
import Settings from "@/components/interface/Settings";


import React from "react";

const page = () => {
  return (
    <div>
      <Dashboard />
      <Feedback />
      <LiveQA/>
      <Notifications/>
      <Profile/>
      <Analytics/>
      <Settings/>
      
      
    </div>
  );
};

export default page;
