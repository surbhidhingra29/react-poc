import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lion",
      description:
      "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey."
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
