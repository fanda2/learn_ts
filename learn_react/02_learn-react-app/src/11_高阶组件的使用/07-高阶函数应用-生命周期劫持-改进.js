import React, { PureComponent } from "react";

function WithRenderTime(WrappedComponent) {
  return class extends PureComponent {
    componentWillMount() {
      this.beginTime = Date.now();
    }
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}渲染时间为:${interval}`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>Anout</h2>
        <ul>
          <li>文本内容111</li>
          <li>文本内容222</li>
        </ul>
      </div>
    );
  }
}

const RenderTimeHome = WithRenderTime(Home);
const RenderTimeAbout = WithRenderTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>渲染时间对比</h2>
        <RenderTimeHome />
        <RenderTimeAbout />
      </div>
    );
  }
}
