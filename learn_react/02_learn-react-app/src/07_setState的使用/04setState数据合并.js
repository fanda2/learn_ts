import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 32,
      message: "Hello World",
    };
  }
  render() {
    return (
      <div>
        <h2>当前数字：{this.state.count}</h2>
        <h2>当前信息：{this.state.message}</h2>
        <button
          onClick={(e) => {
            this.changerMessage();
          }}
        >
          改变文字
        </button>
      </div>
    );
  }

  changerMessage() {
    //设置message不会影响到count信息
    this.setState({
      message: "Hello React!",
    });
  }
}
