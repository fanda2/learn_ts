import React, { PureComponent } from "react";

// PureComponent是React中的一个特殊组件类，用于优化性能。
// 当组件的props或state没有变化时，PureComponent会自动阻止组件的重新渲染，从而减少不必要的计算和DOM更新，提高应用性能。
// PureComponent通过浅比较props和state来决定是否需要重新渲染组件‌

function Header() {
  console.log("Header组件被调用");
  return <h2>我是Header组件</h2>;
}

class Banner extends PureComponent {
  render() {
    console.log("Banner组件的 render 被调用");
    return <h3>我是Banner组件</h3>;
  }
}

function ProductList() {
  console.log("ProductList 组件被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
    </ul>
  );
}

class Main extends PureComponent {
  render() {
    console.log("Main组件的 render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}

function Footer() {
  console.log("Footer 组件被调用");
  return <h1>这是Footer组件</h1>;
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("APP组件的 render 被调用");
    return (
      <div>
        <h2>当前计数为： {this.state.count}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          ++
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
}
