import React from "react";
import Counter from "./Counter";

export default class LivingThings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        <h4>clicked {this.state.counter} times</h4>
        <Counter incrementCounter={this.handleClick} />
      </>
    );
  }
}
