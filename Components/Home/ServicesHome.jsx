import React from "react";
import Image from "next/image";
import Top from "../../public/images/Home/top.png";
import Bottom from "../../public/images/Home/bottom.png";
import Wheats from "../../Components/Commun/Icons/Wheats";
import WheatSeck from "../Commun/Icons/WheatSeck";

function ServicesHome() {
  return (
    <div className="ServicesHome">
      <Image src={Top} alt="service" quality={100} className="w100 service" />

      <section className=" bg-dark-black w100 mx-auto ">
        <div className="w100 justifiy-content-centre alignC d-flex">
          <Wheats />

          <span className="bold f20 text-yellow mt50"> Healthy Foods</span>
        </div>
        <h5 className="text-white bold  f45 mt-30 text-center">
          What We Provide For Your Better Health
        </h5>

        <div className="p-4 w100  alignC justifiy-content-center d-flex gap-5 mb30">
          <div className="card w25 ">
            <div className="alignC mt30">
              <WheatSeck />
            </div>

            <div className="text-center text-white f18 texte mt30 mb20">
              Fresh Wheat Sack Food
            </div>
          </div>
          <div className="card w25 ">
            <div className="alignC mt30">
              <WheatSeck />
            </div>
            <div className="text-center text-white f18 texte mt30 mb20">
              Organic Fresh Fruits
            </div>
          </div>
          <div className="card w25 ">
            <div className="alignC mt30">
              <WheatSeck />
            </div>
            <div className="text-center text-white f18 texte mt30 mb20">
              Fresh Wheat Sack Food
            </div>
          </div>
          <div className="card w25 ">
            <div className="alignC mt30">
              <WheatSeck />
            </div>
            <div className="text-center text-white f18 texte mt30 mb20">
              Fresh Wheat Sack Food
            </div>
          </div>
        </div>

        <Image
          src={Bottom}
          alt="service"
          quality={100}
          className="w100 Bottom"
        />
      </section>
    </div>
  );
}

export default ServicesHome;
