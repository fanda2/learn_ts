import React, { Component } from "react";

function Header() {
  console.log("Header组件调用");
  return <h2>这是Header组件内容</h2>;
}

class Banner extends Component {
  render() {
    console.log("banner组件 render被调用");
    return <h2>这是我都banner组件</h2>;
  }
}

function ProductList() {
  console.log("productList组件被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  );
}

class Main extends Component {
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
  return <h2>这里是Footer组件</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("App组件的 render 被调用");
    return (
      <div>
        <h2>当前计数为：{this.state.count}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          点击数字增加
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

//上面组件加载执行结果。根据结果来看，调用是顺序调用的，调用组建后，若组件中有子组件会直接加载子组件，直到加载完毕后再加载下一个组件
// App组件的 render 被调用
// Header组件调用
// Main组件的 render 被调用
// banner组件 render被调用
// productList组件被调用
// Footer 组件被调用
