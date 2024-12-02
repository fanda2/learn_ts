import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数为：{this.state.count}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          数字增加
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
