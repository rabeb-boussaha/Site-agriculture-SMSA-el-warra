import React from "react";
import Image from "next/image";
import amonde from "../../public/images/Products/amonde.jpg";
import mockupAmande from "../../public/images/Products/mockupAmande.png";
import Amande from "../../public/images/Products/amande.png";
import Amande1 from "../../public/images/Products/amande1.png";
import CustomButton from "../Commun/CustomButton";

function Amond() {
  return (
    <div className="d-flex container mx-auto  justify-content-between w100 ">
      <div className="row  detail d-flex">
        <div class="col-lg-7">
          <Image
            src={Amande}
            alt="huile"
            quality={100}
            className="rabeb  w100"
          />
        </div>

        <div class="col-lg-5 p-5 ">
          <h3 className="title text-nowrap  "> AMANDES BIOLOGIQUES</h3>

          <p className="textP1 lh-lg mt-5">
            Nos amandes crues biologiques sont non traitées. Il n&apos;y a donc
            pas d&apos;ajout d&apos;huile, de gras, de sel ou de sucre ajoutés.
            Leur goût naturellement sucré avec un léger soupçon d&apos;amertume
            fait d&apos;eux un choix idéal pour les collations, les recettes et
            les garnitures d&apos;aliments. Nos amandes biologiques présentent
            des qualités nutritionnelles exceptionnelles surtout
            lorsqu&apos;elles sont consommées crues. Leur texture croustillante
            et ferme en fait un bon choix pour les grignotages, la pâtisserie et
            les desserts.
          </p>
          <ul className="product-meta">
            <li>
              <span className="span">Contenance :</span>
              <a className="litre" href="#">
                1 kg, vrac (grillées ou crues)
              </a>
            </li>
            <li>
              <span className="span">Emballage :</span>
              <a lassName="litre" href="#">
                Barlaise, Arbi et Mazzetto
              </a>
            </li>
          </ul>
        </div>
        <div className=" d-flex w100 gap-4 maps ">
          <div className="w20">
            <Image
              src={mockupAmande}
              alt="huile"
              quality={100}
              width={200}
              height={200}
              className="detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={Amande}
              alt="huile"
              quality={100}
              width={200}
              height={200}
              className=" detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={Amande1}
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
            Nos amandes biologiques des variétés Barlaise, Arbi et Mazzetto se
            caractérisent par leur grand calibre, leur goût doux et leur
            capacité à endurer les saisons d’été chaudes et celles d’hivers
            froids pendant une longue période, comparées à d’autres variétés de
            ce fruit sec. Leur stockage est ainsi plus facile pour les
            industriels aussi bien que pour les particuliers et consommateurs
            finaux.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Amond;
