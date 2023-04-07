import React from "react";
import Image from "next/image";
import Wheat from "../Commun/Icons/Wheat";
import produit from "../../public/images/Products/produit.jpg";

function Projects() {
  return (
    <div className="container  Projects">
      <section className="mx-auto w100 justify-content-center ">
        <div className="d-flex alignC">
          <Wheat />
          <h2 className="f24 bold mt-4 text-center mb30">
            <ins>Project Gallery </ins>
          </h2>
        </div>
        <h1 className="w100 bolder f45 text-center mt30 ">
          We've Done Many Other Projects Let's See Gallery Insights
        </h1>
        <div className="w100 alignC produit d-flex gap-3 mb30 mt30">
          <div className="w20 alignC produite">
            <Image
              src={produit}
              alt="produit"
              quality={100}
              className="w100 produit"
            />
            <div className="middle">
              <div className="text">John Doe</div>
            </div>
          </div>
          <div className="w20 alignC produite ">
            <Image
              src={produit}
              alt="produit"
              quality={100}
              className="w100 produit"
            />
            <div className="middle">
              <div className="text">John Doe</div>
            </div>
          </div>
          <div className="w20 alignC produite">
            <Image
              src={produit}
              alt="produit"
              quality={100}
              className="w100 produit"
            />
            <div className="middle">
              <div className="text">John Doe</div>
            </div>
          </div>
          <div className="w20 alignC produite">
            <Image
              src={produit}
              alt="produit"
              quality={100}
              className="w100 produit"
            />
            <div className="middle">
              <div className="text">John Doe</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
