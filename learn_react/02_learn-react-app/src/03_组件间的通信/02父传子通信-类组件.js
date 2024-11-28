import React,{Component} from "react";

class Children extends Component{

    //默认使用构造函数传参，省略后
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        const{name,age} = this.props;
        return(
            <div>
                <h1>子组件数据展示：{"name："+name+"  age："+age}</h1>
            </div>
        )
    }
}


export default class App extends Component{
    render(){
        return(
            <div>
                <h1>引用子组件</h1>
                <Children name="fanda" age={2222}/>
            </div>
        )
    }
}

