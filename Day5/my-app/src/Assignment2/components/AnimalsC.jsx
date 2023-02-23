import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lion",
      description:
        "Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey",
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
