import React, { useState } from "react";

export default function Users() {
  const empDetails =
    "Shyam  is an UX Designer ";
  const [user] = useState("Shyam");
  const [description] = useState(empDetails);
  return (
    <div>
    <h4>{user}</h4>
    <p>{description}</p>
  </div>
  );
}
