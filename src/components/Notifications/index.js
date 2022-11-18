import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

import { Outlet, Link } from "react-router-dom";
import MenuBolão from "../MenuBolão";

 


const Notifications = ()=>{
    const {users,userOn,boloes} = useContext(CopaContext);

    console.log(userOn.solicitacoes)

    const AceitarSolicitacao = (e,solicitacao)=>{
        let bolao = boloes.filter((bolao)=> bolao.nome == solicitacao.bolao)[0];
        console.log(bolao)
    }

    const NegarSolicitacao = (e,solicitacao)=>{
        
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