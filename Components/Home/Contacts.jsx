import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Contact from "../Commun/Contact";
import MessegeContact from "../Home/MessegeContact";

function Contacts() {
  return (
    <div className="container p-5">
      <section className="w100 d-flex mx-auto justifiy-content-between p-2">
        <div className="w50 ">
          <div className=" d-flex text-center">
            <Wheat />
            <div className="bold f25 mt-3 ">
              {" "}
              <ins>Get In Touch</ins>
            </div>{" "}
          </div>
          <h1 className="bold f40  mt30 w100 mb30 ">
            Need Oragnic Foods! Send Us Message
          </h1>
          <div className="">
            <MessegeContact />
          </div>
        </div>
        <div className="w50 ms-5">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default Contacts;
