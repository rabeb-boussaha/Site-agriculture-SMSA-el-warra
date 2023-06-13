import React from "react";
import DetailPistache from "../Components/Pistache/DetailPistache";
import FeedBack from "../Components/HuileOlive/FeedBack";
import Footers from "../Components/Commun/Footers";
import SectionPistache from "../Components/Pistache/SectionPistache";

export default function pistache() {
  return (
    <div className="landingPage">
      <SectionPistache />
      <DetailPistache />
      <FeedBack />
      <Footers />
    </div>
  );
}
