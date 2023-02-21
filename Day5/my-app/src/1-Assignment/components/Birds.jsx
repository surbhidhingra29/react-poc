import React, { useState } from "react";

export default function Birds() {
  const aboutBird =
    "A peacock has a crown on its head and a long, gleaming dark blue neck. ";
  const [name] = useState("Peacock");
  const [description] = useState(aboutBird);
  return (
    <div>
      <h2 className="txt-hd1">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
