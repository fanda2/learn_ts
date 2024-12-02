import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数为：{this.state.count}</h2>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          数字增加
        </button>
      </div>
    );
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleEle = null;
    this.counterEle = null;
    this.counterRef = createRef();
  }
  render() {
    return (
      <div>
        {/* <h2 id="red" ref="titleRef">
          Hello React1111！
        </h2> */}

        <h2 id="red" ref={this.titleRef}>
          Hello React222
        </h2>

        <h2
          id="red"
          ref={(arg) => {
            this.titleEle = arg;
          }}
        >
          Hello React3333
        </h2>

        <button
          onClick={(e) => {
            this.changeMessage();
          }}
        >
          点击改变文字
        </button>

        <hr />

        {/* <Counter
          ref={(arg) => {
            this.counterEle = arg;
          }}
        /> */}
        <Counter ref={this.counterRef}/>

        <button onClick={(e) => this.btnClick()}>App中的Counter</button>
      </div>
    );
  }
  changeMessage() {
    //  使用方式一：字符串  已经不推荐使用！！！
    //   console.log(this.refs.ttileRef);

    //使用方式二：对象
    console.log(this.titleRef.current);
    this.titleRef.current.innerHTML ="这是改变后的文字";

    //使用方式三：函数
    console.log(this.titleEle);
    this.titleEle.current="这是改变后的文字333"

  }
  btnClick() {
    // console.log(this.counterEle);
    // this.counterEle.increment();

    console.log(this.counterRef.current);
    this.counterRef.current.increment();
  }
}
