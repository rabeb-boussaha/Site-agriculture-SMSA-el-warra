import React from "react";
import SectionContacte from "../Components/Contacte/SectionContacte";
import DetailContact from "../Components/Contacte/DetailContact";
import Phones from "../Components/Contacte/Phones";
import Maps from "../Components/Contacte/Maps";
import Footers from "../Components/Commun/Footers";

export default function Contacte() {
  return (
    <div className="landingPage">
      <SectionContacte />
      <DetailContact />
      <Phones />
      <Maps />
      <Footers />
    </div>
  );
}
