import React from "react";
import Location from "../Commun/Icons/Location";
import Mail from "../Commun/Icons/Mail";
import Phone from "../Commun/Icons/Phone";
import Image from "next/image";
import logo from "../../public/images/Logo.png";
const PreHeader = () => {
  return (
    <div className=" pre-header  bg-white container d-flex justify-content-start alignC w100 gap-5 ">
      <div className="w20 logo-SMSA">
        <Image src={logo} alt="logo" quality={100} className=" logoHeader " />
      </div>
      <div className="w20 locations">
        <div className="d-flex">
          <Location />
          <h5 className="bold f20 pointer   px-2 alignC ">Loaction</h5>
        </div>
        <p className="sous-street">55 main street, New York</p>
      </div>
      <div className="w20 mail ">
        <div className="d-flex ">
          <Mail />
          <h5 className="bold f20 pointer  px-2 alignC">Email Us</h5>
        </div>
        <p className="sous-street">ELWARRA.info@gmail.com</p>
      </div>
      <div className="w20 contacte">
        <div className="d-flex ">
          <Phone />
          <h5 className="bold f20 pointer px-2  alignC">Phone Us</h5>{" "}
        </div>
        <p className="sous-street">+216 29 790 820</p>
      </div>
    </div>
  );
};

export default PreHeader;
