import React from "react";

export default function Counter(props) {
  return (
    <div>
      <button onClick={props.incrementCounter}>Click Here</button>
    </div>
  );
}
