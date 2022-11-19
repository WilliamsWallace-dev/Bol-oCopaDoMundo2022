import {Outlet,Link} from "react-router-dom";

import { useContext } from "react";
import { CopaContext } from "../../Context";

import Background from "../Background";

import logo from "../../svg/logo.svg"

const Header = ()=>{
 
//Funções

const ActiveMenuUse = (e)=>{
    console.log(e)
    let menu = e.target.nextSibling;
    // if(e._reactName == "onBlur"){
    //     menu.classList.remove("active");
    //     menu.style.maxHeight = 0 + "px";
    // }else{
        menu.classList.toggle("active");
        if(menu.classList.contains("active")){
            menu.style.maxHeight = menu.scrollHeight + "px";
            menu.style.borderWidth = 1 + "px";
        }else{
            menu.style.maxHeight = 0 + "px";
            menu.style.borderWidth = 0;
    }
    // }

  }

//Dados
const {userOn,setUserOn} = useContext(CopaContext);


//Logout
const logout = ()=>{
    setUserOn("");
  }


  if(!userOn || userOn === "Error"){
    return(
        <>
            <Background type = "1"></Background>
            <header className="container header-container">
                <img src={logo} alt="logo"></img>
                <Link to="/regrasdobolão"><a className="link p2-regular">Regras do Bolão</a></Link>
                <div style={{display:"flex"}}>
                <Link to="/register"><a className="link p2-regular">Registrar-se</a></Link>
                <Link to="/"><button className="primary-button" style={{margin: "0 1.5rem" }}>Entrar</button></Link>
                </div>
            </header>
        </>
    )
  }else {
        return(
            <>
                <Background type = "2"></Background>
                <header className="container header-container">
                    <img src={logo} alt="logo"></img>
                    <Link to="/regrasdobolão"><a className="link p2-regular">Regras do Bolão</a></Link>
                    <div className="username flex-collumn" >
                        <button onClick={ActiveMenuUse} >Olá {userOn.username}</button>
                        <ul className="menu-usuário">
                            <li><a className="menu-items ">Meu Perfil</a></li>
                            <li><a className="menu-items">Meus Bolões</a></li>
                            <Link to={"/notificações:" + userOn.id}><li><a className="menu-items ">Solicitações</a></li></Link>
                            <a className="menu-items" onClick = {logout}>Sair</a>
                        </ul>
                        
                    </div>
                </header>
            </>
            )
    }
}

export default Header;


