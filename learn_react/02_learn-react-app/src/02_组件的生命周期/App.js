import React, { Component } from "react";

class Cpn extends Component {
  render() {
    return <div>我是Cpn组件</div>;
  }

  componentWillUnmount() {
    console.log("调用了Cpn的componentWillUnmount方法");
  }
}

export default class App extends Component {
  constructor() {
    super();
    console.log("执行了组件的constructor方法");
    this.state = {
      counter: 0,
      isShow: false,
    };
  }
  render() {
    const { counter, isShow } = this.state;
    console.log("执行了组件的render方法");
    return (
      <div>
        我是App组件
        <h2>当前计算为：{counter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
        <hr />
        <button
          onClick={() => {
            this.changeCpnShow();
          }}
        >
          {isShow ? "隐藏组件" : "展示组件"}
        </button>
        {isShow && <Cpn/>}
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  componentDidMount(){
    console.log("执行了 componentDidMount 方法")
  }
  componentDidUpdate(){
    console.log("执行了 componentDidUpdate 方法")
  }
}
