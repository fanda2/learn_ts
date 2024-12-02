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
    //1.点击按钮后结果值加一
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});

    //2.点击依次按钮，实现结果值加二，实际上是异步调用，****但是偶尔回照成直接加1，不可控制
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 0);
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 100);

    //点击按钮一次加二。回调函数中再次调用设置setState
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     this.setState({
    //       count: this.state.count + 1,
    //     });
    //   }
    // );

    //以下代码会忽略setState的内部合并，   **实质上是函数的多次调用***
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
    this.setState((preState, props) => {
      return {
        count: preState.count + 1,
      };
    });
  }
}
