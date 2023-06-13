import React from "react";
import Image from "next/image";
import Holive from "../../public/images/Products/rabeb.jpg";
import mockup from "../../public/images/Products/mockup.png";
import oliveHeul from "../../public/images/Products/huile-d'olive.png";
import oliveH from "../../public/images/Products/olive-oil.png";
import CustomButton from "../Commun/CustomButton";

function Detail() {
  return (
    <div className="d-flex container mx-auto  justify-content-between w100 ">
      <div className="row  detail d-flex">
        <div class="col-lg-7">
          <Image
            src={oliveHeul}
            alt="huile"
            quality={100}
            className="rabeb  "
          />
        </div>

        <div class="col-lg-5 p-5 ">
          <h3 className="title text-nowrap  ">HUILE D&apos;OLIVE BIOLOGIQUE</h3>

          <p className="textP1 lh-lg mt-5">
            Notre huile d&apos;olive biologique extra vierge de qualité
            supérieure capture l&apos;essence des olives fraîchement cueillies à
            la main. Elle est obtenue à partir des olives biologiques des
            variétés Chemlali Gafsi et Sehli, parmi les plus répandues dans les
            sols tunisiens, en particulier dans la ville de Sidi Bouzid.
          </p>
          <ul className="product-meta">
            <li>
              <span className="span">Contenance :</span>
              <a className="litre" href="#">
                1 litre
              </a>
            </li>
            <li>
              <span className="span">Emballage :</span>
              <a lassName="litre" href="#">
                Bouteille en verre
              </a>
            </li>
          </ul>
        </div>
        <div className=" d-flex w100 gap-4 maps ">
          <div className="w20">
            <Image
              src={mockup}
              alt="huile"
              quality={100}
              width={200}
              height={200}
              className="detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={oliveHeul}
              alt="huile"
              quality={100}
              width={200}
              height={200}
              className=" detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={oliveH}
              alt="huile"
              quality={100}
              width={200}
              height={200}
              className=" detais p-2 "
            />
          </div>
        </div>
        <div className="w100 pt-5">
          <CustomButton text="Descriptions" variant="orange" className=" w50" />
          <p className="textP lh-lg mt-5">
            Cette huile dolive est exclusivement extraite par un processus
            mécanique de pressurage à froid des olives provenant
            d&apos;oliveraies biologiques, garantissant un taux d&apos;acidité
            inférieur à 0,8 %. Grâce à cette méthode de pression dans une
            température qui ne dépasse pas les 27°C, les arômes et les
            propriétés organoleptiques de nos olives ne sont pas altérés et le
            parfum reste inchangé. Vous jouissez ainsi d&apos;une huile
            naturelle dorée bien parfumée de notes fruitées et non dépourvue de
            ses valeurs nutritives. En choisissant notre huile d&apos;olive,
            vous faites un choix bénéfique pour votre santé et pour
            l&apos;environnement, car elle est produite sans l&apos;utilisation
            de pesticides. Nous suivons des étapes qui respectent les normes
            biologiques de la cultivation jusqu&apos;à la mise en bouteille, en
            passant par les pratiques agricoles et industrielles, ce qui fait
            que notre chaîne de valeur est 100% biologique. Idéale pour une
            consommation quotidienne, seule, dans des repas chauds ou encore
            froids, notre huile d&apos;olive extra vierge ne cesse de surprendre
            le monde et d&apos;arracher sa place sur les podium des concours
            internationaux, notamment en Angleterre et au Qatar, faisant preuve
            de qualité supérieure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
