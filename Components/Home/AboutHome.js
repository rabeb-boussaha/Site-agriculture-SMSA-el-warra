import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Image from "next/image";
import Image2 from "../../public/images/Home/pink.png";
import TabView from "../../Components/Home/TabView";
import Image1 from "../../public/images/Home/olivee.png";

function AboutHome() {
  return (
    <section className="AboutHome container w100 ">
      <div className="d-flex justifiy-content-between mx-auto ">
        <div className="w80 ">
          <div className=" d-flex mb30">
            <Wheat />
            <div className="bold f25 mt-3">
              {" "}
              <ins>Qui sommes nous </ins>
            </div>
          </div>
          <h1 className="bold f40 me-5 w100 mb30 ">
            Une SMSA au coeur du tissu agricole tunisien
          </h1>

          <div className="quote-texte mb50">
            <p className="Regular f14 w85 lh-lg  ">
              Nous avons réunis les meilleurs agriculteurs et agricultrices de
              la région pour vous offrir votre huile d’olive extra vierge et vos
              fruits secs préférés biologiques sous la marque KIRAM, capables de
              vous procurer une agréable aventure culinaire..
            </p>
          </div>
          <div className="p-5 mt30">
            <TabView />
          </div>
        </div>
        <div className="w80 d-flex">
          <Image
            src={Image1}
            alt="AboutImg1"
            width={500}
            height={600}
            quality={100}
            className="br17 aboutImg "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
