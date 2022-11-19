import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

import { Outlet, Link } from "react-router-dom";

import Holanda from "../../svg/bandeiras/Holanda.svg"

const Classification = ()=>{

    console.log("Classification")
    const {users,setUsers,userOn,setUserOn,boloes,classificacao,setClassificacao} = useContext(CopaContext);

    //Funções

    const MostrarClassificacao = (e,nomeBolao)=>{
        let bolao = boloes.filter((element)=>element.nome == nomeBolao)[0]
        setClassificacao(bolao.classificacao);
        console.log(bolao.classificacao);
    }


    const AtualizarClassificação = ()=>{
        

    }


    // -----------------------------------------------------

    if(classificacao == ""){
        return (
            <>
            <section className=" classificacao flex-collumn">
    
                    <h2>Classificação</h2>
                    <p className="subtitle p4 ">Confira sua classificação nos Bolões que participa!</p>
                    <ul className="flex listaBoloes">
                        {
                            userOn.meusboloes.map((nomeBolao)=>{
                                return(
                                    <>
                                        <li className="mr-2 p-2 p2-medium " onClick={(e)=>MostrarClassificacao(e,nomeBolao)}><a>{nomeBolao}</a></li>
                                    </>
                                )
                            })
                        }
                        
                    </ul>
            </section>
            <Outlet />
            </>
        )
    }else{
        return (
            <>
            <section className=" classificacao flex-collumn">
    
                    <h2>Classificação</h2>
                    <p className="subtitle p4 ">Confira sua classificação nos Bolões que participa!</p>

                    <ul className="flex listaBoloes">
                        {
                            userOn.meusboloes.map((nomeBolao)=>{
                                return(
                                    <>
                                        <li className="mr-2 p-2 p2-medium " onClick={(e)=>MostrarClassificacao(e,nomeBolao)}><a>{nomeBolao}</a></li>
                                    </>
                                )
                            })
                        }
                        
                    </ul>
                    
                    <table border="1" frame="below" >
                        <tr>
                            <th>Participantes</th>
                            <th>PE</th>
                            <th>V-Gv</th>
                            <th>V-SG</th>
                            <th>E</th>
                            <th>V-Gp</th>
                            <th>V</th>
                            <th>G1</th>
                            <th>Pontuação</th>
                            
                        </tr>

                        {
                            classificacao.map((element)=>{
                                return(
                                    <>
                                    <tr>
                                        <td className="flex"><p className="ml-1">{element.nome}</p></td>
                                        <td>{element.pontuacao[0]}</td>
                                        <td>{element.pontuacao[1]}</td>
                                        <td>{element.pontuacao[2]}</td>
                                        <td>{element.pontuacao[3]}</td>
                                        <td>{element.pontuacao[4]}</td>
                                        <td>{element.pontuacao[5]}</td>
                                        <td>{element.pontuacao[6]}</td>
                                        <td>{element.pontuacao[7]}</td>
                                    </tr>
                                    </>
                                )
                            })
                        }    
                    </table>
                    <p className="mensagem mt-0"></p>
                    <button type = "button" className="primary-button" onClick={AtualizarClassificação} >Atualizar Classificação</button>
            </section>
            <Outlet />
            </>
        )
    }
    
}

export default Classification;