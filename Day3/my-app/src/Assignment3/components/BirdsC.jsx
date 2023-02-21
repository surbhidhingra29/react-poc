import React from "react";

export default class Birds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Peacock",
      description:
      "A peacock is a shiny blue bird who fans out his large colorful iridescent tail feathers, especially when he's flirting with the peahens",
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
