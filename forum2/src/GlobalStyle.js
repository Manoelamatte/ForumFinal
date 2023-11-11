import { createGlobalStyle } from "styled-components";
import fundoBarbie from "./img/fundoBarbie.png"
import styled from "styled-components";
import FundoB from "./img/FundoB.png"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter Variable', sans-serif;
    }
`

export const ContainerGeradl2222 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 92vh; 
    background-image: url(${fundoBarbie});
`


export const GeralPost = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
    background-image:url(${FundoB});
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`