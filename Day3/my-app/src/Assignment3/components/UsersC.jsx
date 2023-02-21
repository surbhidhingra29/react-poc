import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shyam",
      description: "Shyam  is an UX Designer"
    };
  }

  render() {
    return (
      <div>
        <h4 className="txt-hd1">{this.state.name}</h4>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
