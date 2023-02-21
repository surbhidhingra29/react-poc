import React, { useState } from "react";
import Birds from "./Birds";
import Users from "./Users";
import Animals from "./Animals";
import Employees from "./Employees";

export default function LivingThings() {
  const [item, setItem] = useState(<Animals></Animals>);
  return (
    <div>
      {item}
      <div>
        <div id="contentArea"></div>
        <button onClick={() => setItem(<Animals></Animals>)}>Animals</button>
        <button onClick={() => setItem(<Users></Users>)}>Users</button>
        <button onClick={() => setItem(<Employees></Employees>)}>
          Employees
        </button>
        <button onClick={() => setItem(<Birds></Birds>)}>Birds</button>
      </div>
    </div>
  );
}
