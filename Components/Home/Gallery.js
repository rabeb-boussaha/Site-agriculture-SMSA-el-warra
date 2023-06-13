import React from "react";
import Wheat from "../../Components/Commun/Icons/Wheats";
import Image from "next/image";
import olive from "../../public/images/Products/olive.jpg";
import amonde from "../../public/images/Products/amande.jpg";
import pistache from "../../public/images/Products/pistachee.jpg";
import Link from "next/link";

function Gallery() {
  return (
    <div className="Gallery  mx-auto bg-light ">
      <section className="w100 gallerys ">
        <div className="Titre-section d-flex mb30 ">
          <Wheat />
          <h2 className="f24 bold mt-4">
            <ins>Notre galerie de produits </ins>
          </h2>
        </div>
        <h2 className="32 bolder w100">100% Biologiques</h2>
        <div className="w100 mx-auto justify-content-center alignC gap-4 mt-5">
          <div className="w34 ">
            <Link href="/huile">
              <Image
                src={olive}
                alt="Cover3"
                quality={100}
                width={400}
                height={400}
                className="  "
              />
            </Link>
          </div>
          <div className="w35">
            <Link href="/Amonds">
              <Image
                src={amonde}
                alt="Cover3"
                quality={100}
                width={400}
                height={400}
                className="  "
              />
            </Link>
          </div>
          <div className="w34">
            <Link href="/pistache">
              <Image
                src={pistache}
                alt="Cover3"
                quality={100}
                width={400}
                height={400}
                className=" "
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
