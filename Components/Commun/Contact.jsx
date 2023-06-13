import React from "react";
import Location from "../Commun/Icons/Location";
import Mail from "../Commun/Icons/Mail";
import Phone from "../Commun/Icons/Phone";

function Contact() {
  return (
    <div className="information-box br17 p-5">
      <h5 className="f40 bolder text-center">Contactez nous</h5>
      <p className="f20 light">Nous serons ravis de connecter avec vous</p>

      <div className="w100 locations">
        <div className="d-flex">
          <Location />
          <p className=" contact-icon pointer   px-3 alignC mt-3 ">Adresse :</p>
        </div>
        <p className="bold f20   mt-3 mx-3 ">
          EL Waraa Sidi Ali Ben Aoun, Sidi Bouzid, Tunisie
        </p>
      </div>
      <div className="w100 mail ">
        <div className="d-flex ">
          <Mail />
          <h5 className="pointer contact-icon px-3 alignC mt-3">Email:</h5>
        </div>
        <p className="bold f20 mt-3 mx-3 ">info@smsa-waara.com</p>
      </div>
      <div className="w100 contacte">
        <div className="d-flex ">
          <Phone />
          <h5 className=" pointer px-3 contact-icon  alignC mt-3">
            Télèphone :
          </h5>{" "}
        </div>
        <p className="bold f20  mt-3 mx-3 ">+216 24245963</p>
      </div>
    </div>
  );
}

export default Contact;
