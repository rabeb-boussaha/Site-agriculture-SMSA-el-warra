import React from "react";
import Knob from "../Commun/Icons/Knob";

function Statistic() {
  return (
    <div className="statistic">
      <h2 className="big-text ">Statistics</h2>
      <div className=" staticfied container mx-auto w100 d-flex gap-5 alignC">
        <div className="w40 counter-inner ">
          <div className="alignC">
            {" "}
            <Knob />
          </div>

          <p className="f20 bold text-center">Saticfied Clients</p>
        </div>
        <div className="w40 counter-inner ">
          <div className="alignC">
            {" "}
            <Knob />
          </div>
          <p className="f20 bold text-center">Modern Equipment</p>
        </div>
        <div className="w40 counter-inner ">
          <div className="alignC">
            {" "}
            <Knob />
          </div>
          <p className="f20 bold text-center">Expert Team Members</p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
