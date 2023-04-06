import React from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import img1 from "../../public/images/About/img-21.jpg";

function Section3() {
  return (
    <div className="section-three  mx-auto bg-light ">
      <section className="w100  ">
        <div className="Titre-section d-flex mb30 ">
          <Wheat />
          <h2 className="f24 bold mt-4">
            <ins>Our Farmers </ins>
          </h2>
        </div>
        <h2 className="32 bolder w100">
          We Have Lot’s Of Experience Team Members
        </h2>
        <div className="w100 mx-auto justify-content-center alignC mb30 mt30 gap-5 temas">
          <div className="w20 teams p-3">
            <Image
              src={img1}
              alt="Cover3"
              quality={100}
              width={200}
              height={50}
              className="img1  "
            />
            <p className="f20 bold text-center mt-2 ">Dennis P. Russell</p>
            <p className="f15 text-mute text-center">Food Farmers</p>
          </div>
          <div className="w20 teams p-3">
            <Image
              src={img1}
              alt="Cover3"
              quality={100}
              width={200}
              height={50}
              className="img1  "
            />
            <p className="f20 bold text-center mt-2">Dennis P. Russell</p>
            <p className="f15 text-mute text-center">Food Farmers</p>
          </div>
          <div className="w20 teams p-3">
            <Image
              src={img1}
              alt="Cover3"
              quality={100}
              width={200}
              height={50}
              className="img1  "
            />
            <p className="f20 bold text-center mt-2">Dennis P. Russell</p>
            <p className="f15 text-mute text-center">Food Farmers</p>
          </div>
          <div className="w20 teams p-3">
            <Image
              src={img1}
              alt="Cover3"
              quality={100}
              width={200}
              height={50}
              className="img1  "
            />
            <p className="f20 bold text-center mt-2">Dennis P. Russell</p>
            <p className="f15 text-mute text-center">Food Farmers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section3;
