import React from "react"
import './css/index.css'

// import App from "./01_组件的定义方式/App"
// import App from "./01_组件的定义方式/02_render的返回值";

// import App from "./02_组件的生命周期/App";

// import App from "./03_组件间的通信/01组件间的嵌套"
// import App from "./03_组件间的通信/02父传子通信-类组件"
// import App from "./03_组件间的通信/03父传子通信-函数组件"
// import App from "./03_组件间的通信/04父传子通信-参数验证"
// import App from "./03_组件间的通信/05子传父通信-函数传递"

// import App from "./04_组件通信案例/App"

// import App from "./05_react中实现slot/App"


// import App from "./06_跨组件的通信/01跨组件通信-props"
// import App from "./06_跨组件的通信/02跨组件通信-context"
import App from "./06_跨组件的通信/03跨组件通信-context函数组件"




import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App name="fanda"/>);

// ReactDOM.render(<App/>,document.getElementById("root"));