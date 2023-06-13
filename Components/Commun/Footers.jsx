import React from "react";
import Image from "next/image";
import Top from "../../public/images/Home/top.png";
import Facebook from "../Commun/Icons/Facebook";
import Instagram from "../Commun/Icons/Instagram";
import Twitter from "../Commun/Icons/Twitter";

function Footers() {
  return (
    <div className=" ">
      <Image src={Top} alt="service" quality={100} className="w100 Top mt-5" />

      <div className="w100 bg-dark-black  d-flex justifiy-content-center Footer">
        <div className="w50">
          <h5 className="text-white mt30">A PROPOS</h5>
          <p className="f10 light text-white  w80 mb30 mt30 lg-base ">
            “Nous avons réuni les meilleurs agriculteurs et agricultrices de la
            région pour vous offrir votre huile d&apos;olive extra vierge et vos
            fruits secs préférés biologiques sous la marque KIRAM, capables de
            vous procurer une agréable aventure culinaire. “
          </p>
        </div>
        <div className="w50 mt30">
          <h5 className="text-white">NOS PRODUITS BIOLOGIQUES</h5>
          <div class="f10 light text-white pt-5 lg-base ">
            <ul>
              <li>
                <a href="#">HUILE D&apos;OLIVE BIOLOGIQUE</a>
              </li>
              <li>
                <a href="#">AMANDES BIOLOGIQUES</a>
              </li>
              <li>
                <a href="#">PISTACHES BIOLOGIQUES</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w100  justifiy-content-center Footer bg-dark-black">
        <h5 className="text-white mb30 ">Suiviez Nous</h5>
        <div class="3 flot_right text_align_left alignC">
          <div className="d-flex justifiy-content-center w100 gap-4">
            <h2 className=" pointer">
              <a href="http://webenlance.com" />
              <Facebook />
            </h2>
            <h2 className="pointer">
              <a href="http://webenlance.com" />
              <Instagram />
            </h2>
            <h2 className="pointer">
              <a href="http://webenlance.com" />
              <Twitter />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
