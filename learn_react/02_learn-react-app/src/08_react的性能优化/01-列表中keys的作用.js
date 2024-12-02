import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["《西游记》", "《天线宝宝》", "《猫和老鼠》", "《流浪地球》"],
    };
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {movies.map((item, index) => {
            return (
              <li key={index}>
                {index}-{item}
              </li>
            );
          })}
        </ul>
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          增加电影
        </button>
      </div>
    );
  }
  increment() {
    let newArr = this.state.movies;
    newArr.push("《流浪地球》");
    this.setState({ movies: newArr });
  }
}
