import React from "react";

export default class Birds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Peacock",
      description:
        "A peacock has a crown on its head and a long, gleaming dark blue neck."
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
