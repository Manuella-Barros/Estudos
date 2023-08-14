import { styled } from "styled-components";

export const Input = styled.input`
    /* margin-bottom: ${({theme}) => theme["escala-p"]};
    margin-top: 5px; */
    padding: 2px;
    border: 1px solid black;
    border-radius: 4px;
    color: black;


    &:hover,
    &:focus{
        outline: 0px;
        border-color: ${({theme}) => theme["first-color-2"]};
        box-shadow: 0px 0px 10px ${({theme}) => theme["second-color-1"]};
    }

    &::-webkit-inner-spin-button { 
        -webkit-appearance: none;  
    }
`

export const mainInput = styled.div`
    width: 18vw;
    margin: auto;
    margin-block: ${({theme}) => theme["escala-p"]};

    h3{
        text-align: left;
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-weight: bolder;
`