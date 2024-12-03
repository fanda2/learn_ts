import React, { PureComponent } from "react";

import { HomeWrapper, TitleWrapper } from "./style.js";

export default class index extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>
          <h2>这是Home组件中的title</h2>
        </TitleWrapper>
        <div className="banner">
          <span>描述home组件内容</span>
          <span className="active">这是正在活动的span标签</span>
          <span>基础内容</span>
        </div>
      </HomeWrapper>
    );
  }
}
