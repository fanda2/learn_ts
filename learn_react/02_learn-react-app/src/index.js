import React from "react"
import './css/index.css'

// 01_组件的定义方式
// import App from "./01_组件的定义方式/App"
// import App from "./01_组件的定义方式/02_render的返回值";


// 02_组件的生命周期
// import App from "./02_组件的生命周期/App";


// 03_组件间的通信
// import App from "./03_组件间的通信/01组件间的嵌套"
// import App from "./03_组件间的通信/02父传子通信-类组件"
// import App from "./03_组件间的通信/03父传子通信-函数组件"
// import App from "./03_组件间的通信/04父传子通信-参数验证"
// import App from "./03_组件间的通信/05子传父通信-函数传递"

// 04_组件通信案例
// import App from "./04_组件通信案例/App"


// 05_react中实现slot
// import App from "./05_react中实现slot/App"


// 06_跨组件的通信
// import App from "./06_跨组件的通信/01跨组件通信-props"
// import App from "./06_跨组件的通信/02跨组件通信-context"
// import App from "./06_跨组件的通信/03跨组件通信-context函数组件"
// import App from "./06_跨组件的通信/04跨组件通信-多个context"


// 07_setState的使用
// import App from "./07_setState的使用/01为什么要使用setState"
// import App from "./07_setState的使用/02setState是异步更新"
// import App from "./07_setState的使用/03setState是同步更新"
// import App from "./07_setState的使用/04setState数据合并"
// import App from "./07_setState的使用/05setState本身合并"


// 08_react的性能优化
// import App from  "./08_react的性能优化/01-列表中keys的作用"
// import App from "./08_react的性能优化/02-列表中嵌套render的调用"
// import App from "./08_react的性能优化/03-shouldComponentUpdate"
// import App from "./08_react的性能优化/04-PureComponent"
// import App from "./08_react的性能优化/05-memo的使用"


// 09_前面知识点补充
// import App from "./09_前面知识点补充/01-setState不可变的力量"
// import App from "./09_前面知识点补充/02-全局事件传递"


// 10_受控组件与非受控组件
// import App from "./10_受控组件和非受控组件/01-refs的使用"
// import App from "./10_受控组件和非受控组件/02-受控组件的基本使用"
// import App from "./10_受控组件和非受控组件/03-受控组件-select使用"
// import App from "./10_受控组件和非受控组件/04-受控组件-多个输入"
// import App from  "./10_受控组件和非受控组件/05-非受控组件的使用"

// 11_高阶组件的使用
// import App from "./11_高阶组件的使用/01-高阶组件的定义方式"
// import App from "./11_高阶组件的使用/02-高阶组件的应用-增强props"
// import App from "./11_高阶组件的使用/03-高阶组件应用-增强props默认"
// import App from "./11_高阶组件的使用/04-高阶组件应用-增强props改进"
// import App  from "./11_高阶组件的使用/05-高阶组件的应用-鉴权操作"
// import App  from "./11_高阶组件的使用/06-高阶函数应用-生命周期劫持-默认"
// import App  from "./11_高阶组件的使用/07-高阶函数应用-生命周期劫持-改进"


// 12_内容补充
// import App from "./12_内容补充/01-ref的转发"
// import App from "./12_内容补充/02-protiles的使用"
// import App from "./12_内容补充/03-fragments的使用"
import App from "./12_内容补充/04-strictMode的使用"






import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App name="fanda"/>);

// ReactDOM.render(<App/>,document.getElementById("root"));