import React from "react";
import Detail from "../Components/HuileOlive/Detail";
import FeedBack from "../Components/HuileOlive/FeedBack";
import Footers from "../Components/Commun/Footers";
import Olivs from "../Components/HuileOlive/Olivs";

export default function huile() {
  return (
    <div className="landingPage">
      <Olivs />
      <Detail />
      <FeedBack />
      <Footers />
    </div>
  );
}
