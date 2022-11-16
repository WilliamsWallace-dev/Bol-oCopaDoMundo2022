import { useContext } from "react";
import { CopaContext } from "../../../Context";

import { Outlet, Link } from "react-router-dom";

const FormCriarBolão = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];

    return(
        <>
            <section className="container form flex-collumn form-criarBolão">
                <h1>Criar Bolão</h1>
                <p className="subtitle">Copa do mundo não pode faltar o Bolão com os Amigos!</p>
                <form className="flex-collumn">
                    <input className="input" type="text" placeholder="Nome do Bolão"></input>
                    <input className="input" type="text" placeholder="Chave de entrada"></input>
                    <input className="input" type="number" placeholder="Valor da aposta" id="valorDaAposta" name="valorDaAposta" min="0" max="500"></input>
                    <select name="tipoChavePix" id="tipoChavePix">
                        <option value="Cpf" >Cpf</option>
                        <option value="Telefone">Telefone</option>
                        <option value="E-mail">E-mail</option>
                    </select>
                    <label></label>
                    <input className="input" type="text" placeholder="Chave Pix" id="chavePix"></input>
                    
                    
                    <div>
                    <button className="primary-button">Cria Bolão</button>
                    </div>
                </form>
               
            </section>

            {/* Após Criado o Bolão aparece a seguindo mensagem */}

            {/* <section className="container form flex-collumn convidarAmigos">
                <h2>Convidar Amigos</h2>
                <p className="subtitle">Criado o Bolão, é necessário que : </p>
                <ul>
                    <li><p>Os Participantes criem sua conta.</p></li>
                    <li><p>O Administrador compartilha com cada participante a Chave de entrada</p></li>
                    <li><p>O participante deverá solicitar sua participação no Bolão</p></li>
                    <li><p>Após confirmar o pagamento, o administrador deve aceitar a solicitação no ícone</p></li>
                </ul>
                    <div>
                    <button className="primary-button">Enviar Convite</button>
                    </div>
               
            </section> */}
            
        </>
    )
    
}

export default FormCriarBolão;