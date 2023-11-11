import { Link } from "react-router-dom"
import { GlobalStyle } from "../GlobalStyle"



export default function Home(){
  return(
    <>
      <GlobalStyle />

      <h1>Home page</h1>
      <Link to='/login'>Fazer login</Link><br/>
      <Link to='/signup'>Criar conta</Link><br/>
      <Link to='/feed'>Ir para o feed</Link> <br/>
      <Link to='/coment'>Ir para o comentario</Link> <br/>
      <Link to='/config'>Ir para as conffig</Link> <br/>

    </>
  )
}