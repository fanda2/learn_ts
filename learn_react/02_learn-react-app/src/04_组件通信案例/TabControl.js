import React, { Component } from "react";

import PropTypes from "prop-types";

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const { title } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        {title.map((item,index) => {
          return (
            <div
              key={item}
              className={`tab-item ${(index === currentIndex)? 'active' : ''}` }
              onClick={() => {
                this.btnClick(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
  btnClick(index){
    this.setState({
        currentIndex:index
    })

    const {itemClick}= this.props;
    itemClick(index);
  }
}

TabControl.propTypes={
    title:PropTypes.array.isRequired
}
  