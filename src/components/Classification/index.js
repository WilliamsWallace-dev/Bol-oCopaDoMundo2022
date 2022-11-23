import { useContext, useEffect } from "react";
import { CopaContext } from "../../Context";

import api from "../../services/api";

import db from "../../services/apifb"
import { collection, updateDoc,addDoc,where,doc } from "firebase/firestore"; 

import { Outlet, Link } from "react-router-dom";

import TelaDeTransicao from "../TelaDeTransicao"

const Classification = ()=>{

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

        //Ordenar classificaçao pela pontuação 

        let ordenaAux;
        for(let i = 0;i<aux.length;i++)
            for(let j = i;j<aux.length;j++){
                if(aux[i].pontuacao[7] - aux[j].pontuacao[7] > 0 ){
                    ordenaAux = {...aux[i]};
                    aux[i] = {...aux[j]};
                    aux[j] = {...aux};
                }else{
                    if(aux[i].pontuacao[7] - aux[j].pontuacao[7] == 0 ){
                        for(let k = 0; k < 7 ; k++){
                            if(aux[i].pontuacao[k] - aux[j].pontuacao[k] < 0 ){
                                ordenaAux = {...aux[i]};
                                aux[i] = {...aux[j]};
                                aux[j] = {...ordenaAux};
                                k = k + 10;
                            }else if(aux[i].pontuacao[k] - aux[j].pontuacao[k] > 0 ){
                                k = k + 10;
                            }

                        }
                    }
                }
            }



        



        updateDoc(doc(db, "boloes", `${id}`), {
            classificacao : aux
          })
        // api.patch(`/boloes/${id}`,{
        //     classificacao : aux
        //   })
          .then((response)=>{console.log(response)})
          .catch((error)=>{console.log(error)})

          let modal = document.querySelector(".transicao");
            modal.style.opacity = "100";
            modal.style.pointerEvents = "all";
          setTimeout(() => {
            setClassificacao([...aux,id]);
            modal.style.opacity = "0";
            modal.style.pointerEvents = "none";
          }, 5000);
    }

    const CalcularPontuação = (palpites,jogador)=>{

        //zerar pontuaçao
        for(let i = 0; i<jogador.pontuacao.length;i++){
            jogador.pontuacao[i] = 0
        }
        for(let i = 0 ; i < jogos.length;i+=2){
            // console.log("i = " + i)
            // console.log("Palpite" + palpites[i] +" x "+ palpites[i+1])
            // console.log("Jogos" + jogos[i] +" x "+ jogos[i+1])
            if(palpites[i] !== "-" && palpites[i] !== "-"){
            // Placar Exato - PE
            if(palpites[i] == jogos[i] && palpites[i+1] == jogos[i+1]){
                // console.log("pontuou PE")
                jogador.pontuacao[0]++;
                jogador.pontuacao[7] += 25;
            }
            // Vencedor da partida e Gols do time vencedor - V-GV
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && palpites[i] == jogos[i]){
                // console.log("pontuou v-Gv")
                jogador.pontuacao[1]++;
                jogador.pontuacao[7] += 18;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && palpites[i+1] == jogos[i+1]){
                // console.log("pontuou v-Gv - 2")
                jogador.pontuacao[1]++;
                jogador.pontuacao[7] += 18;
            }
            // Vencedor da partida e Saldo de Gols - V-SG 
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && Math.abs(palpites[i]-palpites[i+1]) == Math.abs(jogos[i]-jogos[i+1])){
                // console.log("pontuou v-sG")
                jogador.pontuacao[2]++;
                jogador.pontuacao[7] += 15;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && Math.abs(palpites[i]-palpites[i+1]) == Math.abs(jogos[i]-jogos[i+1])){
                // console.log("pontuou v-sG - 2")
                jogador.pontuacao[2]++;
                jogador.pontuacao[7] += 15;
            }
            //Acertou Empate - AE
            else if(jogos[i] == jogos[i+1] && palpites[i] == palpites[i+1]){
                // console.log("pontuou AE")
                jogador.pontuacao[3]++;
                jogador.pontuacao[7] += 15;
            }
            //Vencedor da partida e Gols do time perdedor - V-Gp
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1] && palpites[i+1] == jogos[i+1]){
                // console.log("pontuou V-Gp")
                jogador.pontuacao[4]++;
                jogador.pontuacao[7] += 12;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1] && palpites[i] == jogos[i]){
                // console.log("pontuou V-Gp - 2")
                jogador.pontuacao[4]++;
                jogador.pontuacao[7] += 12;
            }
            // Apenas Vencedor da partida - V
            else if(jogos[i] > jogos[i+1] && palpites[i] > palpites[i+1]){
                // console.log("pontuou V")
                jogador.pontuacao[5]++;
                jogador.pontuacao[7] += 6;
            }else if(jogos[i] < jogos[i+1] && palpites[i] < palpites[i+1]){
                // console.log("pontuou V - 2")
                jogador.pontuacao[5]++;
                jogador.pontuacao[7] += 6;
            }
            //Gols de um dos time - G1
            else if(jogos[i] == palpites[i] || jogos[i+1] == palpites[i+1]){
                // console.log("pontuou G1")
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
            <TelaDeTransicao></TelaDeTransicao>
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
                    
                    <table border="1" frame="below" className="tabelaClassificacao" >
                        <tr>
                            <th>N°</th>
                            <th>Participantes</th>
                            <th>PE</th>
                            <th>GV</th>
                            <th>SG</th>
                            <th>E</th>
                            <th>GP</th>
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
                                            <td><p className="colocacaoTabela">{index+1}°</p></td>
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