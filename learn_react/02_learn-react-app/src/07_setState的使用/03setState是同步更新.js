import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      message: "Hello World",
    };
  }
  render() {
    const { count, message } = this.state;
    return (
      <div>
        <h2>当前：{message}</h2>
        <h2>当前数字：{count}</h2>
        <button onClick={e=>this.changeMessage()}>改变文字</button>
        
      </div>
    );
  }
  changeMessage(){
    this.setState({
        message:"这是新的提示信息1111"
    },()=>{
        console.log(this.state.message)
    })
  }
}
