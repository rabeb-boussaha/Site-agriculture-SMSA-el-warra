import React from "react";
import Wheat from "../Commun/Icons/Wheat";
import CheckBox from "../Commun/Icons/CheckBox";
import Image from "next/image";
import about from "../../public/images/About/about.jpg";
import abouts from "../../public/images/About/aboutsUs.jpg";
import CustomButton from "../Commun/CustomButton";
import Link from "next/link";

function SectionTwo() {
  return (
    <div className=" container">
      <section className="section-two d-flex w100 justifiy-content-between mx-auto">
        <div className="w50">
          <div className="d-flex mb30">
            <Wheat />
            <h2 className="f24 bold mt-4">
              <ins>A PROPOS DE NOUS </ins>
            </h2>
          </div>
          <h2 className="32 bolder w100">Notre identité</h2>
          <p className="f16 text-mute mt30 lh-lg w80 ">
            SMSA EL WAARA est une Société Mutuelle de Services Agricoles qui
            opère dans la région de Sidi Ali Ben Aoun en Tunisie. Fondée en mars
            1993 sous la forme d&apos;un Groupement de Développement Agricole,
            cette entité a évolué pour devenir une SMSA en juillet 2022, qui
            opère dans le domaine de lagriculture 100% biologique, notamment la
            production de l&apos;huile d&apos;olive extra vierge, des amandes et
            des pistaches. Grâce à une surface totale couverte qui s&apos;élève
            à 17 000 hectares, avec 727 agriculteurs bénéficiaires,
            l&apos;entreprise a fait preuve d&apos;impact économique et social
            et est devenue un acteur incontournable dans le développement local
            de la zone El Waara.
          </p>
          <div className=" pt-5">
            <div className="single-choose-item  d-flex">
              <CheckBox />
              <p className="f20 bold ms-3 mt-1 w100">
                Au coeur de EL Waara, au coeur de la Tunisie
              </p>
            </div>
          </div>
          <p className="w80 f16 text-mute">
            mettre cette phrase juste après: El Waara, les racines de
            l&apos;agriculture tunisienne, un sol fertile et une terre bénie
          </p>

          <div className="">
            <div className="single-choose-item  d-flex">
              <CheckBox />
              <p className="f20 bold ms-3 mt-1 w100">
                Une aventure biologique qui date depuis 29 ans
              </p>
            </div>
          </div>
          <p className="w80 f16 text-mute">
            29 ans d&apos;existence, de production biologique et d
            &apos;agriculture saine et durable
          </p>
          <div className="p-2">
            <Link href="/products">
              <CustomButton
                text=" Savoir plus sur nous "
                variant="orange"
                className=" w50"
              />
            </Link>
          </div>
        </div>
        <div className="w50 ">
          <Image
            src={about}
            alt="Cover3"
            quality={100}
            width={500}
            height={500}
            className=" "
          />
        </div>
      </section>
    </div>
  );
}

export default SectionTwo;
