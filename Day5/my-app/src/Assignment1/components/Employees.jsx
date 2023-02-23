import React, { useState } from "react";

export default function Employees() {
  const [name] = useState("Shyam");
  const [description] = useState("Tester");
  return (
    <div>
      <h2 className="txt-hd1">{name}</h2>
      <p>{description}</p>
    </div>
  );
}
