
import MenuBolão from "../MenuBolão";

import Holanda from "../../svg/bandeiras/Holanda.svg"

const Classification = ()=>{
    return (
        <>
        <section className=" guess flex-collumn">
                
                <MenuBolão type = "Classification"></MenuBolão>

                <h2>Classificação</h2>
                <p className="subtitle p4 ">Confira sua classificação nos Bolões que participa!</p>

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
                    <tr>
                        <td className="flex"><img src = {Holanda}></img><p className="ml-1">Pedro</p></td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="flex"><img src = {Holanda}></img><p className="ml-1">Pedro</p></td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="flex"><img src = {Holanda}></img><p className="ml-1">Pedro</p></td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className="flex"><img src = {Holanda}></img><p className="ml-1">Pedro</p></td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </table>

                <section className="instructions">
                    <div className="flex-between collumns">
                        <p>COD	Descrição</p>
                        <p>Pontuação</p>
                    </div>

                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>
                    
                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>
                    
                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>

                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>

                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>

                    <div className="flex-between">
                        <div className="flex">
                            <p className="mr-1">PE</p>
                            <p>	<b>Placar Exato</b> - (Ex: Palpite 2x2 - Resultado 2x2). Acertou placar exato.	</p>
                        </div>
                        <p>25 Pts</p>
                    </div>

                </section>
                {/* <div className="tabelaDeClassificação">
                    <div className="flex-between">
                        <p className="collumn">Participantes</p>
                        <div>
                        <p className="collumn">PE</p>
                        <p className="collumn">V-Gv</p>
                        <p className="collumn">V-SG</p>
                        <p className="collumn">E</p>
                        <p className="collumn">V-Gp</p>
                        <p className="collumn">V</p>
                        <p className="collumn">G1</p>
                        <p className="collumn">Pontuação</p>

                        </div>
                    </div>

                </div> */}

        </section>
        </>
    )
}

export default Classification;