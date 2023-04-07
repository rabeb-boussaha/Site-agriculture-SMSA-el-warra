import React from "react";
import Wheat from "../Commun/Icons/Wheat";

function TwoSection() {
  return (
    <div className="products-section-two w100">
      <section className=" d-flex container mx-auto  justify-content-between w100">
        <div className="w50">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>Healthy Foods </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100">
            What We Provide For Your Better Health
          </h2>
        </div>
        <div className="w50">
          <p className=" text-mute f20 w100">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque inventore
            veritatis quasi architecto beatae vitae dicta suntexpc Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur audit aut fugit sed
            quia consequuntur magni dolores
          </p>
        </div>
      </section>
    </div>
  );
}

export default TwoSection;
