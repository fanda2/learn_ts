import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruits: "origin",
    };
  }
  render() {
    return (
      <div>
        {/* 受控组件 */}
        <form name="selectForm" onSubmit={(e) => this.handSubmit(e)}>
          <select
            name="fruitd"
            onChange={(e) => this.changeOption(e)}
            value={this.state.fruits}
          >
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <input type="submit" value="提交" onClick={(e) => this.btnClick()} />
        </form>
      </div>
    );
  }
  handSubmit(e) {
    e.preventDefault();
  }
  changeOption(e) {
    console.log(e.target.value);
    this.setState({
      fruits: e.target.value,
    });
  }
  btnClick() {
    console.log("当前数据", this.state.fruits);
  }
}
