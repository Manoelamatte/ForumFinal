import { GlobalStyle } from "../GlobalStyle"
import { ContainerGeradl2222 } from "../GlobalStyle"

import styled from "styled-components"
import { useState } from "react"

import BarbieSpeak from "../img/BarbieSpeak.png"
import LogoSpeakOut from "../img/LogoSpeakOut.png"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"


export const FormTitle = styled.h1`
    color: #FF79C6;
    text-align: center;
    padding-top: 60px;
    margin-bottom: 18px;
    
`

export const FormCard = styled.div`
    width: 70vw;
    height: 85vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-left: 200px;
    margin-top: 10px;
`

export const CardTitle = styled.h2`
    color: #f448A0;
  padding: 2%;
  padding-left: 47%;
  font-family: Arial, Helvetica, sans-serif;
`

export const FormInput = styled.input`
    width: 70%;
    border: none;
    border-radius: 20px;
    padding: 15px;
    background: #ffaac2;
    font-size: 12pt;
    outline: none;
    box-sizing: border-box;
`
export const H1 = styled.h1`
  color: white;
  padding-left: 08%;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 08%;
  letter-spacing: 1px;
`

export const H3 = styled.h3`
    color: white;
    padding: 15%;
    padding-left: 15%;
    font-family: Arial, Helvetica, sans-serif;
`

export const Submit = styled.input`
    width: 30%;
    padding: 12px;
    margin: 05px;
    margin-left: 130px;
    border: none;
    border-radius: 10px;
    letter-spacing: 3px;
    background-color: #f448A0;
    cursor: pointer;
    color: white;
    box-shadow: 0px 10px 40px -12px  #3D0000;
`

export const Background = styled.div`
    background-color: #282A36;
    width: 100%;
    min-height: 100vh;
`

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    box-shadow: 0px 0.1px 5px black;
    padding: 10px;
    background-color: rgba(236, 67, 153, 1);
`

export const StyledLogo = styled.img`
height: 07vh;
weight: 10vw;
`

export const CardText = styled.h4`
    color: #f448A0;
    text-align: left;
    margin-bottom: 10px;
    margin-top: -2px;
    margin-left: 75px;
    font-weight: 300;
`

const LinkS = styled(Link)`
    color: #f448A0;
    text-align: left;
`

export const DireitaLogin = styled.div`
  width: 35vw;
  height: 80vh;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const EsquerdaLogin = styled.div`
   width: 30vw;
  height: 80vh;
  flex-direction: column;
  background-color: #f448A0;
  border-radius: 10%;
`

export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 80px;
    row-gap:17px;
    padding-top: 15px;
`

export const ImagDireira = styled.img`
    margin-left: 20%;
    margin-top: 20px;
    height: 15vh;
    weight: 15vw;
`

export default function Login() {

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [out, setOut] = useState("")
    const navigate = useNavigate()

    function logar(){
        console.log(nome, senha)
        
        axios.post("https://forum-backend-3zv0.onrender.com/user/login", {"username": nome, "password": senha})
        .then((response) => {
            setOut("Logado com sucesso!")
            sessionStorage.setItem("token", response.data.token)
            navigate("feed")

            
        })
        .catch((error) => {
            setOut("Erro! Há algo errado!")
        })

    }

    return (
        <>
            <GlobalStyle />
            <StyledHeader>
                <StyledLogo src={BarbieSpeak} />
            </StyledHeader>
            <ContainerGeradl2222>
                <FormCard>

                    <EsquerdaLogin>
                        <H1>
                        Bem vindo
                        de volta!
                        </H1>

                        <H3>
                        Acesse a sua conta agora mesmo!
                        </H3>
                    </EsquerdaLogin>

                    <DireitaLogin>
                        <ImagDireira src={LogoSpeakOut}/>
                        <CardTitle>Login</CardTitle>
                        
                       <FormStyle>
                        <FormInput type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} />
                       
                        <FormInput type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                        </FormStyle>
                        <CardText>{out}</CardText>
                        <Submit type="submit" value="Enviar" onClick={logar} />
                        <LinkS to="signup">Criar conta</LinkS>
                    </DireitaLogin>
                </FormCard>
            </ContainerGeradl2222>
        </>
    )
}