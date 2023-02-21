import React, { useState } from "react";
import Birds from "./Birds";
import Users from "./Users";
import Animals from "./Animals";
import Employees from "./Employees";

export default function LivingThings() {
  // Properties for Animal
  const animalName = "Lion";
  const aboutLion =
    "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey.";


  // Properties for Bird
  const birdName = "Peacock";
  const aboutBird =
  "A peacock is a shiny blue bird who fans out his large colorful iridescent tail feathers, especially when he's flirting with the peahens";

  // Properties for Employee
  const EmpName = "Dev";
  const empDesignation = "UI Specialist";

  // Properties for User
  const userName = "Shyam";
  const aboutUser =
    "Shyam  is an UX Designer";

  const [item, setItem] = useState(
    <Employees EmpName={EmpName} empDesignation={empDesignation}></Employees>
  );
  return (
    <div>
      {item}
      <div>
        <div id="contentArea"></div>
        <button
          onClick={() =>
            setItem(
              <Animals
                description={aboutLion}
                animalName={animalName}
              ></Animals>
            )
          }
        >
          Animals
        </button>
        <button
          onClick={() =>
            setItem(<Users userName={userName} aboutUser={aboutUser}></Users>)
          }
        >
          Users
        </button>
        <button
          onClick={() =>
            setItem(
              <Employees
                EmpName={EmpName}
                empDesignation={empDesignation}
              ></Employees>
            )
          }
        >
          Employees
        </button>
        <button
          onClick={() =>
            setItem(<Birds description={aboutBird} birdName={birdName}></Birds>)
          }
        >
          Birds
        </button>
      </div>
    </div>
  );
}
