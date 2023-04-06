import React from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import offer from "../../public/images/Home/offer-bg-1.jpg";

function OfresHome() {
  return (
    <div className="container  ">
      <section className="ofresHome mx-auto w100 d-flex justify-content-between ">
        <div className="w50 position-relative ">
          <Image
            src={offer}
            alt="offer"
            quality={100}
            className=" w100 offer "
          />
          <p className=" light content-bg-offer p-3">
            {" "}
            35 Years Of Experience in Agriculture{" "}
          </p>
          <div className="experience-box">
            <p className="f20 bold">Experience & Professional Team Members</p>
          </div>
        </div>
        <div className="p-5 w50 postion-relative ms-5">
          <div className=" d-flex text-center">
            <Wheat />
            <div className="bold f25 mt-3 ">
              {" "}
              <ins>What We Offres</ins>
            </div>{" "}
          </div>
          <h1 className="bold f40  mt30 w100 mb30 ">
            People Choose Us For Our Great Offers
          </h1>
          <div className="texte-ofres mt30">
            <p className="Regular f14 w85 lh-lg ">
              Natus error sit voluptatem accusantium doloreue laudatiuec totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OfresHome;
