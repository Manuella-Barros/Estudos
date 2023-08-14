import { styled } from "styled-components";

export const ExternalWrapper = styled.article`
    display: grid;
    place-items: center;
    min-height: 100vh;
    background-color: ${({theme}) => theme["first-color-1"]};
`

export const InternalWrapper = styled.section`
    margin: auto;
    padding: ${({theme}) => theme["escala-m"]};
    background-color: ${({theme}) => theme["first-color-2"]};
    color: ${({theme}) => theme["neutral-color-3"]};
    border-radius: 20px;
    box-shadow: 0px 0px 20px ${({theme}) => theme["second-color-1"]};
    border: 1px solid black;
`