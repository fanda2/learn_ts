import React, { Component } from "react";
import TabContral from "./TabControl";
import "./style.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ["新款", "精选", "流行", "简约"],
      contentTitle: "新款",
    };
  }
  render() {
    const { titles, contentTitle } = this.state;
    return (
      <div>
        <TabContral
          itemClick={(index) => {
            this.itemClick(index);
          }}
          title={titles}
        />
        <div className="contnet">{contentTitle}</div>
      </div>
    );
  }
  itemClick(index) {
    this.setState({
      contentTitle: this.state.titles[index],
    });
  }
}
