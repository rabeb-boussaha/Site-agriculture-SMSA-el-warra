import React from "react";
import Experience from "../Components/Products/Experience";
import OneSection from "../Components/Products/OneSection";
import Projects from "../Components/Products/Projects";
import SectionThree from "../Components/Products/SectionThree";
import TwoSection from "../Components/Products/TwoSection";

function products() {
  return (
    <div className="landingPage">
      <OneSection />
      <TwoSection />
      <Experience />
      <SectionThree />
      <Projects />
    </div>
  );
}

export default products;
