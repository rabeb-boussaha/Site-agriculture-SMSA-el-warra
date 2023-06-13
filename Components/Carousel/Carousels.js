import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import slide1 from "../../public/images/Products/gros-plan-arbres.jpg";
import slide2 from "../../public/images/Products/amandes-sac.jpg";
import slide3 from "../../public/images/Products/gros-plan.jpg";
import slide4 from "../../public/images/Home/close-up.jpeg";

const Carousels = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
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
        <div class="carousel-item">
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
        <div class="carousel-item">
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
        <div class="carousel-item">
          <Image
            src={slide3}
            alt="Picture of the author"
            height={700}
            quality={100}
            className="img-caroussel"
          />
          <div class="carousel-caption">
            <h3 className="caption">Faites vous régaler par nos pistaches </h3>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousels;
