import styled from "styled-components"
import profile_pic from "../img/profile_pic.png"
// import reticencias from '../img/reticencias.png'
// import heart from '../img/heart.png'
// import comment from '../img/comment.png'
import { ContainerCenter, GeralPost, GlobalStyle } from "../GlobalStyle"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/Header/Header"



const Posts = styled.div`
    width: 60vw;
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 10px;
    padding: 30px;
    border-radius: 20px;
    gap: 20px;

     @media (max-width: 700px) {
        padding-left: 40px;
        width: 89%;
    }
`

export const ContainerPostCima = styled.div`
     height: 80vh;
     background-color: black;
`

export const ContainerPostInferior = styled.div`
     height: 100%;
     background-color: pink;
`

const Search = styled.input`
     background-color: rgba(255, 212, 234, 1);
     color: rgba(180, 0, 92, 1);
     resize: none;
     width: 85%;
     height: 25vh;
     border-radius: 10px;
     /* outline: none; */
     border: none;
     font-family: "Poppins", sans-serif;

     &:: placeholder{
     color: rgba(180, 0, 92, 1);
     font-weight: bold;
     }
     @media (max-width: 700px) {
          font-size: 14px;
      }
`

const Post = styled.div`
width: 50vw;
height: 25vh;
background-color: white;
align-items: center;
border-radius: 0.938rem;
margin: 10px;
     p{
          text-align:justify;
     }

     h4{
          text-align:left;
          margin-top:6px;
          margin-bottom:4px;
     }
`

const Username = styled.h2`
     color: pink;
     display: block;
     text-align: left;
     display: flex;
     margin-top: 2%;
     @media (max-width: 700px) {
          font-size: 22px;
          margin-top: 4%; 
      }
`

const PostInput = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    @media (max-width: 700px) {
     margin-top: 10px;
 }
    
`

const ImagemPerfil = styled.img`
     width: 45px;
     height: 45px;
     margin-top: 12px;
     margin-right: 10px;
     display: flex;
`


const Perfil = styled.div`
     display: flex;
`



const Submit = styled.input`
     padding: 6px;
     align-self: end;
     margin-right: 10.1vw;
     border: none;
     background-color: rgba(236, 67, 153, 1);
     padding: 8px;
     width: 8vw;
     border-radius: 5px;
     box-shadow: 1px 1px 5px black;
     color: white;
     font-size: 12px;
`

export const AreaTitulo = styled.div`
    color: white;
    background-color: rgba(236, 67, 153, 1);
    font-family: "Poppins", sans-serif;
    width: 55vw;
    height: 08vh;
    border-radius: 20px;
    justify-content: start;
    outline: 0;
    border: none;
    display: flex;
`
export const CardBolinha = styled.div`
  width: 03.5vw;
  height: 07vh;
  border-radius: 100%;
  margin: 03px;
  background-color: white;
`

export const InputTitulo = styled.input`
    width: 30vw;
    border-radius: 5px;
    margin-top: 03px;
    outline: 0;
    border: none;
    background: transparent;

    &:: placeholder{
        color: white;

    }
`


function Feed(props){
     const navigate = useNavigate()
     const [posts, setPosts] = useState([])

     const [titulo, setTitulo] = useState("")
     const [conteudo, setConteudo] = useState("")

     useEffect(()=>{
          const token = sessionStorage.getItem("token")
          if (!token){
              navigate("/")
          }
      }, [navigate])


     axios.get("https://forum-backend-3zv0.onrender.com/post/all")
     .then((response) => {
          console.log(response.data)
          setPosts(response.data)
          console.log(posts)
     })

     

     function criarPost(){
          console.log(titulo, conteudo)

          const token = sessionStorage.getItem("token")

          axios.post("https://forum-backend-3zv0.onrender.com/post/create", {"title": titulo, "content":conteudo, "image":"123", "hashtag":["teste"]}, {headers:{"Authorization":token}})
          .then((response) => {
               console.log(response)
          })
          .catch((error) =>{
               console.log(error)
          })
     }
     
    return(
        <>
        <GlobalStyle />
        <Header/>
        <GeralPost>
          <ContainerCenter>

               
               <Posts>
                    
                    <AreaTitulo>
                         <CardBolinha>

                         </CardBolinha>

                         <InputTitulo value={titulo} placeholder="Titulo" onChange={e => setTitulo(e.target.value)} />
                    </AreaTitulo>


                    <Search value={conteudo} placeholder="Conteúdo" onChange={e => setConteudo(e.target.value)}/>
                    <Submit type="submit" value="Criar post" onClick={criarPost}/>

                    {/* <Post>
                         <Perfil>
                              <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                              <Username>Lucas Camargo Jentz</Username>
                              <Reticencias src={reticencias} alt='...'/>
                              
                         </Perfil>
                    </Post> */}

               </Posts>
               {posts.slice(0).reverse().map(postagem => (
                         <>
                             <Post>
                                   <Perfil>
                                        <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                                        <Username>{postagem.creator_username}</Username>
                              
                                   </Perfil>
                                   <h4 >{postagem.post_title}</h4>
                                   <p>{postagem.post_content}</p>
                              </Post> 
                         </>
                    ))}

          </ContainerCenter>
        </GeralPost>
        </>

    )
}

export default Feed