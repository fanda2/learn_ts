import React,{Component} from "react";

class CountBtn extends Component{
    render(){
        const {doClick} = this.props;
        return(
            <button onClick={doClick}>点击加一</button>
        )
    }
}

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
    render(){
        return(
            <div>
                <h1>当前计算为：{this.state.counter}</h1>
                <button onClick={()=>{this.increment()}}>+1</button>
               

               <CountBtn doClick={()=>{this.increment()}}/>

            </div>
        )
    }
    increment(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}