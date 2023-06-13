import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Image from "next/image";

import women from "../../public/images/About/Old_woman.jpg";

function DetailContact() {
  return (
    <div className="container">
      <section className="section-two d-flex w100 justifiy-content-between mx-auto">
        <div className="w50">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>Contactez nous</ins>
            </h2>
          </div>
          <h2 className="32 bolder w90">
            Nous serons ravis de connecter avec vous
          </h2>
          <div className="w100"></div>
        </div>

        <div className="w50">
          <Image
            src={women}
            alt="Cover3"
            quality={100}
            width={400}
            height={400}
            className="women "
          />
        </div>
      </section>
    </div>
  );
}

export default DetailContact;
