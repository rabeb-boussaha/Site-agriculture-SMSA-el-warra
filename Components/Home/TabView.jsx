import React from "react";
import { TabView, TabPanel } from "primereact/tabview";

export default function BasicDemo() {
  return (
    <div className="card ">
      <TabView>
        <TabPanel header="Notre Mission  ">
          <span className="m-0  ">
            Nous avons pour mission la valorisation des produits biologiques de
            la région de Sidi Bouzid, tels que l&apos;huile d&apos;olive, les
            amandes et les pistaches. Nous avons un focus sur la
            commercialisation de l&apos;huile d&apos;olive aussi bien sur le
            plan local qu&apos;à l&apos;export, en étant le produit phare de la
            région et un véritable trésor de la Tunisie, premier producteur
            mondial d&apos;huile d&apos;olive biologique.
          </span>
        </TabPanel>
        <TabPanel
          header="
          Notre vision ">
          <span className="m-0  ">
            Développer une culture agricole saine, inclusive et surtout
            généreuse comme l&apos;indique le terme “KIRAM”, qui accentue la
            participation des femmes et des jeunes, et qui garantit un
            approvisionnement durable et écologique de produits alimentaires aux
            peuples du monde.
          </span>
        </TabPanel>
      </TabView>
    </div>
  );
}
