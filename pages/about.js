import React from "react";
import SectionOne from "../Components/About/SectionOne";
import SectionTwo from "../Components/About/SectionTwo";
import Section3 from "../Components/About/Section3";
import Statistic from "../Components/Home/Statistic";
import Footers from "../Components/Commun/Footers";

export default function About() {
  return (
    <div className="landingPage">
      <SectionOne />
      <SectionTwo />
      <Section3 />
      <Statistic />
      <Footers />
    </div>
  );
}
