import React from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import Holive from "../../public/images/ABout/huile-olive-naturelle-bouteille-tasse-table.jpg";

function Or() {
  return (
    <div className="w100 container or ">
      <div className="d-flex  d-flex mx-auto justifiy-content-between ">
        <div className="w50 ">
          <div className=" d-flex text-center">
            <Wheat />
            <div className="bold f25 mt-3 ">
              {" "}
              <ins>Notre or bio !</ins>
            </div>{" "}
          </div>
          <h1 className="bold f40  mt30 w100 mb30 ">
            Notre huile d’olive: Une formule toujours gagnante !
          </h1>
          <p className="w100 lh-lg text-mute f15 light">
            Notre huile d’olive biologique ne cesse de séduire les dégustateurs
            et les amateurs de ce trésor naturel. En effet, elle a gagné des
            médailles d’or dans le cadre de la participation d’industriels
            tunisiens pour lesquels notre société a fourni les olives.
          </p>
        </div>
        <div className="w50">
          <Image
            src={Holive}
            alt="huile"
            quality={100}
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Or;
