
// import React,{Component} from "react"
import React from "react"

//1.类组件的定义方式

// export default class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             message:"你好呀，这里的写法是类组件的定义方式"
//         }
//     };
//     render(){
//         return(
//             <div>
//                 <h2>类组件的定义方式</h2>
//                 <div>Hello React,我是类组件</div>
//                 <h1>{this.state.message}</h1>
//             </div>
//         )
//     };
// }


//2.函数式组件定义
/**
 * 1.没有this对象
 * 2.没有内部状态
 */
export default function App(){
    return(
        <div>
            <h2>这是函数式组件的定义方式</h2>
            <div>Hello React!!!</div>
            <h3>没有繁琐的定义过程，简单明了，没有this对象</h3>
        </div>
    )
}