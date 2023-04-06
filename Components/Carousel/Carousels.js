import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../public/images/agriculteur1.jpg";
import slide2 from "../../public/images/Agriculteur-750x350.png";
const Carousels = () => {
  return (
    <div className=" carousel">
      <Carousel>
        <div className="">
          <Image
            src={slide1}
            alt="Picture of the author"
            height={700}
            quality={100}
          />
        </div>
        <div className="">
          <Image src={slide2} alt="Picture " height={700} quality={100} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
