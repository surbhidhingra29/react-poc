import React from "react";

export default class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shyam",
      description: "Tester",
    };
  }

  render() {
    return (
      <div>
        <h2 className="txt-hd1">{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
