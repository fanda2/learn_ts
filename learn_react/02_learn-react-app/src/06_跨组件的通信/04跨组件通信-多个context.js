import React, { Component } from "react";

//创建一个context对象

const UserContext = React.createContext({
  userName: "danda",
  useAge: -1,
});

const ThemContext = React.createContext({
  color: "red",
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemContext.Consumer>
            {(them) => {
              return (
                <div>
                  <strong style={{ color: them.color }}>这是头部组件</strong>
                  <h2>用户名称：{value.userName}</h2>
                  <h2>用户年龄：{value.useAge}</h2>
                  <h1>选用颜色：{them.color}</h1>
                </div>
              );
            }}
          </ThemContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <div>111</div>
      <ul>
        <li>设置信息111</li>
        <li>设置信息222</li>
        <li>设置信息333</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "fanda",
      userAge: "121111",
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemContext.Provider value={{ color: "green" }}>
            <Profile />
          </ThemContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
