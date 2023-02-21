import React, { useState } from "react";
import Birds from "./BirdsC";
import Users from "./UsersC";
import Animals from "./AnimalsC";
import Employees from "./EmployeesC";

export default function LivingThings() {
  const [item, setItem] = useState(<Birds></Birds>);
  return (
    <div >
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
