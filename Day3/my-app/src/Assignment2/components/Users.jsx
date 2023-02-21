import React from "react";

export default function Users(props) {
  const user = props.userName;
  const description = props.aboutUser;
  return (
    <div>
      <h4>{user}</h4>
      <p>{description}</p>
    </div>
  );
}
