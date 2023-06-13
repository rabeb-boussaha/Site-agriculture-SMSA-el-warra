import React from "react";
import Image from "next/image";
import Cover1 from "../../public/images/About/page-bg-1.jpg";
import Cover2 from "../../public/images/About/page-bg-after.png";
import logoFinal from "../../public/images/logofinal.png";

function SectionPistache() {
  return (
    <div className="Products-Section-one">
      <section className="position-relative">
        <Image src={Cover1} alt="Cover1" quality={100} className="Cover1" />
        <Image src={Cover2} alt="Cover2" quality={100} className="Cover2" />
        <div className="Page-title">
          <h1 className="f40 bolder text-white">PISTACHES BIOLOGIQUES</h1>
        </div>
        <div className="Bread-Crumb ">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li className="breadcrumb-item text-white">Accueil</li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page">
                Pistache Biologique
              </li>
            </ol>
          </nav>
        </div>
        <div className="Brand-card ">
          <div className="alignC mb30">
            <Image
              src={logoFinal}
              alt="logofinal"
              quality={100}
              className="logof"
            />
          </div>

          <h2 className="text-center bolder f30">SMSA EL WARAA </h2>
        </div>
      </section>
    </div>
  );
}

export default SectionPistache;
