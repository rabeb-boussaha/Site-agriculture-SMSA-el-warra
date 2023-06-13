import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import MessegeContact from "../Home/MessegeContact";

function Maps() {
  return (
    <div className=" w100">
      <div className=" ">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Tunisie+/Sidi+Ali+Ben+Aoun/@34.8009431,9.1529916,11z/data=!4m6!3m5!1s0x12f8d48c5966bc89:0x682acbe48ef8758e!8m2!3d34.8264676!4d9.1456153!16s%2Fg%2F1239jc3t?entry=ttu"
          width="1700"
          height="500"
          frameborder="0"
          allowfullscreen=""></iframe>
      </div>
      <div className="  ">
        <div className="  aidez justify-content-center align-items-center contactez ">
          <div className=" d-flex text-center">
            <Wheat />
            <div className="bold f25 mt-3 ">
              {" "}
              <ins>Envoyez nous un message </ins>
            </div>{" "}
          </div>
          <h1 className="bold f40  mt30 w100 mb30 ">
            Comment pouvons nous vous aider ?
          </h1>
          <div className="p-5">
            <MessegeContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
