import React, { Component } from "react";

function ProfileHeader(props) {
  const { userName, userAge } = props;
  return (
    <div>
      <strong>这是头部组件</strong>
      <h2>用户昵称：{userName}</h2>
      <h2>用户年龄：{userAge}</h2>
    </div>
  );
}

function Profile(props) {
//   const { userName, userAge } = props;
  return (
    <div>
     {/* <ProfileHeader userName={userName} userAge={userAge}/> */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1111</li>
        <li>设置2222</li>
        <li>设置3333</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Mary",
      userAge: 34,
    };
  }
  render() {
    const { userName, userAge } = this.state;
    return (
      <div>
        <Profile userName={userName} userAge={userAge} />

        <Profile {...this.state} />
      </div>
    );
  }
}
