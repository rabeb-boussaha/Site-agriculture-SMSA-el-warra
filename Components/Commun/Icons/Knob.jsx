import React, { useState } from "react";
import { Knob } from "primereact/knob";

export default function ColorDemo() {
  const [value, setValue] = useState(17);

  return (
    <div className="">
      <Knob
        value={value}
        onChange={(e) => setValue(e.value)}
        valueColor="#f8f6ef"
        rangeColor="#eece38"
      />
    </div>
  );
}
