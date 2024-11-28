import React, { Component } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import "./style.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>aaaa</span>
          <strong>bbbbbb</strong>
          <a href="http://www.baidu.com">right</a>
        </NavBar>

        <br />

        <NavBar2
          leftslot={<SlotLeft/>}
          centerslot={<strong>centerSlot中间部分</strong>}
          rightslot={<a href="https://www.baidu.com">rightSlot</a>}
        ></NavBar2>
      </div>
    );
  }
}

//插槽插入组件
class SlotLeft extends Component {
  constructor() {
    super();
    this.state = {
      music: ["11", "22", "33", "44"],
    };
  }
  render() {
    const {music} = this.state;
    return (
      <div>
        <span>这就是测试slot中带入组件</span>
        <ul>
          {music.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
