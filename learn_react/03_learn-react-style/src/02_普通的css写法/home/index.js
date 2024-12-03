import React, { PureComponent } from "react";

import "./style.css"

export default class index extends PureComponent{
    render(){
        return(
            <div>
                <h2 className="title">这是Home组件中的title内容部分</h2>
                <p className="content">这里是描述内容</p>
            </div>
        )
    }
}