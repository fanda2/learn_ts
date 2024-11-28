import React, { Component } from "react";

const UserContext = React.createContext({
  userName: "aaa",
  uaerAge: -1,
});

class ProfileHeader extends Component {
  render() {
    const { userName, userAge } = this.context;
    return (
      <div>
        <strong>这是头部组件</strong>
        <h2>用户昵称：{userName}</h2>
        <h2>用户年龄：{userAge}</h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;


function Profile(){
    return(
        <div>
            <ProfileHeader/>
            <ul>
                <li>信息展示111</li>
                <li>信息展示222</li>
                <li>信息展示333</li>
            </ul>
        </div>
    )
}



export default class App extends Component{
    constructor(){
        super();
        this.state={
            userName:"angenlu",
            userAge:22
        }
    }

    render(){
        return(
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile/>
                </UserContext.Provider>
            </div>
        )
    }
}