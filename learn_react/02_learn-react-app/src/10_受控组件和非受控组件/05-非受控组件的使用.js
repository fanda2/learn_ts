import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        {/* 受控组件 */}
        <form onSubmit={(e) => this.handSubmit(e)}>
          <label htmlFor="username">
            用户： <input type="text" id="username" ref={this.usernameRef} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handSubmit(e) {
    e.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
