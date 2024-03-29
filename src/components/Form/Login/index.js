import { useContext,useEffect } from "react";
import { CopaContext } from "../../../Context";

import { Navigate } from 'react-router-dom';

import TelaDeTransicao from "../../TelaDeTransicao"

import Modal from "../../Modal";

import iconeInstagram from "../../../svg/iconeInstagram.svg"
import iconeLinkedIn from "../../../svg/iconeLinkedIn.svg";
import iconeCompartilhar from "../../../svg/iconeCompartilhar.svg";




const FormLogin = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];


    
    
    function modalActiveted() {
      let modal = document.querySelector(".modal-background");
      modal.style.opacity = "100";
      modal.style.pointerEvents = "all";
    
    }

    const VerificaUsuario = () => {
        
      let usuarioEncontrado = -1;

        document.querySelectorAll(".formLogin input").forEach((element,index)=>{
          inputs[index] = element.value;
          element.value = "";
          
        })
        if(users.length == 0){
          setUserOn("Error");
        }
        users.forEach((element,index,users)=>{
          if(element.username == inputs[0] && element.password == inputs[1]){
            usuarioEncontrado = index;
          }
          if(index === (users.length-1))
                    if(usuarioEncontrado === -1){
                        setUserOn("Error");
                    }else{
                      let modal = document.querySelector(".transicao");
                          modal.style.opacity = "100";
                          modal.style.pointerEvents = "all";
                      setTimeout(() => {
                        setUserOn(users[usuarioEncontrado]);
                        modal.style.opacity = "0";
                        modal.style.pointerEvents = "none";
                      }, 5000);
                      clearTimeout();
                      
                    }
        })
      }

      if(userOn === "Error"){
        return(
            <>          
                        <TelaDeTransicao></TelaDeTransicao>
                        <Modal type = "login"></Modal>
                        <section className="form-container flex-collumn" style = {{height : "80vh", width : "65%"}}>
                            <h1>Realizar Login</h1>
                            <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                            <form className="flex-collumn formLogin">
                                <input className="input" type="text" placeholder="Nome de Usuário"></input>
                                <input className="input" type="password" placeholder="Senha"></input>
                                <p className="mensagem-red p4">Username e senha não conferem.</p>
                                <div className="flex"> 
                                <button type = "button" className="primary-button" onClick = {VerificaUsuario}>Entrar</button>
                                <button type = "button" className="secundary-button" onClick={modalActiveted}>Compartilhar com os amigos!</button>
                                </div>
                            </form>
                            <div className="redes flex-collumn">
                              <a href = "https://web.whatsapp.com/" target="_blank" ><img className="" src={iconeCompartilhar} alt=""></img></a>
                              <a href = "https://www.instagram.com/williamswallace_/" target="_blank" ><img className="" src={iconeInstagram} alt=""></img></a>
                              <a href = "https://www.linkedin.com/in/williams-wallace" target="_blank" ><img className="" src={iconeLinkedIn} alt=""></img></a>
                            </div>
                            
                        
                        </section>
                        
                    </>
        )
      }else if(!userOn){
                return(
                    <>
                    <TelaDeTransicao></TelaDeTransicao>
                    <Modal type = "login"></Modal>
                    <section className="form-container flex-collumn" style = {{height : "80vh", width : "65%"}}>
                        <h1>Realizar Login</h1>
                        <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                        <form className="flex-collumn formLogin">
                            <input className="input" type="text" placeholder="Nome de Usuário"></input>
                            <input className="input" type="password" placeholder="Senha"></input>
                            <div className="flex">
                            <button type = "button" className="primary-button"  onClick = {VerificaUsuario}>Entrar</button>
                            <button type = "button" className="secundary-button" onClick={modalActiveted}>Compartilhar com os amigos!</button>
                            </div>
                        </form>
                        <div className="redes flex-collumn">
                          <a href = "https://web.whatsapp.com/" target="_blank" ><img className="" src={iconeCompartilhar} alt=""></img></a>
                          <a href = "https://www.instagram.com/williamswallace_/" target="_blank" ><img className="" src={iconeInstagram} alt=""></img></a>
                          <a href = "https://www.linkedin.com/in/williams-wallace" target="_blank" ><img className="" src={iconeLinkedIn} alt=""></img></a>
                        </div>
                    </section>
                    
                </>
                )
        }else {
          return(
            <>
              <Navigate to = {"/palpites:" + userOn.id}></Navigate>
            </>
          )
              
        }

        
    }
    

export default FormLogin;