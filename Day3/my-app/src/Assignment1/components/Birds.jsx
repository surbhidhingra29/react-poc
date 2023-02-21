import React, { useState } from "react";

export default function Birds() {
  const aboutBird =
    "A peacock is a shiny blue bird who fans out his large colorful iridescent tail feathers, especially when he's flirting with the peahens";
  const [name] = useState("Peacock");
  const [description] = useState(aboutBird);
  return (
    <div>
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
  );
}
