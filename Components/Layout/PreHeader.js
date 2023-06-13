import React from "react";
import Location from "../Commun/Icons/Location";
import Mail from "../Commun/Icons/Mail";
import Phone from "../Commun/Icons/Phone";
import Image from "next/image";
import logoFinal from "../../public/images/logofinal.png";
const PreHeader = () => {
  return (
    <div className=" pre-header  bg-white container d-flex justify-content-start alignC w100 gap-5 ">
      <div className="w20 logo-SMSA">
        <Image src={logoFinal} alt="logofinal" quality={100} className="logo" />
      </div>
      <div className="w34 locations">
        <div className="d-flex">
          <Location />
          <h5 className="bold f20 pointer   px-2 alignC ">Adresse</h5>
        </div>
        <p className="sous-street">
          EL Waraa Sidi Ali Ben Aoun, Sidi Bouzid, Tunisie{" "}
        </p>
      </div>
      <div className="w34 mail ">
        <div className="d-flex ">
          <Mail />
          <h5 className="bold f20 pointer  px-2 alignC">Email </h5>
        </div>
        <p className="sous-street">info@smsa-waara.com</p>
      </div>
    </div>
  );
};

export default PreHeader;
