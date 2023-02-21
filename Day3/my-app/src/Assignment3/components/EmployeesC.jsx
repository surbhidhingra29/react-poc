import React from "react";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dev",
      description: "UI Specialist",
    };
  }

  render() {
    return (
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
