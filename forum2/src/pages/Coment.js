import styled from "styled-components"
import senac_logo from "../img/senac_logo.png"
import profile_pic from "../img/profile_pic.png"
import reticencias from '../img/reticencias.png'
import heart from '../img/heart.png'
import comment from '../img/comment.png'
import { GlobalStyle } from "../GlobalStyle"

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

const Posts = styled.div`
    padding-top: 2.5%;
     padding-left: 400px;
     @media (max-width: 700px) {
        padding-left: 40px;
    }
`
const ComentFora = styled.div`
    padding-top: 0.5%;
    margin-right: 42%;

`


const Post = styled.div`
     
     background-color: #44475A;
     width: 89%;
     height: 360px;
     margin-right: 0%;
     margin-left: 0%;
     margin-bottom: 15%;
     border-radius: 20px;
     border-style: solid;
     border-color: #6272A4;
     border-width: 4px;
     text-align:center;
     padding-right: 5%;
     padding-left: 5%;
     margin-bottom: 50px;
     padding-top: 0%;
`
const ComentDentro = styled.div`
     
     background-color: #44475A;
     width: 102%;
     height: 130px;
     margin-left: 60%;
     margin-bottom: 2px;
     border-radius: 20px;
     border-style: solid;
     border-color: #6272A4;
     border-width: 4px;
     text-align:center;
     padding-right: 10%;
     padding-left: 5%;
     padding-top: 0%;
`

const Username = styled.h2`
     color: white;
     display: block;
     text-align: left;
     display: flex;
     margin-top: 3%;
`

const UsernameComent = styled.p`
     color: white;
     display: block;
     text-align: left;
     font-weight: 100;
     display: flex;
     font-size: 15px;
     margin-top: 2%;
`

const PostInput = styled.textarea`
    margin-top: 2%;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    
`

const InputComent = styled.textarea`
    margin-top: 2%;
    width: 90%;
    height: 40px;
    margin-left: 5%;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    
`

const Container = styled.div`
     

`

const ImagemLogo = styled.img`
     width: 65%;
     margin: 10%;
`

const ImagemPerfil = styled.img`
     width: 45px;
     height: 45px;
     margin-top: 12px;
     margin-right: 10px;
     display: flex;
`

const Reticencias = styled.img`
     margin-left: 50%;
     height: 5px;
     margin-top: 35px;
`

const ReticenciasComent = styled.img`
     margin-left: 80%;
     height: 3px;
     margin-top: 35px;
`

const Perfil = styled.div`
     display: flex;
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

const Interacoes = styled.div`
     display: flex;
     float: right;
     gap: 20px;
`

const ImgInteracoes = styled.img`
     width: 45px;
`

const ImgInteracoesComent = styled.img`
     width: 45px;
     height: 40px;
    display: flex;
    align-items: center;
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

function Coment(props){

    return(
        <>
        <GlobalStyle />
        <Background>
          <Container>
               <StyledNav>
                    <ImagemLogo src={senac_logo} alt='Logo do senac'/>
                    <NavOptionsSelected>Feed</NavOptionsSelected>
                    <NavOptions>Intervenções</NavOptions>
                    <NavOptions>Perfil</NavOptions>
                    <NavOptions>Configurações</NavOptions>
                </StyledNav>
                <Posts>


                    <Post>
                         <Perfil>
                              <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                              <Username>Lucas Camargo Jentz</Username>
                              <Reticencias src={reticencias} alt='...'/>
                         </Perfil>
                         <PostInput type="text"/> 
                         <Interacoes>
                              <ImgInteracoes src={comment} alt=""/>
                              <ImgInteracoes src={heart} alt=""/>
                         </Interacoes> 
                    </Post>
               </Posts>
               <BotaoComentar type="submit" value="Responder"/>

            <ComentFora>
                <ComentDentro>
                         <Perfil>
                              <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                              <UsernameComent>Manuella Schmidt Pinheiro</UsernameComent>
                              <ReticenciasComent src={reticencias} alt='...'/>
                            <ImgInteracoesComent src={heart} alt=""/>
                         </Perfil>
                         
                         <InputComent type="text"/>
                        
                         
                </ComentDentro>
            </ComentFora>
            <ComentFora>
                <ComentDentro>      
                    <Perfil>
                              <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                              <UsernameComent>Rafael Franzon</UsernameComent>
                              <ReticenciasComent src={reticencias} alt='...'/>
                            <InputComent type="text"/> 
                         </Perfil>
                        <ImgInteracoesComent src={heart} alt=""/>
                </ComentDentro>
            </ComentFora>



          </Container>
        </Background>
        </>

    )
}

export default Coment