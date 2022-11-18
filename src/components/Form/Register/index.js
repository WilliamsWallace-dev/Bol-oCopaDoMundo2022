import { useContext } from "react";
import { CopaContext } from "../../../Context";

import api from "../../../services/api";

import { Outlet, Link } from "react-router-dom";


const FormRegister = ()=>{

    const {users,setUsers,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];


    const CadastrarUsuario = ()=>{

        document.querySelectorAll(".formRegister input").forEach((element,index)=>{
            inputs[index] = element.value
          element.value = "";
        })

        if(inputs[1] !== inputs[2]){
            let mensagem = document.querySelector(".formRegister .mensagem");
            mensagem.classList.add("mensagem-red");
            mensagem.classList.add("p4");
            mensagem.innerHTML = "Senhas diferentes";
        }else{
            let usuarioExistente = 0;
            users.forEach((element,index)=>{
                if(element.username === inputs[0]){
                    let mensagem = document.querySelector(".formRegister .mensagem");
                    mensagem.classList.add("mensagem-red");
                    mensagem.classList.add("p4");
                    mensagem.innerHTML = "Username já existente.";
                    usuarioExistente = 1;
                }})

            if(usuarioExistente === 0){
                            api.post('/users', {
                                id : users.length + 1 ,
                                username: `${inputs[0]}`,
                                password: `${inputs[1]}`,
                                meusboloes : [],
                                solicitacoes : [],
                                pontuacao : []
                                })
                                .then(function (response) {
                                    setUsers([...users,{
                                        id : users.length + 1 ,
                                        username: `${inputs[0]}`,
                                        password: `${inputs[1]}`,
                                        meusboloes : [],
                                        solicitacoes : [],
                                        pontuacao : []
                                    }])
                                    let mensagem = document.querySelector(".formRegister .mensagem");
                                    mensagem.classList.remove("mensagem-red")
                                    mensagem.classList.add("mensagem-green");
                                    mensagem.classList.add("p4");
                                    mensagem.innerHTML = "Cadastro Concluído";
                                })
                                .catch(function (error) {
                                console.log(error);
                                });
                }
             
        }
  }

        return(
            <>
                <section className="form-container flex-collumn">
                    <h1>Seja um Jogador!</h1>
                    <p className="subtitle">Cadastre-se e se junte a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form className="flex-collumn formRegister">
                        <input className="input" type="text" placeholder="Username"></input>
                        <input className="input" type="text" placeholder="Senha"></input>
                        <input className="input" type="text" placeholder="Confirmar Senha"></input>
                        <p className="mensagem"></p>
                        
                        <div>
                        <button type = "button" className="primary-button" onClick = {CadastrarUsuario} >Cadastrar</button>
                        <button type = "button" className="secundary-button">Compartilhar com os amigos!</button>
                        </div>
                    </form>
                    
                </section>

                <Outlet></Outlet>
            </>
        )
}

export default FormRegister;