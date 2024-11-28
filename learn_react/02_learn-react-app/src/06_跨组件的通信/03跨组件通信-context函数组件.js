import React, { Component } from "react";

//创建一个context对象

const UserContext = React.createContext({
  userName: "aaaaa",
  userAge: -1,
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <strong>这里是头部组件</strong>
            <h2>用户名称：{value.userName}</h2>
            <h2>用户年龄：{value.userAge}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>信息展示1111</li>
        <li>信息展示2222</li>
        <li>信息展示3333</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "contextNewName",
      userAge: 33,
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
