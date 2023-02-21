import React, { useState } from "react";

export default function Users() {
  const userDetails =
    "Dev is UX Developer";
  const [user] = useState("Dev");
  const [description] = useState(userDetails);
  return (
    <div>
      <h2 className="txt-hd1">{user}</h2>
      <p>{description}</p>
    </div>
  );
}
