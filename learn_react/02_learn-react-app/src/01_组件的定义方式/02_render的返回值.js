import React, { Component } from 'react'

const Container=(props)=>{
    return(
        <div style={{color:'red'}}>{props.children}</div>
    )
}

export default class App extends Component{
    render(){
        return(
            <div>
                <Container>这是内部的值，传递给组件展示</Container>
            </div>
        )
    }
}