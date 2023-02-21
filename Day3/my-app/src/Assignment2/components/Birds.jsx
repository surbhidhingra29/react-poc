import React from "react";

export default function Birds(props) {
  const bird = props.birdName;
  const description = props.description;


  return (
    <div>
      <h4>{bird}</h4>
      <p>{description}</p>
    </div>
  );
}
