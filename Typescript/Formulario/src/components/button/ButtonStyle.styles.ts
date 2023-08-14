import { styled } from "styled-components";

export const Button = styled.button`
    background-color: ${({theme}) => theme["second-color-2"]};
    width: 80%;
    border-radius: 5px;
    width: 18vw;
    padding-block: 2px;
    outline: 0;
    border: 1px solid black;
    font-weight: bold;
    
    &:hover{
        background-color: ${({theme}) => theme["second-color-1"]};
    }
`