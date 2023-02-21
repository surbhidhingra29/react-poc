import React, { useState } from "react";

export default function Animals() {
  const aboutLion =
    "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey.";
  const [name] = useState("Lion");
  const [description] = useState(aboutLion);
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}
