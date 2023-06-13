import React from "react";
import Experience from "../Components/Products/Experience";
import OneSection from "../Components/Products/OneSection";
import Projects from "../Components/Products/Projects";
import SectionThree from "../Components/Products/SectionThree";
import TwoSection from "../Components/Products/TwoSection";
import Or from "../Components/Products/Or";
import TunisieJob from "../Components/Home/TunisieJob";
import Footers from "../Components/Commun/Footers";

function products() {
  return (
    <div className="landingPage">
      <OneSection />
      <TwoSection />
      <Experience />
      <SectionThree />
      <Or />
      <TunisieJob />
      <Footers />
    </div>
  );
}

export default products;
