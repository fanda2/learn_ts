import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruits: "origin",
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        {/* 受控组件 */}
        <form onSubmit={(e) => this.handSubmit(e)}>
          <div>
            <label htmlFor="fruits">
              选择水果
              <select
                name="fruits"
                onChange={(e) => {
                  this.handChange(e);
                }}
                value={this.state.fruits}
              >
                <option value="apple">苹果</option>
                <option value="banana">香蕉</option>
                <option value="orange">橘子</option>
              </select>
            </label>
          </div>
          <div className="userName">
            <label htmlFor="username">
              用户名：{" "}
              <input
                type="text"
                onChange={(e) => this.handChange(e)}
                name="username"
                id="username"
                value={this.state.username}
              />
            </label>
          </div>
          <div className="passWord">
            <label htmlFor="paddword">
              密码：
              <input
                type="password"
                name="password"
                id="username"
                onChange={(e) => {
                  this.handChange(e);
                }}
                value={this.state.password}
              />
            </label>
          </div>
          <input
            type="submit"
            value="提交"
            onClick={(e) => {
              this.btnClick();
            }}
          />
        </form>
      </div>
    );
  }
  handSubmit(e) {
    e.preventDefault();
  }
  handChange(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  btnClick() {
    console.log(this.state);
  }
}
