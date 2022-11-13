import MenuBolão from "../MenuBolão";

//Bandeiras
import Holanda from "../../svg/bandeiras/Holanda.svg"


const Guess = ()=>{
    return (
        <>
            <section className=" guess flex-collumn">
                
                <MenuBolão type = "Guess"></MenuBolão>

                <h2>Realize os palpite dos jogos!</h2>
                <p className="subtitle p4 ">O palpite poderá ser alterado até 1 hora antes do jogo.</p>

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
                
                <section className="partidas flex-collumn">

                    <div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
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
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                            </div>
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>           
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}

                    <div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
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
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                            </div>
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>           
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}

                    <div className="card flex card-left">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
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
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                            </div>
                            <div className="informações flex-collumn">
                                <p className="p4">20/11</p>
                                <p className="p4">13:00</p>
                            </div>           
                        </div>  
                    </div>

{/* //----------------------------------------------------------------------------------------// */}

                    <div className="card flex card-right">

                        <div className="card-background"></div>

                        <div className="jogo flex-between">
                            <div className="times flex-collumn ">
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
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
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
                                </div>
                                <div className="flex-between">
                                        <div className="flex">
                                            <img src = {Holanda}></img>
                                            <p className="p3 ml-1">Holanda</p>
                                        </div>
                                        <input type="number" id="gols" name="gols" min="0" max="20" placeholder="0" ></input>
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

export default Guess;