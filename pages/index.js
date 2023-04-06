import React from "react";
import Carousels from "../Components/Carousel/Carousels";
import Modern from "../Components/Home/Modern";
import AboutHome from "../Components/Home/AboutHome";
import ServicesHome from "../Components/Home/ServicesHome";
import Statistic from "../Components/Home/Statistic";
import OfresHome from "../Components/Home/OfresHome";
import Contacts from "../Components/Home/Contacts";
import Footers from "../Components/Commun/Footers";

export default function index() {
  return (
    <div className="landingPage">
      <Carousels />
      <Modern />
      <AboutHome />
      <ServicesHome />
      <Statistic />
      <OfresHome />
      <Contacts />
      <Footers />
    </div>
  );
}
