import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Image from "next/image";
import soins from "../../public/images/About/culture.png";
import intrants from "../../public/images/About/intrants.png";
import trasnport from "../../public/images/About/transport.png";
import transformation from "../../public/images/About/transformation.png";
import stockage from "../../public/images/About/stockage.png";
import distribution from "../../public/images/About/distribution.png";

function TwoSection() {
  return (
    <div className="products-section-two w100">
      <section className=" d-flex container mx-auto  justify-content-between w100">
        <div className="w50">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>Notre certification biologique </ins>
            </h2>
          </div>
          <h2 className="32 bolder w90 p-2">
            Notre chemin vers un monde 100% bio !
          </h2>
        </div>
        <div className="w50">
          <p className=" text-mute f20 w100 lh-lg">
            Dans le cadre de la valorisation de notre culture 100% biologique,
            les efforts des membres de la société mutuelle épaulés par ses
            différents partenaires techniques et financiers, se sont réunis pour
            la mise en place d’une certification biologique des parcelles
            d’olives, d’amandes et de pistaches, sur la région couverte par
            l’entité.
          </p>
        </div>
      </section>

      <div className="w100 d-flex  mx-auto  justify-content-center pt-5  gap-4">
        <div class="w25">
          <div class="service-box text-center mb-70 ">
            <div class="">
              <Image
                src={soins}
                alt="culture"
                width={100}
                height={100}
                quality={100}
                className=" "
              />
            </div>
            <div class="text">
              <p class="title  text-center   mt-4">Pratique de culture</p>
            </div>
          </div>
        </div>

        <div class="w25">
          <div class="service-box text-center mb-70 wow fadeInUp">
            <div class="">
              <Image
                src={trasnport}
                alt="transport"
                width={100}
                height={100}
                quality={100}
                className=" "
              />
            </div>
            <div class="text">
              <p class="title  text-center  mt-4">Transport</p>
            </div>
          </div>
        </div>
        <div class="w25">
          <div class="service-box text-center mb-70 wow fadeInUp">
            <div class="">
              <Image
                src={transformation}
                alt="trasnsformation "
                width={100}
                height={100}
                quality={100}
                className=" "
              />
            </div>
            <div class="text">
              <p class="title  text-center  mt-4">Transformation </p>
            </div>
          </div>
        </div>
        <div class="w25">
          <div class="service-box text-center mb-70 wow fadeInUp">
            <div class="">
              <Image
                src={stockage}
                alt="stockage "
                width={100}
                height={100}
                quality={100}
                className=" "
              />
            </div>
            <div class="text">
              <p class="title  text-center f20 mt-4">Stockage</p>
            </div>
          </div>
        </div>
        <div class="w25">
          <div class="service-box text-center mb-70 wow fadeInUp">
            <div class="">
              <Image
                src={distribution}
                alt="distribution "
                width={100}
                height={100}
                quality={100}
                className=" "
              />
            </div>
            <div class="text">
              <p class="title  text-center f20 mt-4">Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoSection;
