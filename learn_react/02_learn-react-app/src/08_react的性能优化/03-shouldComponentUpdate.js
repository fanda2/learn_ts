import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Hello World",
    };
  }
  render() {
    const { count, message } = this.state;
    console.log("App组件的 render被调用");
    return (
      <div>
        <h2>当前计数为：{count}</h2>
        <h3>{message}</h3>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          数字增加
        </button>
        <button
          onClick={(e) => {
            this.changeMessage();
          }}
        >
          改变文字
        </button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //默认返回true
    // return true;
    if(this.state.count!==nextState.count || this.state.message!==nextState.message){
        return true;
    }
    return false;
  }

  changeMessage() {
    this.setState({ message: "你好呀！ react!" });
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
}
