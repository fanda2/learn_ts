import React, { PureComponent } from "react";

import "./style.css"


export default class index extends PureComponent {
    render() {
      return (
        <div>
          <h2 className='title'>这个是Profile组件</h2>
          <div className='profile'>
              <ul>
                  <li>列表内容1111</li>
                  <li>列表内容2222</li>
                  <li>列表内容13333</li>
              </ul>
          </div>
        </div>
      )
    }
  }
  