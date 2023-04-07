import React, { useState } from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import skill from "../../public/images/Products/skill-bg-2.jpg";
import { Slider } from "primereact/slider";

function SectionThree() {
  const [value, setValue] = useState(30);
  const [values, setValues] = useState(80);
  return (
    <div className="">
      <section className="w100   position-relative">
        <Image src={skill} alt="skill" quality={100} className="w100 skill" />
        <div className="skill-two-box bg-light">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>Experience </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100 mb30">
            We're Best Agriculture & Organic Firms
          </h2>
          <p className="w100 lh-lg text-mute f15 light">
            Natus error sit voluptatem accusantium doloremque laudatium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt
          </p>
          <div className="d-flex">
            <h3 className="w100 bold  test-start f22 mb30">
              Organic Products{" "}
            </h3>
            <span className="f22  bold ">30&#37;</span>
          </div>
          <div className=" flex justify-content-center mb30">
            <Slider
              value={value}
              onChange={(e) => setValue(e.value)}
              className="w-14rem"
              step={30}
            />
          </div>
          <div className="d-flex mt30">
            <h3 className="w100 bold  test-start f22 mb30 mt30">
              Healthy Foods
            </h3>
            <span className="f22  bold ">89&#37;</span>
          </div>
          <div className=" flex justify-content-center mb30">
            <Slider
              value={values}
              onChange={(e) => setValues(e.value)}
              className="w-14rem"
              step={80}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionThree;
