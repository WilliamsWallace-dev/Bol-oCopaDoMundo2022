import { useContext, useEffect } from "react";
import { CopaContext } from "../../../Context";

import api from "../../../services/api";

import { Outlet, Link } from "react-router-dom";

const Solicitacoes = ()=>{


    const {users,userOn,boloes} = useContext(CopaContext);
    let admBoloes = [];
    
    const Solicitacao = ()=>{

    }

    useEffect(()=>{
        userOn.admboloes.forEach((element)=>{
            admBoloes = [...admBoloes,boloes.filter((e)=> e.nome !== element)];
          })
          console.log(admBoloes)
      },)
    
      if(userOn.solicitacoes.length === 0){
        return(
            <>
                <section className="form-container flex-collumn">             
                    <h2>Solicitações</h2>
                    <p className="subtitle">Nenhuma Solicitação.</p>
                </section>
                
            </>
        )
      }else{
        return (
            <>
                <section className="form-container flex-collumn">             
                    <h2>Solicitações</h2>
                    <p className="subtitle">Aceite ou Recuse as solicitações para entrar no Bolão</p>


                    <ul className="resultadoPesquisa">


                    {/* {
                        userOn.solicitacoes.map((nome)=>{
                        return(
                            <li className="flex-collumn">
                                <p>{bolao.nome}</p>
                                <input className="input" type="text" placeholder="Chave de entrada"></input>
                                <button type="button" className="secundary-button" onClick = {(e)=> EnviarSolicitação (e,bolao)}>Enviar Solicitação</button>  
                            </li>
                        )
                        })
                    } */}

                    </ul>

                </section>
            </>
        )
        
      }
    
}

export default Solicitacoes;