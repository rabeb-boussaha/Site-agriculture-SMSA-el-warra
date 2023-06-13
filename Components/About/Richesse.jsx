import React, { useState } from "react";
import Wheat from "../Commun/Icons/Wheat";
import { Knob } from "primereact/knob";

function Richesse() {
  const [value, setValue] = useState(100);
  const [values, setValues] = useState(60);
  const [prod, setProd] = useState(30);
  return (
    <div className="w100  richesse ">
      <section className="  w100  mx-auto">
        <div className="w100">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>Notre Richesse </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100">Une agriculture saine et inclusive</h2>
        </div>
        <div className="w100 d-flex justifiy-content-center alignC mx-auto gap-3  knbox ">
          <div className="w34 teams  text-center ">
            <Knob
              value={value}
              onChange={(e) => setValue(e.value)}
              valueTemplate={"{value}%"}
              valueColor="#eece38"
              rangeColor=" #f8f6ef"
              className="p-2"
            />
            <p className=" f40 bolder me-2 text-mute mt-3 me-2">
              Produits biologiques
            </p>
          </div>
          <div className="w34 teams  text-center  ">
            <Knob
              value={values}
              onChange={(e) => setValues(e.values)}
              valueTemplate={"60%"}
              valueColor="#eece38"
              rangeColor=" #f8f6ef"
              className="p-2"
            />
            <p className=" f40 bolder me-2 text-mute mt-3 me-2">
              Jeunes agriculteurs
            </p>
          </div>
          <div className="w34 teams  text-center">
            <Knob
              value={prod}
              onChange={(e) => setProd(e.prod)}
              valueTemplate={"30%"}
              valueColor="#eece38"
              rangeColor=" #f8f6ef"
              className="p-2"
            />
            <p className=" f40 bolder me-2 text-mute mt-3 me-2 ">
              Femmes agricultrices
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Richesse;
