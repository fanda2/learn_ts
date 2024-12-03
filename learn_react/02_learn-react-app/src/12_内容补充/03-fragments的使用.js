//片段
import React, { PureComponent } from "react";
import { Fragment } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      friends: [
        { name: "andy", age: 13, height: 1.22 },
        { name: "same", age: 24, height: 1.77 },
      ],
    };
  }
  render() {
    return (
      //   <Fragment>
      //     <h2>当前计数为：{this.state.counter}</h2>
      //     <button onClick={(e) => this.btnClick()}>+1</button>
      //   </Fragment>

      //Fragment短语法, 注意：短语法不能添加属性
      <>
        <h2>当前计数为：{this.state.counter}</h2>
        <button onClick={(e) => this.btnClick()}>+1</button>
        <div>
          {this.state.friends.map((item, index) => {
            return (
              <Fragment key={item.name}>
                <h2>
                  {index}: {item.name}
                </h2>
                <p>{item.age}</p>
              </Fragment>
            );
          })}
        </div>
      </>
    );
  }
  btnClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
