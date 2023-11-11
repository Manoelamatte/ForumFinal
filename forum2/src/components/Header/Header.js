import styled from "styled-components";
import Menu from "../Menu/Menu";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    box-shadow: 0px 0.1px 5px black;
    padding: 10px;
    background-color: rgba(236, 67, 153, 1);
`

export const LogoHeader = styled.img`
    height: 07vh;
    weight: 10vw;
`

function Header(){
    return(
        <StyledHeader>
            <Menu/>
            <LogoHeader/>

        </StyledHeader>
    )
}

export default Header