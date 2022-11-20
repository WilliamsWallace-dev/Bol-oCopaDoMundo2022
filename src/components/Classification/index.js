import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

import { Outlet, Link } from "react-router-dom";

import Holanda from "../../svg/bandeiras/Holanda.svg"

const Classification = ()=>{

    console.log("Classification")
    const {users,setUsers,userOn,setUserOn,boloes,classificacao,setClassificacao,jogos} = useContext(CopaContext);


    //Funções

    const MostrarClassificacao = (e,nomeBolao)=>{
        
        let bolao = boloes.filter((element)=>element.nome == nomeBolao)[0];

        setClassificacao([...bolao.classificacao,bolao.id]);
        

    }


    const AtualizarClassificação = ()=>{
        let jogadores = users.filter((element)=>{
                            for(let i=0;i<classificacao.length-1;i++){
                                if(element.username == classificacao[i].nome) {
                                    return(true)
                                }
                            }
                            return(false)
                        })
        jogadores.forEach((jogador,index)=>{
            CalcularPontuação(jogador.palpites,classificacao[index]);
        })

        let aux = classificacao.filter((element,index)=>index !== classificacao.length-1);
        let id = classificacao.filter((element,index)=>index == classificacao.length-1)[0];
        console.log(id)

        api.patch(`/boloes/${id}`,{
            classificacao : aux
          })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          setClassificacao([...aux,id]);
        
    }

    const CalcularPontuação = (palpites,jogador)=>{

        //zerar pontuaçao
        for(let i = 0; i<jogador.pontuacao.length;i++){
            jogador.pontuacao[i] = 0
        }
        console.log(jogador.pontuacao);
        for(let i = 0 ; i < jogos.length;i+=2){
            console.log("i = " + i)
            console.log("Palpite" + palpites[i] +" x "+ palpites[i+1])
            console.log("Jogos" + jogos[i] +" x "+ jogos[i+1])
            if(palpites[i] !== "-" && palpites[i] !== "-"){
            // Placar Exato - PE
            if(palpites[i] == jogos[i] && palpites[i+1] == jogos[i+1]){
                console.log("pontuou PE")
                jogador.pontuacao[0]++;
                jogador.pontuacao[7] += 25;
            }
            // Vencedor da partida e Gols do time vencedor - V-GV
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && palpites[i] == jogos[i]){
                console.log("pontuou v-Gv")
                jogador.pontuacao[1]++;
                jogador.pontuacao[7] += 18;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && palpites[i+1] == jogos[i+1]){
                console.log("pontuou v-Gv - 2")
                jogador.pontuacao[1]++;
                jogador.pontuacao[7] += 18;
            }
            // Vencedor da partida e Saldo de Gols - V-SG 
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && Math.abs(palpites[i]-palpites[i+1]) == Math.abs(jogos[i]-jogos[i+1])){
                console.log("pontuou v-sG")
                jogador.pontuacao[2]++;
                jogador.pontuacao[7] += 15;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && Math.abs(palpites[i]-palpites[i+1]) == Math.abs(jogos[i]-jogos[i+1])){
                console.log("pontuou v-sG - 2")
                jogador.pontuacao[2]++;
                jogador.pontuacao[7] += 15;
            }
            //Acertou Empate - AE
            else if(jogos[i] == jogos[i+1] && palpites[i] == palpites[i+1]){
                console.log("pontuou AE")
                jogador.pontuacao[3]++;
                jogador.pontuacao[7] += 15;
            }
            //Vencedor da partida e Gols do time perdedor - V-Gp
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && palpites[i+1] == jogos[i+1]){
                console.log("pontuou V-Gp")
                jogador.pontuacao[4]++;
                jogador.pontuacao[7] += 12;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && palpites[i] == jogos[i]){
                console.log("pontuou V-Gp - 2")
                jogador.pontuacao[4]++;
                jogador.pontuacao[7] += 12;
            }
            // Apenas Vencedor da partida - V
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1]){
                console.log("pontuou V")
                jogador.pontuacao[5]++;
                jogador.pontuacao[7] += 6;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1]){
                console.log("pontuou V - 2")
                jogador.pontuacao[5]++;
                jogador.pontuacao[7] += 6;
            }
            //Gols de um dos time - G1
            else if(jogos[i] == palpites[i] || jogos[i+1] == palpites[i+1]){
                console.log("pontuou G1")
                jogador.pontuacao[6]++;
                jogador.pontuacao[7] += 3;
            }
        }
    }


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
                            classificacao.map((element,index)=>{
                                if(index < classificacao.length-1){
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
                                }
                                
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