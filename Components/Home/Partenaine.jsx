import React from "react";
import Image from "next/image";
import logo1 from "../../public/images/Products/logo1.png";
import logo2 from "../../public/images/Products/logo2.png";
import logo3 from "../../public/images/Products/logo3.png";
import logo4 from "../../public/images/Products/logo3.png";
import logo5 from "../../public/images/Products/logo5.png";

function partenaine() {
  return (
    <div className="w100 container    ">
      <section className="d-flex justify-centant-center alignC mx-auto w100 ">
        <div className="w30">
          <Image src={logo1} alt="logo1" rel="icon" quality={100} />
        </div>
        <div className="w30">
          <Image src={logo2} alt="logo1" rel="icon" quality={100} />
        </div>
        <div className="w30">
          <Image src={logo3} alt="logo1" rel="icon" quality={100} />
        </div>
        <div className="w30">
          <Image src={logo4} alt="logo1" rel="icon" quality={100} />
        </div>
        <div className="w30">
          <Image src={logo5} alt="logo1" rel="icon" quality={100} />
        </div>
        <div className="w30"></div>
      </section>
    </div>
  );
}

export default partenaine;
