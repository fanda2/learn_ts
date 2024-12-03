import React, { PureComponent } from "react";

import Home from "../home";
import Profile from "../profile";

import styled, { ThemeProvider } from "styled-components";

const HYButton = styled.button`
  padding: 10px 20px;
  color: red;
`;

const HYPrimaryButton = styled.button`
  background-color: green;
  color: wheat;
`;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme1: { themeColor: "purple", fontSize: "44px", background: "orange" },
      theme2: { themeColor: "pink", fontSize: "44px", background: "lightblue" },
      theme: { themeColor: "purple", fontSize: "44px", background: "orange" },
    };
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <h2>这是App组件内部展示的内容</h2>
        <Home />
        <Profile />
        <HYButton>我是普通的按钮</HYButton>
        <HYPrimaryButton onClick={(e) => this.changThem()}></HYPrimaryButton>
      </ThemeProvider>
    );
  }
  changThem() {
    let newTheme=this.state.theme2
    this.setState({
      theme: newTheme,
    });
  }
}
