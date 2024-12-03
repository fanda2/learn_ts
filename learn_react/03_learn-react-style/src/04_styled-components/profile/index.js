import React, { PureComponent } from "react";

import styled from "styled-components";

/**
 * 特性：
 * 1.props穿透
 * 2.attrs的使用
 * 3. 传入state作为props属性
 */

const HYInput = styled.input.attrs({
  placeholder: "请输入内容",
  bgColor: "red",
})`
  background: lightblue;
  color: ${(props) => props.theme.themeColor};
  font-size: 12px;
  border-color: ${(props) => props.theme.background};
`;

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <HYInput color={this.state.color} />
        <br />
        <HYInput type="password" />
        <h2>这个是Profile组件</h2>
        <p>
          <ul>
            <li>列表内容1111</li>
            <li>列表内容2222</li>
            <li>列表内容13333</li>
          </ul>
        </p>
      </div>
    );
  }
}
