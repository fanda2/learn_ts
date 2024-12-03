import React, { PureComponent } from "react";

class Home extends PureComponent {
  //即将渲染获取一个时间
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  //渲染完成后获取一个时间值
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log("HOME渲染时间", interval);
  }
  render() {
    return <h2>HOME</h2>;
  }
}

class About extends PureComponent {
  //即将渲染获取一个时间
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  //渲染完成之后获取一个使劲按
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`About渲染时间为: ${interval}`);
  }
  render() {
    return <h2>About </h2>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home />
        <About />
      </div>
    );
  }
}
