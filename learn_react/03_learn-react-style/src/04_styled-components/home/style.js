import styled from 'styled-components'

export const HomeWrapper = styled.div`
 font-size: 50px;
 color: pink;
 .banner{
    background: orange;
 }
 span{
    color: green;
    &.active{
        color: red;
    }
    &.hover{
        color: saddlebrown;
    }
    &::after{
        content:"aaaa"
    }
 }
`


export const TitleWrapper = styled.div`
    color: ${props=>props.theme.themColor};
    background-color: ${props=>props.theme.background};
`