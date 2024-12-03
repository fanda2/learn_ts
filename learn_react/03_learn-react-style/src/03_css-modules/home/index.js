import React, { PureComponent } from "react";

import homeStyle from "./style.module.css";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>这是Home组件的title部分</h2>
        <div className={homeStyle.content}>这是HOME组件的内容部分</div>
      </div>
    );
  }
}
