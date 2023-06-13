import React from "react";
import Carousels from "../Components/Carousel/Carousels";
import Modern from "../Components/Home/Modern";
import AboutHome from "../Components/Home/AboutHome";
import ServicesHome from "../Components/Home/ServicesHome";
import Gallery from "../Components/Home/Gallery";
import Statistic from "../Components/Home/Statistic";
import OfresHome from "../Components/Home/OfresHome";
import Contacts from "../Components/Home/Contacts";
import TunisieJob from "../Components/Home/TunisieJob";
import Footers from "../Components/Commun/Footers";

export default function index() {
  return (
    <div className="landingPage">
      <Carousels />
      <Modern />
      <AboutHome />
      <ServicesHome />
      <Gallery />
      <Statistic />
      <OfresHome />
      <Contacts />
      <TunisieJob />
      <Footers />
    </div>
  );
}
