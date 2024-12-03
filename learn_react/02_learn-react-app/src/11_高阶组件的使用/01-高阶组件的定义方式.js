import React, { PureComponent } from 'react'

class App extends PureComponent{
    render(){
        return(
            <div>
                App {this.props.name}
            </div>
        )
    }
}

function enhanceComponent2(WrappedComponent){
    function NewComponent(props){
        return(
            <WrappedComponent {...props}/>
        )
    }
    return NewComponent
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;