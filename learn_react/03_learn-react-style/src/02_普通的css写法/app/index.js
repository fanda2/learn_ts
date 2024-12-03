import React, { PureComponent } from "react";

import Home from "../home";
import Profile from "../profile";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>这是App组件内容</h2>
        <Home></Home>
        <Profile></Profile>
      </div>
    );
  }
}
