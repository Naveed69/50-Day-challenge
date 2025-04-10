import { Component } from "react";

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </>
    );
  }
}
