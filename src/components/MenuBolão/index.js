import {Outlet,Link} from "react-router-dom";

import { useContext } from "react";
import { CopaContext } from "../../Context";


const MenuBolão = ({type}) => {

    const {userOn,setSearch,setClassificacao} = useContext(CopaContext);


    const CleanSearch = ()=>{
        setSearch("");
      }
      const CleanClassification = ()=>{
        setClassificacao("");
      }


    if(type=="Guess"){
        return (
            <>
                <ul className=" container flex">
                    <Link to={"/palpites:" + userOn.id}><li><button className="secundary-button active">Meus Palpites</button></li></Link>
                    <Link to={"/classificação:" + userOn.id}><li><button className="secundary-button" onClick = {CleanClassification}>Classificação</button></li></Link>
                    <Link to={"/criarbolão:" + userOn.id}><li><button className="secundary-button">Criar Bolão</button></li></Link>
                    <Link to={"/explorarbolão:" + userOn.id}><li><button className="secundary-button" onClick = {CleanSearch}>Explorar Bolões</button></li></Link>
                </ul>
            </>
        )
    }else  if(type=="Classification"){
        return (
            <>
                <ul className=" container flex">
                    <Link to={"/palpites:" + userOn.id}><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to={"/classificação:" + userOn.id}><li><button className="secundary-button active">Classificação</button></li></Link>
                    <Link to={"/criarbolão:" + userOn.id}><li><button className="secundary-button">Criar Bolão</button></li></Link>
                    <Link to={"/explorarbolão:" + userOn.id}><li><button className="secundary-button" onClick = {CleanSearch}>Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }else  if(type=="CriarBolão"){
        return (
            <>
                <ul className=" container flex">
                    <Link to={"/palpites:" + userOn.id}><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to={"/classificação:" + userOn.id}><li><button className="secundary-button " onClick = {CleanClassification}>Classificação</button></li></Link>
                    <Link to={"/criarbolão:" + userOn.id}><li><button className="secundary-button active">Criar Bolão</button></li></Link>
                    <Link to={"/explorarbolão:" + userOn.id}><li><button className="secundary-button" onClick = {CleanSearch}>Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }else if(type=="ExplorarBolão") {
        return (
            <>
                <ul className=" container flex">
                    <Link to={"/palpites:" + userOn.id}><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to={"/classificação:" + userOn.id}><li><button className="secundary-button " onClick = {CleanClassification}>Classificação</button></li></Link>
                    <Link to={"/criarbolão:" + userOn.id}><li><button className="secundary-button ">Criar Bolão</button></li></Link>
                    <Link to={"/explorarbolão:" + userOn.id}><li><button className="secundary-button active">Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }else{
        return (
            <>
                <ul className=" container flex">
                    <Link to={"/palpites:" + userOn.id}><li><button className="secundary-button ">Meus Palpites</button></li></Link>
                    <Link to={"/classificação:" + userOn.id}><li><button className="secundary-button "onClick = {CleanClassification}>Classificação</button></li></Link>
                    <Link to={"/criarbolão:" + userOn.id}><li><button className="secundary-button ">Criar Bolão</button></li></Link>
                    <Link to={"/explorarbolão:" + userOn.id}><li><button className="secundary-button" onClick = {CleanSearch}>Explorar Bolões</button></li></Link>
                    </ul>
            </>
        )
    }
    
}

export default MenuBolão;
