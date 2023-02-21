import React from "react";

export default function Employees(props) {
  const name = props.EmpName;
  const empDesignation = props.empDesignation;
  return (
    <div>
      <h4>{name}</h4>
      <p>{empDesignation}</p>
    </div>
  );
}
