import React from "react";
import FeatureCard from "../../components/landing/FeatureCard";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import HowItWorks from "../../components/landing/HowItWorks";
import HowSentiScanWorks from "../../components/landing/HowSentiScanWorks";
import PowerfulUseCases from "../../components/landing/PowerfulUseCases";
import WhatOurClientsSay from "../../components/landing/WhatOurClientsSay";
import TransparentPricing from "../../components/landing/TransparentPricing";
import GetInTouch from "../../components/landing/GetInTouch";
import Footer from "../../components/landing/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCard />
      <HowItWorks />
      <HowSentiScanWorks />
      <PowerfulUseCases />
      <WhatOurClientsSay />
      <TransparentPricing />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default page;
