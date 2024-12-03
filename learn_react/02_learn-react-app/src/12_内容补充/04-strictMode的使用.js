import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
  //   UNSAFE_componentWillMount() {
  //     console.log("HOME");
  //   }

  constructor(props) {
    super(props);
    console.log("HOME 被调用了");
  }
  render() {
    return <div ref="title">HOME</div>;
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Profile 被调用了");
  }
  render() {
    return <div ref="title">Profile</div>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home></Home>
        <StrictMode>
          <Profile></Profile>
        </StrictMode>
      </div>
    );
  }
}
