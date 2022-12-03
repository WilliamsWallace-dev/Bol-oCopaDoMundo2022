import { useContext } from "react";
import { CopaContext } from "../../../Context";

import api from "../../../services/api";

import db from "../../../services/apifb"
import { collection, addDoc,setDoc,doc } from "firebase/firestore"; 

import { Outlet, Link } from "react-router-dom";

import Modal from "../../Modal";

import iconeInstagram from "../../../svg/iconeInstagram.svg"
import iconeLinkedIn from "../../../svg/iconeLinkedIn.svg";
import iconeCompartilhar from "../../../svg/iconeCompartilhar.svg";



const FormRegister = ()=>{

    const {users,setUsers,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];


    function modalActiveted() {
        let modal = document.querySelector(".modal-background");
        modal.style.opacity = "100";
        modal.style.pointerEvents = "all";
      
      }

    
    const CadastrarUsuario = ()=>{

        document.querySelectorAll(".formRegister input").forEach((element,index)=>{
            if(element.value !== ""){
                inputs[index] = element.value
                element.value = "";
            }
        })
    if(inputs.length === 3){
        if(inputs[0].indexOf(" ") >= 0 || inputs[0].length < 3){
            let mensagem = document.querySelector(".formRegister .mensagem");
                mensagem.classList.add("mensagem-red");
                mensagem.classList.add("p4");
                mensagem.innerHTML = "Insira um Nome de usuário sem espaços e pelo menos de 3 caracteres.";

        }else if(inputs[1] !== inputs[2]){
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
                    mensagem.innerHTML = "Nome de usuário já existente.";
                    usuarioExistente = 1;
                }})

            if(usuarioExistente === 0){


                            setDoc(doc(db, "users",`${users.length + 1}`), {
                                id : users.length + 1 ,
                                username: `${inputs[0]}`,
                                password: `${inputs[1]}`,
                                palpites : ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
                                meusboloes : [],
                                solicitacoes : [],
                            })
                            // api.post('/users', {
                            //     id : users.length + 1 ,
                            //     username: `${inputs[0]}`,
                            //     password: `${inputs[1]}`,
                            //     palpites : ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
                            //     meusboloes : [],
                            //     solicitacoes : [],
                            //     })
                                .then(function (response) {
                                    setUsers([...users,{
                                        id : users.length + 1 ,
                                        username: `${inputs[0]}`,
                                        password: `${inputs[1]}`,
                                        palpites : ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
                                        meusboloes : [],
                                        solicitacoes : [],
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
    }else{
                    let mensagem = document.querySelector(".formRegister .mensagem");
                    mensagem.classList.add("mensagem-red");
                    mensagem.classList.add("p4");
                    mensagem.innerHTML = "Preencha todos os campos";
        }
  }

        return(
            <>
                <Modal type = "login"></Modal>
                <section className="form-container flex-collumn" style = {{height : "80vh", width : "65%"}}>
                    <h1>Seja um Jogador!</h1>
                    <p className="subtitle">Cadastre-se e se junte a seus amigos no Bolão Copa do Mundo 2022.</p>
                    <form className="flex-collumn formRegister">
                        <input className="input" type="text" placeholder="Username" maxLength="10"></input>
                        <input className="input" type="password" placeholder="Senha"  maxLength="10"></input>
                        <input className="input" type="password" placeholder="Confirmar Senha" maxLength="10"></input>
                        <p className="mensagem"></p>
                        
                        <div>
                        <button type = "button" className="primary-button" onClick = {CadastrarUsuario} >Cadastrar</button>
                        <button type = "button" className="secundary-button" onClick={modalActiveted}>Compartilhar com os amigos!</button>
                        </div>
                    </form>
                    <div className="redes flex-collumn">
                        <a href = "https://web.whatsapp.com/" target="_blank" ><img className="" src={iconeCompartilhar} alt=""></img></a>
                        <a href = "https://www.instagram.com/williamswallace_/" target="_blank" ><img className="" src={iconeInstagram} alt=""></img></a>
                        <a href = "https://www.linkedin.com/in/williams-wallace" target="_blank" ><img className="" src={iconeLinkedIn} alt=""></img></a>
                    </div>
                    
                </section>

                <Outlet></Outlet>
            </>
        )
}

export default FormRegister;