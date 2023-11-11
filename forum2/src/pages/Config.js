import styled from "styled-components"
import senac_logo from "../img/senac_logo.png"
import { GlobalStyle } from "../GlobalStyle"
import olho from "../img/olho.png"
import botao from "../img/botao.png"
import lua from "../img/lua.png"


const Background = styled.div`
    background-color: #282A36;
    width: 100%;
    min-height: 100vh;
`

const StyledNav = styled.nav`
    
    background-color: #202225;
    height: 100vh;
    width: 300px;
    border-radius: 0px 20px 20px 0px;
    position: fixed;
    @media (max-width: 700px) {
        display: none;
    }
`

const Post = styled.div`
     
     background-color: #44475A;
     width: 80%;
     height: 20vh;
     border-radius: 10px;
     border-style: solid;
     border-color: #6272A4;
     border-width: 4px;
     text-align:center;
`

const Posts = styled.div`
    padding-top: 4%;
     padding-left: 400px;
     @media (max-width: 700px) {
        padding-left: 40px;
    }
`

const Posts2 = styled.div`
    padding-top: 8%;
     padding-left: 400px;
     @media (max-width: 700px) {
        padding-left: 40px;
    }
`
const Post2 = styled.div`
     
     background-color: #44475A;
     width: 80%;
     height: 20vh;
     border-radius: 10px;
     border-style: solid;
     border-color: #6272A4;
     border-width: 4px;
     text-align:center;
`





const Container = styled.div`
     

`

const ImagemLogo = styled.img`
     width: 65%;
     margin: 10%;
`

const ImagemOlho = styled.img`
    width: 10%;
    margin-right: 80%;
    margin-top: 3%;
`

const TextOlho = styled.h1`
    color: white;
    text-align: center;
    margin-top: -70px;
    font-size: 16px;
    margin-right: 240px;
    font-weight: 100;
`

const TextBotao = styled.img`
    margin-top: -70px;
    margin-left: 640px;
`

const NavOptions = styled.h3`
     color: white;
     margin-top: 15%;
     margin-bottom: 15%;
     margin-left: 10%;
     margin-right: 25%;
     border-bottom: 3px solid #FF79C6;
     padding-bottom: 5%;
     font-weight: 300;
`

const NavOptionsSelected = styled.h3`
     color: white;
     margin-top: 15%;
     margin-bottom: 15%;
     margin-left: 10%;
     margin-right: 25%;
     border-bottom: 3px solid #FF79C6;
     padding-bottom: 5%;
     font-weight: 700;
`


export const BotaoComentar = styled.input`
    display: block;
    width: 15%;
    height: 40px;
    font-size: 20px;
    font-weight: 400;
    background-color: #50FA7B;
    border-radius: 20px;
    border-style: none;
    margin-left: 27%;
    margin-top: -30px;
    
`

export const Submit = styled.input`
    display: block;
    width: 20%;
    height: 60px;
    font-size: 14px;
    background-color: #FF79C6;
    border-radius: 20px;
    margin-bottom: 20px;
    border-style: none;
    margin-left: 70%;
    margin-top: 11%;
    font-size: 300%;
`


function Config(props) {

    return (
        <>
            <GlobalStyle />
            <Background>
                <Container>
                    <StyledNav>
                        <ImagemLogo src={senac_logo} alt='Logo do senac' />
                        <NavOptionsSelected>Feed</NavOptionsSelected>
                        <NavOptions>Intervenções</NavOptions>
                        <NavOptions>Perfil</NavOptions>
                        <NavOptions>Configurações</NavOptions>
                    </StyledNav>

                <Posts2>
                    <Post2>
                        <ImagemOlho src={olho} alt='Olho cedo' />
                        <TextOlho>Leitor de tela</TextOlho>
                        <TextBotao src={botao} alt="botão"/>
                    </Post2>
                </Posts2>

                
                <Posts>
                    <Post>
                        <ImagemOlho src={lua} alt='Olho cedo' />
                        <TextOlho>Alto Contraste</TextOlho>
                        <TextBotao src={botao} alt="botão"/>
                    </Post>
                </Posts>

                
                <Submit type="submit" value="Alterar" />

                </Container>
            </Background>
        </>

    )
}

export default Config