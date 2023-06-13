import React, { useState } from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import skill from "../../public/images/About/gros-.jpg";
import { Slider } from "primereact/slider";

function SectionThree() {
  const [value, setValue] = useState(100);
  const [values, setValues] = useState(75);
  return (
    <div className="">
      <section className="w100   position-relative">
        <Image src={skill} alt="skill" quality={100} className="w100 skill" />
        <div className="skill-two-box bg-light">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins> Nos parcelles biologiques </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100 mb30">
            Nous prenons soin de notre activité biologique
          </h2>
          <p className="w100 lh-lg text-mute f15 light">
            Nous avons pu labelliser les parcelles d’olives de nos fermiers par
            le label de “El Kahina” du projet “Souk El Kahina” de la même
            entité, qui exige une agriculture 100 % biologique et qui vise à
            promouvoir l’économie solidaire et sociale.
          </p>
          <div className="d-flex">
            <h3 className="w100 bold  test-start f22 mb30">
              Superficie totale
            </h3>
            <span className="f22  bold ">100&#37;</span>
          </div>
          <div className=" flex justify-content-center mb30">
            <Slider
              value={value}
              onChange={(e) => setValue(e.value)}
              className="w-14rem"
              step={100}
            />
          </div>
          <div className="d-flex mt30">
            <h3 className="w100 bold  test-start f22 mb30 mt30">
              Nos parcells labellisés
            </h3>
            <span className="f22  bold ">75&#37;</span>
          </div>
          <div className=" flex justify-content-center mb30">
            <Slider
              value={values}
              onChange={(e) => setValues(e.value)}
              className="w-14rem"
              step={75}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionThree;
