import { useContext,useEffect } from "react";
import { CopaContext } from "../../../Context";

import api from "../../../services/api";

import db from "../../../services/apifb"
import { collection, updateDoc,addDoc,where,doc } from "firebase/firestore"; 

import { Outlet, Link } from "react-router-dom";

const FormExplorarBolão = ()=>{


    const {users,userOn,setUserOn,search,setSearch,boloes} = useContext(CopaContext);
    let inputs = [];
    

    useEffect(()=>{
        const input = document.querySelector(".inputExplirarBolao")
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
            }
        })
    })
    
      //Pesquisa de Bolão
      const SearchBolao = (e)=>{
 
        let bolaoSearch = [];
        

          let inputText = document.querySelector(".formSearch input").value;
          inputText = inputText.split(" ").filter((e)=>e.length > 2)
          inputText.forEach((element,index) => {
            boloes.forEach((bolao)=>{
            if(bolao.nome.split(" ").filter((e) => e.length > 2 && e.toUpperCase() == element.toUpperCase()).length !== 0 ){
                bolaoSearch = [...bolaoSearch,bolao];
            }
            
            })
          })
          
          userOn.meusboloes.forEach((element)=>{
            bolaoSearch = bolaoSearch.filter((e)=> e.nome !== element);
          })
 
        bolaoSearch = bolaoSearch.filter(function(element, i) {
            return bolaoSearch.indexOf(element) === i;
        });
 

          setSearch(bolaoSearch);
      }

      //Verifica a chave e Salva solicitação


      const EnviarSolicitação = (e,bolao)=>{
        let userAdm = users.filter((user)=>user.id == bolao.adm)[0];
        let solicitacoes = [];
        let chave = e.target.previousSibling.previousSibling.value;

        console.log(userAdm)
        console.log(userAdm.solicitacoes)
        if(chave == bolao.chave){
            if(userAdm.solicitacoes == undefined || userAdm.solicitacoes.length == 0){
                    solicitacoes = [{
                        nome : `${userOn.username}`,
                        bolao: `${bolao.nome}`
                }
                ];
            }else{
                    solicitacoes = [...userAdm.solicitacoes.filter((e)=>e.nome !== userOn.username && e.bolao !== bolao.nome),{
                        nome : `${userOn.username}`,
                        bolao: `${bolao.nome}`
                        }]
            }
            
            
            updateDoc(doc(db, "users", `${userAdm.id}`), {
                solicitacoes : [...solicitacoes]
              })
            // api.patch(`/users/${userAdm.id}`,{
            //     solicitacoes : [...solicitacoes]
            //   })
              .then((response)=>{console.log(response)})
              .catch((error)=>{console.log(error)})

              let mensagem = e.target.parentElement.parentElement;
              mensagem.classList.remove("mensagem-red")
              mensagem.classList.add("mensagem-green");
              mensagem.classList.add("p4");
              mensagem.innerHTML = "Solicitação Enviada";

              setTimeout(()=>{
                setSearch("");
              },2000)
                
        }else{
            let mensagem = document.querySelector(".resultadoPesquisa .mensagem");
                mensagem.classList.remove("mensagem-green")
                mensagem.classList.add("mensagem-red");
                mensagem.classList.add("p4");
                mensagem.innerHTML = "Chave Incorreta";
        }

      }
    


    //   console.log(search)
      if(search === ""){
        return(
            <>
                <section className="form-container flex-collumn">
                    <h1>Explorar Bolão</h1>
                    <p className="subtitle">Encontre o Bolão por meio da Chave de entrada e envie a solicitação para participar!<br></br>Os bolões que você participa não serão exibidos</p>
                    <form className="flex-collumn formSearch">
                        <input className="input inputExplirarBolao" type="text" placeholder="Nome do Bolão"></input>                                         
                        <div>
                        <button type="button" className="primary-button" onClick={SearchBolao}>Procurar</button>
                        </div>
                    </form>
                </section>
                
            </>
        )
      }else if(search.length === 0){
        return(
            <>
                <section className="form-container flex-collumn">
                    <h1>Explorar Bolão</h1>
                    <p className="subtitle">Encontre o Bolão por meio da Chave de entrada e envie a solicitação para participar!<br></br>Os bolões que você participa não serão exibidos</p>
                    <form className="flex-collumn formSearch">
                        <input className="input inputExplirarBolao" type="text" placeholder="Nome do Bolão"></input>                                         
                        <div>
                        <button type="button" className="primary-button" onClick={SearchBolao}>Procurar</button>
                        </div>
                    </form>
                
                    <h2>Resultado da Pesquisa</h2>
                    <p className="subtitle mensagem-red">Bolão não encontrado.</p>
                </section>
                
            </>
        )
      }else{
        
      }
        return(
            <>
                <section className="form-container flex-collumn">
                    <h1>Explorar Bolão</h1>
                    <p className="subtitle">Encontre o Bolão por meio da Chave de entrada e envie a solicitação para participar!<br></br>Os bolões que você participa não serão exibidos.</p>
                    <form className="flex-collumn formSearch">
                        <input className="input inputExplirarBolao" type="text" placeholder="Nome do Bolão"></input>                                         
                        <div>
                        <button type="button" className="primary-button" onClick={SearchBolao}>Procurar</button>
                        </div>
                    </form>
                </section>

                <section className="form-container flex-collumn"> 
                <h2>Resultado da Pesquisa</h2>
                    <p className="subtitle">Insira a Chave de entrada correspondente ao Bolão para enviar a solicitação.</p>
                    
                    <ul className="resultadoPesquisa">


                        {
                            search.map((bolao)=>{
                            return(
                                <li className="flex-collumn">
                                    <p className="nomeBolao">{bolao.nome}</p>
                                    <input className="input" type="text" placeholder="Chave de entrada"></input>
                                    <p className="mensagem"></p>
                                    <button type="button" className="secundary-button" onClick = {(e)=> EnviarSolicitação (e,bolao)}>Enviar Solicitação</button>  
                                </li>
                            )
                            })
                        }
          
                    </ul>
                </section>
                    
                
                
                
            </>
        )
    
}

export default FormExplorarBolão;