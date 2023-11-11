import { ContainerGeradl2222, GlobalStyle } from "../GlobalStyle"

import styled from "styled-components"

import BarbieSpeak from "../img/BarbieSpeak.png"
import LogoSpeakOut from "../img/LogoSpeakOut.png"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { CardTitle, FormInput, FormStyle, StyledHeader, StyledLogo } from "./Login"

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
export const EsquerdaCard = styled.div`
  width: 35vw;
  height: 80vh;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const LogoCadastro = styled.img`
  padding-top: 20px;
  padding-left: 100px;
  height: 15vh;
  weight: 15vw;
`

export const CardText = styled.h4`
    color: #f448A0;
    text-align: left;
    margin-bottom: 10px;
    margin-top: -2px;
    margin-left: 75px;
    font-weight: 300;
`

export const Submit = styled.input`
    width: 30%;
    padding: 12px;
    margin: 05px;
    margin-left: 100px;
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
    min-height: 87.4vh;
`

export const DireitaCad = styled.div`
width: 30vw;
  height: 80vh;
  flex-direction: column;
  background-color: #f448A0;
  border-radius: 10%;
`
export const ImagemSpeakCadastro = styled.img`
    padding-left: 60px;
    height: 40vh;
    weight: 40vw;
    padding-top: 10%;
`

const LinkS = styled(Link)`
    color:#f448A0;
    text-align: left;
`
export const TituloCadastro = styled.h1`
  color: white;
  padding-left: 28%;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 10%;
  letter-spacing: 1px;
`


export const CardTitleCadastro = styled.h2`
    color: #f448A0;
  padding: 2%;
  padding-left: 37%;
  font-family: Arial, Helvetica, sans-serif;
`


export default function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [out, setOut] = useState("")



    function criar(){
        console.log(nome, email, senha)

        axios.post("https://forum-backend-3zv0.onrender.com/user/signup", {"username": nome, "password": senha, "email": email})
        .then((response) => {
            console.log(response)

            setOut("Conta criada com sucesso")
        })
        .catch((error) => {
            setOut("Erro! Há algo errado!")
        })
    }

    return (

        <>
            <GlobalStyle />
            <StyledHeader>
                <StyledLogo src={BarbieSpeak}/>
            </StyledHeader>
            <ContainerGeradl2222>
                <FormCard>
                    <EsquerdaCard>

                    <LogoCadastro src={LogoSpeakOut}/>
                    
                    <CardTitleCadastro>Cadastrar</CardTitleCadastro>
                   
                    <FormStyle>
                        <FormInput type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} />
                        
                        <FormInput type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        
                        <FormInput type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)}/>
                    </FormStyle>

                    <CardText>{out}</CardText>
                    <Submit type="submit" value="Cadastrar" onClick={criar}/>
                    <LinkS to="/">Fazer login</LinkS>
                    </EsquerdaCard>

                    <DireitaCad>
                        <TituloCadastro>
                            Oi, Barbie
                        </TituloCadastro>

                        <ImagemSpeakCadastro src={BarbieSpeak}/>
                    </DireitaCad>
                </FormCard>
            </ContainerGeradl2222>
        </>
    )
}

