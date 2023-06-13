import React from "react";
import Amond from "../Components/Amonds/Amond";
import FeedBack from "../Components/HuileOlive/FeedBack";
import SectionAmond from "../Components/Amonds/SectionAmond";
import Footers from "../Components/Commun/Footers";

export default function Amonds() {
  return (
    <div className="landingPage">
      <SectionAmond />
      <Amond />
      <FeedBack />
      <Footers />
    </div>
  );
}
