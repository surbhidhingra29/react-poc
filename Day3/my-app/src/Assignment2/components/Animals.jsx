import React, { useState } from "react";

export default function Animals(props) {

  const animal = props.animalName
  const aboutLion = props.description


const [description] = useState(aboutLion);

  return (
    <div>
      <h4>{animal}</h4>
      <p>{description}</p>
    </div>
  );
}
