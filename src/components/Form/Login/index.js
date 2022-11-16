import { useContext } from "react";
import { CopaContext } from "../../../Context";



const FormLogin = ()=>{


    const {users,userOn,setUserOn} = useContext(CopaContext);
    let inputs = [];

    const VerificaUsuario = () => {
        
        document.querySelectorAll(".formLogin input").forEach((element,index)=>{
          inputs[index] = element.value;
    
        })

        console.log(inputs);
        console.log(users)

        users.forEach((element,index,users)=>{
          if(element.username === inputs[0] && element.password === inputs[1]){
            setUserOn(element);
          }else if(index === (users.length-1) && !userOn){
            setUserOn("Error");
          }
        })
      }

      if(userOn === "Error"){
        return(
            <>
                        <section className="form  flex-collumn">
                            <h1>Realizar Login</h1>
                            <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                            <form className="flex-collumn formLogin">
                                <input className="input" type="text" placeholder="Username"></input>
                                <input className="input" type="text" placeholder="Senha"></input>
                                <p className="subtitle" style = {{marginTop : "1rem"}}>Username e senha não conferem.</p>
                                <div>
                                <button type = "button" className="primary-button" style = {{marginTop : "0rem"}}  onClick = {VerificaUsuario}>Login</button>
                                <button type = "button" className="secundary-button" style = {{marginTop : "0rem"}}>Compartilhar com os amigos!</button>
                                </div>
                            </form>
                        
                        </section>
                        
                    </>
        )
      }else if(!userOn){
                return(
                    <>
                    <section className="form  flex-collumn">
                        <h1>Realizar Login</h1>
                        <p className="subtitle">Junte-se a seus amigos no Bolão Copa do Mundo 2022.</p>
                        <form className="flex-collumn formLogin">
                            <input className="input" type="text" placeholder="Username"></input>
                            <input className="input" type="text" placeholder="Senha"></input>
                            <div>
                            <button type = "button" className="primary-button"  onClick = {VerificaUsuario}>Login</button>
                            <button type = "button" className="secundary-button" >Compartilhar com os amigos!</button>
                            </div>
                        </form>
                    
                    </section>
                    
                </>
                )
        }

        
    }
    

export default FormLogin;