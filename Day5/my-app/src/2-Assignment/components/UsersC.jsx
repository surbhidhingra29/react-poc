import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dev",
      description: "Dev is UX Developer"
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
