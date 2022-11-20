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
    return (
        <>
            <section className="container form flex-collumn regulamento">
                    <h2>Regulamento</h2>
                    <p className="p2-light">O Bolão de Futebol é uma divertida competição para ver quem é o melhor 
                    <br></br>"palpiteiro" do futebol brasileiro na internet. As regras são muito parecidas
                    <br></br> com o bolão tradicional, porém com a vantagem deacompanhar
                    <br></br> os resultados on-line e disputar a liderança clique a clique.Você se cadastra
                    <br></br> gratuitamente para participar do bolão.</p>
                    
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
                                <p>CRITÉRIO DE DESEMPATE</p>
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
                                <p>PREMIAÇÃO</p>
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
                                <p>DISPOSIÇÃO GERAIS</p>
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
                    </ul>
                    
                </section>
        </>
    )
}

export default Regulamento;