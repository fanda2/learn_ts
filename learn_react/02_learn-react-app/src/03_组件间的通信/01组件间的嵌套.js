import React from 'react'

function Header(){
    return(
        <h1>header</h1>
    )
}

function Content(){
    return(
        <div>
            <h2>content</h2>
            <ul>
                <li>商品11111</li>
                <li>商品22222</li>
            </ul>
        </div>
    )
}


function Footer(){
    return(
        <h1>Footer</h1>
    )
}


export default function App(){
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}