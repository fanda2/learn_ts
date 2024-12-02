import React, { Component } from "react";

function Home(props) {
  return <h1>{props.message}</h1>;
}

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
    return (
      <div>
        <h2>当前：{message + count}</h2>
        <Home message={message} />

        {/* <button onClick={e=>{this.increment()}}>数字增加</button> */}

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

  increment() {
    //setState是异步更新的
    this.setState({
      count: this.state.count + 1,
    });
  }

  changeMessage() {
    // this.setState({
    //     message:"这是更新之后的文字内容"
    // })
    // console.log("当前message  ",this.state.message)  //控制台打印出来依然是Hello World

    //方式一、获取到异步更新之后的数据
    //setState可以设置两个参数  setState(更新后的state,回调函数)
    setTimeout(() => {
      this.setState(
        {
          message: "这是更新后的message数据",
        },
        () => {
          console.log("回调信息：", this.state.message); //展示更新后的message信息
        }
      );
    });
    // 只会执行两次
    // componentDidUpdate回调 这是更新后的message数据
    // 回调信息： 这是更新后的message数据
  }

  //方式二、获取异步更新之后的参数,比setState的回调函数先执行
  componentDidUpdate() {
    console.log("componentDidUpdate回调", this.state.message);
  }
}
