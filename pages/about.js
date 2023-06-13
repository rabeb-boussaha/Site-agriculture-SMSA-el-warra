import React from "react";
import SectionOne from "../Components/About/SectionOne";
import SectionTwo from "../Components/About/SectionTwo";
import TunisieJob from "../Components/Home/TunisieJob";
import Statistic from "../Components/Home/Statistic";
import Footers from "../Components/Commun/Footers";
import Richesse from "../Components/About/Richesse";

export default function About() {
  return (
    <div className="landingPage">
      <SectionOne />
      <SectionTwo />
      <Richesse />

      <Statistic />
      <TunisieJob />
      <Footers />
    </div>
  );
}
