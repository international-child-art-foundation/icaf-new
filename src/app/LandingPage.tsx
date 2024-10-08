import React from "react";
import LandingHeader from "../../components/landingPage/LandingHeader";
import WhyICAF from "../../components/landingPage/WhyICAF";
import WhatWeDo from "../../components/landingPage/WhatWeDo";
import Activities from "../../components/landingPage/Activities";
import SpecialProjects from "../../components/landingPage/SpecialProjects";
import Bottom from "../../components/landingPage/Bottom";
import Educational from "../../components/landingPage/Educational";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <WhyICAF />
      <WhatWeDo />
      <Activities />
      <Educational />
      <SpecialProjects />
      <Bottom />
    </>
  )
};

export default LandingPage;