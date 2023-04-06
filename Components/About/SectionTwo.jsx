import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import CheckBox from "../Commun/Icons/CheckBox";
import Image from "next/image";
import Cover3 from "../../public/images/About/4.jpg";
import CustomButton from "../Commun/CustomButton";

function SectionTwo() {
  return (
    <div className=" container">
      <section className="section-two d-flex w100 justifiy-content-between mx-auto">
        <div className="w50">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>About Us </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100">
            We're Best Agriculture & Organic Firms
          </h2>
          <p className="f16 text-mute mt30 lh-lg w100">
            Natus error sit voluptatem accusantium doloremque laudatium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt
          </p>
          <div className="single-choose-item mb30 d-flex">
            <CheckBox />
            <h5 className="f20 bold ms-3 mt-1 w100">100% Natural Foods</h5>
          </div>
          <div className="single-choose-item mb30 d-flex">
            <CheckBox />
            <h5 className="f20 bold ms-3 mt-1 w100">Modern Euipments</h5>
          </div>

          <CustomButton
            text="Learn Mors Us"
            variant="orange"
            className=" wm100"
          />
        </div>
        <div className="w50 ">
          <Image
            src={Cover3}
            alt="Cover3"
            quality={100}
            width={500}
            height={500}
            className="Cover3 "
          />
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
