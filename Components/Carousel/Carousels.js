import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import slide1 from "../../public/images/Products/gros-plan-arbres.jpg";
import slide2 from "../../public/images/Products/amandes-sac.jpg";
import slide3 from "../../public/images/Products/gros-plan.jpg";
import slide4 from "../../public/images/Home/close-up.jpeg";

const Carousels = () => {
  return (
    <div className=" carousel ">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item ">
            <Image
              src={slide1}
              alt="Picture of the author"
              height={700}
              quality={100}
              className="img-caroussel"
            />
            <div class="carousel-caption">
              <h3 className="caption">Bienvenue à notre monde du BIO ! </h3>
            </div>
          </div>
          <div class="carousel-item  ">
            <Image
              src={slide4}
              alt="Picture of the author"
              height={700}
              quality={100}
              className="img-caroussel"
            />
            <div class="carousel-caption">
              <h3 className="caption">Découvrez notre trésor biologique </h3>
            </div>
          </div>
          <div class="carousel-item  ">
            <Image
              src={slide2}
              alt="Picture of the author"
              height={700}
              quality={100}
              className="img-caroussel"
            />
            <div class="carousel-caption">
              <h3 className="caption">Dégustez nos amandes uniques </h3>
            </div>
          </div>
          <div class="carousel-item ">
            <Image
              src={slide3}
              alt="Picture of the author"
              height={700}
              quality={100}
              className="img-caroussel"
            />
            <div class="carousel-caption">
              <h3 className="caption">
                Faites vous régaler par nos pistaches{" "}
              </h3>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Précédent</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Suivant</span>
        </a>
      </div>
    </div>
  );
};

export default Carousels;
