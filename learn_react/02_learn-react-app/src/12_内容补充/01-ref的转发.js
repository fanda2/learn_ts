import React, { PureComponent,createRef, forwardRef } from 'react'

class Home extends PureComponent{
    render(){
        return <h2>This is Home</h2>
    }
}

const Profile=forwardRef(
    function(props,ref){
        return <h2 ref={ref}>Profile</h2>
    }
)

export default class App extends PureComponent{
    constructor(props){
        super(props);
        this.titleRef = createRef();
        this.homeRef = createRef();
        this.profileRef = createRef();
    }
    render(){
        return(
            <div>
                <h2 ref={this.titleRef}>Hello Ref</h2>
                <Home ref={this.homeRef}/>
                <Profile ref={this.profileRef}/>
                <button onClick={()=>this.printValue()}>打印</button>
            </div>
        )
    }
    printValue(){
        console.log("Home Ref",this.homeRef.current);
        console.log("Profile Ref",this.profileRef.current)
        console.log("Title Ref", this.titleRef.current)
    }
}