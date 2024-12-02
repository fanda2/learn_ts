import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "leilei", age: 99 },
        { name: "fanda", age: 22 },
        { name: "lucy", age: 56 },
      ],
    };
  }
  render() {
    const { friends } = this.state;
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {friends.map((item, index) => {
            return (
              <li key={index}>
                姓名：{item.name} 年龄：{item.age}
                <button
                  onClick={() => {
                    this.incrementAge(index);
                  }}
                >
                  年龄加一
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            this.inserState();
          }}
        >
          插入数据
        </button>
      </div>
    );
  }
  incrementAge(index) {
    let newArr = [...this.state.friends];
    console.log("DsdsdsDD",newArr[index])
    newArr[index].age ++;
    this.setState({
      friends: newArr,
    });
  }
  inserState() {
    let newArr = [...this.state.friends];
    // let newArr = this.state.friends;   //直接写无法实现插入数据，也就是state无法改变
    newArr.unshift(this.generatePerson());
    // console.log("NewState",newArr) 
    this.setState({ friends: newArr });
  }
  generateRandomName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let name = "";
    for (let i = 0; i < Math.floor(Math.random() * 5) + 3; i++) {
      // 生成3到7个字符的名字
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return name;
  }

  generateRandomAge() {
    return Math.floor(Math.random() * (100 - 18 + 1)) + 18; // 随机生成18到100之间的年龄
  }

  generatePerson() {
    const name = this.generateRandomName();
    const age = this.generateRandomAge();
    console.log("DD", { name: name, age: age });
    return {
      name: name,
      age: age,
    };
  }
}
