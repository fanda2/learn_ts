import React, { PureComponent } from "react";

import Home from "../home";
import Profile from "../profile";
import appStyle from "./style.module.css";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>这是App组件的标题展示</h2>
        <Home></Home>
        <Profile></Profile>
      </div>
    );
  }
}
