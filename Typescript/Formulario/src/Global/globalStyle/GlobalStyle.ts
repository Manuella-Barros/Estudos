import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: white;
        font-weight: 100;
        transition: 200ms;
        text-align: center;
    }
    h1{
        font-size: ${({theme}) => theme["escala-g"]};
        font-family: ${({theme}) => theme["font-2"]};
    }
    h2{
        font-size: ${({theme}) => theme["escala-m"]};
        font-family: ${({theme}) => theme["font-2"]};    
    }
    h3, button, input{
        font-size: ${({theme}) => theme["escala-p"]};
        font-family: ${({theme}) => theme["font-2"]};
    }
`