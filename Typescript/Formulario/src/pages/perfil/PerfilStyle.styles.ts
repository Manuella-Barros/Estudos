import { styled } from "styled-components";

export const PerfilStyle = styled.main`
`

export const PerfilContainer = styled.div`
    display: flex;
    justify-content: space-between;

    picture{
        width: 150px;
        height: 150px;
        overflow: hidden;
        
        :hover{
            transform: scale(1.1);
        }
        
        img{
            width: 100%;
            height: 100%;
        }
    }

    div{
        width: 55%;

        h3{
            text-align: left;
        }
    }
`