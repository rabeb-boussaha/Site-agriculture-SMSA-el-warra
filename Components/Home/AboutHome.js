import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import Image from "next/image";
import Image2 from "../../public/images/Home/img-2.jpg";
import TabView from "../../Components/Home/TabView";

function AboutHome() {
  return (
    <section className="AboutHome container w100 ">
      <div className="d-flex justifiy-content-between mx-auto ">
        <div className="w80 ">
          <div className=" d-flex mb30">
            <Wheat />
            <div className="bold f25 mt-3">
              {" "}
              <ins>About Us </ins>
            </div>
          </div>
          <h1 className="bold f40 me-5 w100 mb30 ">
            We’re Best Agriculture & Organic Firms
          </h1>

          <div className="quote-texte mb50">
            <p className="Regular f14 w85 lh-lg  ">
              Sed ut perspiciatis omnis natus error volup accusantiue doloremque
              laudantium totam aperiam eaque quae abllcs veritatis quasi
              architecto beatae vitae.
            </p>
          </div>
          <div className="p-5 mt30">
            <TabView />
          </div>
        </div>
        <div className="w80 d-flex">
          <Image
            src={Image2}
            alt="AboutImg2"
            width={500}
            height={600}
            quality={100}
            className="br17 "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
