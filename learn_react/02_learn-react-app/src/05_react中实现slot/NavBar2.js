import React, { Component } from "react";

export default class NavBar2 extends Component {
  render() {
    const { leftslot, centerslot, rightslot } = this.props;
    return (
      <div className="navbar">
        <div className="nav-left">{leftslot}</div>
        <div className="nav-center">{centerslot}</div>
        <div className="nav-right">{rightslot}</div>
      </div>
    );
  }
}
