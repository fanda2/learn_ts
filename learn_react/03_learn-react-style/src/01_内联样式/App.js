import React, { PureComponent } from "react";

export default class App extends PureComponent {
  render() {
    const pStyle = {
      color: "pink",
      fontSize:"24px",
      fontWeight:"bold" 
    };

    return (
      <div>
        <div style={{ color: "red", fontSize: "80px" }}>我是标题</div>
        <p style={pStyle}>这是段落部分</p>
      </div>
    );
  }
}
