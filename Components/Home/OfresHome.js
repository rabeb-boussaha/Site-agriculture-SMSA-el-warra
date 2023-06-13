import React, { useState } from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import offer from "../../public/images/Home/main.jpg";
import { Knob } from "primereact/knob";

function OfresHome() {
  const [value, setValue] = useState(95);
  const [values, setValues] = useState(90);

  return (
    <div className="container  ">
      <section className="ofresHome mx-auto w100 d-flex justify-content-between ">
        <div className="w50 position-relative ">
          <Image
            src={offer}
            alt="offer"
            quality={100}
            className=" offer w100 "
          />
          <p className=" light content-bg-offer p-3">
            {" "}
            29 ans d&apos;expérience en agriculture
          </p>
          <div className="experience-box">
            <p className="f20 bold">Le secret de notre expertise </p>
          </div>
        </div>
        <div className="p-5 w50 postion-relative ms-5">
          <div className=" d-flex text-center">
            <Wheat />
            <div className="bold f25 mt-3 ">
              {" "}
              <ins>Pourquoi nous choisir </ins>
            </div>{" "}
          </div>
          <h1 className="bold f40  mt30 w100 mb30 ">
            Nous prenons soin de votre bien être
          </h1>
          <div className="texte-ofres mt30">
            <p className="Regular f14 w85 lh-lg ">
              Nous veillons à ce que les normes d&apos;hygiène dans toutes les
              étapes de la chaîne de valeur soient respectées, et que le maximum
              de valeurs nutritives des aliments soit préservé.
            </p>
            <div className=" d-flex  w100 gap-5 mt-5">
              <div className="counter-inner w50 text-center  ">
                <Knob
                  value={value}
                  onChange={(e) => setValue(value)}
                  step={95}
                  valueTemplate={"{value}%"}
                  valueColor="#eece38"
                  rangeColor=" #f8f6ef"
                />

                <p className="f20  text-center bolder">
                  Satisfaction sur les produits livrés
                </p>
              </div>

              <div className="counter-inner w50 text-center">
                <Knob
                  value={values}
                  onChange={(e) => setValues(values)}
                  step={90}
                  valueTemplate={"90%"}
                  valueColor="#eece38"
                  rangeColor=" #f8f6ef"
                />
                <div className="">
                  <p className="f20 bolder">Contrôle de la chaîne de valeur </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfresHome;
