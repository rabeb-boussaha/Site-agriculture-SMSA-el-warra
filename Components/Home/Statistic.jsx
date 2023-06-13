import React from "react";
import Knob from "../Commun/Icons/Knob";

function Statistic() {
  return (
    <div className="statistic">
      <h2 className="big-text ">Statistiques</h2>
      <div className=" staticfied container mx-auto w100 d-flex gap-5 alignC">
        <div className="w25 counter-inner ">
          <div className="alignC">
            {" "}
            <h4 className="number  text-nowrap"> 17 000 ha</h4>{" "}
          </div>

          <p className="f20  text-center  text-nowrap ">de surface couverte </p>
        </div>
        <div className="w25 counter-inner  ">
          <div className="alignC">
            {" "}
            <div className="number text-nowrap"> 850 000 L </div>
          </div>
          <p className="f17   text-start text-nowrap ">
            Potentiel de production <br></br>d&apos;huile d&apos;olive{" "}
          </p>
        </div>
        <div className="w25 counter-inner ">
          <div className="alignC">
            {" "}
            <h4 className="number"> 727 </h4>
          </div>
          <p className="f20  text-center"> Agriculteurs </p>
        </div>
        <div className="w25 counter-inner ">
          <div className="alignC">
            {" "}
            <h4 className="number">29 ans</h4>
          </div>
          <p className="f20  text-center">d&apos;existence </p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
