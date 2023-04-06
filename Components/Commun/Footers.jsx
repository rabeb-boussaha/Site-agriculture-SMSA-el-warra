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

      <div className="w100 bg-dark-black  d-flex justifiy-content-center p-3 ">
        <div className="w40">
          <h5 className="text-white mt30">About Us</h5>
          <p className="f10 light text-white  w70 mb30 mt30 g-base ">
            Sit amet consectetur adipiscing elit sed do eiusmo tempor incidunt
            ut labore et dolore magna aliquae. Quis ipsum suspendisse ultrices
            gravida commodo viverra
          </p>
        </div>
        <div className="w40 mt30">
          <h5 className="text-white">Services</h5>
        </div>
        <div className="w40 mt30">
          <h5 className="text-white mb30">Follow Us</h5>
          <div class="3 flot_right text_align_left">
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
    </div>
  );
}

export default Footers;
