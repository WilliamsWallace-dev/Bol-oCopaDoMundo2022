//Bandeiras
import Holanda from "../../svg/bandeiras/Holanda.svg"


const Resources = ()=>{
    return (
        <>
            <section className=" resources flex-collumn">
                <ul className="container flex">
                    <li><button className="secundary-button">Meus Palpites</button></li>
                    <li><button className="secundary-button">Classificação</button></li>
                    <li><button className="secundary-button">Gerenciar Bolões</button></li>
                </ul>

                <form>
                    
                    <select name="campeão" id="campeão">
                        <label></label>
                        <option value="volvo">Brasil</option>
                        <option value="saab">Espanha</option>
                        <option value="opel">Catar</option>
                        <option value="audi">Equador</option>
                    </select>
                    <label className="p4" style = {{color:"#FCF6F8"}}>Campeão da Copa do Mundo de 2022</label>
                </form>
                
                <h3>Fase de Grupos</h3>
                <section className="partidas">
                    <div className="card flex">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number"></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number"></input>
                                </div>
                            </div>
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>           
                        </div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number"></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number"></input>
                                </div>
                            </div>
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>           
                        </div>
                        
                    </div>
                </section>
                

                

            </section>
            
        </>
    )
}

export default Resources;