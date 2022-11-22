import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

import db from "../../services/apifb"
import { collection, updateDoc,addDoc,where,doc } from "firebase/firestore"; 

import { Outlet, Link } from "react-router-dom";
import MenuBolão from "../MenuBolão";

 


const Notifications = ()=>{
    const {users,userOn,setUserOn,boloes,setBoloes} = useContext(CopaContext);


    const AceitarSolicitacao = (e,solicitacao)=>{
        let bolao = boloes.filter((bolao)=> bolao.nome == solicitacao.bolao)[0];
        let aux;
        console.log(bolao)
        if(bolao.classificacao == undefined || bolao.classificacao.length == 0){
            bolao.classificacao = [{
                nome :`${solicitacao.nome}`,
                pontuacao : [0,0,0,0,0,0,0,0]
            }];
        }else{
            bolao.classificacao = [...bolao.classificacao,{
                nome :`${solicitacao.nome}`,
                pontuacao : [0,0,0,0,0,0,0,0]
            }];
        }
        
        updateDoc(doc(db, "boloes", `${bolao.id}`), {
            classificacao : [...bolao.classificacao]
          })
        // api.patch(`/boloes/${bolao.id}`,{
        //     classificacao : [...bolao.classificacao]
        //   })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          aux = boloes;
          aux.forEach((e,index)=>{
            if(e.nome === bolao.nome)
                aux[index] = bolao;
          })
          setBoloes(aux)

          let userAux = userOn;
          userAux.solicitacoes =  userOn.solicitacoes.filter((e)=> e.nome !== solicitacao.nome && e.bolao == solicitacao.bolao);
          setUserOn(userAux);

          updateDoc(doc(db, "users", `${userOn.id}`), {
            solicitacoes : userAux.solicitacoes
          })
        //   api.patch(`/users/${userOn.id}`,{
        //     solicitacoes : userAux.solicitacoes
        //   })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          let user = users.filter((user)=> user.username == solicitacao.nome)[0];
          
          updateDoc(doc(db, "users", `${user.id}`), {
            meusboloes : [...user.meusboloes,solicitacao.bolao]
          })
        //   api.patch(`/users/${user.id}`,{
        //     meusboloes : [...user.meusboloes,solicitacao.bolao]
        //   })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          let mensagem = e.target.parentElement;
              mensagem.classList.remove("mensagem-red")
              mensagem.classList.add("mensagem-green");
              mensagem.classList.add("p4");
              mensagem.innerHTML = "Jogador adicionado no Bolão!";
          
    }

    const NegarSolicitacao = (e,solicitacao)=>{

          let userAux = userOn;
          userAux.solicitacoes =  userOn.solicitacoes.filter((e)=> e.nome !== solicitacao.nome && e.bolao == solicitacao.bolao);
          console.log(userAux.solicitacoes);
          console.log(userAux)
          setUserOn(userAux);

        
          updateDoc(doc(db, "users", `${userOn.id}`), {
            solicitacoes : userAux.solicitacoes
          })
        //   api.patch(`/users/${userOn.id}`,{
        //     solicitacoes : userAux.solicitacoes
        //   })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          let mensagem = e.target.parentElement;
              mensagem.classList.remove("mensagem-green")
              mensagem.classList.add("mensagem-red");
              mensagem.classList.add("p4");
              mensagem.innerHTML = "Solicitação Recusada";
    }

    // let nomeBolao = [];
    // let solicitacoes
    // userOn.admboloes.forEach((element,index) => {
    //     boloes.forEach((bolao)=>{
    //     if(element == bolao.nome && bolao.solicitacoes.length !== 0)
    //         admBoloes = [...admBoloes,bolao];
    //     })
    // })

    // console.log(admBoloes)

if(userOn.solicitacoes == undefined || userOn.solicitacoes.length == 0){
    return (
        <>
            <section className="container form flex-collumn">
                    <h2>Notificações</h2>
                    <p className="subtitle">Nenhuma Solicitação.</p>
                </section>
        </>
    )
}else{
    return (
        <>
            <section className="container form flex-collumn">
                    <h2>Notificações</h2>
                    <p className="subtitle">Solicitações para a entrada de palpiteiros no Bolão.</p>
                    
                    <ul className="notificações">
                    {
                            userOn.solicitacoes.map((solicitacao)=>{
                                return(
                                    <li className="flex-collumn">
                                        <p className=""><b>{solicitacao.nome}</b> quer participar do bolão "{solicitacao.bolao}" </p>
                                        <div className="flex">
                                        <button className="secundary-button" onClick = {(e)=>{AceitarSolicitacao(e,solicitacao)}}>Aceitar</button> 
                                        <button className="secundary-button" onClick = {(e)=>{NegarSolicitacao(e,solicitacao)}}>Recusar</button>  
                                        </div>                      
                                    </li>
                                )
                            })
                               
                    }  
                    </ul>
                   
                </section>
        </>
    )
}
    
    
}

export default Notifications;