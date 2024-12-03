import React from 'react';
import ReactDOM from 'react-dom/client';

// 01_内联样式
// import App from "./01_内联样式/App"


// 02_普通的css写法
// import App from "./02_普通的css写法/app"

// 03_css-modules
// import App from "./03_css-modules/app"



//04_styled-components
import App from "./04_styled-components/app"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
