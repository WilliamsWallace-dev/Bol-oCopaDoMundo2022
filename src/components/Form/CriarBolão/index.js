import { useContext } from "react";
import { CopaContext } from "../../../Context";

import api from "../../../services/api";

import { Outlet, Link } from "react-router-dom";

const FormCriarBolão = ()=>{
    

    const {users,userOn,setUserOn,boloes,setBoloes} = useContext(CopaContext);
    let inputs = [];

    console.log(userOn);

    const CadastrarBolão = ()=>{

        document.querySelectorAll(".formCriarBolão input").forEach((element,index)=>{
          inputs[index] = element.value
          element.value = "";
        })
        boloes.forEach((element,index)=>{
                if(element.nome === inputs[0]){
                    let mensagem = document.querySelector(".formCriarBolão .mensagem");
                    mensagem.classList.add("mensagem-red");
                    mensagem.classList.add("p4");
                    mensagem.innerHTML = "Bolão já existente!";
                }else if(index === boloes.length-1){
                        api.post('/boloes', {
                            id : boloes.length + 1 ,
                            nome: `${inputs[0]}`,
                            chave: `${inputs[1]}`,
                            valor: `${inputs[2]}`,
                            participantes : [...userOn.username]
                            })
                            .then(function (response) {
                            setBoloes([...boloes,{
                                id : boloes.length + 1 ,
                                nome: `${inputs[0]}`,
                                chave: `${inputs[1]}`,
                                valor: `${inputs[2]}`,
                                participantes : [...userOn.username]
                            }])
                            let mensagem = document.querySelector(".formCriarBolão .mensagem");
                                mensagem.classList.remove("mensagem-red");
                                mensagem.classList.add("mensagem-green");
                                mensagem.classList.add("p4");
                                mensagem.innerHTML = "Cadastro Concluído!";
                            
                            })
                            .catch(function (error) {
                            console.log(error);
                            });

                            userOn.admboloes = [...userOn.admboloes,inputs[0]];
                            userOn.boloes = [...userOn.boloes,inputs[0]];

                            api.patch(`/users/${userOn.id}`,{
                                admboloes : [...userOn.admboloes],
                                boloes : [...userOn.boloes]
                              })
                              .then((response)=>{console.log(response)})
                              .catch((error)=>{console.log(error)})
                        }
            })
        
    }





    if(userOn){
        return(
            <>
                <section className="container form flex-collumn form-criarBolão">
                    <h1>Criar Bolão</h1>
                    <p className="subtitle">Copa do mundo não pode faltar o Bolão com os Amigos!</p>
                    <form className="flex-collumn formCriarBolão">
                        <div className="flex-collumn">
                        <input className="input" type="text" placeholder="Nome do Bolão"></input>
                        <input className="input" type="text" placeholder="Chave de entrada"></input>
                        <input className="input" type="number" placeholder="Valor da aposta" id="valorDaAposta" name="valorDaAposta" min="0" max="500"></input>
                        <p className="mensagem"></p>
                        </div>
                        {/* <select name="tipoChavePix" id="tipoChavePix">
                            <option value="Cpf" >Cpf</option>
                            <option value="Telefone">Telefone</option>
                            <option value="E-mail">E-mail</option>
                        </select>
                        <label></label>
                        <input className="input" type="text" placeholder="Chave Pix" id="chavePix"></input> */}  
                        <div>
                        <button type="button" className="primary-button" onClick = {CadastrarBolão}>Cria Bolão</button>
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
    }else{
        return(
            <>
                <h1>Error 404!</h1>
            </>
        )
    }
  
}

export default FormCriarBolão;