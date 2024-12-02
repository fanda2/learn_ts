import React, { PureComponent } from "react";

import {EventEmitter} from 'events'

const EventBus=new EventEmitter()


class Home extends PureComponent {
  //设置监听事件
  componentDidMount() {
    EventBus.addListener("sayHello",this.handleSayHelloLister.bind(this ))
  }
  //取消监听事件
  componentWillUnmount() {
    EventBus.removeListener("sayHello", this.handleSayHelloLister);
  }

  handleSayHelloLister(msg, num) {
    this.setState({
      message: msg,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      message: "Home",
    };
  }

  render() {
    return (
      <div>
        <h2>{"Message：" + this.state.message}</h2>
      </div>
    );
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button
          onClick={e => {
            this.btnClick();
          }}
        >
          点击了Profile的按钮
        </button>
      </div>
    );
  }
  btnClick() {
    EventBus.emit("sayHello", "Hello React!!!", 222);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
