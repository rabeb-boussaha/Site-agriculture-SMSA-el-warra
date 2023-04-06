import React from "react";
import Image from "next/image";
import Cover1 from "../../public/images/About/page-bg-1.jpg";
import Cover2 from "../../public/images/About/page-bg-after.png";
import Wheat from "../Commun/Icons/Wheat";

function SectionOne() {
  return (
    <div className="SectionOne ">
      <section className="position-relative">
        <Image src={Cover1} alt="Cover1" quality={100} className="Cover1" />
        <Image src={Cover2} alt="Cover2" quality={100} className="Cover2" />
        <div className="Page-title">
          <h1 className="f45 bolder text-white"> About Us</h1>
        </div>
        <div className="Bread-Crumb ">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li className="breadcrumb-item text-white">Home</li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
        <div className="Brand-card ">
          <div className="alignC mb30">
            <Wheat />
          </div>

          <h2 className="text-center bolder f40">SMSA EL Waraa </h2>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;
