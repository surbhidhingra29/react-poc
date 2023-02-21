import React, { useState } from "react";

export default function Employees() {
  const [name] = useState("Dev");
  const [description] = useState("UI Specialist");
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}
