import { useContext } from "react";
import { CopaContext } from "../../../Context";

import { Outlet, Link } from "react-router-dom";


const FormRegister = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];
 

        return(
            <>
                <section className="form flex-collumn">
                    <h1>Seja um Jogador!</h1>
                    <p className="subtitle">Cadastre-se e se junte a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form className="flex-collumn">
                        <input className="input" type="text" placeholder="Username"></input>
                        <input className="input" type="text" placeholder="Senha"></input>
                        <input className="input" type="text" placeholder="Confirmar Senha"></input>
                        <div>
                        <button className="primary-button">Cadastrar</button>
                        <button className="secundary-button">Compartilhar com os amigos!</button>
                        </div>
                    </form>
                    
                </section>

                <Outlet></Outlet>
            </>
        )
}

export default FormRegister;