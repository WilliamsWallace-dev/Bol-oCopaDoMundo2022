import {Outlet,Link} from "react-router-dom";

import { useContext } from "react";
import { CopaContext } from "../../Context";

import Background from "../Background";

import logo from "../../svg/logo.svg"

const Header = ()=>{
 
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
                        <a>Olá {userOn.username}</a>
                        <ul className="menu-usuário">
                            <li><a className="menu-items ">Meu Perfil</a></li>
                            <li><a className="menu-items">Meus Bolôes</a></li>
                            <li><a className="menu-items ">Solicitações</a></li>
                            <a className="menu-items">Sair</a>
                        </ul>
                        
                    </div>
                </header>
            </>
            )
    }
}

export default Header;


