import React, { PureComponent, memo } from "react";

const MemoHeader = memo(function Header() {
  console.log("Header组件被调用");
  return <h2>我是Header组件</h2>;
});

class Banner extends PureComponent {
  render() {
    console.log("Banner组件的 render被调用");
    return <h3>我是Banner组件</h3>;
  }
}

function ProductList() {
  console.log("ProductList组件 被调用");
  return (
    <div>
      <ul>
        <li>商品列表信息111</li>
        <li>商品列表信息222</li>
        <li>商品列表信息333</li>
        <li>商品列表信息444</li>
      </ul>
    </div>
  );
}

class Main extends PureComponent {
  render() {
    console.log("Main组件的 render被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

const MemoFooter = memo(function Footer() {
  console.log("Footer组件被调用");
  return <h1>这里是Footer组件</h1>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      message: "Hello memo",
    };
  }
  render() {
    console.log("App组件的 render被调用");
    return (
      <div>
        <h2>当前计数为：{this.state.count}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    );
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
