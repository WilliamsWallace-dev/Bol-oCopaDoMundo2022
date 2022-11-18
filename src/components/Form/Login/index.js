import { useContext } from "react";
import { CopaContext } from "../../../Context";

import { Navigate } from 'react-router-dom';



const FormLogin = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];

    const VerificaUsuario = () => {
        
      let usuarioEncontrado = -1;

        document.querySelectorAll(".formLogin input").forEach((element,index)=>{
          inputs[index] = element.value;
          element.value = "";
          
        })


        users.forEach((element,index,users)=>{
          if(element.username == inputs[0] && element.password == inputs[1]){
            usuarioEncontrado = index;
          }
          if(index === (users.length-1))
                    if(usuarioEncontrado === -1){
                        setUserOn("Error");
                    }else{
                      setUserOn(users[usuarioEncontrado]);
                    }
        })
      }

      if(userOn === "Error"){
        return(
            <>
                        <section className="form-container  flex-collumn">
                            <h1>Realizar Login</h1>
                            <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                            <form className="flex-collumn formLogin">
                                <input className="input" type="text" placeholder="Username"></input>
                                <input className="input" type="password" placeholder="Senha"></input>
                                <p className="mensagem-red p4">Username e senha não conferem.</p>
                                <div>
                                <button type = "button" className="primary-button" onClick = {VerificaUsuario}>Login</button>
                                <button type = "button" className="secundary-button">Compartilhar com os amigos!</button>
                                </div>
                            </form>
                        
                        </section>
                        
                    </>
        )
      }else if(!userOn){
                return(
                    <>
                    <section className="form-container  flex-collumn">
                        <h1>Realizar Login</h1>
                        <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                        <form className="flex-collumn formLogin">
                            <input className="input" type="text" placeholder="Username"></input>
                            <input className="input" type="password" placeholder="Senha"></input>
                            <div>
                            <button type = "button" className="primary-button"  onClick = {VerificaUsuario}>Login</button>
                            <button type = "button" className="secundary-button" >Compartilhar com os amigos!</button>
                            </div>
                        </form>
                    
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