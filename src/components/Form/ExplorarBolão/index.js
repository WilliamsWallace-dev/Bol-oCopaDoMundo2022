import { useContext } from "react";
import { CopaContext } from "../../../Context";

import { Outlet, Link } from "react-router-dom";

const FormExplorarBolão = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];
 

 
        return(
            <>
                <section className="container form flex-collumn">
                    <h1>Explorar Bolão</h1>
                    <p className="subtitle">Encontre o Bolão por meio da Chave de entrada e envie a solicitação para participar!</p>
                    <form className="flex-collumn">
                        <input className="input" type="text" placeholder="Nome do Bolão"></input>                                         
                        <div>
                        <button className="primary-button">Procurar</button>
                        </div>
                    </form>

                    <h2>Resultado da Pesquisa</h2>
                    <p className="subtitle">Insira a Chave de entrada correspondente ao Bolão para enviar a solicitação.</p>
                    
                    <ul className="resultadoPesquisa">
                        <li className="flex-collumn">
                            <p>Nome do Bolão</p>
                            <input className="input" type="text" placeholder="Chave de entrada"></input>
                            <button className="secundary-button">Enviar Solicitação</button>  
                        </li>

                        <li className="flex-collumn">
                            <p>Nome do Bolão</p>
                            <input className="input" type="text" placeholder="Chave de entrada"></input>
                            <button className="secundary-button">Enviar Solicitação</button>  
                        </li>
                    </ul>
                
                </section>
                
            </>
        )
    
}

export default FormExplorarBolão;