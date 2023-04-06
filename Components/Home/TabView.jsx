import React from "react";
import { TabView, TabPanel } from "primereact/tabview";

export default function BasicDemo() {
  return (
    <div className="card ">
      <TabView>
        <TabPanel header="Our Mission  ">
          <span className="m-0  ">
            Natus error sit voluptatem accusantium doloremque laudatium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt
          </span>
        </TabPanel>
        <TabPanel
          header="
Our Vision  ">
          <span className="m-0  ">
            Natus error sit voluptatem accusantium doloremque laudatium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt
          </span>
        </TabPanel>
      </TabView>
    </div>
  );
}
