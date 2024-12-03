import React, { PureComponent } from "react";

function enhanceProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="中国" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home:
        {`昵称:${this.props.nickName} 等级：${this.props.level}   地址：${this.props.region}`}{" "}
      </div>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        About:
        {`昵称：${this.props.nickName}    等级：${this.props.level}   地址：${this.props.region}`}
      </div>
    );
  }
}

const EnhanceHome = enhanceProps(Home);
const EnhanceAbout = enhanceProps(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickName="fanda" level="99" />
        <EnhanceAbout nickName="dany" level="22" />
      </div>
    );
  }
}

export default App;
