import losangoRegulamento from "../../svg/losangoRegulamento.svg"

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
                        <li className="flex-between p4"><p>COMO PARTICIPAR</p><img src={losangoRegulamento}></img>{/* <p></p> */}</li>
                        <li className="flex-between p4"><p>PONTUAÇÃO</p><img src={losangoRegulamento}></img>{/* <p></p> */}</li>
                        <li className="flex-between p4"><p>CRITÉRIO DE DESEMPATE</p><img src={losangoRegulamento}></img>{/* <p></p> */}</li>
                        <li className="flex-between p4"><p>PREMIAÇÃO</p><img src={losangoRegulamento}></img>{/* <p></p> */}</li>
                        <li className="flex-between p4"><p>DISPOSIÇÃO GERAIS</p><img src={losangoRegulamento}></img>{/* <p></p> */}</li>
                    </ul>
                    
                </section>
        </>
    )
}

export default Regulamento;