import React from "react";

export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor method is called.");
  }

  incrementCounterHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log("Render method is called.");
    return (
      <div className="bdr container">
        <div className="container">
          <h2 className="txt-hd1">Counter</h2>
          <h4>{this.state.counter}</h4>
          <button onClick={() => this.incrementCounterHandler()} className="btn btn-primary">
            Increment Counter
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("ComponentDidMount Method called.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Method called.", state.counter);
    return null;
  }

  unmountCounterComponent() {
    this.componentWillUnmount();
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Method called.");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate method called.");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate method called.", prevState);
    return null;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount method called.");
  }
}
