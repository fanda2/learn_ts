import React from "react";

function Children(props){
    const {name,age}=props;
    return(
        <div>
            <h1>子组件接收到父组件的值：{"name："+name+"   age："+age}</h1>
        </div>
    )
}


export default function App(){
    return(
        <div>
            <h1>使用函数式租价</h1>
            <h2>以下是子组件</h2>
            <Children name="Tony" age={34} />
        </div>
    )
}