import losangoRegulamento from "../../svg/losangoRegulamento.svg"

const MostrarDescrição = (e)=>{
    let menu = e.currentTarget.nextSibling;
    menu.classList.toggle("active");
    console.log(menu)
    if(menu.classList.contains("active")){
      menu.style.maxHeight = menu.scrollHeight + "px";
    }else{
      menu.style.maxHeight = 0 + "px";
    }

  }

const Regulamento = ()=>{

    if(window.screen.width < 540){
        return (
            <>
                <section className="container form flex-collumn regulamento">
                        <h2>Regulamento</h2>
                        <p className="p2-light">O Bolão de Futebol é uma divertida competição para ver quem é o melhor 
                        "palpiteiro" do futebol brasileiro na internet. As regras são muito parecidas
                         com o bolão tradicional, porém com a vantagem de acompanhar
                         os resultados on-line e disputar a liderança.</p>
                        
                        <ul>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>COMO PARTICIPAR</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">Para participar, basta preencher os seus dados no cadastro. Após realizado
                                o cadastro, contate o administrador do bolão de seu interesse de participar. Os palpites poderão ser realizado a qualquer
                                momenta até o momento do jogo. Os resultados das apurações dos palpites costumam ser publicados até 30 minutos após o término das partidas,
                                entretanto nos reservamos o direito de publicar até 24 horas,
                                conforme o calendário oficial campeonato.Em jogos eliminatórios, será levado em consideração SOMENTE o resultado do jogo normal sendo desconsiderados a prorrogação
                                 e decisões por pênaltis. A apuração dos resultados se dará com a verificação dos palpites indicados pelos participantes em confronto com os resultados oficiais dos jogos,
                                considerando-se os critérios de desempate apontados neste Regulamento.

                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>PONTUAÇÃO</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">A pontuação dos participantes será feita em função de seus prognósticos para o resultado e o 
                                placar das partidas. Por resultado entende-se a indicação de vitória/derrota ou empate deste ou daquele time.<br></br>
                                O critérios são demostrados no aba classificação.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>CRITÉRIO DE DESEMPATE</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">Serão considerados, para fins de desempate, os critérios apresentados na aba classificação na ordem em que se apresentam.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>PREMIAÇÃO</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">Nós não nos responsabilizamos por prêmios de quaisquer espécies oferecidos aos participantes de Bolões, uma vez que os mesmos são de total 
                                responsabilidade de seus criadores.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>DISPOSIÇÃO GERAIS</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">O objetivo principal do bolão é o entretenimento dos participantes; Caso tenha gostado
                                da aplicação, entre em uma das redes socias do criador do site e dá uma força la pra ele, que ele merece! 
                                </p>
                            </li>
                        </ul>
                        
                    </section>
            </>
        )
    }else{
        return (
            <>
                <section className="container form flex-collumn regulamento">
                        <h2>Regulamento</h2>
                        <p className="p2-light">Para participar, basta preencher os seus dados no cadastro. Após realizado
                                o cadastro, contate o administrador do bolão de seu interesse de participar. Os palpites poderão ser realizado a qualquer
                                momenta até o momento do jogo. Os resultados das apurações dos palpites costumam ser publicados até 30 minutos após o término das partidas,
                                entretanto nos reservamos o direito de publicar até 24 horas,
                                conforme o calendário oficial campeonato.Em jogos eliminatórios, será levado em consideração SOMENTE o resultado do jogo normal sendo desconsiderados a prorrogação
                                 e decisões por pênaltis. A apuração dos resultados se dará com a verificação dos palpites indicados pelos participantes em confronto com os resultados oficiais dos jogos,
                                considerando-se os critérios de desempate apontados neste Regulamento.
                                </p>
                        
                        <ul>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>COMO PARTICIPAR</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">A pontuação dos participantes será feita em função de seus prognósticos para o resultado e o placar das
                                partidas, conforme abaixo. Por resultado entende-se a indicação de vitória/derrota ou empate deste ou daquele time. A pontuação 
                                dos acertos será feita a partir dos seguintes critérios, não acumulativos:
                                Acertando o placar exato.
                                Acertando o vencedor e o número de gols do vencedor.
                                Acertando o vencedor e o número de gols do perdedor.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>PONTUAÇÃO</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">A pontuação dos participantes será feita em função de seus prognósticos para o resultado e o 
                                placar das partidas. Por resultado entende-se a indicação de vitória/derrota ou empate deste ou daquele time.<br></br>
                                O critérios são demostrados no aba classificação.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>CRITÉRIO DE DESEMPATE</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">SSerão considerados, para fins de desempate, os critérios apresentados na aba classificação na ordem em que se apresentam.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>PREMIAÇÃO</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">Nós não nos responsabilizamos por prêmios de quaisquer espécies oferecidos aos participantes de Bolões, uma vez que os mesmos são de total 
                                responsabilidade de seus criadores.
                                </p>
                            </li>
                            <li>
                                <div className="flex-between p4" onClick={MostrarDescrição} onBlur={MostrarDescrição}>
                                    <p>DISPOSIÇÃO GERAIS</p>
                                    <img src={losangoRegulamento}></img>
                                </div>
                                <p className="descrição p4">O objetivo principal do bolão é o entretenimento dos participantes; Caso tenha gostado
                                da aplicação, entre em uma das redes socias do criador do site e dá uma força la pra ele, que ele merece! 
                                </p>
                            </li>
                        </ul>
                        
                    </section>
            </>
        )
    }

    
}

export default Regulamento;