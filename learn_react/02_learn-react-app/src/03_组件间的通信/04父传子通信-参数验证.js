import React from "react";
import propTypes from 'prop-types'

function Children(props){
    const{name,age,height,names}=props;
    return(
        <div>
            <h1>子组件展示数据：{"name:"+name+" age:"+age+"   身高："+height}</h1>

            <h2>姓名列表</h2>
            <ul>
                {
                    names.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

Children.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    height:propTypes.number,
    names:propTypes.array
}



export default function App(){
    return(
        <div>
            <h1>引用子组件</h1>

            <Children name="Jack" age={23} height={1.66} names={["张三","李四","王五","李敏"]}/>

            <Children name="Blacce" age={21} height={1.99} names={["steven","tom","bob","xx"]}/>
        </div>
    )
}