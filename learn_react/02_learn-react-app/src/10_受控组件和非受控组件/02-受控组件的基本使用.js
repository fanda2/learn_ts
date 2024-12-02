import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  render() {
    return (
      <div>
        {/* 受控组件 */}
        <form onSubmit={(e) => this.handSubmit(e)}>
          <label htmlFor="username">
            用户：
            <input
              type="text"
              id="username"
              onChange={(e) => this.changeMessage(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" onClick={(e) => this.btnClick()} />
        </form>
      </div>
    );
  }
  handSubmit(e) {
    e.preventDefault();
  }
  changeMessage(e) {
    this.setState({username:e.target.value})
  }
  btnClick(){
    console.log(this.state.username)
  }
}
