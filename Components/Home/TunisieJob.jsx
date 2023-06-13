import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Image from "next/image";
import logo1 from "../../public/images/Products/logo1.png";
import logo2 from "../../public/images/Products/logo2.png";
import logo3 from "../../public/images/Products/logo3.png";
import logoA from "../../public/images/Home/logoA.png";
import logoS from "../../public/images/Home/logoS.png";
import logoW from "../../public/images/Products/logo5.png";

export default function TunisieJob() {
  return (
    <div className="w100   tunisJobs ">
      <div className="w100 justify-centant-center alignC py-5">
        <div className="d-flex mb30">
          <h1 className="f30 support  bold mt-4 text-center ">
            <ins>Ils continuent à nous supporter </ins>
          </h1>
        </div>
      </div>
      <section className="d-flex justify-centant-center alignC mx-auto w100  gap-5">
        <div className="w50">
          <Image
            src={logo1}
            alt="logo1"
            width={200}
            height={100}
            quality={100}
            className="w100"
          />
        </div>
        <div className="w50">
          <Image
            src={logo2}
            alt="logo1"
            width={600}
            height={100}
            quality={100}
            className="w100"
          />
        </div>
        <div className="w30">
          <Image
            src={logo3}
            alt="logo1"
            width={200}
            height={200}
            quality={100}
            className="w100 p-2"
          />
        </div>
        <div className="w30">
          <Image
            src={logoA}
            alt="logo1"
            width={500}
            height={100}
            quality={100}
            className="w100"
          />
        </div>
        <div className="w30">
          <Image
            src={logoS}
            alt="logo1"
            width={400}
            height={200}
            quality={100}
            className="w100 p-1"
          />
        </div>
        <div className="w30">
          <Image
            src={logoW}
            alt="logo1"
            width={500}
            height={100}
            quality={100}
            className="w100"
          />
        </div>
      </section>
    </div>
  );
}
