import React from "react";
import Image from "next/image";
import pist from "../../public/images/Products/Pist.jpg";
import pistache1 from "../../public/images/Products/mockupPistache.png";
import pistache2 from "../../public/images/Products/pistache2.jpg";
import pistache3 from "../../public/images/Products/pistache1.png";
import CustomButton from "../Commun/CustomButton";

export default function DetailPistache() {
  return (
    <div className="d-flex container mx-auto  justify-content-between w100 ">
      <div className="row  detail d-flex">
        <div class="col-lg-7">
          <Image src={pist} alt="huile" quality={100} className="rabeb  " />
        </div>

        <div class="col-lg-5 p-5 ">
          <h3 className="title text-nowrap  ">PISTACHES BIOLOGIQUES</h3>

          <p className="textP1 lh-lg mt-5">
            Situées dans la zone EL WAARA, nos pistaches biologiques offrent une
            texture croquante ainsi qu&apos;un parfum intense et léger. Nos
            pistaches crues naturelles ajoutent une explosion de saveurs dans
            les desserts notamment les gâteaux, et celles qui sont salées sont
            parfaites pour une consommation crue en tant qu&apos;amuse bouche.
            Bien qu&apos;il existe de nombreuses variétés, seules quelques
            variétés se distinguent par leur qualité exceptionnelle. Parmi
            celles-ci, la variété Mateur que nous cultivons, connue de sa forte
            vigueur, caractéristique clé d&apos;évaluation des pistachiers. Nos
            pistaches biologiques offrent une combinaison unique de saveurs
            délicieuses et d&apos;avantages nutritionnels précieux pour votre
            bien-être.
          </p>
          <ul className="product-meta">
            <li>
              <span className="span">Contenance :</span>
              <a className="litre" href="#">
                1 kg, vrac (grillées, salées ou crues)
              </a>
            </li>
            <li>
              <span className="span">Emballage :</span>
              <a lassName="litre" href="#">
                Mateur
              </a>
            </li>
          </ul>
        </div>
        <div className=" d-flex w100 gap-4 maps ">
          <div className="w20">
            <Image
              src={pistache1}
              alt="huile"
              quality={100}
              width={100}
              height={100}
              className="detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={pist}
              alt="huile"
              quality={100}
              width={100}
              height={100}
              className=" detais p-2 "
            />
          </div>
          <div className="w20">
            <Image
              src={pistache3}
              alt="huile"
              quality={100}
              width={100}
              height={100}
              className=" detais p-2 "
            />
          </div>
        </div>
        <div className="w100 pt-5">
          <CustomButton text="Descriptions" variant="orange" className=" w50" />
          <p className="textP lh-lg mt-5">
            Nos pistaches sont récoltées à la main lorsqu&apos;elles sont mûres,
            puis séchées à l&apos;ombre. C&apos;est à ce stade que la coque
            s&apos;ouvre, permettant ainsi de les décortiquer et de les trier.
            Seules les meilleures sont sélectionnées et envoyées par nos
            fermiers. Grâce à leurs nombreuses vertus pour la santé, ces petites
            noix vertes peuvent être grignotées sans culpabilité. La pistache
            certifiée AB offre des avantages nutritionnels incroyables, en plus
            d&apos;être peu calorique. Elle est riche en antioxydants, en fibres
            alimentaires, en vitamines et en minéraux. De plus, ce fruit à coque
            biologique contient les neuf acides aminés essentiels nécessaires au
            métabolisme de notre corps. Un autre avantage réside dans sa haute
            teneur en acides gras insaturés, considérés comme bénéfiques pour la
            santé, car ils réduisent le taux du mauvais cholestérol et diminuent
            le risque de maladies cardiovasculaires.
          </p>
        </div>
      </div>
    </div>
  );
}
